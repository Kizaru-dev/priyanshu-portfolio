import { motion } from 'framer-motion';
import { ExternalLink, Github, Briefcase, DollarSign, ShoppingCart, MessageSquare, ArrowUpRight } from 'lucide-react';

const projectsData = [
    {
        title: 'Job Portal Platform',
        description: 'A comprehensive job board connecting employers and candidates. Features include automated resume parsing, application tracking systems (ATS), and role-based access control (RBAC). Optimized for handling thousands of concurrent users.',
        tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'AWS S3'],
        github: 'https://github.com',
        link: 'https://example.com',
        icon: <Briefcase className="w-8 h-8" />,
        color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    },
    {
        title: 'Smart Expense Tracker',
        description: 'Personal finance management tool providing detailed analytical insights. Includes features for monthly budgeting, recurring expense tracking, and data visualization for spending patterns using aggregate queries.',
        tech: ['Python', 'Django', 'PostgreSQL', 'Docker', 'Chart.js'],
        github: 'https://github.com',
        link: 'https://example.com',
        icon: <DollarSign className="w-8 h-8" />,
        color: 'bg-green-500/10 text-green-400 border-green-500/20',
    },
    {
        title: 'E-commerce API Engine',
        description: 'Scalable backend infrastructure for an online marketplace. Handles robust cart management, secure payment processing via Stripe, and real-time inventory synchronization to prevent race conditions during flash sales.',
        tech: ['Go', 'Gin', 'Redis', 'Stripe API', 'MySQL'],
        github: 'https://github.com',
        link: 'https://example.com',
        icon: <ShoppingCart className="w-8 h-8" />,
        color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    },
    {
        title: 'Real-time Chat System',
        description: 'High-performance messaging application supporting private and group chats. leverages WebSockets for low-latency communication, ensuring message delivery guarantees and maintaining user presence status in real-time.',
        tech: ['Node.js', 'Socket.io', 'Redis', 'Cassandra', 'TypeScript'],
        github: 'https://github.com',
        link: 'https://example.com',
        icon: <MessageSquare className="w-8 h-8" />,
        color: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto"
            >
                <div className="flex items-center gap-4 mb-16">
                    <span className="text-nord-accent font-mono text-xl">02.</span>
                    <h2 className="text-3xl font-bold text-nord-subtext">Featured Projects</h2>
                    <div className="h-px bg-nord-surface flex-grow ml-4"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-nord-surface rounded-xl overflow-hidden border border-nord-highlight/20 hover:border-nord-accent/50 transition-colors duration-300"
                        >
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-nord-accent to-nord-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="p-8 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-lg ${project.color}`}>
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="text-nord-text/60 hover:text-nord-accent transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.link} target="_blank" rel="noreferrer" className="text-nord-text/60 hover:text-nord-accent transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-nord-subtext mb-3 group-hover:text-nord-accent transition-colors flex items-center gap-2">
                                    {project.title}
                                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </h3>

                                <p className="text-nord-text/80 leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 text-xs font-mono rounded-full bg-nord-dark/50 text-nord-accent border border-nord-accent/20"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
