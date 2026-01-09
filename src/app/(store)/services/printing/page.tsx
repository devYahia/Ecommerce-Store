import { Metadata } from "next";
import Link from "next/link";
import { Upload, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `3D Printing Service | ${siteConfig.name}`,
  description: "Professional 3D printing service in Egypt. Upload your design and we'll print it for you with high quality and fast turnaround.",
};

const features = [
  {
    icon: Upload,
    title: "Easy Upload",
    description: "Simply upload your STL, OBJ, or 3MF file and get an instant quote",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most orders completed within 3-5 business days",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Professional quality prints with our industrial-grade printers",
  },
];

const materials = [
  { name: "PLA", description: "Standard material, eco-friendly, great for prototypes", price: "From EGP 50/hr" },
  { name: "ABS", description: "Durable and heat-resistant, ideal for functional parts", price: "From EGP 60/hr" },
  { name: "PETG", description: "Strong, flexible, and food-safe", price: "From EGP 65/hr" },
  { name: "Resin (Standard)", description: "High detail for miniatures and jewelry", price: "From EGP 80/hr" },
  { name: "Resin (Engineering)", description: "Tough and precise for functional prototypes", price: "From EGP 120/hr" },
];

const steps = [
  { step: 1, title: "Upload Your File", description: "Submit your 3D model in STL, OBJ, or 3MF format" },
  { step: 2, title: "Get a Quote", description: "We'll review your file and provide a detailed quote" },
  { step: 3, title: "Confirm & Pay", description: "Approve the quote and complete payment" },
  { step: 4, title: "We Print", description: "Our team prints your model with precision" },
  { step: 5, title: "Delivery", description: "Receive your print via delivery or pickup" },
];

export default function PrintingServicePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-orange-500">3D Printing</span> Service
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Turn your digital designs into physical reality. Upload your 3D model and let our experts
              handle the rest with precision and care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="w-12 h-12 mx-auto bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] border-t-2 border-dashed border-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Available Materials</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            We offer a wide range of materials to suit every project, from prototypes to functional parts
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material) => (
              <div key={material.name} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{material.name}</h3>
                  <span className="text-orange-500 font-medium">{material.price}</span>
                </div>
                <p className="text-gray-400">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Request a Quote</h2>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Material Preference</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option>Select material</option>
                  <option>PLA</option>
                  <option>ABS</option>
                  <option>PETG</option>
                  <option>Resin (Standard)</option>
                  <option>Resin (Engineering)</option>
                  <option>Not sure - need advice</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload 3D File</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-2">Drag and drop your file here, or click to browse</p>
                  <p className="text-xs text-gray-400">Supported formats: STL, OBJ, 3MF (Max 50MB)</p>
                  <input type="file" className="hidden" accept=".stl,.obj,.3mf" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                <textarea
                  rows={4}
                  placeholder="Describe your project, quantity needed, any special requirements..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                Submit Quote Request
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

