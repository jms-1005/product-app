import { Component, OnInit } from "@angular/core";
import { Cart } from './../product.interface';
import { ProductService } from '../productList/plist.service';

@Component({
	selector: "Cart",
	moduleId: module.id,
	templateUrl: "./cart.component.html",
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	cart: Cart[] = [];
	constructor(private ps:ProductService) {
	}

	ngOnInit(): void {
		this.ps.obCart.subscribe(cartitems => {
			this.cart = cartitems;
		})
	}
}