 
"use client";
import { motion } from "framer-motion";
import React from "react";
 
const MotionText: React.FC<{ children: React.ReactNode; delay: number; className?: string }> = ({ children, delay, className }) => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
 
const SocialIcon: React.FC<{ href: string; iconUrl: string; altText: string }> = ({ href, iconUrl, altText }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={altText}>
            <img src={iconUrl} alt={altText} className="h-8 w-8" /> {/* Added h-8 w-8 for size control */}
        </a>
    );
};

// Main ContactsPage
const ContactsPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center mt-36 mb-48">
            {/* Section 1 - Title (unchanged) */}
            <MotionText delay={0.5} className="text-3xl lg:text-4xl font-bold">
                Let&apos;s Get In Touch
            </MotionText>

           
            <MotionText delay={1.0} className="w-4/5 lg:w-1/2 text-center mt-10">
                As of now, I&apos;m not looking for any new job
                opportunities, but my inbox is always open if you want to
                communicate with me.
            </MotionText>

          
            <div className="flex gap-4 mt-10">
                <MotionText delay={1.5}>
                    <SocialIcon
                        href="https://www.linkedin.com/in/your-profile"  
                        iconUrl="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw"
                        altText="LinkedIn"
                    />
                </MotionText>
                <MotionText delay={2.0}>
                    <SocialIcon
                        href="https://github.com/your-profile"  
                        iconUrl="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"  
                        altText="GitHub"
                    />
                </MotionText>
                <MotionText delay={2.5}>
                    <SocialIcon
                        href="https://twitter.com/your-profile"  
                        iconUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEUAAAD////4+Pjc3Nxqamr8/PyQkJDv7+92dnbz8/O8vLzm5ubg4OBNTU3q6uptbW2zs7Obm5vU1NSIiIgzMzMnJycfHx9bW1s6OjrGxsaoqKgODg5jY2NGRkbNzc1VVVUXFxd/f39ITyUvAAAErklEQVR4nO2a25qrIAyFtdZaq9Ue7LlO7fu/5J4xUTMgI/QD3Bf57zYjNpvAygIMAoZhGIZhGIZhGIZhGIYBHmW5HKO8Gr7oCd0qK1HtwsUYcW72mlXc9jpYiSk4ZeE4d5O3lNAnO9sJKrgoggov+u94pm2PdGsppiC4K4LKGt03VEnbYbG0FlMQ5BBEPAANO83+pwieP1qMKXi1QaTHdUeJ82yt1/8Lnt7bjCkI9uLALGGsipNO753ZuGoTiQOD82yj0Rf+R6ElMSDUi5/3JrUYpkYCUQwiO6r5i1X75q+hYduGGSZTwv6C5+J64rmPgMm6GhqOoRjnGCeYfPHTRUxB3crfgqjfl8Y6P2ln+TPeIJhDwzWZVumDEzEg3MT3vyeXlcEa/ZCqaGdHObTsJsbBmRgQ1rDehoYzlNnFa/x5FAM9hf2YnZgMNBDZ6NNL+GPaOI2ps1Z6CYRsh4ty5G9WeYHokHzAko/lX66wZjuPqRuZ29BwwcosPYkqZmRPP+QcKYRdtAAbfzF9lzyYKKTigT7Gv03lXqsGWQN+Lmr6hs7q0odQViO3YjDwOIh5eUsJxImWmm4NP6eCGMhWBudPX5lrdCsKTXUCWKt8MG24+mP85wkEypkzGOemEHZQigbFYKXo7YhzLI7EnSRwM64RzgFtSoa1hfIVVt7FgHATf7juQkEtNTz9sAJ6FuKEcYCwQE9uJ5ywbqdVTJwwDB6Q+hQDAkxn4ilPJKj3PDEFTaEQdv9iQChBF0iiUAv8iwEBtIkezUF1KRzsz7V5ZOK4wOyfdaSCC4wM8bso7B4csJq7lK5CSql/DqKw4xHLTd3FPdtYlKX9f5BAqHT0KAYGz6PnHOEgCvs2nT+BV4iB7JDXc6t60CeQOHaozKmvjcwoUFzIUQweOETzhdSvQFKZn7MnsDPCVBdQ2O1dDpnSezuyQ24ycU36ZTc4O6ICckp9cgwJsmOfJYGoSTnaO1KZD7NVZrwJia8BHLx8Pfo/4XGC/wSimv/ccOAxCxF2TKzBja4VuhuOVgtwEpFbIViWuWdhRzHADMGNbj5MIjx7cXjZMAKKQfej6I2pY4cHfForOKQiAokN5AoNwva4uXnHYrrwRD0b7B1OOm/WCiU7pdedtWTv4CrA14lejTccv6873wphT/wIeyb9fAucK6bDJGokt+wO1bcP10KMoYI16cFaCWJAkP35Sp57TsC1f2tG/raRdAFaXJ824ilGMlo/8EqE+POzItVWgQujMFFIIvpz+lVM2+DouwQArzvV1V+VwPEbXStglY3VetiAjNNtXyIOnmVu0zPkJSUQDyJdWauNUgwIaK2ko5jUjTdGMSCud4wHWCt6vg8tTrwxOtzJKVvHorDjUYyDyow2rpgur3tJ2KUbJkvUsIi0rjuhONKvTaDFtrXCrbjeDQdusHKy5Sr0e+tzkFLyFzj9yNSGj3EWVo8dTa87IV3yZ002E4hT9/a3GBAqWG/Fqmefmgy1Bm+IKW+Mu0hY+6QZS7/ZdedGEZUlb4zbFMODnc5PSFixVlezj5d7SkVQoQ1rtcujbzLzGXpvO0rkG+3lwjAMwzAMwzAMwzAMwzBz8A90yy4EH3WNHAAAAABJRU5ErkJggg==" // Corrected Twitter icon URL
                        altText="Twitter"
                    />
                </MotionText>
            </div>
        </div>
    );
};

export default ContactsPage;