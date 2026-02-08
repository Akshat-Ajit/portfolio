export default function Experience(){
  const items = [
    {year: '2025', title: 'Senior Frontend Engineer', org: 'Acme Corp'},
    {year: '2023', title: 'Frontend Engineer', org: 'Startup'},
  ];
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <h3 className="text-2xl font-semibold text-white mb-6">Experience</h3>
      <div className="space-y-4">
        {items.map(i => (
          <div key={i.year} className="p-4 bg-white/3 rounded-lg flex justify-between">
            <div>
              <div className="font-medium text-white">{i.title}</div>
              <div className="text-sm text-gray-200">{i.org}</div>
            </div>
            <div className="text-sm text-gray-400">{i.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
