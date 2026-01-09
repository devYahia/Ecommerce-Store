import Link from "next/link";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Linkedin,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-orange-500">Lancer</span>3D
            </h3>
            <ul className="space-y-3">
              {siteConfig.contact.addresses.map((address, index) => (
                <li key={index} className="flex gap-2 text-sm">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-orange-500" />
                  <span>{address.address}</span>
                </li>
              ))}
              <li className="flex gap-2 text-sm">
                <Phone className="h-5 w-5 flex-shrink-0 text-orange-500" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-orange-500">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex gap-2 text-sm">
                <Mail className="h-5 w-5 flex-shrink-0 text-orange-500" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-orange-500">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" 
                 className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">SERVICES</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/printing" className="hover:text-orange-500">
                  3D Printing Service
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="hover:text-orange-500">
                  3D Printer Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="hover:text-orange-500">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/pre-order" className="hover:text-orange-500">
                  Pre-Order Printers
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">PRODUCTS</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/category/3d-printer-machines" className="hover:text-orange-500">
                  3D Printer Machines
                </Link>
              </li>
              <li>
                <Link href="/category/3d-printer-electrical-parts" className="hover:text-orange-500">
                  Electrical Parts
                </Link>
              </li>
              <li>
                <Link href="/category/3d-printer-mechanical-parts" className="hover:text-orange-500">
                  Mechanical Parts
                </Link>
              </li>
              <li>
                <Link href="/category/filament" className="hover:text-orange-500">
                  Filament
                </Link>
              </li>
              <li>
                <Link href="/category/resin" className="hover:text-orange-500">
                  Resin
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-white font-semibold mb-4">CUSTOMER CARE</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/return-policy" className="hover:text-orange-500">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-orange-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-orange-500">
                  Lancer3D Shield (Warranty)
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-orange-500">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment methods would go here as images */}
            <span className="text-sm text-gray-400">
              We accept: Visa, MasterCard, Cash on Delivery
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

