const { __ } = wp.i18n;
import { TextControl, Autocomplete } from "@wordpress/components";
import "./editor.scss";

const Edit = ({ attributes, setAttributes, className }) => {
	const { useEffect, useState } = wp.element;
	const { content } = attributes;
	const [resorts, setResorts] = useState([]);

	useEffect(() => {
		console.log(content, content.length);
		console.log(`https://api.fnugg.no/search?q=${content}`);
		console.log("resort", resorts);
		content.length !== 0
			? fetch(`https://api.fnugg.no/suggest/autocomplete?q=${content}`)
					.then((response) => response.json())
					.then((data) => setResorts([...data.result]))
					.catch((error) => console.log(error))
			: null;

		return () => {
			return;
		};
	}, [content]);
	return (
		<div className={className}>
			<TextControl
				label="Search Resorts"
				value={content}
				type="text"
				onChange={(value) => setAttributes({ content: value })}
			/>
			<p></p>
		</div>
	);
};

export default Edit;
