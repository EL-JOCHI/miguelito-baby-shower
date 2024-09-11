import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface CountDownSectionProps {
    countDownDate: Date;
}

export default function CountDownSection({ countDownDate }: CountDownSectionProps) {
    const [countDownTime, setCountDownTime] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    const getTimeDifference = (countDownTime: number) => {
        const currentTime = new Date().getTime();
        const timeDifference = countDownTime - currentTime;

        // Ensure values are always strings and add leading zeros if needed
        const days =
            Math.floor(timeDifference / (24 * 60 * 60 * 1000)) >= 10
                ? Math.floor(timeDifference / (24 * 60 * 60 * 1000)).toString()
                : `0${Math.floor(timeDifference / (24 * 60 * 60 * 1000))}`;
        const hours =
            Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
            10
                ? Math.floor(
                    (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
                ).toString()
                : `0${Math.floor(
                    (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
                )}`;
        const minutes =
            Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)) >= 10
                ? Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)).toString()
                : `0${Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))}`;
        const seconds =
            Math.floor((timeDifference % (60 * 1000)) / 1000) >= 10
                ? Math.floor((timeDifference % (60 * 1000)) / 1000).toString()
                : `0${Math.floor((timeDifference % (60 * 1000)) / 1000)}`;

        if (timeDifference < 0) {
            setCountDownTime({
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00",
            });

            // Clear the interval when the countdown reaches zero
            clearInterval(intervalId);
        } else {
            setCountDownTime({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            });
        }
    };

    let intervalId: number | ReturnType<typeof setTimeout>;

    const startCountDown = useCallback(() => {
        //const countDownDate = new Date("September 28, 2024 15:30:00").getTime();
        intervalId = setInterval(() => {
            getTimeDifference(countDownDate.getTime());
        }, 1000);
    }, [countDownDate]);

    useEffect(() => {
        startCountDown();

        return () => clearInterval(intervalId);
    }, [startCountDown]);

    const numberVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };


    return (
        <div className="font-insideout">
            <motion.h2
                className="text-4xl text-center text-custom-brown dark:text-custom-cream"
                animate={{
                    rotate: [0, -5, 5, -5, 5, 0],
                    x: [0, -3, 3, -3, 3, 0]
                }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity, // Loop animation
                }}
            >
                Ya sólo falta...
            </motion.h2>
            <div className="flex justify-center gap-3 sm:gap-8">
                <motion.div className="flex flex-col gap-5 relative" variants={numberVariants}
                            initial="hidden"
                            animate="visible">
                    <div
                        className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-custom-cream dark:bg-custom-blue rounded-lg"
                    >
                        <div
                            className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-custom-brown dark:bg-custom-cream"
                        ></div>
                        <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-custom-brown dark:text-custom-cream">
              {countDownTime?.days}
            </span>
                        <div
                            className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-custom-brown dark:bg-custom-cream"
                        ></div>
                    </div>
                    <span className="text-custom-brown dark:text-custom-cream text-xs sm:text-2xl text-center capitalize">
            {countDownTime?.days === "01" ? "Dia" : "Días"}
          </span>
                </motion.div>
                <motion.div className="flex flex-col gap-5 relative" variants={numberVariants}
                            initial="hidden"
                            animate="visible">
                    <div
                        className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-custom-cream dark:bg-custom-blue rounded-lg"
                    >
                        <div
                            className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-custom-brown dark:bg-custom-cream"
                        ></div>
                        <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-custom-brown dark:text-custom-cream">
              {countDownTime?.hours}
            </span>
                        <div
                            className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-custom-brown dark:bg-custom-cream"
                        ></div>
                    </div>
                    <span className="text-custom-brown dark:text-custom-cream text-xs sm:text-2xl text-center font-medium">
            {countDownTime?.hours === "01" ? "Hora" : "Horas"}
          </span>
                </motion.div>
                <motion.div className="flex flex-col gap-5 relative" variants={numberVariants}
                            initial="hidden"
                            animate="visible">
                    <div
                        className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-custom-cream dark:bg-custom-blue rounded-lg"
                    >
                        <div
                            className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-custom-brown dark:bg-custom-cream"
                        ></div>
                        <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-custom-brown dark:text-custom-cream">
              {countDownTime?.minutes}
            </span>
                        <div
                            className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-custom-brown dark:bg-custom-cream"
                        ></div>
                    </div>
                    <span className="text-custom-brown dark:text-custom-cream text-xs sm:text-2xl text-center capitalize">
            {countDownTime?.minutes === "01" ? "Minuto" : "Minutos"}
          </span>
                </motion.div>
                <motion.div className="flex flex-col gap-5 relative" variants={numberVariants}
                            initial="hidden"
                            animate="visible">
                    <div
                        className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-custom-cream dark:bg-custom-blue rounded-lg"
                    >
                        <div
                            className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-custom-brown dark:bg-custom-cream"
                        ></div>
                        <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-custom-brown dark:text-custom-cream">
              {countDownTime?.seconds}
            </span>
                        <div
                            className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-custom-brown dark:bg-custom-cream"
                        ></div>
                    </div>
                    <span className="text-custom-brown dark:text-custom-cream text-xs sm:text-2xl text-center capitalize">
            {countDownTime?.seconds === "01" ? "Segundo" : "Segundos"}
          </span>
                </motion.div>
            </div>
        </div>
    );
}