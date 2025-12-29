import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
            >
                <span className="text-nord-accent font-mono text-lg block mb-4">04. What's Next?</span>
                <h2 className="text-4xl md:text-5xl font-bold text-nord-subtext mb-6">Get In Touch</h2>
                <p className="text-nord-text/80 text-lg leading-relaxed mb-10">
                    I'm currently looking for new opportunities, specifically in backend distributed systems.
                    Whether you have a question or just want to say hi, my inbox is always open!
                </p>
                <a
                    href="mailto:hello@example.com"
                    className="inline-block px-8 py-4 rounded border border-nord-accent text-nord-accent hover:bg-nord-accent/10 transition-colors font-mono text-lg"
                >
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
