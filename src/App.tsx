import {ThemeProvider} from "@/components/core/theme-provider.tsx"
import './App.css'
import {ModeToggle} from "@/components/core/mode-toggle.tsx";
import {motion, AnimatePresence} from "framer-motion";

import {InviteSection} from "@/components/invite/invite-section.tsx";
import EventDatetimeSection from "@/components/invite/event-datetime-section.tsx";


function App() {

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex flex-col items-center min-h-screen">
                <div className="fixed top-4 right-4 z-50">
                    <ModeToggle/>
                </div>
                <main className="flex-grow w-full flex flex-col items-center justify-center space-y-16">
                    <AnimatePresence>
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 0.5}}
                        >
                            <InviteSection/>
                        </motion.div>

                        {/* Add more components here, each wrapped in motion.div */}
                        {/* Example: */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 0.5}}
                        >
                            <EventDatetimeSection/>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </ThemeProvider>
    )
}

export default App
