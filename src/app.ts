import 'reflect-metadata';

import _ from 'lodash';
// import { plainToClass } from '../node_modules/class-transformer/types/index';
import { Product } from './product.model';

import { plainToClass } from 'class-transformer';

const products = [
    {
        title: 'A Carpet',
        price: 29.99
    },
    {
        title: 'A Book',
        price: 10.99
    }
];

// const p1 = new Product('A Book', 12.99);

// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price);
// })

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}

// console.log(p1.getInformation());
