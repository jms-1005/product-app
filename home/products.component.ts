import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './productList/plist.service'

@Component({
	selector: "Products",
	moduleId: module.id,
	templateUrl: "./products.component.html",
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	totalItems: number = 0;

	constructor(private router: RouterExtensions, private active: ActivatedRoute, private ps: ProductService) {
	}

	ngOnInit(): void {

		this.ps.obCart.subscribe(cart => {
			console.log('cart length', cart);
			this.totalItems = cart.length;
		});

		this.router.navigate([{
			outlets: {
				home: ['home'],
				products: ['products'],
				cart: ['cart']
			}
		}], { relativeTo: this.active } );
	}
}