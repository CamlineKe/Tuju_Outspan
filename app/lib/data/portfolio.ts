export interface PortfolioItem {
  title: string;
  imagePath?: string; // path under public/images/portfolio/, supplied by the owner
  alt?: string;
}

// Real portfolio work is pending from the owner. The gallery renders branded
// placeholder cards while this list is empty.
export const portfolioItems: PortfolioItem[] = [];
