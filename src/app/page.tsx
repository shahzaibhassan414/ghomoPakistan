import Image from "next/image";
import Link from "next/link";
import { config } from "@/config";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-end pb-24 px-6 md:px-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src={config.images.hero} 
            alt="Hero Background" 
            fill 
            className="object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-white">
          <p className="text-sm md:text-lg uppercase tracking-[0.3em] font-light mb-4 opacity-80">
            Welcome to {config.businessName}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-8 text-shadow">
            Lose Yourself in <br/><span className="text-accent/90 italic">The Journey</span>.
          </h1>
          
          <div className="glass-dark inline-block p-2 pr-6 rounded-full items-center gap-4 hidden md:inline-flex">
            <Link href={config.whatsappLink} className="bg-accent hover:bg-white hover:text-accent transition-all duration-300 text-white px-8 py-3 rounded-full text-lg font-medium flex items-center gap-2">
              Start Planning
            </Link>
            <p className="text-sm font-light opacity-80">or call {config.phone}</p>
          </div>
        </div>
      </section>

      {/* 2. Packages (Horizontal Scroll Mobile, Asymmetric Desktop) */}
      <section className="py-24 px-6 md:px-16 bg-background">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">
              Curated <br/> Experiences
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              We don&apos;t just book trips, we craft unforgettable stories. Explore our hand-picked journeys designed for the true explorer.
            </p>
          </div>
          <Link href="/packages" className="text-accent hover:text-foreground transition-colors font-medium text-lg flex items-center gap-2">
            View all destinations <span className="text-2xl">→</span>
          </Link>
        </div>

        {/* Swipeable / Grid */}
        <div className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-3 gap-6 md:gap-8 snap-x snap-mandatory hide-scrollbar">
          
          {/* Card 1 */}
          <div className="relative min-w-[85vw] md:min-w-0 h-[60vh] md:h-[70vh] rounded-[2rem] overflow-hidden group snap-center cursor-pointer md:mt-0">
            <Image src={config.images.package} alt="Adventure" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-95 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-3xl font-serif text-white mb-2">Hunza Valley</h3>
              <p className="text-white/80 font-medium md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">7 Days • 6 Nights</p>
            </div>
          </div>

          {/* Card 2 (Offset on Desktop) */}
          <div className="relative min-w-[85vw] md:min-w-0 h-[60vh] md:h-[70vh] rounded-[2rem] overflow-hidden group snap-center cursor-pointer md:mt-16">
            <Image src={config.images.hero} alt="Relaxation" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-95 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-3xl font-serif text-white mb-2">Skardu Expedition</h3>
              <p className="text-white/80 font-medium md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">5 Days • 4 Nights</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative min-w-[85vw] md:min-w-0 h-[60vh] md:h-[70vh] rounded-[2rem] overflow-hidden group snap-center cursor-pointer md:mt-0">
            <Image src={config.images.journal} alt="Culture" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-95 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-3xl font-serif text-white mb-2">Fairy Meadows</h3>
              <p className="text-white/80 font-medium md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">4 Days • 3 Nights</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Storytelling (Magazine Style) */}
      <section className="py-24 px-6 md:px-16 bg-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image src={config.images.journal} alt="Our Story" fill className="object-cover" />
            <div className="absolute inset-0 border-[1px] border-white/20 rounded-[2rem] m-4 pointer-events-none"></div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-secondary-foreground mb-8 leading-tight">
              A deeply personal approach to travel.
            </h2>
            <p className="text-lg text-secondary-foreground/80 font-light leading-relaxed mb-10">
              We believe that every journey should change you. We don&apos;t do mass-market tourism. We hand-pick our guides, select the most intimate accommodations, and build itineraries that breathe life into the landscapes. Your adventure with {config.businessName} is crafted with soul.
            </p>
            
            <Link href="/about" className="inline-flex items-center justify-center bg-transparent border-2 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
