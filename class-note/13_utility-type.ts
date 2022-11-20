interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

//상품목록울 받아오기 위한 API 함수
const fetchProducts = (): Promise<Product[]> => {};

interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

const displayProductDetail = (shoppingItem: {
  id: number;
  name: string;
  price: number;
}) => {};
