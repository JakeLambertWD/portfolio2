import classes from '../MediumClap.module.css';

const CountTotal = ({ countTotal, setRef }) => {
	return (
		<span ref={setRef} data-refkey='clapTotalRef' className={classes.total}>
			{countTotal}
		</span>
	);
};

export default CountTotal;
