import { Actions } from './actions';

interface PersonState {
  person_info: any[];
  person_skills: any[];
  person_projects: any[];
}

interface PersonAction {
  type: string;
  payload?: any;
}
const initialState: PersonState = {
  person_info: [],
  person_skills: [],
  person_projects: [],
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
        person_projects: [...action.payload.person_projects],
      };
    default:
      return state;
  }
};
