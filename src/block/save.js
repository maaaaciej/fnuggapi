import "./style.scss";

const Save = ({ className, attributes: { resortName, resortOptions } }) => {
	return <div className={className}>{resortName}</div>;
};

export default Save;
