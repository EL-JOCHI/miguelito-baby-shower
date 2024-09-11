import {ThemeProvider} from "@/components/core/theme-provider.tsx"
import './App.css'
import {ModeToggle} from "@/components/core/mode-toggle.tsx";
import {motion, AnimatePresence} from "framer-motion";

import {InviteSection} from "@/components/invite/invite-section.tsx";
import EventDatetimeSection from "@/components/invite/event-datetime-section.tsx";
import CountDownSection from "@/components/invite/countdown-section.tsx";
import LocationSection from "@/components/invite/location-section.tsx";
import ConfirmationSection from "@/components/invite/confirmation-section.tsx";
import GiftSection from "./components/invite/gift-section";


function App() {

    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
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
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 0.5}}
                        >
                            <EventDatetimeSection/>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 0.5}}
                        >
                            <CountDownSection countDownDate={new Date("September 28, 2024 15:30:00")}/>
                        </motion.div>
                        <motion.div initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: -20}}
                                    transition={{duration: 0.5}}
                        >
                           <LocationSection link="https://maps.app.goo.gl/859FodPuKHLBmGtd9" />
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 0.5}}
                        >
                            <ConfirmationSection
                                phoneNumber="+59176632451"
                                message="¡Hola! Me gustaría confirmar mi asistencia al baby shower de Miguelito."
                            />
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 0.5}}
                        >
                            <GiftSection phoneNumber="+59176632451"
                                         message="¡Hola! Me gustaría hacerle llegar un presente a Miguelito."/>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </ThemeProvider>
    )
}

export default App
