// Increment Likes
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	};
}

// Add Comment
export function addComment(postID, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postID,
		author,
		comment
	};
}

// Remove Comment
export function removeComment(postId, index) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		index
	};
}
