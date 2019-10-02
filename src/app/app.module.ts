import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {  RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { ClientFilterPipe } from './admin/clientFilter.pipe';
import { ClientDataResolverService } from './admin/client-data-resolver.service';
import { ClientDetailsGuardService } from './admin/client-details.gaurd.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialogue.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateClientCanDeactivateGuardService } from './admin/create-client-candeactivate-gaurd-service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ClientFilterPipe,
    ConfirmationDialogComponent
        ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule
  ],
  providers: [ClientDataResolverService,ClientDetailsGuardService,ConfirmationDialogService,CreateClientCanDeactivateGuardService],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmationDialogComponent ]

})
export class AppModule { }
