import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Cart } from '../../models/cart';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import {NgIconComponent , provideIcons} from '@ng-icons/core'
import {heroArrowUp ,heroArrowDown} from '@ng-icons/heroicons/outline'

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,NgIconComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  viewProviders: [provideIcons({ heroArrowUp,heroArrowDown})]
})
export class CartComponent implements OnInit {
  carts:Cart[]=[]
  products:Product[]=[];
  constructor(public cartService:CartService , private productService:ProductService){}
  ngOnInit(): void {
    this.carts
  }
  getUserCart(){
    return this.cartService.getUserCart()
  }
  getProduct(){
    this.productService.getAll().subscribe(res=>{
      this.products=res
    })
  }

}