import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Luxe Living
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Crafting beautiful furniture that brings comfort and style to your home
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2024, Luxe Living began with a simple vision: to make beautifully designed, 
                  high-quality furniture accessible to everyone. We believe that your home should be a 
                  reflection of your personality and a sanctuary from the outside world.
                </p>
                <p>
                  Our team of designers and craftspeople work tirelessly to source the finest materials 
                  and employ traditional techniques alongside modern innovation. Every piece in our 
                  collection is carefully curated to ensure it meets our exacting standards for quality, 
                  comfort, and aesthetics.
                </p>
                <p>
                  From the first sketch to the final product, we're committed to sustainability and 
                  ethical practices. We partner with responsible suppliers and manufacturers who share 
                  our values, ensuring that every piece of furniture we sell has been created with 
                  respect for both people and planet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  Committed to eco-friendly materials and responsible manufacturing practices
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💎</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  Every piece is crafted with meticulous attention to detail and durability
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  Building lasting relationships through honest business practices
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
