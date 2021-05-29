import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private myRouter: Router) { }

  ngOnInit(): void {
  }

  getToken(){
    return localStorage.getItem("myAppToken");
}

    logout(){
      localStorage.clear();
      this.myRouter.navigate(['/login']);
    }
}
