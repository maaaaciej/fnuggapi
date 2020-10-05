const { __ } = wp.i18n;
import { TextControl } from "@wordpress/components";
import "./style.scss";

const Save = ({ resortName }) => {
	return <div className={resortName}>{resortName}</div>;
};

export default Save;
