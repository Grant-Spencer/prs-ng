import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { User } from 'src/app/model/user.class';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  title = "Request Edit";
  request: Request = null;
  requestId: number = 0;
  users: User[] = [];
  submitBtnTitle = "Edit";

  constructor(private requestSvc: RequestService, private userSvc: UserService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
  // get the id from the url
  this.route.params.subscribe(
    parms => {this.requestId = parms['id'];
  console.log("RequestID = " + this.requestId);
  });
  // get request by id
  this.requestSvc.getById(this.requestId).subscribe(
    resp => {
      this.request = resp as Request;
      console.log("Request", this.request);
    },
    err => {
      console.log(err);
    }
  );
}

save() {
  // save the request to the DB
  this.requestSvc.update(this.request).subscribe(
    resp => {
      this.request = resp as Request;
      console.log("Request updated", this.request);
      // forward to the request list componenet
      this.router.navigateByUrl("/request-list");
    },
    err => {
      console.log(err);
    }
  );
  // get users
  this.userSvc.getAll().subscribe(
    (resp) => {
      this.users = resp as User[];
    },
    (err) => {
      console.log(err);
    }
  );
}
compUser(a: User, b: User): boolean {
  return a && b && a.id === b.id;

}

}