import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Alert, AlertType } from '@app/model/alert';
import { AlertService } from '@app/service/alert.service';

@Component({
    selector: 'app-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.scss']
})

export class AlertComponent implements OnInit, OnDestroy {
    alert: Alert;
    subscription: Subscription;
    isOpen: boolean;

    constructor(private alertService: AlertService) {
        this.isOpen = false;
    }

    ngOnInit() {
        this.subscription = this.alertService.getAlert().subscribe((alert: Alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alert = null;
                return;
            }
            // add alert to array
            alert.timeout = 5000;
            this.alert = alert;
            this.isOpen = true;
        });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}
