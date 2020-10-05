const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

import { TextControl } from "@wordpress/components";
import Save from "./save";
import "./block";
import "./editor.scss";

const Edit = ({ attributes, setAttributes, className }) => {
	const { useEffect, useState } = wp.element;
	//const { resortName, testProp } = attributes;
	const [resorts, setResorts] = useState([]);

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
	const fetchResort = async (resortName) => {
		const encodedResortName = encodeURI(resortName);
		const response = await fetch(
			`https://api.fnugg.no/search?q=${encodedResortName}`
		);
		const data = await response.json();
		console.log(data);
	};

	return (
		<div className={className}>
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
			<Save resortName={resortName} />
		</div>
	);
};

export default Edit;
