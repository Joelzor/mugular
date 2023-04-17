export interface ProductI {
  category: string;
  id: string;
  description: string;
  featured: boolean;
  name: string;
  price: number;
  reviews: number;
  stars: number;
  stock: number;
  images: ImageI[];
  shipping: boolean;
}

export interface ProductListI {
  category: string;
  id: string;
  description: string;
  featured: boolean;
  name: string;
  price: number;
  reviews: number;
  stars: number;
  stock: number;
  image: string;
  shipping: boolean;
}

export interface ImageI {
  filename: string;
  id: string;
  type: string;
  size: number;
  height: number;
  width: number;
  url: string;
  thumbnails: {
    full: {
      height: number;
      url: string;
      width: number;
    };
    large: {
      height: number;
      url: string;
      width: number;
    };
    small: {
      height: number;
      url: string;
      width: number;
    };
  };
}
