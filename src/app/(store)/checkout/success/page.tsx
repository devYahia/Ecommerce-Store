"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "N/A";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-500 mb-6">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        {/* Order ID */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-500 mb-1">Order ID</p>
          <p className="text-xl font-bold text-orange-500">{orderId}</p>
        </div>

        {/* What's Next */}
        <div className="text-left space-y-4 mb-8">
          <h2 className="font-semibold text-gray-900">What&apos;s Next?</h2>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="h-4 w-4 text-orange-500" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Confirmation Email</p>
              <p className="text-sm text-gray-500">
                We&apos;ve sent order details to your email address
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Package className="h-4 w-4 text-orange-500" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Order Processing</p>
              <p className="text-sm text-gray-500">
                Your order will be shipped within 1-3 business days
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
            <Link href="/shop">
              Continue Shopping
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>

        {/* Support */}
        <p className="text-sm text-gray-500 mt-6">
          Need help?{" "}
          <Link href="/contact" className="text-orange-500 hover:underline">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500" />
      </div>
    }>
      <OrderSuccessContent />
    </Suspense>
  );
}

