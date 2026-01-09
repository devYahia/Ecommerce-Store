import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Clock, Wrench, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: `${siteConfig.name} Shield Warranty | ${siteConfig.name}`,
  description: `Learn about the ${siteConfig.name} Shield warranty program and product protection.`,
};

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <ShieldCheck className="h-16 w-16 text-orange-700 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{siteConfig.name} Shield</h1>
          <p className="text-xl text-gray-600">
            Comprehensive warranty protection for your 3D printing equipment
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is {siteConfig.name} Shield?</h2>
            <p className="text-gray-600 leading-relaxed">
              {siteConfig.name} Shield is our comprehensive warranty program that provides peace of mind 
              for all your 3D printing equipment purchases. Every product purchased from {siteConfig.name} 
              comes with our standard warranty coverage.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-lg p-6">
              <Clock className="h-10 w-10 text-orange-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">1 Year Coverage</h3>
              <p className="text-gray-600">
                All 3D printers come with a minimum 1-year manufacturer warranty, covering 
                defects in materials and workmanship.
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <Wrench className="h-10 w-10 text-orange-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Repairs</h3>
              <p className="text-gray-600">
                Our certified technicians handle all warranty repairs using genuine parts 
                to ensure optimal performance.
              </p>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What&apos;s Covered</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Manufacturing defects in components</li>
              <li>Electronic malfunctions under normal use</li>
              <li>Structural defects in printer frame</li>
              <li>Faulty heating elements and thermistors</li>
              <li>Motor and stepper driver failures</li>
              <li>Control board defects</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What&apos;s Not Covered</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Damage from misuse, abuse, or accidents</li>
              <li>Normal wear and tear (nozzles, build plates)</li>
              <li>Modifications or unauthorized repairs</li>
              <li>Consumables (filament, resin, tape)</li>
              <li>Cosmetic damage that doesn&apos;t affect functionality</li>
              <li>Damage from power surges (use a surge protector!)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Claim Warranty</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Contact our support team with your order number</li>
              <li>Describe the issue and provide photos/videos if possible</li>
              <li>Our team will diagnose the problem remotely</li>
              <li>If warranty applies, we&apos;ll arrange repair or replacement</li>
              <li>For repairs, ship the product to our service center</li>
            </ol>
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center gap-4">
              <Phone className="h-10 w-10 text-orange-700 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Need Help?</h3>
                <p className="text-gray-600">
                  Contact our warranty support team at{" "}
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-orange-700 hover:underline">
                    {siteConfig.contact.email}
                  </a>{" "}
                  or call{" "}
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-orange-700 hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

