export function PhoneMockups() {
  return (
    <div className="relative flex items-center justify-center gap-8 mt-16">
      {/* Left Phone Mockup */}
      <div className="relative">
        <div className="w-[654px] h-[809px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] p-4 shadow-2xl">
          <div className="w-full h-full bg-black rounded-[32px] overflow-hidden">
            {/* Phone screen content would go here */}
            <div className="w-full h-full bg-gradient-to-br from-purple-900 to-black flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎲</span>
                </div>
                <p className="text-sm opacity-80">App Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Phone Mockup */}
      <div className="relative">
        <div className="w-[407px] h-[809px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] p-4 shadow-2xl">
          <div className="w-full h-full bg-black rounded-[32px] overflow-hidden">
            {/* Phone screen content would go here */}
            <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-purple-600 flex items-center justify-center">
              <div className="text-black text-center">
                <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <p className="text-sm opacity-80">Game Stats</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
