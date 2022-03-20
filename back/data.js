import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Sibajene',
      email: 'sikassiba@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Graduation gowns',
      slug: 'graduation-gowns',
      category: 'Shirts',
      image: 'https://res.cloudinary.com/ecotuulecloud/image/upload/v1646916356/ecotuule/bllue-removebg-preview_bnmzms.png', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Graduation gown',
      slug: 'graduation-gown',
      category: 'Shirts',
      image: 'https://res.cloudinary.com/ecotuulecloud/image/upload/v1646916349/ecotuule/cream-removebg-preview_wwen7e.png',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Graduationgown',
      slug: 'graduation-gownss',
      category: 'Pants',
      image: 'https://res.cloudinary.com/ecotuulecloud/image/upload/v1646916349/ecotuule/meroon-removebg-preview_yimxxq.png',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Gown',
      slug: 'gown',
      category: 'Pants',
      image: 'https://res.cloudinary.com/ecotuulecloud/image/upload/v1646914663/ecotuule/green-removebg-preview_p4hr8e.png',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
