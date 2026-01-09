import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { 
  ArrowRight, 
  Printer, 
  Droplet, 
  Package, 
  Wrench,
  Star,
  Truck,
  ShieldCheck,
  Headphones
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Egypt&apos;s Premier
              <span className="text-orange-500"> 3D Printing</span> Store
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover the latest FDM & Resin 3D printers from top brands like 
              Creality, Anycubic, Elegoo, and Bambu Lab. Plus filaments, parts, 
              and professional services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="xl" variant="orange" asChild className="btn-animate">
                <Link href="/shop">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild className="btn-animate bg-white/10 border-white/20 hover:bg-white/20">
                <Link href="/services/printing">
                  3D Printing Service
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20">
          <div className="absolute right-10 bottom-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute right-40 top-20 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "FDM Printers", slug: "fdm-3d-printers", icon: Printer, color: "bg-blue-500" },
              { name: "Resin Printers", slug: "resin-3d-printers", icon: Droplet, color: "bg-purple-500" },
              { name: "Filament", slug: "filament", icon: Package, color: "bg-green-500" },
              { name: "Spare Parts", slug: "spare-parts-tools", icon: Wrench, color: "bg-orange-500" },
            ].map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${category.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg group-hover:text-orange-500 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">Shop now →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Top Brands We Carry
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {siteConfig.brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brand/${brand.slug}`}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors group"
              >
                <span className="text-xl font-bold text-gray-400 group-hover:text-orange-500 transition-colors">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Beyond selling 3D printers, we offer comprehensive services to support your 3D printing journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "3D Printing Service",
                description: "Upload your design and we'll print it for you. Professional quality, fast turnaround.",
                href: "/services/printing",
                icon: "🖨️",
              },
              {
                title: "Printer Maintenance",
                description: "Expert repair and maintenance services for all major 3D printer brands.",
                href: "/services/maintenance",
                icon: "🔧",
              },
              {
                title: "Training & Support",
                description: "Learn how to get the most out of your 3D printer with our training programs.",
                href: "/services/training",
                icon: "📚",
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors group"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <span className="text-orange-500 font-medium">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Lancer3D?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                description: "Free delivery on all 3D printers across Egypt",
              },
              {
                icon: ShieldCheck,
                title: "Warranty Protection",
                description: "Lancer3D Shield warranty on all products",
              },
              {
                icon: Headphones,
                title: "Expert Support",
                description: "24/7 technical support from our team",
              },
              {
                icon: Star,
                title: "Rewards Program",
                description: "Earn points on every purchase",
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start 3D Printing?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of makers, hobbyists, and professionals who trust Lancer3D 
            for their 3D printing needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="xl" variant="secondary" asChild className="btn-animate">
              <Link href="/shop">
                Browse Products
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild className="btn-animate border-white text-white hover:bg-white/20">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
