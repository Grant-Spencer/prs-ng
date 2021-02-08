import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { Vendor } from 'src/app/model/vendor.class';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title = "Product Edit";
  product: Product = null;
  productId: number = 0;
  vendors: Vendor[] = [];
  submitBtnTitle = "Edit";

  constructor(private productSvc: ProductService, private router: Router, private route: ActivatedRoute, private vendorSvc: VendorService) { }

  ngOnInit(): void {
  // get the id from the url
  this.route.params.subscribe(
    parms => {this.productId = parms['id'];
  console.log("ProductID = " + this.productId);
  });
  // get product by id
  this.productSvc.getById(this.productId).subscribe(
    resp => {
      this.product = resp as Product;
      console.log("Product", this.product);
    },
    err => {
      console.log(err);
    }
  );
}


save() {
  // save the product to the DB
  this.productSvc.update(this.product).subscribe(
    resp => {
      this.product = resp as Product;
      console.log("Product updated", this.product);
      // forward to the product list componenet
      this.router.navigateByUrl("/product-list");
    },
    err => {
      console.log(err);
    }
  );
  
  // get vendors
  this.vendorSvc.getAll().subscribe(
    (resp) => {
      this.vendors = resp as Vendor[];
    },
    (err) => {
      console.log(err);
    }
  );
}
compVendor(a: Vendor, b: Vendor): boolean {
  return a && b && a.id === b.id;
}


}