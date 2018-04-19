// A reducer takes in two things:

// 1. Takes in the action - info about what happened

// 2. A copy of the current state

function posts(state = [], action) {
	console.log('The post will change');
	console.log(state, action);
	return state;
}

export default posts;
