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
import { CreateBatchComponent } from './client/create-batch/create-batch.component';
import { CreateQuestionsComponent } from './client/create-questions/create-questions.component';
import { CreateQuestionPaperComponent } from './client/create-question-paper/create-question-paper.component';
import { ListBatchComponent } from './client/create-batch/list-batch/list-batch.component';
import { NewBatchComponent } from './client/create-batch/new-batch/new-batch.component';
import { BatchDataResolverService } from './client/create-batch/batch-data-resolver.service';
import { CourseComponent } from './client/course/course.component';
import { ListCourseComponent } from './client/course/list-course/list-course.component';
import { NewCourseComponent } from './client/course/new-course/new-course.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ClientFilterPipe,
    ConfirmationDialogComponent,
    CreateBatchComponent,
    CreateQuestionsComponent,
    CreateQuestionPaperComponent,
    ListBatchComponent,
    NewBatchComponent,
    CourseComponent,
    ListCourseComponent,
    NewCourseComponent,
    
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
  providers: [ClientDataResolverService,ClientDetailsGuardService,ConfirmationDialogService,
    BatchDataResolverService,CreateClientCanDeactivateGuardService],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmationDialogComponent ]

})
export class AppModule { }
