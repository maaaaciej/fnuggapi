import { TextControl, CheckboxControl } from "@wordpress/components";

import Save from "./save";

import "./editor.scss";

const Edit = ({ attributes, setAttributes, className }) => {
	const { useEffect, useState } = wp.element;
	const { resortOptions, resortName } = attributes;

	console.log("attr", resortOptions);

	//local state for the autocomplete results from the api
	const [resorts, setResorts] = useState([]);

	//local state for keeping track of the search-query
	const [resortQuery, setResortQuery] = useState("");

	//fetching the different resorts with autocomplete
	useEffect(() => {
		resortQuery.length !== 0
			? fetch(`https://api.fnugg.no/suggest/autocomplete?q=${resortQuery}`)
					.then((response) => response.json())
					.then((data) => setResorts([...data.result]))
					.catch((error) => console.log(error))
			: null;
		return () => {
			return;
		};
	}, [resortQuery]);

	return (
		<div className={className}>
			{/* TODO: Put the textcontrol into the sidebar */}
			<TextControl
				label="Search Resorts"
				value={resortQuery}
				type="text"
				onChange={(value) => setResortQuery(value)}
			/>
			<ul>
				{resorts.map((resort) => (
					<li onClick={() => setAttributes({ resortName: resort.name })}>
						{resort.name}
					</li>
				))}
			</ul>

			{/* TODO: Put controls in the sidebar, refactor more DRY, 
				Loop over an array of labels and tweak the onClicks accordingly??*/}
			<div>
				<h3>Show</h3>
				<label htmlFor="Picture">Picture</label>
				<input
					type="checkbox"
					onChange={(event) => {
						setAttributes({
							resortOptions: {
								...resortOptions,
								picture: event.target.checked,
							},
						});
					}}
					id="Picture"
				/>

				<label htmlFor="Weather Conditions">Weather Conditions</label>
				<input
					type="checkbox"
					onChange={(event) => {
						setAttributes({
							resortOptions: {
								...resortOptions,
								weather: event.target.checked,
							},
						});
					}}
					id="Weather Conditions"
				/>

				<label htmlFor="Temperature">Temperature</label>
				<input
					type="checkbox"
					onChange={(event) => {
						setAttributes({
							resortOptions: {
								...resortOptions,
								temperature: event.target.checked,
							},
						});
					}}
					id="Temperature"
				/>

				<label htmlFor="Wind">Wind</label>
				<input
					type="checkbox"
					onChange={(event) => {
						setAttributes({
							resortOptions: {
								...resortOptions,
								wind: event.target.checked,
							},
						});
					}}
					id="Wind"
				/>

				<label htmlFor="Snow Condition">Snow Condition</label>
				<input
					type="checkbox"
					onChange={(event) => {
						setAttributes({
							resortOptions: {
								...resortOptions,
								snow: event.target.checked,
							},
						});
					}}
					id="Snow Condition"
				/>

				<label htmlFor="Opening Hours Today">Opening Hours Today</label>
				<input
					type="checkbox"
					onChange={(event) => {
						setAttributes({
							resortOptions: {
								...resortOptions,
								openingHours: event.target.checked,
							},
						});
					}}
					id="Opening Hours Today"
				/>
			</div>

			<Save resortName={resortName} />
		</div>
	);
};

export default Edit;

/*  Storing the selected resort in the attributes object, based on the values checked off by the user, 
		move out into another file, no need to fetch this information in the edit func */
/* 	const createResortWidget = async (resortQuery) => {
		const encodedResortName = encodeURI(resortQuery);
		const response = await fetch(
			`https://api.fnugg.no/search?q=${encodedResortName}`
		);
		const data = await response.json();
		console.log(data);
	}; */
