import React from 'react';
import Photo from './photo';
import Comments from './comments';

const Single = React.createClass({
	render() {
		const index = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
		const post = this.props.posts[index];
		return (
			<div>
				<div className="single-photo">
					<Photo index={index} post={post} {...this.props} />
					<Comments />
				</div>
			</div>
		);
	}
});
export default Single;
