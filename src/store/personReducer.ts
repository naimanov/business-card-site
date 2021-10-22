import { Actions } from './actions';

interface PersonState {
  person_info: any[];
  person_skills: any[];
  person_projects: any[];
  person_contacts: any[];
  is_loading: boolean;
}

interface PersonAction {
  type: string;
  payload?: any;
}
const initialState: PersonState = {
  person_info: [],
  person_skills: [],
  person_projects: [],
  person_contacts: [],
  is_loading: true,
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
        person_contacts: [...action.payload.person_contacts],
        is_loading: false,
      };
    default:
      return state;
  }
};
