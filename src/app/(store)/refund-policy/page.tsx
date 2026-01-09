import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Refund Policy | ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name}'s refund policy and procedures.`,
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <p className="text-gray-600">
            Last updated: January 9, 2026
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Eligibility</h2>
            <p className="text-gray-600 leading-relaxed">
              We offer refunds for eligible returns within our 30-day return window. To be eligible 
              for a refund, items must meet our return policy conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Process</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Submit a return request through our customer service</li>
              <li>Receive approval and return shipping instructions</li>
              <li>Ship the item back to us in original packaging</li>
              <li>Our team inspects the returned item</li>
              <li>Refund is processed within 5-7 business days after inspection</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Methods</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Credit/Debit Card:</strong> Refunded to the original payment method within 5-10 business days</li>
              <li><strong>Cash on Delivery:</strong> Refunded via bank transfer or store credit</li>
              <li><strong>Store Credit:</strong> Available immediately for future purchases</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Partial Refunds</h2>
            <p className="text-gray-600 leading-relaxed">
              Partial refunds may be granted in the following cases:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
              <li>Items returned with obvious signs of use</li>
              <li>Items missing original packaging or accessories</li>
              <li>Items returned after the 30-day window (subject to approval)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Costs</h2>
            <p className="text-gray-600 leading-relaxed">
              Original shipping costs are non-refundable unless the return is due to our error 
              (wrong item shipped, defective product, etc.). Return shipping costs are the 
              responsibility of the customer unless otherwise specified.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Defective Products</h2>
            <p className="text-gray-600 leading-relaxed">
              If you receive a defective product, please contact us immediately. We will arrange 
              for a replacement or full refund including shipping costs. Please document the defect 
              with photos or videos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              For refund inquiries, contact us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-orange-700 hover:underline">
                {siteConfig.contact.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${siteConfig.contact.phone}`} className="text-orange-700 hover:underline">
                {siteConfig.contact.phone}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

