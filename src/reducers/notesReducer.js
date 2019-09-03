import { FETCH_NOTES } from '../actions/noteActions';

const initialState = {
  list: []
};

export default function recucer(state = initialState, action) {
  switch(action.type) {
    case FETCH_NOTES:
      return { list: [state.list, ...action.payload] };
    default:
      return state;
  }
}
