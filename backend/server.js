import express from 'express';
import products from './data/products.js';

const port = 3000;

const app = express();  

app.get('/',( req,res)=>{
    res.send('Techmart Backend Server is running');
});

app.get('/api/products',( req,res)=>{
    res.json(products)
});

app.get('/api/products/:id',(req,res)=>{
  const requestedProduct = products.find((product)=>product._id === req.params.id);
  res.json(requestedProduct); 
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}); 


