import express from 'express';
// import data from './data.js';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import uploadRouter from './routes/uploadRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

// MiddleWares
// By having this default data in the post request will be converted to JSON object inside req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API ENDSPOINTS Defining
//Paypal api
app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

// For image upload routes
app.use('/api/upload', uploadRouter);

// This is seedrouter From routes folder
app.use('/api/seed', seedRouter);

// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });

// Instead of the above code which is taking data from static we are using the below code which is fetching data from mongodb

app.use('/api/products', productRouter);

// This below codes are copied to productRoutes.js
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// app.get('/api/products/slug/:slug', (req, res) => {
//   const product = data.products.find((x) => x.slug === req.params.slug);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });

// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });

app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000; // Here the process.env.PORT convention is to access to the free Ports

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
