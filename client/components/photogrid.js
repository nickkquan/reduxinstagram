import React from 'react';
import Photo from './photo';

const PhotoGrid = React.createClass({
	render() {
		return (
			<div>
				<div className="photo-grid">
					{this.props.posts.map((post, index) => (
						<Photo {...this.props} key={index} index={index} post={post} />
					))}
				</div>
			</div>
		);
	}
});
export default PhotoGrid;
