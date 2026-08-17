export default function Marquee() {
  const items = [
    { icon: '📊', text: 'Marketing Digital' },
    { icon: '🌐', text: 'Création Site Web' },
    { icon: '🎨', text: 'Design Graphique' },
    { icon: '📱', text: 'Social Media' },
    { icon: '📣', text: 'Facebook & Instagram Ads' },
    { icon: '💼', text: 'Cartes de visite Pro' },
    { icon: '🛒', text: 'Store Web E-commerce' },
    { icon: '🎬', text: 'Script Voiceover Vidéo' },
  ];

  return (
    <div className="bg-gray-900 py-6 overflow-hidden relative flex">
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
      
      <div className="flex animate-marquee hover:animate-pause whitespace-nowrap">
        {/* We duplicate the items 3 times for a smooth infinite loop */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-3 px-8 border-r border-white/10 last:border-r-0">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium text-white/80">{item.text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
