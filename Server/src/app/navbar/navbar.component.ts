import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  route: any = '';

  constructor() { }

  ngOnInit() {
    this.route = 'about';
  }

  navClick(cRoute) {
    this.route = cRoute;
  }
}
