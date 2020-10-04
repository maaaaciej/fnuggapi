const { __ } = wp.i18n;
import { TextControl } from "@wordpress/components";
import "./style.scss";

const Save = (props) => {
	return <div className={props.className}>{props.attributes.content}</div>;
};

export default Save;
