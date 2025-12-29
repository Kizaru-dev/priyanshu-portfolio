import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20"
        >
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-mono text-nord-accent mb-4 tracking-wide"
                >
                    Hi, my name is
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-nord-text mb-4 tracking-tight"
                >
                    [Your Name].
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-nord-highlight mb-8"
                >
                    I build scalable backends.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-xl text-nord-subtext text-lg leading-relaxed mb-12"
                >
                    I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-6 items-center"
                >
                    <a
                        href="#projects"
                        className="px-8 py-4 rounded bg-nord-accent/10 border border-nord-accent text-nord-accent hover:bg-nord-accent/20 transition-all font-mono"
                    >
                        Check out my work!
                    </a>

                    <div className="flex gap-4">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-nord-subtext hover:text-nord-accent transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-nord-subtext hover:text-nord-accent transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:hello@example.com" className="text-nord-subtext hover:text-nord-accent transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 animate-bounce"
            >
                <a href="#skills" className="text-nord-subtext hover:text-nord-accent transition-colors">
                    <ArrowDown size={24} />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
