import { act } from "react-dom/test-utils";

function colorsReducer(state, action) {
    switch (action.type) {
      case 'TOGGLE_MODE':
        break;
        case 'EDIT_NAME':
            // let newNames = state.names((name, idx) => {
            //     if (idx == action.idx) {
            //         return action.name
            //     } else {
            //         return name
            //     }
            // });

            return {
                ...state,
                names: state.names.map((i, idx) => idx === action.idx ? action.name : i)
            }
        break;

      default:
        break;
    }
}