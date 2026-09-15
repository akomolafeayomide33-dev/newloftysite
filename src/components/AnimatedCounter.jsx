import React, { useRef, useEffect } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 2 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration * 1000 });

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    // We can't easily animate text content directly with framer motion component props in this specific way for counters
    // So using a standard React ref to update text content
    const displayRef = useRef(null);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (displayRef.current) {
                displayRef.current.textContent = Math.floor(latest).toLocaleString();
            }
        });
        return () => unsubscribe();
    }, [springValue]);

    return <span ref={ref}><span ref={displayRef}>0</span></span>;
};

export default AnimatedCounter;
