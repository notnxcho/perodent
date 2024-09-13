import { useReducer, useEffect } from 'react';
import { periodontalReducer, initialState, Action, Tooth } from '../../reducers/PeriodontalReducer';
import MouthStateChart from '../MouthStateChart';
import './PeriodontalChartStyles.scss'
import TeethForm from '../TeethForm';
import Progressbar from './Progressbar';
import jsPDF from 'jspdf';

// const generatePDF = (teeth: Tooth[]) => {
//     const doc = new jsPDF();
//     doc.text('Periodontal Chart', 10, 10);
//     teeth.forEach((tooth, index) => {
//         doc.text(`Tooth ${index + 1}:`, 10, 20 + index * 10);
//         doc.text(`Gingival Margin: ${JSON.stringify(tooth.gingivalMargin)}`, 20, 30 + index * 10);
//         doc.text(`Probing Depth: ${JSON.stringify(tooth.probingDepth)}`, 20, 40 + index * 10);
//         doc.text(`Movement: ${JSON.stringify(tooth.movement)}`, 20, 50 + index * 10);
//         doc.text(`Bleeding: ${JSON.stringify(tooth.bleeding)}`, 20, 60 + index * 10);
//         doc.text(`Plaque: ${JSON.stringify(tooth.plaque)}`, 20, 70 + index * 10);
//     });
//     console.log(doc)
//     doc.save('periodontal_chart.pdf');
// };

const PeriodontalChart: React.FC = () => {
  const [state, dispatch] = useReducer(periodontalReducer, initialState);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            dispatch({ type: 'PREV_TOOTH' })
            break;
        case 'ArrowRight':
            e.preventDefault();
            dispatch({ type: 'NEXT_TOOTH' })
            break;
        case 'F':
        case 'f':
            e.preventDefault();
            dispatch({ type: 'SET_FURCATION', payload: {tooth: state.currentTooth} })
            break;
        case 'D':
        case 'd':
            e.preventDefault();
            dispatch({ type: 'SET_IMPLANT', payload: {tooth: state.currentTooth} })
            break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.currentTooth]);

  return (
    <div className="periodontal-chart">
      <div className='chart-state-box'>
        <Progressbar state={state}/>
        <div className="flex flex-col gap-1">
            <div className="text-[14px] text-gray-500">Now evaluating</div>
            <div className='text-[18px] font-medium'>{state.teeth[state.currentTooth]?.name.type} {state.teeth[state.currentTooth]?.name.side} {state.teeth[state.currentTooth]?.name.maxilar} {state.teeth[state.currentTooth]?.name.number}</div>
        </div>
        <MouthStateChart state={state}/>
        <TeethForm state={state} dispatch={dispatch}/>
      </div>
    </div>
  );
};

export default PeriodontalChart;