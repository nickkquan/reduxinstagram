import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Importing the root reducer
import rootReducer from './reducers/index';

// Importing dummy data

import comments from './data/comments';
import posts from './data/posts';

// Creating object for default data

const defaultState = {
	comments,
	posts
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;