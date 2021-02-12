import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  title = "Request Detail";
  request: Request = null;
  requestId: number = 0;

  constructor(private requestSvc: RequestService,
                      private router: Router,
                      private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get the detail from the URL
    this.route.params.subscribe(
      parms => {
        this.requestId = parms['id']
        console.log("requestId = " + this.requestId);
      }
    );
    //get request detail by ID
    this.requestSvc.getById(this.requestId).subscribe(
      resp => {
        this.request = resp as Request;
        console.log('Request :', this.request);
      },
      err => {
        console.log(err);
      }
    );
  }

  // delete the request detail to the database
  delete() {
    this.requestSvc.delete(this.request.id).subscribe(
      resp => {
        this.request = resp as Request;
        console.log('Request deleted', this.request);
        this.router.navigateByUrl("/request-list");
      },
      err => {
        console.log(err);
      }
    );
  }
  
}