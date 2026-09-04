import { MapPin, Phone, Mail } from "lucide-react";
import { config } from "@/config";

export default function Contact() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-foreground/80 font-light leading-relaxed mb-12">
              Ready to start planning your next adventure? Have a question about our itineraries? We&apos;d love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-4 rounded-full text-foreground">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-1">Our Office</h3>
                  <p className="text-foreground/70 font-light">{config.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-4 rounded-full text-foreground">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-1">Call Us / WhatsApp</h3>
                  <p className="text-foreground/70 font-light">{config.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-4 rounded-full text-foreground">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-1">Email</h3>
                  <p className="text-foreground/70 font-light">{config.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-xl font-serif font-bold text-foreground mb-6">Follow Our Journeys</h3>
              <div className="flex gap-4">
                <a href={config.socials.instagram} target="_blank" rel="noopener noreferrer" className="bg-foreground text-background p-4 rounded-full hover:bg-accent transition-colors">
                  <span className="font-bold">IG</span>
                </a>
                <a href={config.socials.facebook} target="_blank" rel="noopener noreferrer" className="bg-foreground text-background p-4 rounded-full hover:bg-accent transition-colors">
                  <span className="font-bold">FB</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-border">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Send a Message</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  placeholder="Tell us about your dream destination..."
                ></textarea>
              </div>
              
              <button 
                type="button"
                className="w-full bg-foreground text-background hover:bg-accent hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
