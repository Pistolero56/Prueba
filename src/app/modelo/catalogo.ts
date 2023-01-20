export interface Catalogo {
  id: Number;
  title: String;
  description: String
  price: Number;
  discountPercentage: Number;
  rating: Number;
  stock: Number;
  brand: String;
  category: String;
  thumbnail: String;
  images: String[]
}

export interface Listar {
  products: String[];
  total: Number;
  skip: Number;
  limit: Number;

}
