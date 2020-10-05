const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
import Edit from "./edit";
import Save from "./save";

import "./editor.scss";
import "./style.scss";

registerBlockType("cgb/block-fnuggapi", {
	title: __("Hva med nå? Fnugg"),
	icon: "smiley",
	category: "common",
	keywords: [
		__("fnuggapi — CGB Block"),
		__("CGB Example"),
		__("create-guten-block"),
	],
	attributes: {
		resortName: { type: "string" },
	},

	edit: Edit,
	save: Save,
});
