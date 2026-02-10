import { GraduationCap, Clock } from 'lucide-react';

const sessions = [
  {
    name: 'Discovery Readiness Training',
    duration: '2h',
    desc: 'Cum sa se pregateasca echipa pentru sesiunile de discovery, ce documente sa furnizeze',
  },
  {
    name: 'Internal Discovery Enablement #1',
    duration: '2h',
    desc: 'Cum sa identifice singuri procese automatizabile, cum sa le documenteze',
  },
  {
    name: 'Internal Discovery Enablement #2',
    duration: '2h',
    desc: 'Cum sa masoare si sa raporteze rezultatele automatizarilor',
  },
];

export function TrainingAddonSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(91,106,232,0.2)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-light" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-primary-light">
                  Addon Optional
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Training Plan</h2>
              <p className="text-3xl font-extrabold text-cta mb-4">€997</p>
              <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                Pentru companiile care vor sa construiasca si capabilitati interne.
                3 sesiuni, 6 ore total — maximizeaza valoarea Blueprint-ului si reduce rezistenta la schimbare.
              </p>

              <div className="space-y-4">
                {sessions.map((session, i) => (
                  <div key={i} className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm">{session.name}</span>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-xs">{session.duration}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">{session.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
