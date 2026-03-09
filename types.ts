export interface PageInfo {
  id: number;
  title: string;
  category?: string;
  imageUrl: string;
}

export interface SubCategory {
  name: string;
  pages: PageInfo[];
}

export interface Category {
  name: string;
  pages?: PageInfo[];            // Direct pages (e.g., Pre-Primary)
  subCategories?: SubCategory[]; // Nested groups (e.g., Primary → Hindi, Telugu…)
}

export enum NavigationDirection {
  PREV = -1,
  NEXT = 1,
}