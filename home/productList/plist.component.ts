import { Component, OnInit } from "@angular/core";
import { ProductService } from './plist.service';
import { Product } from '../product.interface'


@Component({
	selector: "Plist",
	moduleId: module.id,
	templateUrl: "./plist.component.html",
	styleUrls: ['./plist.component.css']
})
export class PlistComponent implements OnInit {

	products: Product[] = [];

	constructor(private ps: ProductService) {
	}

	listProducts() {
		this.ps.obProduct.subscribe(productList => {
			this.products = productList
			// console.log(response);
			// let ids = Object.keys(response);
			// ids.forEach(id => {
			// 	this.products.push({
			// 		productName: response[id].productName,
			// 		image: response[id].image,
			// 		price: response[id].price,
			// 		rating: response[id].rating
			// 	})
			// })
			console.log('products ', this.products);

		})
	}

	addToCart(productName, qty, price) {
		let newCartItem = {
			productName: productName,
			qty: qty,
			price: price
		}
		this.ps.addToCart(newCartItem);
		
		
	}

	ngOnInit(): void {
		this.listProducts()
	}
}