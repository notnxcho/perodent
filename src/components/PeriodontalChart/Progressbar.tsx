import { useCallback } from "react"
import { ChartState } from "../../reducers/PeriodontalReducer"
import './PeriodontalChartStyles.scss'

const Progressbar = ({state}: {state: ChartState}) => {
    const calcActiveTabs = useCallback(() => {
        if (state.currentStep[0] === 'top' && state.currentStep[1] === 'buccal') {
            return { topBuccal: 'ongoing', topPaletal: 'pending', botBuccal: 'pending', botPaletal: 'pending' }
        } else if (state.currentStep[0] === 'top' && state.currentStep[1] === 'paletal') {
            return { topBuccal: 'done', topPaletal: 'ongoing', botBuccal: 'pending', botPaletal: 'pending' }
        } else if (state.currentStep[0] === 'bot' && state.currentStep[1] === 'buccal') {
            return { topBuccal: 'done', topPaletal: 'done', botBuccal: 'ongoing', botPaletal: 'pending' }
        } else if (state.currentStep[0] === 'bot' && state.currentStep[1] === 'paletal') {
            return { topBuccal: 'done', topPaletal: 'done', botBuccal: 'done', botPaletal: 'ongoing' }
        }
        return { topBuccal: 'pending', topPaletal: 'pending', botBuccal: 'pending', botPaletal: 'pending' }
    }, [state.currentStep])
    return (
        <div className="progressbar-wrap">
            <div className={`bar-tab ${calcActiveTabs()?.topBuccal}`}>
                <div className="label">Top Buccal</div>
            </div>
            <div className={`bar-tab ${calcActiveTabs()?.topPaletal}`}>
                <div className="label">Top Palatal</div>
            </div>
            <div className={`bar-tab ${calcActiveTabs()?.botBuccal}`}>
                <div className="label">Bottom Buccal</div>
            </div>
            <div className={`bar-tab ${calcActiveTabs()?.botPaletal}`}>
                <div className="label">Bottom Palatal</div>
            </div>
        </div>
    )
}

export default Progressbar