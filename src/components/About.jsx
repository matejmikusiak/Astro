import React from 'react';

const stats = [
  { value: '3+', label: 'Roky skúseností' },
  { value: '20+', label: 'Dokončených projektov' },
  { value: '10+', label: 'Spokojných klientov' },
  { value: '∞', label: 'Šálok kávy' },
];

const values = [
  {
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    title: 'Inovácia',
    description: 'Neustále skúmam nové technológie a hľadám kreatívne riešenia.',
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Výkon',
    description: 'Optimalizujem každý projekt pre maximálnu rýchlosť a efektivitu.',
  },
  {
    icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm4 13a1 1 0 100-2H6a1 1 0 100 2h2zm6 0a1 1 0 100-2h-2a1 1 0 100 2h2z',
    title: 'Precision',
    description: 'Pozornosť detailom a čistý, udržateľný kód sú pre mňa prioritou.',
  },
];

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-violet font-semibold text-sm uppercase tracking-wider mb-2 block">
            O mne
          </span>
          <h2 className="section-title">
            Tvorím digitálne <span className="gradient-text">zážitky</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Som vášnivý vývojár so zameraním na moderné webové technológie a umelú inteligenciu.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image/Visual */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Gradient circle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/30 to-accent-cyan/30 rounded-full blur-2xl animate-pulse" />
              
              {/* Glass card with avatar */}
              <div className="relative glass rounded-3xl p-8 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-violet via-accent-cyan to-accent-pink p-1">
                    <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center text-4xl font-bold gradient-text">
                      MM
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Matej Mikušiak</h3>
                  <p className="text-dark-400">Full-Stack Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Premieňam <span className="gradient-text">nápady</span> na realitu
            </h3>
            <p className="text-dark-400 text-lg leading-relaxed">
              Ako full-stack vývojár sa špecializujem na tvorbu moderných, výkonných a škálovateľných webových aplikácií. 
              Mojou vášňou je spájať najnovšie technológie s kreatívnym dizajnom.
            </p>
            <p className="text-dark-400 text-lg leading-relaxed">
              Neustále sa učím a experimentujem s novými technológiami, od Reactu a Next.js až po AI nástroje a machine learning. 
              Verím, že technológie majú moc meniť svet k lepšiemu.
            </p>
            
            {/* Values */}
            <div className="grid gap-4 mt-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="glass p-4 rounded-xl flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{value.title}</h4>
                    <p className="text-dark-400 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass p-6 rounded-2xl text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-dark-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}