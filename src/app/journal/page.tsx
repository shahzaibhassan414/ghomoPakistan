import Image from "next/image";
import Link from "next/link";
import { config } from "@/config";

export default function Journal() {
  const posts = [
    {
      id: 1,
      title: "The Magic of Autumn in Hunza",
      excerpt: "When the leaves turn gold and red, the Hunza Valley transforms into a painting. Here is what it's like to witness the magic of autumn in northern Pakistan.",
      date: "October 15, 2023",
      image: config.images.journal,
    },
    {
      id: 2,
      title: "A Beginner's Guide to Trekking Fairy Meadows",
      excerpt: "Everything you need to know before you embark on the journey to the base camp of the killer mountain, Nanga Parbat.",
      date: "August 22, 2023",
      image: config.images.package,
    },
    {
      id: 3,
      title: "Discovering the Hidden Lakes of Skardu",
      excerpt: "Beyond Shangrila and Satpara, Skardu hides alpine lakes that only a few venture to see. Join us as we explore the unseen.",
      date: "July 10, 2023",
      image: config.images.hero,
    },
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6">
            The Travel Journal
          </h1>
          <p className="text-lg text-foreground/80 font-light leading-relaxed">
            Stories, tips, and inspiration from our journeys across the most beautiful landscapes on earth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer flex flex-col h-full">
              <div className="relative h-80 rounded-[2rem] overflow-hidden mb-6 shadow-lg">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
              
              <div className="flex-grow flex flex-col">
                <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">{post.date}</p>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <span className="text-foreground font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors">
                    Read Story
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
