import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  title = "Vendor Detail";
  vendor: Vendor = null;
  vendorId: number = 0;

  constructor(private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get the detail from the URL
    this.route.params.subscribe(
      parms => {
        this.vendorId = parms['id']
        console.log("vendorId = " + this.vendorId);
      }
    );
    //get vendor detail by ID
    this.vendorSvc.getById(this.vendorId).subscribe(
      resp => {
        this.vendor = resp as Vendor;
        console.log('Vendor :', this.vendor);
      },
      err => {
        console.log(err);
      }
    );
  }

  // delete the vendor detail to the database
  delete() {
    this.vendorSvc.delete(this.vendor.id).subscribe(
      resp => {
        this.vendor = resp as Vendor;
        console.log('Vendor deleted', this.vendor);
        this.router.navigateByUrl("/vendor-list");
      },
      err => {
        console.log(err);
      }
    );
  }
  
}