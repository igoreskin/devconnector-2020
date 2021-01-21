import { combineReducers } from 'redux';
// import combineReducers from 'react-combine-reducers';
import alert from './alert';

export default combineReducers({
  alert
})

// const [reducerCombined, initialStateCombined] = combineReducers({
//   alert: [alert, initialStateOne],
//   // reducerTwo: [reducerTwo, initialStateTwo],
//   // ...
// });

// export default reducerCombined;