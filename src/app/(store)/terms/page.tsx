import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${siteConfig.name}`,
  description: `Terms and conditions for using ${siteConfig.name}'s services and website.`,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <p className="text-gray-600">
            Last updated: January 9, 2026
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using {siteConfig.name}&apos;s website and services, you agree to be 
              bound by these Terms & Conditions. If you do not agree to these terms, please do not 
              use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Products and Services</h2>
            <p className="text-gray-600 leading-relaxed">
              All products displayed on our website are subject to availability. We reserve the right 
              to limit quantities, discontinue products, or modify specifications without prior notice. 
              Prices are subject to change.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Orders and Payment</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>All orders are subject to acceptance and availability</li>
              <li>Prices are in Egyptian Pounds (EGP) unless otherwise stated</li>
              <li>Payment must be received before order processing</li>
              <li>We accept Cash on Delivery, Visa, and MasterCard</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping and Delivery</h2>
            <p className="text-gray-600 leading-relaxed">
              We offer free shipping on all 3D printers within Egypt. Delivery times vary based on 
              location and product availability. Estimated delivery times are provided at checkout 
              but are not guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Warranty</h2>
            <p className="text-gray-600 leading-relaxed">
              Products sold by {siteConfig.name} come with manufacturer warranty. The {siteConfig.name} Shield 
              program provides extended warranty coverage for eligible products. Warranty does not cover 
              damage caused by misuse, accidents, or unauthorized modifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All content on this website, including text, images, logos, and graphics, is the property 
              of {siteConfig.name} or its licensors and is protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              {siteConfig.name} shall not be liable for any indirect, incidental, special, or consequential 
              damages arising from the use of our products or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
            <p className="text-gray-600">
              For questions about these terms, contact us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-orange-500 hover:underline">
                {siteConfig.contact.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

