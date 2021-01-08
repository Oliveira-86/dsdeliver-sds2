import { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import StepsHeader from './StepsHeader';
import ProductList from './ProductList';
import OrderLocation from './OrderLocation';

import './styles.css'
import { OrderLocationdata, Product } from './Types';


function Orders() {
    
    const [products, setProducts] = useState<Product[]>([]);

    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        
       <div className="orders-container">
           <StepsHeader />
           <ProductList products={products} />
           <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
       </div>
    )
}

export default Orders;