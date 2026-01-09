import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.name}`,
  description: `3D printing tips, tutorials, news, and updates from ${siteConfig.name}.`,
};

const blogPosts = [
  {
    id: "1",
    title: "Getting Started with 3D Printing: A Beginner's Guide",
    excerpt: "Everything you need to know to start your 3D printing journey. From choosing your first printer to making your first successful print.",
    date: "January 8, 2026",
    author: "Omega3D Team",
    category: "Guides",
    image: "/blog/placeholder.jpg",
  },
  {
    id: "2",
    title: "PLA vs ABS vs PETG: Which Filament Should You Use?",
    excerpt: "A comprehensive comparison of the most popular 3D printing filaments. Learn the pros, cons, and best use cases for each material.",
    date: "January 5, 2026",
    author: "Omega3D Team",
    category: "Materials",
    image: "/blog/placeholder.jpg",
  },
  {
    id: "3",
    title: "Top 10 3D Printing Tips for Better Print Quality",
    excerpt: "Improve your print quality with these expert tips. From bed leveling to optimal print settings, we cover it all.",
    date: "January 2, 2026",
    author: "Omega3D Team",
    category: "Tips",
    image: "/blog/placeholder.jpg",
  },
  {
    id: "4",
    title: "Resin Printing 101: Getting Started with SLA/DLP",
    excerpt: "Dive into the world of resin 3D printing. Learn about safety, post-processing, and achieving high-detail prints.",
    date: "December 28, 2025",
    author: "Omega3D Team",
    category: "Guides",
    image: "/blog/placeholder.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            3D printing tips, tutorials, news, and updates
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold opacity-20">3D</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="h-4 w-4" />
                    {post.author}
                  </span>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="flex items-center gap-1 text-orange-500 hover:text-orange-600 font-medium text-sm"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Stay updated with the latest 3D printing news and tutorials
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

