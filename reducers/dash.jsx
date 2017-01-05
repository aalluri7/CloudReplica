import { DRAWER_VISIBILITY, ACTIVE_DASH_PAGE } from '../constants/ActionTypes';

const initialState = {
  drawerVisibility: false,
  activeDashPage: 'dashboard'
};

export default function todos(state = initialState, action) {
  switch (action.type) {
  case DRAWER_VISIBILITY:
    return {
      ...state,
      drawerVisibility: action.visibility
    };
  case ACTIVE_DASH_PAGE:
    return {
      ...state,
      activeDashPage: action.activeDashPage
    }
  default:
    return state;
  }
}
