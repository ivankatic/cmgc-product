import classes from './Variations.module.css';

const Variations: React.FC<{ variations: string[] }> = (props) => {
	return (
		<div className={classes.scents}>
			<div className={classes.scentText}>Scent:</div>
			{props.variations.map((variation) => (
				<button className={classes.button} key={variation}>
					{variation}
				</button>
			))}
		</div>
	);
};

export default Variations;
