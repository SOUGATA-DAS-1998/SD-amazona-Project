import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Sougata',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: true,
    },
    {
      name: 'Raja',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Peter England Slim shirt',
      slug: 'peter-england-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', // 679px × 829px
      price: 1649,
      countInStock: 10,
      brand: 'Peter',
      rating: 4.5,
      numReviews: 17,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 999,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Parx Casual Shirt',
      slug: 'parx-casual-shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 1299,
      countInStock: 15,
      brand: 'Parx',
      rating: 3.8,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Buffalo Casual Shirt',
      slug: 'buffalo-casual-shirt',
      category: 'Shirts',
      image: '/images/p4.jpg',
      price: 1099,
      countInStock: 5,
      brand: 'Buffalo',
      rating: 4.2,
      numReviews: 13,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Denim Fit Pant',
      slug: 'denim-fit-pant',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 699,
      countInStock: 5,
      brand: 'Denim',
      rating: 4.5,
      numReviews: 19,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Levi`s Formal Pant',
      slug: 'levis-formal-pant',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 1499,
      countInStock: 0,
      brand: 'Levis',
      rating: 4.0,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Spykar Jeans Pant',
      slug: 'spykar-jeans-pant',
      category: 'Pants',
      image: '/images/p7.jpg',
      price: 1199,
      countInStock: 13,
      brand: 'Spykar',
      rating: 3.5,
      numReviews: 15,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Killer Jeans Pant',
      slug: 'killer-jeans-pant',
      category: 'Pants',
      image: '/images/p8.jpg',
      price: 899,
      countInStock: 8,
      brand: 'Levis',
      rating: 3.2,
      numReviews: 13,
      description: 'high quality product',
    },
  ],
};
export default data;
