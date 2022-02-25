import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, Cart } from '../product.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    products: Product[] = []; //data container 
    latestProductList = new BehaviorSubject(null); // OBSERVABLE INSTANCE
    obProduct = this.latestProductList.asObservable(); // Observable to watch

    cart: Cart[] = [];
    latestCartList = new BehaviorSubject(null);
    obCart = this.latestCartList.asObservable();

    constructor(private http: HttpClient) {
        this.getProducts().subscribe(response => {
            let ids = Object.keys(response);
            ids.forEach(id => {
                this.products.push({
                    productName: response[id].productName,
                    image: response[id].image,
                    price: response[id].price,
                    rating: response[id].rating
                }) 
            })
            this.latestProductList.next(this.products); // Use next to update the observable
        })
    }

    getProducts() {
        return this.http.get('https://products-96aa0-default-rtdb.firebaseio.com/Products.json');
    }

    addProduct(product: Product) {
        this.http.post('https://products-96aa0-default-rtdb.firebaseio.com/Products.json', product).subscribe(newProductID => {
            console.log(newProductID);
            this.products.push(product);
            this.latestProductList.next(this.products);
        });
    }

    addToCart(cartitem:Cart) {
        this.cart.push(cartitem); 
        this.latestCartList.next(this.cart);   
    }

}