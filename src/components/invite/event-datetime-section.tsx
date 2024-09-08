import { motion } from "framer-motion";


const dateVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const timeVariants = {
    pulse: { scale: [1, 1.1, 1], transition: { duration: 1, repeat: Infinity } },
};

export default function EventDatetimeSection() {
    return (
        <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial="hidden"
            animate="visible"
            variants={dateVariants}
        >
            <motion.h2 className="font-insideout text-6xl font-bold text-custom-blue" variants={timeVariants} animate="pulse">
                🗓️ 28 de Septiembre
            </motion.h2>
            <motion.div variants={timeVariants} animate="pulse">
                <span className="font-insideout-regular text-4xl font-semibold text-custom-blue">⏰ 15:30</span>
            </motion.div>
        </motion.div>
    );
}