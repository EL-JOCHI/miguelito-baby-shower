import {
    Card,
    CardContent,
    CardDescription,
    CardHeader
} from "@/components/ui/card"
import {SvgImageAnimator} from "@/components/core/svg-image-animator/svg-image-animator.tsx";
import {motion} from "framer-motion";

export function InviteSection() {

    const svgImages = [
        "rattle-children-svgrepo-com.svg",
        "15-baby-s-svgrepo-com.svg",
        "diaper-svgrepo-com.svg",
        "skate-skateboard-svgrepo-com.svg",
        "baby-18-svgrepo-com.svg"
    ];

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <Card className="max-w-2xl mx-auto border-custom-brown dark:border-custom-cream shadow-custom-brown dark:shadow-custom-cream">
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.6, delay: 0.2}}
                >
                    <CardHeader className="flex flex-col items-center text-center">
                        <h2 className="font-insideout text-6xl text-custom-brown dark:text-custom-cream">
                            🧸 Miguelito's Baby Shower 🍼
                        </h2>
                        <CardDescription className="font-ramen mt-2 text-xl text-custom-blue dark:text-custom-purple">“Los hijos son una herencia
                            de
                            parte de Jehová.”
                            <a href="https://www.jw.org/es/biblioteca/biblia/biblia-estudio/libros/salmos/127/#v19127003"
                               className="text-custom-purple hover:underline dark:text-custom-blue">(Salmo 127:3)</a>
                        </CardDescription>
                    </CardHeader>
                </motion.div>
                <CardContent className="flex flex-col items-center justify-center gap-8 py-8">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="font-insideout-regular text-custom-brown dark:text-custom-cream text-xl text-center"
                    >
                        Mi papis, Mike y Angie 💖, te invitan a mi baby shower 👶
                    </motion.p>
                    <SvgImageAnimator images={svgImages} />
                </CardContent>
            </Card>
        </motion.div>
    )
}

