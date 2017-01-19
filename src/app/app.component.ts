import { Component ,DoCheck} from '@angular/core';
import { AuthGuard } from './auth.guard';
import { AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
      private isLogined;

      mobileView:number = 992;
    toggle:boolean = false;

    constructor(private authGuard: AuthGuard, private as: AuthenticationService) {
        this.attachEvents();
    }
    
  testLogined(){
    this.isLogined = this.authGuard.isLogined()
  }
      ngDoCheck() {
        this.testLogined();
    }


    attachEvents() {
        window.onresize = ()=> {
            if (this.getWidth() >= this.mobileView) {
                if (localStorage.getItem('toggle')) {
                    this.toggle = !localStorage.getItem('toggle') ? false : true;
                } else {
                    this.toggle = true;
                }
            } else {
                this.toggle = false;
            }
        }
    }

    getWidth() {
        return window.innerWidth;
    }

    toggleSidebar() {
        this.toggle = !this.toggle;
        localStorage.setItem('toggle', this.toggle.toString());
    }
    logout(){
        this.logout();
    }

}
