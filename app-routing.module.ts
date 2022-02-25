import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './home/products.component';
import { PhomeComponent } from './home/productHome/phome.component';
import { PlistComponent } from './home/productList/plist.component';
import { CartComponent } from './home/cart/cart.component'

const routes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "products", component: ProductsComponent, children: [
            { path: 'home', component: PhomeComponent, outlet: 'home' },
            { path: 'products', component: PlistComponent, outlet: 'products' },
            { path: 'cart', component: CartComponent, outlet: 'cart' }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
