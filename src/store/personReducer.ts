import { Actions } from './actions';

interface PersonState {
  person_info: any[];
  person_skills: any[];
}

interface PersonAction {
  type: string;
  payload?: any;
}
const initialState: PersonState = {
  person_info: [],
  person_skills: [],
};

export const personReducer = (
  state = initialState,
  action: PersonAction
): PersonState => {
  switch (action.type) {
    case Actions.GET_PERSON_DATA:
      return {
        ...state,
        person_info: [...action.payload.person_info],
        person_skills: [...action.payload.person_skills],
      };
    default:
      return state;
  }
};
