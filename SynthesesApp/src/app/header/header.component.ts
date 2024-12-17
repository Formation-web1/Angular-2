import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
// import { User } from './models/User';
import { User } from './models/User';
@Component({
  selector: 'app-header',
  imports: [FooterComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Fix typo
})
export class HeaderComponent{
  users: User[] = []; // Declare users array

  ngOnInit() {  
    this.users = [  
      new User(1, 'Alice', 'alice@example.com'),  
      new User(2, 'Bob', 'bob@example.com'),  
      new User(3, 'Charlie', 'charlie@example.com'),  
    ];  
    console.log(this.users);  
  }
}
