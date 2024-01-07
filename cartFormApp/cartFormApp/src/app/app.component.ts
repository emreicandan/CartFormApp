import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartComponent } from '../components/cart/cart.component';
import {NgIconComponent , provideIcons} from '@ng-icons/core';
import { heroShoppingCart } from '@ng-icons/heroicons/outline';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CartComponent,RouterLink,NgIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders:[provideIcons({heroShoppingCart})]
})
export class AppComponent {
  title = 'cartFormApp';
}
