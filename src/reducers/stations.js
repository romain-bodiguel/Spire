import {
  CHANGESEARCH,
} from 'src/actions/stations';

export const initialState = {
  inputSearchBar: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGESEARCH: {
      return {
        ...state,
        inputSearchBar: action.value,
      };
    }
    default:
      return state;
  }
};

export default reducer;
