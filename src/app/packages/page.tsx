import Image from "next/image";
import Link from "next/link";
import { config } from "@/config";

export default function Packages() {
  const packages = [
    {
      id: 1,
      title: "Hunza Valley Expedition",
      duration: "7 Days / 6 Nights",
      price: "PKR 45,000",
      image: config.images.package,
      description: "Explore the breathtaking landscapes of Hunza, including Attabad Lake, Passu Cones, and Khunjerab Pass.",
    },
    {
      id: 2,
      title: "Skardu & Deosai Plains",
      duration: "6 Days / 5 Nights",
      price: "PKR 55,000",
      image: config.images.hero,
      description: "Discover the cold desert of Skardu, the stunning Shangrila Resort, and the vast Deosai National Park.",
    },
    {
      id: 3,
      title: "Fairy Meadows Adventure",
      duration: "5 Days / 4 Nights",
      price: "PKR 40,000",
      image: config.images.journal,
      description: "Trek to the base camp of Nanga Parbat and experience the unparalleled beauty of Fairy Meadows.",
    },
    {
      id: 4,
      title: "Swat Valley Retreat",
      duration: "4 Days / 3 Nights",
      price: "PKR 35,000",
      image: config.images.package,
      description: "Relax in the 'Switzerland of the East' with visits to Kalam, Malam Jabba, and Mahodand Lake.",
    },
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6">
            Curated Experiences
          </h1>
          <p className="text-lg text-foreground/80 font-light leading-relaxed">
            Every journey we offer is hand-crafted to provide a deeply authentic and unforgettable experience. Choose your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {packages.map((pkg) => (
            <div key={pkg.id} className="group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl">
              <Image 
                src={pkg.image} 
                alt={pkg.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-95 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-accent text-sm uppercase tracking-widest mb-2 font-medium">{pkg.duration}</p>
                    <h3 className="text-3xl font-serif text-white mb-2">{pkg.title}</h3>
                  </div>
                  <p className="text-white font-serif text-xl">{pkg.price}</p>
                </div>
                
                <p className="text-white/80 font-light md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6">
                  {pkg.description}
                </p>
                
                <Link 
                  href={config.whatsappLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#25D366] text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-foreground transition-all duration-300 md:opacity-0 group-hover:opacity-100 delay-200"
                >
                  Book on WhatsApp
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
