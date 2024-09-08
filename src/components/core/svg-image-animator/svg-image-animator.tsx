import {useState, useEffect} from "react";
import {motion, useMotionValue, animate} from "framer-motion";

interface SvgImageAnimatorProps {
    images: string[]; // Array of image paths
    duration?: number; // Animation duration in seconds
}


export function SvgImageAnimator(props:SvgImageAnimatorProps)
{
    const images = props.images;
    const duration = props.duration || 2;

    const [imageIndex, setImageIndex] = useState(0);
    const progress = useMotionValue(imageIndex);

    useEffect(() => {
        const animation = animate(progress, imageIndex, {
            duration,
            ease: "easeInOut",
            onComplete: () => {
                setImageIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            },
        });

        return () => animation.stop();
    }, [imageIndex, duration, images.length, progress]);


    return (
        <motion.img
            key={images[imageIndex]} // Key for smooth transitions
            src={images[imageIndex]}
            alt="Miguelito's Baby Shower"
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
            initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
            animate={{ opacity: 1, scale: 1, rotate: [10, -10, 0],  }}
            exit={{ opacity: 0, scale: 0.8, rotate: -20 }}
            transition={{ duration: duration / 2, ease: "easeInOut"}} // Fade in/out transition
        />
    );
}
