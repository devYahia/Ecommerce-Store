import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Return Policy | ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name}'s return policy and procedures.`,
};

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Return Policy</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">30-Day Return Guarantee</h2>
            <p className="text-gray-600 leading-relaxed">
              At {siteConfig.name}, we want you to be completely satisfied with your purchase. 
              If you&apos;re not happy with your order, you may return it within 30 days of delivery 
              for a full refund or exchange.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Return Conditions</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Items must be unused and in original packaging</li>
              <li>All accessories, manuals, and documentation must be included</li>
              <li>Return request must be initiated within 30 days of delivery</li>
              <li>Proof of purchase (receipt or order confirmation) is required</li>
              <li>Items must not be damaged due to misuse or improper handling</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Non-Returnable Items</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Opened filament or resin (due to hygiene and quality reasons)</li>
              <li>Customized or special-order items</li>
              <li>Items marked as &quot;Final Sale&quot;</li>
              <li>Products damaged by customer misuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Return</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Contact our customer service at {siteConfig.contact.email}</li>
              <li>Provide your order number and reason for return</li>
              <li>Receive return authorization and shipping instructions</li>
              <li>Ship the item back in secure packaging</li>
              <li>Refund will be processed within 5-7 business days of receiving the item</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              For any questions about returns, please contact us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-orange-500 hover:underline">
                {siteConfig.contact.email}
              </a>{" "}
              or call us at{" "}
              <a href={`tel:${siteConfig.contact.phone}`} className="text-orange-500 hover:underline">
                {siteConfig.contact.phone}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

