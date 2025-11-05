'use client'

import { useState } from 'react'

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState('profile')

  const tabs = [
    { id: 'how-it-works', label: 'How it Works', x: 579 },
    { id: 'mission', label: 'Mission', x: 763 },
    { id: 'news', label: 'News', x: 908 }
  ]

  return (
    <section className="relative py-32 px-6 md:px-12">
      {/* Navigation tabs */}
      <div className="flex justify-center mb-16">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xl font-medium font-['Inter'] uppercase tracking-wider transition-colors ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content based on active tab */}
      <div className="max-w-6xl mx-auto">
        {activeTab === 'how-it-works' && <HowItWorksContent />}
        {activeTab === 'mission' && <MissionContent />}
        {activeTab === 'news' && <NewsContent />}
      </div>
    </section>
  )
}

function HowItWorksContent() {
  return (
    <div className="text-center">
      <div className="mb-16">
        <h2 className="text-4xl font-normal text-[#DFFE0F] font-['Climate_Crisis'] uppercase leading-[1.2] mb-6">
          Profile & Stats
        </h2>
        <p className="text-xl text-white font-['Inter'] font-medium leading-[1.2] max-w-2xl mx-auto">
          View your player history, detailed game stats, and personal progress over time.
        </p>
      </div>

      {/* Profile mockup */}
      <div className="relative max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-[83px] p-8 shadow-2xl">
          <div className="bg-[#D9D9D9] rounded-[83px] h-96 flex items-center justify-center">
            <div className="text-black text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👤</span>
              </div>
              <p className="text-lg font-medium">Profile & Stats View</p>
              <p className="text-sm opacity-70 mt-2">Detailed player analytics and history</p>
            </div>
          </div>
        </div>

        {/* Tab indicators */}
        <div className="flex justify-center mt-8 space-x-4">
          {['Profile & Stats', 'Collection', 'Tracking + AI', 'Social Feed'].map((tab, index) => (
            <div
              key={tab}
              className={`px-4 py-2 rounded-full text-sm font-medium font-['Red_Hat_Display'] ${
                index === 0
                  ? 'bg-[#DFFE0F] text-black'
                  : 'bg-white/10 text-white'
              }`}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MissionContent() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-normal text-[#DFFE0F] font-['Climate_Crisis'] uppercase leading-[1.2] mb-6">
        Our Mission
      </h2>
      <p className="text-xl text-white font-['Inter'] font-medium leading-[1.2] max-w-3xl mx-auto">
        To make board gaming more connected, insightful, and enjoyable for everyone.
      </p>
    </div>
  )
}

function NewsContent() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-normal text-[#DFFE0F] font-['Climate_Crisis'] uppercase leading-[1.2] mb-6">
        Latest News
      </h2>
      <p className="text-xl text-white font-['Inter'] font-medium leading-[1.2] max-w-3xl mx-auto">
        Stay updated with the latest features and board game community news.
      </p>
    </div>
  )
}
