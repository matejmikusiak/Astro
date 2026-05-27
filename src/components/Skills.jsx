import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Astro', level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 80 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    title: 'AI & Tools',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    skills: [
      { name: 'OpenAI API', level: 85 },
      { name: 'TensorFlow', level: 70 },
      { name: 'LangChain', level: 75 },
      { name: 'Hugging Face', level: 65 },
      { name: 'Vector DBs', level: 60 },
    ],
  },
  {
    title: 'Design & DevOps',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    skills: [
      { name: 'Figma', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'Git', level: 90 },
      { name: 'CI/CD', level: 70 },
      { name: 'Vercel', level: 85 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section relative">
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
            Zručnosti
          </span>
          <h2 className="section-title">
            Môj <span className="gradient-text">tech stack</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technológie a nástroje, ktoré používam na tvorbu moderných aplikácií.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass rounded-2xl p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-dark-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-lg font-semibold mb-6">Ďalšie nástroje a technológie</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'VS Code', 'GitHub', 'Notion', 'Slack', 'Jira',
              'Linux', 'AWS', 'Firebase', 'Supabase', 'Prisma',
              'Jest', 'Playwright', 'Framer Motion', 'Three.js',
              'WebSocket', 'REST API', 'Microservices',
            ].map((tool) => (
              <motion.span
                key={tool}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-full glass text-sm text-dark-300 hover:text-white hover:bg-white/10 transition-colors cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}