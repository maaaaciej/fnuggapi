import { InspectorControls } from "@wordpress/block-editor";
import {
	TextControl,
	PanelBody,
	CheckboxControl,
	RadioControl,
} from "@wordpress/components";

const BlockControls = ({
	resortQuery,
	createResortWidget,
	resortOptions,
	setAttributes,
	resortName,
	setResortQuery,
	resorts,
}) => {
	const createOptionsArray = (resorts) => {
		const options = [];
		for (let i = 0; i < resorts.length; i++) {
			options.push({ value: resorts[i], label: resorts[i] });
		}
		return options;
	};
	return (
		<InspectorControls>
			<TextControl
				label="Search Resorts"
				value={resortQuery}
				type="text"
				onChange={(value) => setResortQuery(value)}
			/>
			<RadioControl
				selected={resortName}
				options={createOptionsArray(resorts)}
				onChange={(selectedOption) => {
					createResortWidget(selectedOption);
					setAttributes({ resortName: selectedOption });
				}}
			/>

			<PanelBody title="Widget Options" initialOpen={true}>
				{Object.keys(resortOptions).map((optionKey) => (
					<CheckboxControl
						key={optionKey}
						label={optionKey}
						onChange={(isChecked) => {
							setAttributes({
								resortOptions: {
									...resortOptions,
									[`${optionKey}`]: isChecked,
								},
							});
						}}
					/>
				))}
			</PanelBody>
		</InspectorControls>
	);
};
export default BlockControls;
