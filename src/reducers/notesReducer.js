import { FETCH_NOTES, CREATE_NOTE, DELETE_NOTE } from '../../src/actions/noteAction';

const initialState = {
  list: [{ _id: '123', title: 'test', body: 'note' }]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_NOTES:
      return { list: [...state.list, ...action.payload] };
    case CREATE_NOTE:
      return { list: [...state.list, action.payload] };
    case DELETE_NOTE:
      return { list: [...state.list.filter(note => note._id !== action.payload._id)] };
    default:
      return state;
  }
}
