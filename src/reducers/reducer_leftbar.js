import { TOGGLE_LEFTBAR } from '../actions/leftbar';

var expanded;
if (window.innerWidth < 900) {
  expanded = false;
} else {
  expanded = false;
};

const INITIAL_STATE = { expanded };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TOGGLE_LEFTBAR:
      var expanded = true;
      if (state.expanded) {
        expanded = false;
      };
      return { ...state, expanded };
    default:
      return state;
  }
};
