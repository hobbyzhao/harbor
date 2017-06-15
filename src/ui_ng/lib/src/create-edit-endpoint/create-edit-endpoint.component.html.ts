export const CREATE_EDIT_ENDPOINT_TEMPLATE: string = `<clr-modal [(clrModalOpen)]="createEditDestinationOpened" [clrModalStaticBackdrop]="staticBackdrop" [clrModalClosable]="closable">
  <h3 class="modal-title">{{modalTitle}}</h3>
  <hbr-inline-alert class="modal-title" (confirmEvt)="confirmCancel($event)"></hbr-inline-alert>
  <div class="modal-body">
    <div class="alert alert-warning" *ngIf="!editable">
      <div class="alert-item">
        <span class="alert-text">
          {{'DESTINATION.CANNOT_EDIT' | translate}}
        </span>
      </div>
    </div>
    <form #targetForm="ngForm">
      <section class="form-block">
        <div class="form-group">
          <label for="destination_name" class="col-md-4 form-group-label-override">{{ 'DESTINATION.NAME' | translate }}<span style="color: red">*</span></label>
          <label class="col-md-8" for="destination_name" aria-haspopup="true" role="tooltip" [class.invalid]="targetName.errors && (targetName.dirty || targetName.touched)" [class.valid]="targetName.valid" class="tooltip tooltip-validation tooltip-sm tooltip-bottom-left">
            <input type="text" id="destination_name" [disabled]="testOngoing" [readonly]="!editable" [(ngModel)]="target.name" name="targetName" size="20" #targetName="ngModel" required  (keyup)="changedTargetName($event)"> 
            <span class="tooltip-content" *ngIf="targetName.errors && targetName.errors.required && (targetName.dirty || targetName.touched)">
              {{ 'DESTINATION.NAME_IS_REQUIRED' | translate }}
            </span>
          </label>
        </div>
        <div class="form-group">
          <label for="destination_url" class="col-md-4 form-group-label-override">{{ 'DESTINATION.URL' | translate }}<span style="color: red">*</span></label>
          <label class="col-md-8" for="destination_url" aria-haspopup="true" role="tooltip" [class.invalid]="targetEndpoint.errors && (targetEndpoint.dirty || targetEndpoint.touched)" [class.valid]="targetEndpoint.valid" class="tooltip tooltip-validation tooltip-sm tooltip-bottom-left">
            <input type="text" id="destination_url" [disabled]="testOngoing" [readonly]="!editable" [(ngModel)]="target.endpoint" size="20" name="endpointUrl" #targetEndpoint="ngModel" required (keyup)="clearPassword($event)">
            <span class="tooltip-content" *ngIf="targetEndpoint.errors && targetEndpoint.errors.required && (targetEndpoint.dirty || targetEndpoint.touched)">
              {{ 'DESTINATION.URL_IS_REQUIRED' | translate }}
            </span>
          </label>
        </div>
        <div class="form-group">
          <label for="destination_username" class="col-md-4 form-group-label-override">{{ 'DESTINATION.USERNAME' | translate }}</label>
          <input type="text" class="col-md-8" id="destination_username" [disabled]="testOngoing" [readonly]="!editable" [(ngModel)]="target.username" size="20" name="username" #username="ngModel"  (keyup)="clearPassword($event)">
        </div>
        <div class="form-group">
          <label for="destination_password" class="col-md-4 form-group-label-override">{{ 'DESTINATION.PASSWORD' | translate }}</label>
          <input type="password" class="col-md-8" id="destination_password" [disabled]="testOngoing" [readonly]="!editable" [(ngModel)]="target.password" size="20" name="password" #password="ngModel" (focus)="clearPassword($event)">
        </div>
        <div class="form-group">
          <label for="spin" class="col-md-4"></label>
          <span class="col-md-8 spinner spinner-inline" [hidden]="!testOngoing"></span>
          <span [style.color]="!pingStatus ? 'red': ''" class="form-group-label-override">{{ pingTestMessage }}</span>
        </div>
      </section>
    </form>
  </div>
  <div class="modal-footer">
      <button type="button" class="btn btn-outline" (click)="testConnection()" [disabled]="testOngoing || targetEndpoint.errors">{{ 'DESTINATION.TEST_CONNECTION' | translate }}</button>
      <button type="button" class="btn btn-outline" (click)="onCancel()"  [disabled]="testOngoing">{{ 'BUTTON.CANCEL' | translate }}</button>
      <button type="submit" class="btn btn-primary" (click)="onSubmit()"  [disabled]="testOngoing || targetForm.form.invalid || !editable">{{ 'BUTTON.OK' | translate }}</button>
  </div>
</clr-modal>`;