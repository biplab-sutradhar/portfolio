"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    // Handle download action
    function handleDownload() {
        window.open("/", "_blank");
    }

    return (
        <div className="flex m-16 justify-between md:mt-40">
            <div className="flex flex-col justify-center xl:w-1/2">
                {/* Animated Text Section */}
                <motion.h4
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-base font-semibold md:text-2xl md:my-1"
                >
                    Hi there,
                </motion.h4>

                <motion.h1
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="text-xl font-bold md:text-6xl md:my-1"
                >
                    My name is{" "}
                    <span className="text-highlight">Biplab Sutradhar</span>
                </motion.h1>

                <motion.h2
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-xl mb-5 font-semibold text-muted md:text-3xl md:my-8"
                >
                    Software Engineer
                </motion.h2>

                <motion.div
                    className="flex flex-col w-4/6 sm:w-4/5 mb-5"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    <p>
                        I am a Software Engineer from Agartala, Tripura,
                        India. Currently, I am 3rd year undergraduate.
                    </p>
                    <br />
                    <p>
                        I love working on a variety of technologies including
                        Backend Development, Frontend Development. My goal is to build highly performant
                        applications that solve real-world problems and provide
                        users with an awesome experience.
                    </p>
                    <br />

                    <h3 className="text-xl font-semibold">My Tech Stack</h3>
                    <div className="flex flex-wrap">
                        {/* Tech badges */}
                        {
                        [
                            "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
                            "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
                            "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
                            "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
                            "https://img.shields.io/badge/nestjS-%2320232a.svg?style=for-the-badge&logo=nestjs&logoColor=%23E0234E",
                            "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
                            "https://img.shields.io/badge/flask-%2320232a.svg?style=for-the-badge&logo=flask&logoColor=%23ffffff",
                            "https://img.shields.io/badge/fastapi-%2320232a.svg?style=for-the-badge&logo=FastAPI&logoColor=%019486",
                            "https://img.shields.io/badge/mysql-%23507E9C.svg?style=for-the-badge&logo=mysql&logoColor=white",
                            "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
                            "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
                            "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
                            "https://img.shields.io/badge/nextjs-%23000.svg?style=for-the-badge&logo=next.js&logoColor=white",
                            "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
                            "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
                            "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
                            "https://img.shields.io/badge/VS%20Code-3EA6E9?style=for-the-badge&logo=visualstudiocode&logoColor=white",
                            "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white",
                            "https://img.shields.io/badge/go-%2300ADD5.svg?style=for-the-badge&logo=go&logoColor=white",
                            "https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white",
                            "https://img.shields.io/badge/c%2B%2B-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
                            "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
                            "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white",
                            "https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white",
                            "https://img.shields.io/badge/linux-%23171515.svg?style=for-the-badge&logo=linux&logoColor=white",
                            "https://img.shields.io/badge/bash-%234E8AB8.svg?style=for-the-badge&logo=gnu-bash&logoColor=white",
                            "https://img.shields.io/badge/python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white",
                            "https://img.shields.io/badge/swift-%23FA7343.svg?style=for-the-badge&logo=swift&logoColor=white",
                            "https://img.shields.io/badge/kotlin-%2300A2E4.svg?style=for-the-badge&logo=kotlin&logoColor=white",
                            "https://img.shields.io/badge/ruby-%23CC342E.svg?style=for-the-badge&logo=ruby&logoColor=white",
                            "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
                            "https://img.shields.io/badge/perl-%23022F49.svg?style=for-the-badge&logo=perl&logoColor=white",
                            "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white",
                            "https://img.shields.io/badge/visual%20basic-%23673AB7.svg?style=for-the-badge&logo=visual-basic&logoColor=white",
                            "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
                            "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                        ].map((badge, index) => (
                            <img
                                key={index}
                                className="p-1"
                                src={badge}
                                alt="tech badge"
                            />
                        ))}
                    </div>
                    <br />

                    {/* <div>
                        <h3 className="text-xl font-semibold pb-4">
                            Certifications
                        </h3>
                        <div>
                           
                        </div>
                    </div> */}

                    {/* Action Buttons */}
                    <div className="mt-8 flex gap-4">
                        <Link
                            href="/contact"
                            className="flex justify-center bg-highlight font-bold rounded text-center text-light p-2 mb-5 hover:bg-opacity-90 transition-all"
                        >
                            Get in Touch
                        </Link>

                        {/* <button
                            onClick={handleDownload}
                            className="border-highlight border-2 p-1 mb-5 rounded text-highlight font-bold hover:bg-highlight hover:text-light text-center transition-all"
                        >
                            Download Resume
                        </button> */}
                    </div>
                </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="hidden xl:block"
            >  <Image
                    src="/images/programming.svg"
                    alt=""
                    width="480"
                    height="640"
                />
            </motion.div>
        </div>
    );
}
