import { Actions } from './actions';

interface PersonState {
  person_info: any[];
}

interface PersonAction {
  type: string;
  payload?: any;
}
const initialState: PersonState = {
  person_info: [],
};

export const productsReducer = (
  state = initialState,
  action: PersonAction
): PersonState => {
  switch (action.type) {
    case Actions.GET_PERSON_DATA:
      return { ...state, person_info: [...action.payload.person_info] };
    default:
      return state;
  }
};
