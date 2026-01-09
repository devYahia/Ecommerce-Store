import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Clock, Package, ShieldCheck, Bell } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Pre-Order Printers | ${siteConfig.name}`,
  description: `Pre-order the latest 3D printers from ${siteConfig.name}. Be the first to get new releases.`,
};

export default function PreOrderPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pre-Order 3D Printers</h1>
          <p className="text-xl text-gray-600">
            Be the first to get the latest 3D printers. Pre-order now and secure your spot.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <Clock className="h-10 w-10 text-orange-700 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Early Access</h3>
            <p className="text-sm text-gray-600">Get new releases before anyone else</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <Package className="h-10 w-10 text-orange-700 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Reserved Stock</h3>
            <p className="text-sm text-gray-600">Your unit is guaranteed and reserved</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <ShieldCheck className="h-10 w-10 text-orange-700 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Price Lock</h3>
            <p className="text-sm text-gray-600">Lock in today&apos;s price, no surprises</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <Bell className="h-10 w-10 text-orange-700 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Updates</h3>
            <p className="text-sm text-gray-600">Get notified about shipping dates</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Available for Pre-Order</h2>
          
          <div className="text-center py-12 text-gray-500">
            <Package className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <p className="text-lg mb-2">No pre-orders available at the moment</p>
            <p className="text-sm mb-6">Check back soon or browse our current inventory</p>
            <Link 
              href="/shop" 
              className="inline-flex items-center px-6 py-3 bg-orange-700 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Browse Available Products
            </Link>
          </div>
        </div>

        <div className="mt-12 bg-orange-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Pre-Orders Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-orange-700 mb-2">1</div>
              <h3 className="font-semibold text-gray-800 mb-2">Place Your Order</h3>
              <p className="text-gray-600">
                Pay a deposit or full amount to secure your pre-order. Your spot is reserved.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-700 mb-2">2</div>
              <h3 className="font-semibold text-gray-800 mb-2">Track Progress</h3>
              <p className="text-gray-600">
                Receive updates on manufacturing and shipping. Know exactly when to expect delivery.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-700 mb-2">3</div>
              <h3 className="font-semibold text-gray-800 mb-2">Receive First</h3>
              <p className="text-gray-600">
                Be among the first to receive the product. Priority shipping for pre-order customers.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>
            Questions about pre-orders? Contact us at{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-orange-700 hover:underline">
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

