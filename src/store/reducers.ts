const initialState = {
  UBIScenarios: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'API_GET_UBI_SCENARIOS_SUCCEEDED':
      return {
        ...state,
        UBIScenarios: action.payload,
      };
    case 'API_GET_UBI_SCENARIOS_FAILED':
      return { ...state };
    default:
      return state;
  }
};

export default rootReducer;
