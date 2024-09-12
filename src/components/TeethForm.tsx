import { useEffect, useState } from "react";
import { ChartState } from "../reducers/PeriodontalReducer";
import TeethInput from "./common/TeethInput";
import FocusTrap from "focus-trap-react";

const TeethForm = ({state, dispatch} : {state: ChartState, dispatch: React.Dispatch<any>}) => {
    const [clearInputs, setClearInputs] = useState(false)
    const [focusedField, setFocusedField] = useState<false | 'gingivalMargin' | 'probingDepth' | 'movement' | 'bleeding' | 'plaque'>(false)
    useEffect(() => {
        setClearInputs(true)
        setTimeout(() => {
            setClearInputs(false)
        }, 20)
        setFocusedField('gingivalMargin')
    }, [state.currentTooth])
    return (
        <div className="flex px-4 py-3 rounded-lg border z-10 bg-white -mx-3 shadow-sm">
            <FocusTrap>
                <div className="flex flex-col gap-3 grow">
                    <div className="flex justify-between items-center mb-1">
                        <div className="text-[16px] font-medium">Piece {state.currentTooth + 1}</div>
                        <div className="text-[12px] font-bold text-sky-600">{state.currentStep[1].toUpperCase()}</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-[14px] text-gray-500 flex">Gingival margin</div>
                        <TeethInput 
                            focusedField={focusedField} 
                            setFocusedField={setFocusedField}
                            inputType="triple-input"
                            value={
                                state.currentStep[1] === 'buccal' ? 
                                state.teeth[state.currentTooth].gingivalMargin.buccal : 
                                state.teeth[state.currentTooth].gingivalMargin.paletal
                            } 
                            onChange={(value) => {
                                dispatch({type: 'SET_GINGIVAL_MARGIN', payload: {tooth: state.currentTooth, side: state.currentStep[1], value: value}})
                            }}
                            clearInput={clearInputs}
                            fieldName="gingivalMargin"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-[14px] text-gray-500 flex">Probing depth</div>
                        <TeethInput 
                            focusedField={focusedField} 
                            setFocusedField={setFocusedField}
                            inputType="triple-input" 
                            value={
                                state.currentStep[1] === 'buccal' ? 
                                state.teeth[state.currentTooth].probingDepth.buccal : 
                                state.teeth[state.currentTooth].probingDepth.paletal
                            } 
                            onChange={(value) => {
                                dispatch({type: 'SET_PROBING_DEPTH', payload: {tooth: state.currentTooth, side: state.currentStep[1], value: value}})
                            }}
                            clearInput={clearInputs}
                            fieldName="probingDepth"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-[14px] text-gray-500 flex">Movement</div>
                        <TeethInput 
                            focusedField={focusedField}
                            setFocusedField={setFocusedField}
                            inputType="single-input" 
                            value={state.teeth[state.currentTooth].movement} 
                            onChange={(value) => {
                                dispatch({type: 'SET_MOVEMENT', payload: {tooth: state.currentTooth, value: value}})
                            }}
                            clearInput={clearInputs}
                            fieldName="movement"
                        />
                    </div>
                </div>
            </FocusTrap>
            <div className="w-[1px] mx-3 bg-gray-100"/>
            <div className="flex flex-col gap-3 grow">
                <div className="flex justify-between items-center mb-1">
                    <div className="text-[16px] font-medium">Flags</div>
                    <div className="text-[12px] font-bold">R</div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-[14px] text-gray-500 flex">Furcation</div>
                    <div className={`flex rounded items-center justify-center w-[18px] h-[18px] ${state.teeth[state.currentTooth].furcation ? 'bg-sky-600' : 'bg-gray-100'}`}/>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-[14px] text-gray-500 flex">Implant</div>
                    <div className={`flex rounded items-center justify-center w-[18px] h-[18px] ${state.teeth[state.currentTooth].implant ? 'bg-sky-600' : 'bg-gray-100'}`}/>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-[14px] text-gray-500 flex">Bleeding</div>
                    <TeethInput 
                        focusedField={focusedField}
                        setFocusedField={setFocusedField}
                        inputType="triple-toggle"
                        value={state.currentStep[1] === 'buccal' ? state.teeth[state.currentTooth].bleeding.buccal : state.teeth[state.currentTooth].bleeding.paletal}
                        onChange={(value) => {
                            dispatch({type: 'SET_BLEEDING', payload: {tooth: state.currentTooth, side: state.currentStep[1], value: value}})
                        }}
                        clearInput={clearInputs}
                        fieldName="bleeding"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-[14px] text-gray-500 flex">Plaque</div>
                    <TeethInput 
                        focusedField={focusedField}
                        setFocusedField={setFocusedField}
                        inputType="triple-toggle"
                        value={state.currentStep[1] === 'buccal' ? state.teeth[state.currentTooth].plaque.buccal : state.teeth[state.currentTooth].plaque.paletal}
                        onChange={(value) => {
                            dispatch({type: 'SET_PLAQUE', payload: {tooth: state.currentTooth, side: state.currentStep[1], value: value}})
                        }}
                        clearInput={clearInputs}
                        fieldName="plaque"
                    />
                </div>
            </div>

        </div>
    )
}

export default TeethForm