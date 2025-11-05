export function ProfileStatsSection() {
  const tabs = [
    { label: "Social Feed", active: false },
    { label: "Profile & Stats", active: true },
    { label: "Collection", active: false },
    { label: "Tracking + AI", active: false },
  ];

  return (
    <section className="relative w-full py-20">
      {/* Profile & Stats Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-[81px] mb-32">
        <div className="flex flex-col gap-4 max-w-[541px]">
          <h2 className="font-[900] text-[#dffe0f] text-2xl md:text-[40px] uppercase leading-[1.2]">
            Profile & Stats
          </h2>
          <p className="font-medium text-white text-lg md:text-[24px] leading-[29px]">
            View your player history, detailed game stats, and personal progress
            over time.
          </p>
        </div>

        {/* Tabs */}
        <div className="relative mt-12 mb-8 overflow-x-auto">
          <div className="border border-[#dffe0f] rounded-[83px] h-[81px] w-full max-w-[689px] mx-auto relative min-w-[320px]">
            <div className="absolute left-[26%] md:left-[180px] top-[8px] bg-[#dffe0f] rounded-[83px] h-[65px] w-[28%] md:w-[193px] transition-all" />
            <div className="absolute inset-0 flex items-center justify-around px-4 md:px-12">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`font-${tab.active ? "bold" : "medium"} text-xs md:text-[16px] ${tab.active ? "text-black" : "text-white"} relative z-10 px-2`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Phone Mockups */}
        <div className="relative flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-8 mt-16">
          <div className="relative w-[280px] md:w-[381px] h-[600px] md:h-[824px] border-[3px] border-[#5a2afb] rounded-[55px] overflow-hidden">
            <img
              src="/my-profile-feats.png"
              alt="My Profile Feats"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative w-[280px] md:w-[380px] h-[600px] md:h-[823px] border-[3px] border-[#5a2afb] rounded-[59px] overflow-hidden">
            <img
              src="/my-profile-stats.png"
              alt="My Profile Stats"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative w-[280px] md:w-[380px] h-[600px] md:h-[823px] border-[3px] border-[#5a2afb] rounded-[56px] overflow-hidden">
            <img
              src="/my-profile-feed.png"
              alt="My Profile Feed"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="w-full flex flex-col items-center py-20 px-4">
        <h2 className="font-[900] text-[#dffe0f] text-3xl md:text-[48px] text-center uppercase leading-[1.2]">
          Download Now
        </h2>

        <p className="mt-4 font-normal text-white text-xl md:text-[24px] text-center leading-[30px]">
          Join the community for free
        </p>

        <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 md:gap-[31px]">
          <button className="w-44 h-[59px] bg-white rounded-[7px] border border-solid border-black relative flex items-center justify-center">
            <span className="font-medium text-black text-sm text-center">App Store</span>
          </button>
          <button className="w-[199px] h-[59px] bg-white rounded-[5px] border border-solid border-black relative flex items-center justify-center">
            <span className="font-medium text-black text-sm text-center">Google Play</span>
          </button>
        </div>
      </div>
    </section>
  )
}
