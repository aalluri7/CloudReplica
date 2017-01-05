import * as types from '../constants/ActionTypes';

export function drawerVis(visibility) {
  return { type: types.DRAWER_VISIBILITY, visibility };
}

export function activeDashPage(activeDashPage) {
  return { type: types.ACTIVE_DASH_PAGE, activeDashPage };
}