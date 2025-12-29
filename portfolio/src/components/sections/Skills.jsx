import { motion } from 'framer-motion';
import { Database, Layout, Server, Terminal, Wrench } from 'lucide-react';

const skillsData = [
    {
        category: 'Backend',
        icon: <Server className="w-6 h-6" />,
        skills: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis', 'Kafka', 'gRPC', 'System Design'],
    },
    {
        category: 'DevOps',
        icon: <Terminal className="w-6 h-6" />,
        skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Linux', 'Prometheus'],
    },
    {
        category: 'Frontend',
        icon: <Layout className="w-6 h-6" />,
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <div className="flex items-center gap-4 mb-12">
                    <span className="text-nord-accent font-mono text-xl">01.</span>
                    <h2 className="text-3xl font-bold text-nord-subtext">Technical Skills</h2>
                    <div className="h-px bg-nord-surface flex-grow ml-4"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-nord-surface p-6 rounded hover:translate-y-[-4px] transition-transform duration-300 border border-transparent hover:border-nord-highlight"
                        >
                            <div className="flex items-center gap-3 mb-4 text-nord-accent">
                                {category.icon}
                                <h3 className="tex-xl font-bold text-nord-subtext">{category.category}</h3>
                            </div>
                            <ul className="grid grid-cols-2 gap-2">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 text-nord-text/80 font-mono text-sm">
                                        <span className="text-nord-accent">▹</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
