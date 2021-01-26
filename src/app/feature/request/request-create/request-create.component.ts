import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  title = 'Request Create';
  request: Request = new Request();
  submitBtnTitle = 'Create';

  constructor(private requestSvc: RequestService, private router: Router) {}

  ngOnInit(): void {}
  save() {
    // save the request to the DB
    this.requestSvc.create(this.request).subscribe(
      (resp) => {
        this.request = resp as Request;
        console.log('Request created', this.request);
        // forward to the request list component
        this.router.navigateByUrl('/request-list');
      },
      (err) => {
        console.log(err);
      }
    )
  }
}