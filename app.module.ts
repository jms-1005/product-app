import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptFormsModule } from '@nativescript/angular';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './home/products.component';
import { PhomeComponent } from './home/productHome/phome.component'
import { PlistComponent } from './home/productList/plist.component'
import { CartComponent } from './home/cart/cart.component'


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent, HomeComponent, ProductsComponent, PhomeComponent, PlistComponent, CartComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
