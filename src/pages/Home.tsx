import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-furniture.jpg";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Modern living room"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-left max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Elevate Your Living Space
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Discover handcrafted furniture that transforms houses into homes.
            </p>
            <Link to="/shop">
              <Button size="lg" className="text-base">
                Shop Collection <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Collection
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Carefully curated pieces that blend timeless design with modern comfort
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <div className="text-center">
              <Link to="/shop">
                <Button variant="outline" size="lg">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Shop by Category
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {["Living Room", "Dining", "Office", "Bedroom"].map((category) => (
                <Link
                  key={category}
                  to="/shop"
                  className="group relative h-64 rounded-lg overflow-hidden bg-muted"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 z-10" />
                  <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-foreground z-20 group-hover:translate-x-2 transition-transform">
                    {category}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Timeless Design</h3>
                <p className="text-muted-foreground">
                  Each piece is crafted with attention to aesthetics and functionality
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Sourced materials and expert craftsmanship ensure lasting durability
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
                <p className="text-muted-foreground">
                  Complimentary white-glove delivery on all orders over $500
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

export default Home;
