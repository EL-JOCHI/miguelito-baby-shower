import React from 'react';
import { motion } from "framer-motion"
import './App.css';

function App() {
    return <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        />;
}

export default App;
