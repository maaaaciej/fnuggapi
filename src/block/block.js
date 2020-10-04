const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
import { TextControl } from "@wordpress/components";

import "./editor.scss";
import "./style.scss";

registerBlockType("cgb/block-fnuggapi", {
	title: __("fnuggapi - CGB Block"),
	icon: "smiley",
	category: "common",
	keywords: [
		__("fnuggapi — CGB Block"),
		__("CGB Example"),
		__("create-guten-block"),
	],
	attributes: {
		content: { type: "string" },
	},

	edit: (props) => {
		return (
			<div className={props.className}>
				<TextControl
					label="Additional CSS Class"
					value={props.attributes.content}
					type="text"
					onChange={(value) => props.setAttributes({ content: value })}
				/>
				<p>{props.attributes.content}</p>
			</div>
		);
	},

	save: (props) => {
		return <div className={props.className}>{props.attributes.content}</div>;
	},
});
