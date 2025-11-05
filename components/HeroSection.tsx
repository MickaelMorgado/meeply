export function HeroSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center pt-16 md:pt-[100px] pb-32 md:pb-[200px] px-4"
    >
      {/* Main Title */}
      <h1
        className="font-[900] text-[#dffe0f] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-center uppercase leading-[1.2] max-w-[1061px] mb-4 tracking-tight"
      >
        Level up your board game experience
      </h1>

      {/* Subtitle */}
      <p
        className="font-semibold text-white text-lg md:text-[21px] text-center uppercase leading-[25px] tracking-wide"
      >
        Ask . Track . Connect
      </p>

      {/* Phone Mockups Container */}
      <div className="relative w-full max-w-[1200px] h-[400px] sm:h-[600px] md:h-[809px] mt-[60px] flex items-center justify-center">
        {/* Left Phone */}
        <div className="relative w-[50%] sm:w-[50%] md:w-[400px] h-full mr-2 md:mr-4 animate-bounce-slow">
          <img
            src="/iphone 16 Pro.png"
            alt="Meeply app on iPhone"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Phone */}
        <div className="relative w-[50%] sm:w-[50%] md:w-[400px] h-full ml-2 md:ml-4 mt-[24px] md:mt-[48px] animate-bounce-reverse-slow">
          <img
            src="/iphone 16 Pro-1.png"
            alt="Meeply app on iPhone"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}
