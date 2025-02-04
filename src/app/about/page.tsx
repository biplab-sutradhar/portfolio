"use client";
import { motion } from "framer-motion";
import Image from "next/image"; 
function AboutPage() {
    return(
        <div className="flex m-16 justify-between md:mt-40">
    <div className="flex flex-col justify-center xl:w-1/2">
        <motion.h4
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base font-semibold md:text-2xl md:my-1"
        >
            About
        </motion.h4>
         
        
        <motion.div
            className="flex flex-col w-4/6 sm:w-4/5 mb-5"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8 }}
        >
            <p>
                I am a Software Engineer from Bhopal, Madhya Pradesh, India. Currently, I am employed by Orah as a Software Engineer.
            </p>
            <br />
            <p>
                I love working on a variety of technologies including Web Development, Mobile App Development, and Deep Learning. My goal is to build highly performant applications that solve real-world problems and provide users with an awesome experience.
            </p>
            <br />
            <h3 className="text-xl font-semibold">My Tech Stack</h3>
            <div className="flex flex-wrap">
                <img className="p-1" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" alt="JavaScript" />
                <img className="p-1" src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&amp;logo=python&amp;logoColor=F7CA3F" alt="Python" />
                <img className="p-1" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" alt="Node.js" />
                <img className="p-1" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white" alt="TypeScript" />
                <img className="p-1" src="https://img.shields.io/badge/nestjS-%2320232a.svg?style=for-the-badge&amp;logo=nestjs&amp;logoColor=%23E0234E" alt="NestJS" />
                <img className="p-1" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB" alt="Express.js" />
                <img className="p-1" src="https://img.shields.io/badge/flask-%2320232a.svg?style=for-the-badge&amp;logo=flask&amp;logoColor=%23ffffff" alt="Flask" />
                <img className="p-1" src="https://img.shields.io/badge/fastapi-%2320232a.svg?style=for-the-badge&amp;logo=FastAPI&amp;logoColor=%019486" alt="FastAPI" />
                <img className="p-1" src="https://img.shields.io/badge/mysql-%23507E9C.svg?style=for-the-badge&amp;logo=mysql&amp;logoColor=white" alt="MySQL" />
                <img className="p-1" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white" alt="MongoDB" />
                <img className="p-1" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&amp;logo=postgresql&amp;logoColor=white" alt="PostgreSQL" />
                <img className="p-1" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB" alt="React" />
                <img className="p-1" src="https://img.shields.io/badge/nextjs-%23000.svg?style=for-the-badge&amp;logo=next.js&amp;logoColor=white" alt="Next.js" />
                <img className="p-1" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&amp;logo=tailwind-css&amp;logoColor=white" alt="Tailwind CSS" />
                <img className="p-1" src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&amp;logo=amazon-aws&amp;logoColor=white" alt="AWS" />
                <img className="p-1" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&amp;logo=postman&amp;logoColor=white" alt="Postman" />
                <img className="p-1" src="https://img.shields.io/badge/VS%20Code-3EA6E9?style=for-the-badge&amp;logo=visualstudiocode&amp;logoColor=white" alt="VS Code" />
            </div>
            <br />
            <div>
                <h3 className="text-xl font-semibold pb-4">Certifications</h3>
                <div>
                    <img src="/aws-ccp-badge.png" alt="AWS CCP Badge" />
                </div>
            </div>
        </motion.div>
    </div>
    <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="hidden xl:block"
    >
        <Image
            alt="Biplab Sutradhar"
            width="480"
            height="640"
            src="/path/to/your/image.jpg" 
        />
    </motion.div>
</div>

    )
        
}

export default AboutPage;
