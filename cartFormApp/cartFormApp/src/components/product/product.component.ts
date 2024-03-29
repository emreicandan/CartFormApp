import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  productList:Product[]=[]
  constructor(private productService:ProductService, private cartService:CartService){}
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    return this.productService.getAll().subscribe(res=>{
      this.productList=res;
    })
  }
  addCart(product:Product){
    this.cartService.addProductInCart(product);
  }
}
