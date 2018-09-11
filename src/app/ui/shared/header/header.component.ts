import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/service/user.service';

import { User } from '@app/model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  isCollapsed = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.userService.watchStorage().subscribe(event => {
      this.user = event.newValue;
    });
  }
}
