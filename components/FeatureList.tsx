import classes from './FeatureList.module.scss';

const FeatureList: React.FC<{ features: string[] }> = (props) => {
	return (
		<ul className={classes.featureList}>
			{props.features.map((feature) => (
				<li key={feature}>{feature}</li>
			))}
		</ul>
	);
};

export default FeatureList;
