import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';
import { UserService } from './user.service';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    textFieldValue: string = "";
    email;
    password;

    constructor(private router: RouterExtensions, private us: UserService) {
    }

    loginUser() {
        let user = {
            email: this.email,
            password: this.password,
            returnSecureToken: true
        }
        // this.us.login(user).subscribe(response => {

        //     if (response.localId) {
        //         this.router.navigate(['/products'], { clearHistory: true });
        //     }
        // })
        this.router.navigate(['/products'], { clearHistory: false });
    }

    signUp() {
        let user = {
            email: this.email,
            password: this.password,
            returnSecureToken: true
        }
        //console.log(user);
        this.us.signUp(user).subscribe(response => {
            console.log(response);
        })
    }

    ngOnInit(): void {

    }
}
