import {useEffect, useState} from "react";
import {star, heart, hand, plane, lightning, note} from "./paths.ts";
import {motion, useMotionValue, useTransform, animate} from "framer-motion";
import {getIndex, useFlubber} from "@/use-flubber.ts";


const paths = [lightning, hand, plane, heart, note, star, lightning];
const colors = [
    "#00cc88",
    "#0099ff",
    "#8855ff",
    "#ff0055",
    "#ee4444",
    "#ffcc00",
    "#00cc88"
];

function SvgMorphAnimator() {
    const [pathIndex, setPathIndex] = useState(0);
    const progress = useMotionValue(pathIndex);
    const fill = useTransform(progress, paths.map(getIndex), colors);
    const path = useFlubber(progress, paths);

    useEffect(() => {
        const animation = animate(progress, pathIndex, {
            duration: 0.8,
            ease: "easeInOut",
            onComplete: () => {
                setPathIndex((prevIndex) =>
                    prevIndex === paths.length - 1 ? 1 : prevIndex + 1
                );
            }
        });

        return () => animation.stop();
    }, [pathIndex]);

    return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
                <motion.path fill={fill} d={path}/>
        </svg>
    );
}

export default SvgMorphAnimator