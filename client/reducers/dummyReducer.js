import axios from "axios"; //for thunks

const initialState = {
  dummyData: []
};

const ACTION_TYPE = "ACTION_TYPE";

const dummyAction = dummyData => ({
  type: ACTION_TYPE,
  dummyData
});

const dummyReducer = (state = initialState, action) => {
  switch (action.type) {
    case dummyAction:
      return { ...state, dummyData: action.dummyData };
    default:
      return state;
  }
};

export default dummyReducer;
