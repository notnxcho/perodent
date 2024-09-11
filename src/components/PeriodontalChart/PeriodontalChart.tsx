import { useReducer, useEffect } from 'react';
import { periodontalReducer, initialState, Action } from '../../reducers/PeriodontalReducer';
import MouthStateChart from '../MouthStateChart';
import './PeriodontalChartStyles.scss'
import TeethForm from '../TeethForm';
import Progressbar from './Progressbar';

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