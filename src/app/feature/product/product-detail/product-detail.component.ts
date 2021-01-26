import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title = "Product Detail";
  product: Product = null;
  productId: number = 0;

  constructor(private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get the detail from the URL
    this.route.params.subscribe(
      parms => {
        this.productId = parms['id']
        console.log("productId = " + this.productId);
      }
    );
    //get product detail by ID
    this.productSvc.getById(this.productId).subscribe(
      resp => {
        this.product = resp as Product;
        console.log('Product :', this.product);
      },
      err => {
        console.log(err);
      }
    );
  }

  // delete the product detail to the database
  delete() {
    this.productSvc.delete(this.product.id).subscribe(
      resp => {
        this.product = resp as Product;
        console.log('Product deleted', this.product);
        this.router.navigateByUrl("/product-list");
      },
      err => {
        console.log(err);
      }
    );
  }
  
}