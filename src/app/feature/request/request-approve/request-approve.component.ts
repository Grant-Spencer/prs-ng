import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LineItem } from 'src/app/model/line-item.class';
import { Request } from 'src/app/model/request.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css'],
})
export class RequestApproveComponent implements OnInit {
  requestTitle = 'PurchaseRequest Line Items';
  request: Request = new Request();
  requestId: number = 0;
  linesTitle = 'Lines';
  lineItems: LineItem[] = [];
  approveBtnTitle = 'Approve';
  rejectBtnTitle = 'Reject';

  constructor(
    private requestSvc: RequestService,
    private lineItemSvc: LineItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get the id from the url
    this.route.params.subscribe((parms) => {
      if (parms['requestId'] && parms['getById']) {
        this.lineItemSvc.delete(parms['getById']).subscribe((resp) => {
          this.router.navigateByUrl('/request-lines/' + parms['requestId']);
        });
      }
      if (parms['id']) {
        this.requestId = parms['id'];
      }
    });
    // get request by id
    this.requestSvc.getById(this.requestId).subscribe(
      (resp) => {
        this.request = resp as Request;
      },
      (err) => {
        console.log(err);
      }
    );

    // get lineitems by request ID
    this.lineItemSvc.getlineItemByRequestId(this.requestId).subscribe(
      (resp) => {
        console.log('line item resp: ', resp);
        this.lineItems = resp as LineItem[];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // approve
  approveRequest() {
    this.requestSvc.approveRequest(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        this.router.navigateByUrl("/request-review");
      }
    );
  }

  // reject
  rejectRequest() {
    this.requestSvc.rejectRequest(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        // forward to request review
        this.router.navigateByUrl("/request-review");

    });
  }
}