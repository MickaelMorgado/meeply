interface FeatureCardProps {
  title: string
  description: string
  icon: string
  position: string
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="relative group">
      {/* Card background with gradient and effects */}
      <div className="relative bg-gradient-to-br from-[#5A2AFB] to-[#1A1A1A] rounded-[30px] p-1">
        <div className="bg-[#1A1A1A] rounded-[29px] p-2">
          {/* Inner content */}
          <div className="bg-gradient-to-br from-[#5A2AFB] to-[#1A1A1A] rounded-[28px] p-1">
            <div className="bg-[#1A1A1A] rounded-[27px] p-8 relative overflow-hidden">
              {/* Blur effect background */}
              <div className="absolute inset-0 bg-[#5A2AFB] opacity-25 blur-[92px] rounded-[27px]" />

              {/* Border effect */}
              <div className="absolute inset-[2px] bg-[#2C2C2C] rounded-[25px] shadow-[inset_0px_5px_11px_rgba(0,0,0,0.25)]" />

              {/* Icon */}
              <div className="relative z-10 flex justify-center mb-6">
                <div className="w-24 h-24 bg-[#2C2C2C] rounded-full flex items-center justify-center shadow-[0px_5px_11px_rgba(0,0,0,0.25)] border border-black">
                  <span className="text-4xl">{icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl md:text-2xl font-medium text-white font-['Wix_Madefor_Display'] leading-[1.2] mb-4">
                  {title}
                </h3>
                <p className="text-base text-white font-['Wix_Madefor_Display'] leading-[1.5] opacity-80">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
