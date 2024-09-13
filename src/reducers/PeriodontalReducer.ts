export type Tooth = {
  id: number;
  gingivalMargin: {buccal: [number | null , number | null, number | null], paletal: [number | null, number | null, number | null]};
  probingDepth: {buccal: [number | null, number | null, number | null], paletal: [number | null, number | null, number | null]};
  movement: [number | null];
  furcation: boolean;
  implant: boolean;
  bleeding: {buccal: [boolean, boolean, boolean], paletal: [boolean, boolean, boolean]};
  plaque: {buccal: [boolean, boolean, boolean], paletal: [boolean, boolean, boolean]};
  name: {type: 'molar' | 'premolar' | 'canine' | 'incisor', side: 'L' | 'R', maxilar: 'top' | 'bot', number: number}  
  completed?: boolean
};
  
export type ChartState = {
  currentStep: ['top' | 'bot', 'buccal' | 'paletal'];
  currentTooth: number;
  currentField: 'gingivalMargin' | 'probingDepth' | 'movement' | 'bleeding' | 'plaque';
  teeth: Tooth[]
};
  
export type Action =
  | { type: 'SET_CURRENT_TOOTH'; payload: {tooth: number} }
  | { type: 'NEXT_TOOTH' }
  | { type: 'PREV_TOOTH' }
  | { type: 'SET_VALUE'; field: keyof Tooth; value: any }
  | { type: 'RESET_TOOTH' }
  | { type: 'SET_GINGIVAL_MARGIN'; payload: {tooth: number, side: 'buccal' | 'paletal', value: [number | null, number | null, number | null]}}
  | { type: 'SET_PROBING_DEPTH'; payload: {tooth: number, side: 'buccal' | 'paletal', value: [number | null, number | null, number | null]}}
  | { type: 'SET_MOVEMENT'; payload: { tooth: number, value: [number | null] } }
  | { type: 'SET_BLEEDING'; payload: { tooth: number, side: 'buccal' | 'paletal', value: [boolean, boolean, boolean] } }
  | { type: 'SET_PLAQUE'; payload: { tooth: number, side: 'buccal' | 'paletal', value: [boolean, boolean, boolean] } }
  | { type: 'SET_FURCATION'; payload: { tooth: number } }
  | { type: 'SET_IMPLANT'; payload: { tooth: number } }


export const initialState: ChartState = {
  currentStep: ['top', 'buccal'],
  currentTooth: 0,
  currentField: 'gingivalMargin',
  teeth: [
    {
      id: 1,
      name: {type: 'molar', side: 'L', maxilar: 'top', number: 3},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]},
    },
    {
      id: 2,
      name: {type: 'molar', side: 'L', maxilar: 'top', number: 2},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]},
    },
    {
      id: 3,
      name: {type: 'molar', side: 'L', maxilar: 'top', number: 1},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]},
    },
    {
      id: 4,
      name: {type: 'premolar', side: 'L', maxilar: 'top', number: 2},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]},
    },
    {
      id: 5,
      name: {type: 'premolar', side: 'L', maxilar: 'top', number: 1},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]},
    },
    {
      id: 6,
      name: {type: 'canine', side: 'L', maxilar: 'top', number: 1},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 7,
      name: {type: 'incisor', side: 'L', maxilar: 'top', number: 2},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 8,
      name: {type: 'incisor', side: 'L', maxilar: 'top', number: 1},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 9,
      name: {type: 'incisor', side: 'R', maxilar: 'top', number: 1},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 10,
      name: {type: 'incisor', side: 'R', maxilar: 'top', number: 2},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 11,
      name: {type: 'canine', side: 'R', maxilar: 'top', number: 1},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 12,
      name: {type: 'premolar', side: 'R', maxilar: 'top', number: 1},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 13,
      name: {type: 'premolar', side: 'R', maxilar: 'top', number: 2},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 14,
      name: {type: 'molar', side: 'R', maxilar: 'top', number: 1},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 15,
      name: {type: 'molar', side: 'R', maxilar: 'top', number: 2},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 16,
      name: {type: 'molar', side: 'R', maxilar: 'top', number: 3},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 17,
      name: {type: 'molar', side: 'L', maxilar: 'bot', number: 3},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 18,
      name: {type: 'molar', side: 'L', maxilar: 'bot', number: 2},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 19,
      name: {type: 'molar', side: 'L', maxilar: 'bot', number: 1},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 20,
      name: {type: 'premolar', side: 'L', maxilar: 'bot', number: 2},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 21,
      name: {type: 'premolar', side: 'L', maxilar: 'bot', number: 1},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 22,
      name: {type: 'canine', side: 'L', maxilar: 'bot', number: 1},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 23,
      name: {type: 'incisor', side: 'L', maxilar: 'bot', number: 2},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 24,
      name: {type: 'incisor', side: 'L', maxilar: 'bot', number: 1},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 25,
      name: {type: 'incisor', side: 'R', maxilar: 'bot', number: 1},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 26,
      name: {type: 'incisor', side: 'R', maxilar: 'bot', number: 2},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 27,
      name: {type: 'canine', side: 'R', maxilar: 'bot', number: 1},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 28,
      name: {type: 'premolar', side: 'R', maxilar: 'bot', number: 1},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 29,
      name: {type: 'premolar', side: 'R', maxilar: 'bot', number: 2},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 30,
      name: {type: 'molar', side: 'R', maxilar: 'bot', number: 1},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 31,
      name: {type: 'molar', side: 'R', maxilar: 'bot', number: 2},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    },
    {
      id: 32,
      name: {type: 'molar', side: 'R', maxilar: 'bot', number: 3},
      gingivalMargin: {buccal: [null, null, null], paletal: [null, null, null]},
      probingDepth: {buccal: [null, null, null], paletal: [null, null, null]},
      movement: [null],
      furcation: false,
      implant: false,
      bleeding: {buccal: [false, false, false], paletal: [false, false, false]},
      plaque: {buccal: [false, false, false], paletal: [false, false, false]}
    }
  ]
};
  
export const periodontalReducer = (state: ChartState, action: Action): ChartState => {
  switch (action.type) {
    case 'SET_CURRENT_TOOTH':
      return {
        ...state,
        currentTooth: action.payload.tooth
      }
    case 'NEXT_TOOTH':
      // advance side if current tooth is on the last tooth of the side
      if (state.currentTooth === 15) {
        if (state.currentStep[1] === 'buccal') {
          return {
            ...state,
            currentTooth: 0,
            currentStep: [state.currentStep[0], 'paletal']
          }
        } else {
          return {
            ...state,
            currentTooth: state.currentTooth + 1,
            currentStep: ['bot', 'buccal']
          }
        }
      }
      if (state.currentTooth === 31) {
        if (state.currentStep[1] === 'buccal') {
          return {
            ...state,
            currentTooth: 16,
            currentStep: [state.currentStep[0], 'paletal']
          }
        } else {
          // end charting
          return {
            ...state,
          }
        }
      }
      return {
        ...state,
        currentTooth: state.currentTooth + 1
      }

      case 'PREV_TOOTH':
        // prev side if current tooth is on the first tooth of the side
        if (state.currentTooth === 0) {
          if (state.currentStep[1] === 'paletal') {
            return {
              ...state,
              currentTooth: 15,
              currentStep: [state.currentStep[0], 'buccal']
            }
          } else {
            return {
              // do nothing bc already on the first tooth
              ...state,
              // currentTooth: state.currentTooth - 1,
              // currentStep: ['top', 'paletal']
            }
          }
        }
        if (state.currentTooth === 16) {
          if (state.currentStep[1] === 'paletal') {
            return {
              ...state,
              currentTooth: 31,
              currentStep: [state.currentStep[0], 'buccal']
            }
          } else {
            return {
              ...state,
              currentTooth: 15,
              currentStep: ['top', 'paletal']
            }
          }
        }
        return {
          ...state,
          currentTooth: state.currentTooth - 1
        }

    case 'RESET_TOOTH':
      // Implement reset tooth logic
      return state;
    

    case 'SET_GINGIVAL_MARGIN':
      return {
        ...state,
        teeth: state.teeth.map((tooth) => {
          if (tooth.id - 1 === action.payload.tooth) {
            if (action.payload.side === 'buccal') {
              const newTooth: Tooth = {
                ...tooth,
                gingivalMargin: {
                  paletal: tooth.gingivalMargin.paletal,
                  buccal: action.payload.value                
                }
              }
              return newTooth
            } else if (action.payload.side === 'paletal') {
              const newTooth: Tooth = {
                ...tooth,
                gingivalMargin: {
                  buccal: tooth.gingivalMargin.buccal,
                  paletal: action.payload.value                
                }
              }
              return newTooth
            }
          }
          return tooth
        })
      }
    case 'SET_PROBING_DEPTH':
      return {
        ...state,
        teeth: state.teeth.map((tooth) => {
          if (tooth.id - 1 === action.payload.tooth) {
            if (action.payload.side === 'buccal') {
              const newTooth: Tooth = {
                ...tooth,
                probingDepth: {
                  paletal: tooth.probingDepth.paletal,
                  buccal: action.payload.value                
                }
              }
              return newTooth
            } else if (action.payload.side === 'paletal') {
              const newTooth: Tooth = {
                ...tooth,
                probingDepth: {
                  buccal: tooth.probingDepth.buccal,
                  paletal: action.payload.value                
                }
              }
              return newTooth
            }
          }
          return tooth
        })
      }
    case 'SET_MOVEMENT':
      return {
        ...state,
        teeth: state.teeth.map((tooth) => {
          if (tooth.id - 1 === action.payload.tooth) {
            return {
              ...tooth,
              movement: action.payload.value
            }
          }
          return tooth
        })
      }
    case 'SET_BLEEDING':
      return {
        ...state,
        teeth: state.teeth.map((tooth) => {
          if (tooth.id - 1 === action.payload.tooth) {
            if (action.payload.side === 'buccal') {
              return {
                ...tooth,
                bleeding: {
                  buccal: action.payload.value,
                  paletal: tooth.bleeding.paletal
                }
              }
            } else if (action.payload.side === 'paletal') {
              return {
                ...tooth,
                bleeding: {
                  buccal: tooth.bleeding.buccal,
                  paletal: action.payload.value
                }
              }
            }
          }
          return tooth
        })
      }
    case 'SET_PLAQUE':
      return {
        ...state,
        teeth: state.teeth.map((tooth) => {
          if (tooth.id - 1 === action.payload.tooth) {
            console.log('changing plaque on', tooth, 'setting: ', action.payload.side, 'to: ', action.payload.value)
            return {
              ...tooth,
              plaque: {
                ...tooth.plaque,
                [action.payload.side]: action.payload.value
              }
            }
          }
          return tooth
        })
      }
    case 'SET_FURCATION':
      return {
        ...state,
        teeth: state.teeth.map((tooth) => {
          if (tooth.id - 1 === action.payload.tooth) {
            return {
              ...tooth,
              furcation: !tooth.furcation
            }
          }
          return tooth
        })
      }
    case 'SET_IMPLANT':
      return {
        ...state,
        teeth: state.teeth.map((tooth) => {
          if (tooth.id - 1 === action.payload.tooth) {
            return {
              ...tooth,
              implant: !tooth.implant
            }
          }
          return tooth
        })
      }
    default:
      return state;
  }
};