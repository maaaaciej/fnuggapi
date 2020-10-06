import BlockControls from "./components/blockControls.jsx";
import "./editor.scss";

const Edit = ({
	attributes: { resortOptions, resortName },
	setAttributes,
	className,
}) => {
	const { useEffect, useState } = wp.element;

	//local state for the autocomplete results from the api
	const [resorts, setResorts] = useState([]);

	//local state for keeping track of the search-query
	const [resortQuery, setResortQuery] = useState("");

	//fetching the different resorts with autocomplete
	useEffect(() => {
		resortQuery.length !== 0
			? fetch(`https://api.fnugg.no/suggest/autocomplete?q=${resortQuery}`)
					.then((response) => response.json())
					.then((data) => {
						setResorts([...data.result].map((resort) => resort.name));
					})
					.catch((error) => console.error(error.message))
			: null;
		return () => {
			return;
		};
	}, [resortQuery]);
	return (
		<div className={className}>
			{
				<BlockControls
					resortOptions={resortOptions}
					resortQuery={resortQuery}
					setAttributes={setAttributes}
					setResortQuery={setResortQuery}
					resorts={resorts}
					resortName={resortName}
				/>
			}
		</div>
	);
};

export default Edit;

/* 	const createResortWidget = async (resortQuery) => {
		const encodedResortName = encodeURI(resortQuery);
		const response = await fetch(
			`https://api.fnugg.no/search?q=${encodedResortName}`
		);
		const data = await response.json();
		console.log(data);
	}; */
