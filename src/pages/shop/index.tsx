import Head from 'next/head';
import React from 'react';
import Product from '../../components/Product';
import products from '../../data/products';

const Shop = () => (
    <div>
        <Head>
            <title>Devmite | Shop</title>
            <link rel="icon" href="/devicon.ico" />
        </Head>

        <div className="container flex flex-wrap justify-center gap-x-8 gap-y-10">
            {products.map((product) => (
                <Product
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                />
            ))}
        </div>
    </div>
);

export default Shop;
