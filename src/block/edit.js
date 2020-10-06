import { TextControl, CheckboxControl } from "@wordpress/components";

import Save from "./save";

import "./editor.scss";

const Edit = ({ attributes, setAttributes, className }) => {
	const { useEffect, useState } = wp.element;
	/* const { resortName } = attributes; */
	console.log(attributes);
	//local state for the autocomplete results from the api
	const [resorts, setResorts] = useState([]);

	const [picture, setPicture] = useState(false);
	const [weather, setWeather] = useState(false);
	const [temperature, setTemperature] = useState(false);
	const [wind, setWind] = useState(false);
	const [snow, setSnow] = useState(false);
	const [openingHours, setOpeningHours] = useState(false);

	//locally storing the attributes while i figure out why the function doesn't receive the attributes object
	const [resortName, setResortName] = useState("");

	//fetching the different resorts with autocomplete
	useEffect(() => {
		resortName.length !== 0
			? fetch(`https://api.fnugg.no/suggest/autocomplete?q=${resortName}`)
					.then((response) => response.json())
					.then((data) => setResorts([...data.result]))
					.catch((error) => console.log(error))
			: null;

		return () => {
			return;
		};
	}, [resortName]);

	//Storing the selected resort in the attributes object, based on the values checked off by the user
	const createResortWidget = async (resortName) => {
		const encodedResortName = encodeURI(resortName);
		const response = await fetch(
			`https://api.fnugg.no/search?q=${encodedResortName}`
		);
		const data = await response.json();
		console.log(data);
	};

	return (
		<div className={className}>
			{/* TODO: Put the textcontrol into the sidebar */}
			<TextControl
				label="Search Resorts"
				value={resortName}
				type="text"
				onChange={(value) => setResortName(value)}
			/>
			<ul>
				{resorts.map((resort) => (
					<li>
						<a>{resort.name}</a>
					</li>
				))}
			</ul>

			{/* TODO: Put controls in the sidebar, refactor more DRY */}
			<div>
				<h3>Show</h3>
				<CheckboxControl
					onChange={() => setPicture(!picture)}
					label="Picture"
				/>
				<CheckboxControl label="Weather Conditions" />
				<CheckboxControl label="Temperature" />
				<CheckboxControl label="Wind" />
				<CheckboxControl label="Snow Condition" />
				<CheckboxControl label="Opening Hours Today" />
			</div>

			<Save resortName={resortName} />
		</div>
	);
};

export default Edit;
