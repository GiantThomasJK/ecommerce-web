const combineReducers = (reducers:any) => {
    return (state = {}, action:any) => {
      const newState = {};
      for (let key in reducers) {
        (newState as any)[key] = reducers[key]((state as any)[key], action);
      }
      return newState;
    };
  };
  
  export default combineReducers;
  