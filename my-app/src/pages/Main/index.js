import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/index';
import './index.css';

const Main = () => {
	const [listData, setListData] = useState([]);
	const [input, setInput] = useState('');
	const [searchData, setSearchData] = useState([]);

	// get data list girls
	useEffect(() => {
		const getData = async () => {
			await fetch(`https://api.tvmaze.com/search/shows?q=girls`)
				.then(response => response.json())
				.then(data => setListData(data))
				.catch(err => console.log(err));
		};
		getData();
	}, []);

	//get search data
	const getData = async () => {
		await fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
			.then(response => response.json())
			.then(data => setSearchData(data))
			.catch(err => console.log(err));
	};

	const handleSubmit = e => {
		e.preventDefault();
		getData();
	};

	const handleChange = e => {
		setInput(e.target.value);
	};

	// list
	const tv = listData.map((val, index) => (
		<div>
			<Card key={index} title={val.show.name} img={val.show.image.original} url={val.show.url} />
		</div>
	));

	//search
	const hasil = searchData.map((val, index) => (
		<div>
			<Card key={index} title={val.show.name} img={val.show.image.original} url={val.show.url} />
		</div>
	));
	return (
		<div>
			{/* Header */}
			<div>
				<img
					className="d-block mainImg"
					src="https://static.tvmaze.com/uploads/images/original_untouched/223/557688.jpg"
					alt=""
				/>

				<h1 className="posisitionText p-3">Campflix</h1>

				<div className="posisitionText2 p-3 mt-3">
					<div className="d-flex">
						<input className="me-2 p-1 h-25" type="search" />
						<p className="pt-1">Fidyah Putri R</p>
					</div>
				</div>
			</div>
			{/* End of Header */}

			{/* list */}
			<div className="list">{tv}</div>
			{/* end of list */}

			{/* search */}
			<div className="mt-5 ms-4">
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Search" onChange={e => handleChange(e)} />
					<button className="btn btn-primary" type="submit">
						Search
					</button>
				</form>
				<h2 className="mt-3">Hasil Pencarian</h2>
				<div className="d-flex flex-wrap">{hasil}</div>
			</div>
			{/* end of search */}
		</div>
	);
};

export default Main;
