interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

//상품목록울 받아오기 위한 API 함수
const fetchProducts = (): Promise<Product[]> => {
  //
};

interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

//1. Pick - 타입 뽑아와 사용하기
//Pick <타입, 타입에서 뽑아와 사용할 요소들>
//type을 중복해서 설정하지 않아도(ex-Product, ProductDetail)
//utility의 pick을 사용하면 이미 정의되어있는 타입에서 필요한 요소만 뽑아와 사용할 수 있다
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;

//2. Omit - 타입에서 일정부분 제거해서 사용하기
//Omit<타입, 타입에서 제거할 요소들>
interface AdressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}

const phoneBook: Omit<AdressBook, 'address'> = {
  name: '재택근무',
  phone: 12345678,
  company: '내 방',
};

const Chingtao: Omit<AdressBook, 'address' | 'company'> = {
  name: '중국집',
  phone: 910111213,
};

//3. partial
//특정 상품 정보를 갱신

interface UpdateProduct {
  id?: number;
  name?: string;
  price?: number;
  brand?: string;
  stock?: number;
}

//partial<Product>는 위의 UpdateProduct와 동일한 효과를 낸다.
const updataProductItem = (productItem: Partial<Product>) => {};
