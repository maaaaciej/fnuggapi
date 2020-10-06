import BlockControls from "./components/blockControls.jsx";
import "./editor.scss";

const Edit = ({
	attributes: { resortOptions, resortName },
	setAttributes,
	className,
}) => {
	const { useEffect, useState } = wp.element;

	//local state for the preview data
	const [previewData, setPreviewData] = useState({
		picture: null,
		weather: null,
		lastUpdated: null,
		temperature: null,
		wind: null,
		snow: null,
	});

	//local state for the autocomplete results from the api
	const [resorts, setResorts] = useState([]);

	//local state for keeping track of the search-query
	const [resortQuery, setResortQuery] = useState("");

	//fetching the different resorts for the autocomplete
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

	//Fetching the resort information to render the preview
	const createResortWidget = async (selectedResortName) => {
		const encodedResortName = encodeURI(selectedResortName);
		const response = await fetch(
			`https://api.fnugg.no/search?q=${encodedResortName}`
		);
		const data = await response.json();
		const result = data.hits.hits[0]._source;
		console.log(result);
		setPreviewData({
			...previewData,
			picture: result.images.image_16_9_s,
			weather: null,
			lastUpdated: result.last_updated,
			temperature: result.conditions.combined.top.temperature.value,
			wind: result.conditions.combined.top.wind.speed,
			snow: result.conditions.combined.top.condition_description,
		});
	};
	console.log(previewData);
	return (
		<div className={className}>
			{
				<BlockControls
					createResortWidget={createResortWidget}
					resortOptions={resortOptions}
					resortQuery={resortQuery}
					setAttributes={setAttributes}
					setResortQuery={setResortQuery}
					resorts={resorts}
					resortName={resortName}
				/>
			}
			{
				<div className="resort-card">
					<h2 className="resort-card-title">{resortName}</h2>
					<img src={previewData.picture} alt="resort-image" />
					<div className="resort-card-lastupdated"></div>
					<div className="resort-card-weather">
						<img src="" alt="" className="resort-card-weather-image" />
						<span className="resort-card-weather-text"></span>
					</div>
					<div className="resort-card-temperature"></div>
					<div className="resort-card-snow"></div>
					<div className="resort-card-wind"></div>
				</div>
			}
		</div>
	);
};

export default Edit;
