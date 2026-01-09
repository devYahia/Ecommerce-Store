// Re-export Prisma types
export type {
  User,
  Product,
  Category,
  Brand,
  Order,
  OrderItem,
  CartItem,
  WishlistItem,
  Review,
  ServiceRequest,
  ProductVariant,
  ProductImage,
  Address,
  Banner,
  BlogPost,
  Page,
} from "@/generated/prisma";

// Custom types for the application

export interface ProductWithRelations {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  shortDescription: string | null;
  price: number;
  compareAtPrice: number | null;
  quantity: number;
  sku: string | null;
  status: string;
  isFeatured: boolean;
  isNew: boolean;
  rewardPoints: number;
  brand: {
    id: string;
    name: string;
    slug: string;
  } | null;
  categories: {
    category: {
      id: string;
      name: string;
      slug: string;
    };
  }[];
  images: {
    id: string;
    url: string;
    alt: string | null;
    sortOrder: number;
  }[];
  variants: {
    id: string;
    name: string;
    price: number;
    compareAtPrice: number | null;
    quantity: number;
    options: Record<string, string>;
  }[];
  _count?: {
    reviews: number;
  };
}

export interface CategoryWithCount {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  _count: {
    products: number;
  };
  children?: CategoryWithCount[];
}

export interface CartItemWithProduct {
  id: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    compareAtPrice: number | null;
    images: { url: string }[];
  };
  variant?: {
    id: string;
    name: string;
    price: number;
    options: Record<string, string>;
  } | null;
}

export interface OrderWithItems {
  id: string;
  orderNumber: string;
  status: string;
  paymentStatus: string;
  subtotal: number;
  shippingCost: number;
  discountAmount: number;
  total: number;
  createdAt: Date;
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    total: number;
    options: Record<string, string> | null;
  }[];
}

export interface FilterOptions {
  categories?: string[];
  brands?: string[];
  colors?: string[];
  sizes?: string[];
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  onSale?: boolean;
  isNew?: boolean;
}

export interface SortOption {
  label: string;
  value: string;
  field: string;
  order: "asc" | "desc";
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasMore: boolean;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ServiceRequestFormData {
  serviceType: "PRINTING_3D" | "MAINTENANCE" | "TRAINING";
  name: string;
  email: string;
  phone: string;
  // 3D Printing specific
  fileUrl?: string;
  material?: string;
  color?: string;
  quantity?: number;
  // Maintenance specific
  printerBrand?: string;
  printerModel?: string;
  issueDescription?: string;
  // Common
  notes?: string;
}

// Navigation types
export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// Search types
export interface SearchResult {
  products: ProductWithRelations[];
  categories: CategoryWithCount[];
  total: number;
}

