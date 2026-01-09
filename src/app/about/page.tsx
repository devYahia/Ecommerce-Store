import { Metadata } from "next";
import { Star, Target, Lightbulb } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Omega3D - Egypt's leading 3D printing store and service provider",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          About <span className="text-orange-500">Lancer</span>3D
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Egypt&apos;s premier destination for 3D printing technology, serving makers, 
          professionals, and enthusiasts since 2020.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Omega3D was founded with a simple mission: to make 3D printing 
              accessible to everyone in Egypt. We started as a small team of 
              enthusiasts who saw the transformative potential of additive manufacturing.
            </p>
            <p>
              Today, we&apos;re proud to be the authorized distributor for major 
              brands including Creality, Anycubic, Elegoo, and Bambu Lab. Our 
              warehouse stocks over 700 products, from entry-level printers to 
              professional-grade machines.
            </p>
            <p>
              But we&apos;re more than just a store. We offer comprehensive services 
              including 3D printing on demand, printer maintenance, and training 
              programs to help you get the most out of your equipment.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">700+</div>
              <div className="text-orange-100">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-orange-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6+</div>
              <div className="text-orange-100">Top Brands</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-orange-100">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Quality First",
              description: "We only stock genuine products from authorized distributors, ensuring you get the real deal every time.",
              icon: Star,
              color: "bg-yellow-500",
            },
            {
              title: "Customer Success",
              description: "Your success is our success. We provide ongoing support and resources to help you achieve your 3D printing goals.",
              icon: Target,
              color: "bg-red-500",
            },
            {
              title: "Innovation",
              description: "We stay at the forefront of 3D printing technology, bringing you the latest and most advanced products.",
              icon: Lightbulb,
              color: "bg-orange-500",
            },
          ].map((value) => (
            <div key={value.title} className="text-center p-6">
              <div className={`${value.color} w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4`}>
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Locations */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Visit Our Stores</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {siteConfig.contact.addresses.map((address, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-3">{address.name}</h3>
              <p className="text-gray-600 mb-4">{address.address}</p>
              <a
                href={address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 font-medium hover:underline"
              >
                Get Directions →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

