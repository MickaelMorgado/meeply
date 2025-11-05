import { Logo } from './Logo'

export function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
      <Logo />

      <button className="bg-[#5A2AFB] hover:bg-[#4a22e1] text-white px-4 py-2 rounded-md font-medium text-sm transition-colors">
        Download App
      </button>
    </header>
  )
}
