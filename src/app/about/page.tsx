import Image from "next/image";
import { config } from "@/config";

export default function About() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image 
              src={config.images.journal} 
              alt="About Us" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 border-[1px] border-white/20 rounded-[2rem] m-4 pointer-events-none"></div>
          </div>

          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6">
              Our Story
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif text-accent mb-8 leading-tight">
              More than just a travel agency. We are storytellers.
            </h2>
            
            <div className="space-y-6 text-foreground/80 font-light text-lg leading-relaxed">
              <p>
                {config.businessName} started with a simple passion: to explore the unseen beauty of Pakistan and share it with the world. What began as a personal travel journal has evolved into a thriving community of adventurers.
              </p>
              <p>
                We believe that travel is not just about visiting places; it&apos;s about the people you meet, the food you taste, and the stories you bring back. That&apos;s why our group tours are designed to feel like traveling with friends rather than a corporate excursion.
              </p>
              <p>
                From the bustling food streets of Lahore to the serene, majestic peaks of Skardu and Hunza, we curate experiences that are authentic, safe, and unforgettable.
              </p>
            </div>

            <div className="mt-12">
              <a 
                href={config.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
              >
                Travel With Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
