import { Metadata } from "next";
import Link from "next/link";
import { Wrench, CheckCircle, Clock, Shield, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Printer Maintenance & Repair | ${siteConfig.name}`,
  description: "Expert 3D printer repair and maintenance services in Egypt. We service all major brands including Creality, Anycubic, Elegoo, and more.",
};

const services = [
  {
    title: "General Maintenance",
    description: "Complete cleaning, lubrication, and calibration of your printer",
    price: "From EGP 500",
    includes: ["Bed leveling", "Belt tensioning", "Nozzle cleaning", "Firmware check"],
  },
  {
    title: "Hotend Repair",
    description: "Fix clogging, heat creep, and thermal issues",
    price: "From EGP 300",
    includes: ["Nozzle replacement", "Heat break inspection", "Thermal paste application", "Temperature calibration"],
  },
  {
    title: "Board Replacement",
    description: "Upgrade or replace faulty mainboards",
    price: "From EGP 800",
    includes: ["Diagnosis", "Board installation", "Firmware flashing", "Testing"],
  },
  {
    title: "Full Overhaul",
    description: "Complete printer restoration and optimization",
    price: "From EGP 1,500",
    includes: ["All maintenance items", "Parts replacement", "Upgrades", "Performance tuning"],
  },
];

const brands = ["Creality", "Anycubic", "Elegoo", "Bambu Lab", "Prusa", "Artillery", "Voron", "Other brands"];

export default function MaintenancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert <span className="text-orange-500">Printer Maintenance</span> & Repair
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Keep your 3D printer running at peak performance. Our certified technicians service
              all major brands with genuine parts and professional expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Book Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href={`tel:${siteConfig.contact.phone}`}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Service</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Wrench, title: "Expert Technicians", description: "Trained and certified in all major brands" },
              { icon: Shield, title: "Genuine Parts", description: "Only authentic replacement parts used" },
              { icon: Clock, title: "Fast Turnaround", description: "Most repairs completed in 24-48 hours" },
              { icon: CheckCircle, title: "Warranty Included", description: "90-day warranty on all repairs" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            From routine maintenance to complex repairs, we've got you covered
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{service.description}</p>
                <p className="text-orange-500 font-bold text-lg mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Brands We Service</h2>
          <p className="text-gray-400 text-center mb-12">We're experienced with all major 3D printer brands</p>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand) => (
              <div key={brand} className="px-6 py-3 bg-gray-800 rounded-full text-gray-300 border border-gray-700">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Book a Service</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Printer Brand *</label>
                  <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                    <option value="">Select brand</option>
                    {brands.map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Printer Model</label>
                  <input
                    type="text"
                    placeholder="e.g., Ender 3 V3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
                <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option value="">Select service</option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>{service.title} - {service.price}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Problem Description *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe the issue you're experiencing..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                Submit Service Request
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}


