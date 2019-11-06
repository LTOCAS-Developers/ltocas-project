import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {  RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { ClientFilterPipe } from './admin/clientFilter.pipe';
import { ClientDataResolverService } from './admin/client-data-resolver.service';
import { ClientDetailsGuardService } from './admin/client-details.gaurd.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialogue.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateClientCanDeactivateGuardService } from './admin/create-client-candeactivate-gaurd-service';
import { CreateBatchComponent } from './client/create-batch/create-batch.component';
import { CreateQuestionsComponent } from './client/question/create-questions/create-questions.component';
import { ListBatchComponent } from './client/create-batch/list-batch/list-batch.component';
import { NewBatchComponent } from './client/create-batch/new-batch/new-batch.component';
import { QuestionPaperComponent } from './client/question-paper/question-paper.component';
import { CreateQuestionpaperComponent } from './client/question-paper/create-questionpaper/create-questionpaper.component';
import { ListQuestionpaperComponent } from './client/question-paper/list-questionpaper/list-questionpaper.component';
import { SearchQuestionpaperComponent } from './client/question-paper/search-questionpaper/search-questionpaper.component';
import { QuestionPaperDataResolverService } from './client/question-paper-resolved-data';
import { CourseComponent } from './client/course/course.component';
import { ListCourseComponent } from './client/course/list-course/list-course.component';
import { NewCourseComponent } from './client/course/new-course/new-course.component';
import { CourseDataResolverService } from './client/course/course-data-resolver.service';
import { TopicComponent } from './client/topic/topic.component';
import { NewTopicComponent } from './client/topic/new-topic/new-topic.component';
import { ListTopicComponent } from './client/topic/list-topic/list-topic.component';
import { TopicDataResolverService } from './client/topic/topic-data-resolver.service';
import { BatchDataResolverService } from './client/create-batch/batch-data-resolver.service';
import { QuestionComponent } from './client/question/question.component';
import { ListQuestionsComponent } from './client/question/list-questions/list-questions.component';
import { QuestionsDataResolverService } from './client/question/questions-resolved-data';
import { DisplayQuestionComponent } from './client/question/display-question/display-question.component';
import { DisplayQuestionPaperComponent } from './client/question-paper/display-question-paper/display-question-paper.component';
import { QuestionPaperAssoComponent } from './client/question-paper/question-paper-asso/question-paper-asso.component';

import { DisplayCoursesComponent } from './client/course/display-courses/display-courses.component';

   
    

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ClientFilterPipe,
    ConfirmationDialogComponent,
    CreateBatchComponent,
    CreateQuestionsComponent,
    ListBatchComponent,
    NewBatchComponent,
    QuestionPaperComponent,
    CreateQuestionpaperComponent,
    ListQuestionpaperComponent,
    SearchQuestionpaperComponent,
    CourseComponent,
    ListCourseComponent,
    NewCourseComponent,
    TopicComponent,

    NewTopicComponent,
    ListTopicComponent,
    QuestionComponent,
    ListQuestionsComponent,
    DisplayQuestionComponent,
    DisplayQuestionPaperComponent,
    QuestionPaperAssoComponent,
   
    DisplayCoursesComponent ],
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
    MatCheckboxModule ,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule
  ],
  providers: [ClientDataResolverService,ClientDetailsGuardService,ConfirmationDialogService,
    BatchDataResolverService,QuestionPaperDataResolverService,CreateClientCanDeactivateGuardService,CourseDataResolverService,
    TopicDataResolverService,QuestionsDataResolverService],
  
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmationDialogComponent ]

})
export class AppModule { }
