import classes from './MediumClap.module.css';
import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';
import mojs from '@mojs/core';
import ClapIcon from './clapSubComponent/ClapIcon';
import ClapCount from './clapSubComponent/ClapCount';
import CountTotal from './clapSubComponent/CountTotal';

/**
 * Custom Hook for animations
 */
const useClapAnimation = ({ clapEl, countEl, clapTotalEl }) => {
	// setup animation timeline
	// const [animationTimeline, setAnimationTimeline] = useState(() => new mojs.Timeline());

	// runs synchronously between when React calculates the DOM & paints it out to the screen
	useLayoutEffect(() => {
		// if these elements are undefined then return and do nothing
		if (!clapEl || !countEl || !clapTotalEl) {
			return;
		}

		// const tlDuration = 300;

		// const scaleButton = new mojs.Html({
		// 	el: clapEl,
		// 	duration: tlDuration,
		// 	scale: { 1.3: 1 },
		// 	easing: mojs.easing.ease.out
		// });

		// const countAnimation = new mojs.Html({
		// 	el: countEl,
		// 	opacity: { 0: 1 },
		// 	y: { 0: -30 },
		// 	duration: tlDuration
		// }).then({
		// 	opacity: { 1: 0 },
		// 	y: -80,
		// 	delay: tlDuration / 2
		// });

		// const countTotalAnimation = new mojs.Html({
		// 	el: clapTotalEl,
		// 	opacity: { 0: 1 },
		// 	delay: (3 * tlDuration) / 2,
		// 	duration: tlDuration,
		// 	y: { 0: -3 }
		// });

		// const triangleBurst = new mojs.Burst({
		// 	parent: countEl,
		// 	radius: { 50: 95 },
		// 	count: 5,
		// 	angle: 30,
		// 	children: {
		// 		shape: 'polygon',
		// 		radius: { 6: 0 },
		// 		stroke: 'rgba(211,54,0,0.5)',
		// 		strokeWidth: 2,
		// 		angle: 210,
		// 		delay: 30,
		// 		speed: 0.2,
		// 		easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
		// 		duration: tlDuration
		// 	}
		// });

		// const circleBurst = new mojs.Burst({
		// 	parent: clapEl,
		// 	radius: { 50: 75 },
		// 	angle: 25,
		// 	duration: tlDuration,
		// 	children: {
		// 		shape: 'circle',
		// 		fill: 'rgba(149,165,166,0.5)',
		// 		delay: 30,
		// 		speed: 0.2,
		// 		radius: { 3: 0 },
		// 		easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
		// 	}
		// });

		// clapEl.style.transform = 'scale(1,1)';

		// const newAnimationTimeline = animationTimeline.add([scaleButton, countTotalAnimation, countAnimation, triangleBurst, circleBurst]);
		// setAnimationTimeline(newAnimationTimeline);
	}, [clapEl, countEl, clapTotalEl]);

	// return animationTimeline;
};

const MediumClap = () => {
	const [clapState, setClapState] = useState({
		isClicked: false,
		count: 0,
		countTotal: 267
	});
	// Destructure state
	const { count, countTotal, isClicked } = clapState;

	// useRef
	const [{ clapRef, clapCountRef, clapTotalRef }, setRefState] = useState({});
	const setRef = useCallback(node => {
		// save the node
		setRefState(prevState => ({
			...prevState,
			[node.dataset.refkey]: node
		}));
	}, []);

	// Call Custom Hook
	const animationTimeline = useClapAnimation({
		clapEl: clapRef,
		countEl: clapCountRef,
		clapTotalEl: clapTotalRef
	});

	// onClick event
	const handleClapClick = () => {
		setClapState(prevState => ({
			isClicked: true,
			count: Math.min(count + 1, 50),
			countTotal: count < 50 ? prevState.countTotal + 1 : prevState.countTotal
		}));

		// call animation timeline
		animationTimeline.replay();
	};

	return (
		<button ref={setRef} data-refkey='clapRef' onClick={handleClapClick} className={classes.clap}>
			<ClapIcon isClicked={isClicked} />
			<ClapCount setRef={setRef} count={count} />
			<CountTotal setRef={setRef} countTotal={countTotal} />
		</button>
	);
};

export default MediumClap;
