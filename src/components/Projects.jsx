import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'AI Dashboard',
    description: 'Moderný dashboard pre správu AI modelov s real-time analýzou dát a vizualizáciou.',
    tags: ['React', 'TypeScript', 'Python', 'TensorFlow'],
    image: '/projects/ai-dashboard.jpg',
    link: 'https://github.com/matejmikusiak/ai-dashboard',
    featured: true,
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Kompletné e-commerce riešenie s platobnou bránou, inventárom a analytikou.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    image: '/projects/ecommerce.jpg',
    link: 'https://github.com/matejmikusiak/ecommerce',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Generator',
    description: 'AI-powered nástroj na automatické generovanie portfólií z GitHub profilu.',
    tags: ['Astro', 'React', 'OpenAI API'],
    image: '/projects/portfolio-gen.jpg',
    link: 'https://github.com/matejmikusiak/portfolio-generator',
    featured: false,
  },
  {
    id: 4,
    title: 'Task Manager',
    description: 'Minimalistická aplikácia na správu úloh s drag-and-drop rozhraním.',
    tags: ['Vue.js', 'Firebase', 'Vuex'],
    image: '/projects/task-manager.jpg',
    link: 'https://github.com/matejmikusiak/task-manager',
    featured: false,
  },
  {
    id: 5,
    title: 'Weather App',
    description: 'Progresívna webová aplikácia s predpoveďou počasia a interaktívnymi mapami.',
    tags: ['React', 'Weather API', 'Mapbox'],
    image: '/projects/weather-app.jpg',
    link: 'https://github.com/matejmikusiak/weather-app',
    featured: false,
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Real-time chat aplikácia s end-to-end šifrovaním a zdieľaním súborov.',
    tags: ['Node.js', 'Socket.io', 'MongoDB'],
    image: '/projects/chat-app.jpg',
    link: 'https://github.com/matejmikusiak/chat-app',
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase())));

  const uniqueTags = [...new Set(projects.flatMap(p => p.tags))].slice(0, 5);

  return (
    <section id="projects" className="section relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-violet font-semibold text-sm uppercase tracking-wider mb-2 block">
            Projekty
          </span>
          <h2 className="section-title">
            Moje <span className="gradient-text">práce</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Zoznam projektov, na ktorých som pracoval. Každý projekt reprezentuje nové výzvy a naučené lekcie.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-accent-violet to-accent-cyan text-white'
                : 'glass text-dark-300 hover:text-white hover:bg-white/10'
            }`}
          >
            Všetky
          </button>
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag.toLowerCase())}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === tag.toLowerCase()
                  ? 'bg-gradient-to-r from-accent-violet to-accent-cyan text-white'
                  : 'glass text-dark-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="card h-full flex flex-col">
                  {/* Project Image Placeholder */}
                  <div className="relative overflow-hidden rounded-xl mb-4 aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                      <span className="text-4xl font-bold text-dark-600">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-dark-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedProject(project)}
                        className="btn-primary text-sm"
                      >
                        Zobraziť detail
                      </motion.button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent-violet transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-400 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full glass text-dark-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-cyan hover:text-accent-violet transition-colors text-sm font-medium"
                  >
                    Pozrieť projekt
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/matejmikusiak"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Viac na GitHub
          </a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-dark-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="aspect-video rounded-xl bg-dark-800 mb-6 flex items-center justify-center">
                <span className="text-6xl font-bold text-dark-600">
                  {selectedProject.title.charAt(0)}
                </span>
              </div>
              <p className="text-dark-400 mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full glass text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Pozrieť projekt
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}