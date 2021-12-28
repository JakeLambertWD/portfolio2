import classes from '../MediumClap.module.css';

const ClapCount = ({ count, setRef }) => {
	return (
		<span ref={setRef} data-refkey='clapCountRef' className={classes.count}>
			+ {count}
		</span>
	);
};

export default ClapCount;
