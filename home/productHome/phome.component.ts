import { Component, OnInit } from "@angular/core";
import { ProductService } from '../productList/plist.service';


@Component({
	selector: "Phome",
	moduleId: module.id,
	templateUrl: "./phome.component.html",
	styleUrls: ['./phome.component.css']
})
export class PhomeComponent implements OnInit {
	textFieldValue: string = "";
	productName;
	image;
	price;
	rating;


	constructor(private ps: ProductService) {
	}

	addProduct() {
		let product = {
			productName: this.productName,
			image: this.image,
			price: this.price,
			rating: this.rating
		}

		// console.log(product);
		
		this.ps.addProduct(product).subscribe(response => {
			console.log('product home', response);
		})
	}

	ngOnInit(): void {

	}
}