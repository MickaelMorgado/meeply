'use client';

import { useEffect, useState } from 'react';

export function FeaturesSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featureCards = [
    {
      icon: '💾',
      title: "Your memories, saved forever",
      description:
        "Record who played, who won, and when. Never forget a legendary match, your victories (and defeats) are safely stored for good.",
    },
    {
      icon: '📚',
      title: "Your board game library, always with you",
      description:
        "Keep track of your base games, expansions, and wishlists. Filter by mechanics, player count, and more. Share your collection with friends and see what they're playing.",
    },
    {
      icon: '📈',
      title: "See your progress as a player",
      description:
        "Discover your performance across different games, follow your growth, and become a true board game master.",
    },
    {
      icon: '🎉',
      title: "Give a Meep!",
      description:
        "Motivate your friends with meeps on their game sessions, celebrate their wins, support their losses, and cheer them on toward new goals.",
    },
  ];

  const categoryCards = [
    { icon: '🤖', label: 'AI Assistant' },
    { icon: '🏆', label: 'Gamification' },
    { icon: '👥', label: 'Friends' },
  ];

  // Editable position configurations - easily adjustable (desktop only)
  const cardPositions = {
    featureCards: [
      { top: '-30%', left: '70%', parallaxSpeed: 0.1 },
      { top: '-15%', left: '5%', parallaxSpeed: 0.15 },
      { top: '45%', left: '25%', parallaxSpeed: 0.08 },
      { top: '35%', left: '80%', parallaxSpeed: 0.12 },
    ],
    categoryCards: [
      { top: '-5%', left: '80%', parallaxSpeed: 0.2 },
      { top: '20%', left: '0%', parallaxSpeed: 0.18 },
      { top: '65%', left: '65%', parallaxSpeed: 0.14 },
    ],
  };

  return (
    <section className="relative w-full py-12 md:py-20">
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[193px]">
        {/* Floating layout for feature cards */}
        <div className="relative min-h-[1400px] md:min-h-[800px] lg:min-h-[1000px]">
          {featureCards.map((card, index) => {
            const position = cardPositions.featureCards[index];
            const { top, left, parallaxSpeed } = position;
            const parallaxOffset = scrollY * parallaxSpeed;

            return (
              <div
                key={index}
                className="absolute w-full max-w-[332px] h-[342px] rounded-[29.95px] bg-gradient-to-br from-[#5a2afb] to-[#1a1a1a] p-0.5 border-0 transition-transform duration-300 hover:scale-105 hover:rotate-3"
                style={{
                  top: `calc(${top} + ${parallaxOffset}px)`,
                  left,
                  zIndex: 3 - index,
                }}
              >
                <div className="relative w-full h-full bg-[#1a1a1a] rounded-[29.8px] overflow-hidden p-0">
                  <div className="absolute w-[58.42%] h-[56.73%] top-[-20.00%] left-[-20.00%] bg-[#5a2afb] rounded-[96px] blur-[46.08px] opacity-25" />

                  <div className="absolute top-[46px] left-[33px] w-[60px] h-[60px] bg-[#2c2c2c] rounded-[29.8px] border-[3px] border-solid border-black shadow-[0px_5.6px_11.2px_#00000040]">
                    <div className="absolute h-[calc(100%_+_5px)] top-[-3px] left-[-3px] w-[65px] rounded-[31.33px] border border-solid border-[#5a2afb]" />
                    <div className="absolute top-[17px] left-[18px] w-6 h-6 flex items-center justify-center text-2xl">
                      {card.icon}
                    </div>
                  </div>

                  <div className="absolute top-[126px] left-[33px] right-[33px] flex flex-col items-start gap-2.5">
                    <h3 className="relative self-stretch mt-[-1.00px] font-medium text-white text-[21.2px] tracking-[0] leading-[25.4px]">
                      {card.title}
                    </h3>
                    <p className="relative self-stretch h-[115px] opacity-80 font-normal text-white text-[16.9px] tracking-[0] leading-[25.3px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Category cards */}
          {categoryCards.map((card, index) => {
            const position = cardPositions.categoryCards[index];
            const { top, left, parallaxSpeed } = position;
            const parallaxOffset = scrollY * parallaxSpeed;

            return (
              <div
                key={`category-${index}`}
                className="absolute w-[140px] h-[120px] rounded-[20px] bg-gradient-to-br from-[#5a2afb] to-[#3a1fdb] transition-transform duration-300 hover:scale-105 hover:rotate-2 flex flex-col items-center justify-center gap-2"
                style={{
                  top: `calc(${top} + ${parallaxOffset}px)`,
                  left,
                  zIndex: 2 - index,
                  boxShadow: '0 0 20px rgba(90, 42, 251, 0.9), 0 0 40px rgba(90, 42, 251, 0.7), 0 0 60px rgba(90, 42, 251, 0.5)',
                  filter: 'drop-shadow(0 0 15px rgba(90, 42, 251, 0.8))',
                }}
              >
                <div className="bg-black/80 rounded-full px-3 py-2 backdrop-blur-sm">
                  <div className="text-white text-3xl">{card.icon}</div>
                </div>
                <div className="bg-black/80 rounded-full px-4 py-1 backdrop-blur-sm">
                  <div className="text-white text-sm font-medium">{card.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
