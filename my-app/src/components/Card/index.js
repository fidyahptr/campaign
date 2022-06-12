import React from 'react';
import './index.css';

const index = ({ title, img, url }) => {
	return (
		<div className="m-3">
			<div className="card shadow rounded">
				<img src={img} className="card-img-top" alt={title} />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<a href={url} className="btn btn-primary">
						View
					</a>
				</div>
			</div>
		</div>
	);
};

export default index;
