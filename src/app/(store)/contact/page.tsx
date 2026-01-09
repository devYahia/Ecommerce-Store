import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Omega3D - We're here to help with your 3D printing needs",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions? We&apos;d love to hear from you. Send us a message 
          and we&apos;ll respond as soon as possible.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-700/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-orange-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-300 hover:text-orange-700">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-700/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-orange-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-300 hover:text-orange-700">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-700/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-orange-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Main Store</h3>
                  <p className="text-gray-300 text-sm">
                    {siteConfig.contact.addresses[0].address}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-700/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-orange-700" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Working Hours</h3>
                  <p className="text-gray-300 text-sm">
                    Saturday - Thursday: 10AM - 8PM
                  </p>
                </div>
              </div>
            </div>
            
            {/* WhatsApp CTA */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <a
                href={`https://api.whatsapp.com/send?phone=${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="john@example.com" required />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+20 1234567890" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select className="w-full px-4 py-2 border rounded-md">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="order">Order Support</option>
                    <option value="service">Service Request</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-orange-700"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" size="lg" variant="orange" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

