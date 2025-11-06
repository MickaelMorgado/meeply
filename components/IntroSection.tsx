export function IntroSection() {
  return (
    <section className="relative w-full py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[193px]">
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="font-normal text-[#5a2afb] text-sm md:text-[16.9px] leading-[20.3px]">
            Game Smarter, Play Together
          </p>

          <h3 className="font-normal text-white text-2xl sm:text-3xl md:text-[46.1px] tracking-[-1.88px] leading-tight md:leading-[55.3px] max-w-[723px]">
            Board games are better together, and now, smarter too.
          </h3>

          <div className="font-normal text-white text-sm md:text-[16.9px] leading-[25.3px] max-w-[667px] opacity-80">
            <p className="mb-4">
              Meeply is your digital companion for board games, helping you log
              your plays, grow your collection, explore stats, and stay
              connected with your gaming circle.
            </p>
            <p>
              Whether you&apos;re learning new rules or chasing your next
              victory, Meeply is here to play with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
