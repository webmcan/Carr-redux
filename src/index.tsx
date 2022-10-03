import ReactDOM from 'react-dom/client';

import App from './App';
import 'antd/dist/antd.min.css' ;
import rootReducer from './store';
import { Provider } from 'react-redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter as Router } from "react-router-dom";


const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk ], 
})

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <Provider store= {store}>
    <Router>
      <App />
    </Router>
  </Provider>
  </>
);

 
