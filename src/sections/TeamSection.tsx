const team = [
  {
    photo: '/andrei.png',
    name: 'Andrei Oros',
    role: 'Founder',
    bio: 'Strategie de automatizare si implementare tehnica. Lucreaza direct cu fiecare companie din pilot.',
  },
  {
    photo: '/iuliana.png',
    name: 'Iuliana Ghioca',
    role: 'Chief Automation Officer',
    bio: 'Analiza de procese, discovery si livrabile. Transforma complexitatea operationala in planuri clare de actiune.',
  },
];

const techStack = ['n8n', 'Make', 'OpenAI', 'Supabase', 'Google Workspace'];

export function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Echipa</span>
          <h2 className="section-title">Oamenii din spatele Blueprint-ului</h2>
          <p className="section-desc">Nu externalizam. Nu delegam. Lucram direct cu tine.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-14">
          {team.map((member, i) => (
            <div key={i} className="bg-white border-2 border-gray-200 rounded-3xl p-8 text-center hover:border-primary/50 transition-all duration-300">
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-5 border-2 border-gray-100"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm font-semibold text-primary mb-3">{member.role}</p>
              <p className="text-gray-500 text-[15px] leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Construim cu</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-100 rounded-xl text-sm font-semibold text-gray-600 border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
