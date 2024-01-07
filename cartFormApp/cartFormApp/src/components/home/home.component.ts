import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CartComponent } from '../cart/cart.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent,UserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
