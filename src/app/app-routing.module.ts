import { DisplayQuestionComponent } from './client/question/display-question/display-question.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginpageComponent } from './admin/admin-loginpage/admin-loginpage.component';
import { HomeComponent } from './home/home.component';
import { ClientLoginpageComponent } from './client/client-loginpage/client-loginpage.component';
import { UserLoginpageComponent } from './user/user-loginpage/user-loginpage.component';
import { UserRegistrationpageComponent } from './user/user-registrationpage/user-registrationpage.component'
import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
import { ClientPortalComponent } from './client/client-portal/client-portal.component';
import { UserPortalComponent } from './user/user-portal/user-portal.component';
import { CreateClientComponent } from './admin/create-client/create-client.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ClientDashboardComponent } from './client/client-dashboard/client-dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { ListClientComponent } from './admin/list-client/list-client.component';
import { DisplaysClientComponent } from './admin/displays-client/displays-client.component';
import { ClientDataResolverService } from './admin/client-data-resolver.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { ClientDetailsGuardService } from './admin/client-details.gaurd.service';
import { CreateClientCanDeactivateGuardService } from './admin/create-client-candeactivate-gaurd-service';
import { ListBatchComponent } from './client/create-batch/list-batch/list-batch.component';
import { CreateBatchComponent } from './client/create-batch/create-batch.component';
import { NewBatchComponent } from './client/create-batch/new-batch/new-batch.component';
import { ListQuestionpaperComponent } from './client/question-paper/list-questionpaper/list-questionpaper.component';
import { CreateQuestionpaperComponent } from './client/question-paper/create-questionpaper/create-questionpaper.component';
import { QuestionPaperComponent } from './client/question-paper/question-paper.component';
import { SearchQuestionpaperComponent } from './client/question-paper/search-questionpaper/search-questionpaper.component';
import { QuestionPaperDataResolverService } from './client/question-paper-resolved-data';
import { BatchDataResolverService } from './client/create-batch/batch-data-resolver.service';
import { NewCourseComponent } from './client/course/new-course/new-course.component';
import { ListCourseComponent } from './client/course/list-course/list-course.component';
import { CourseComponent } from './client/course/course.component';
import { TopicComponent } from './client/topic/topic.component';
import { TopicDataResolverService } from './client/topic/topic-data-resolver.service';
import { ListTopicComponent } from './client/topic/list-topic/list-topic.component';
import { NewTopicComponent } from './client/topic/new-topic/new-topic.component';
import { QuestionComponent } from './client/question/question.component';
import { CreateQuestionsComponent } from './client/question/create-questions/create-questions.component';
import { ListQuestionsComponent } from './client/question/list-questions/list-questions.component';
import { QuestionsDataResolverService } from './client/question/questions-resolved-data';
import { DisplayQuestionPaperComponent } from './client/question-paper/display-question-paper/display-question-paper.component';
import { QuestionPaperAssoComponent } from './client/question-paper/question-paper-asso/question-paper-asso.component';
import { DisplayCoursesComponent } from './client/course/display-courses/display-courses.component';
import { DisplayBatchComponent } from './client/create-batch/display-batch/display-batch.component';
import { CreateExamComponent } from './client/create-batch/create-exam/create-exam.component';
import { ListExamComponent } from './client/create-batch/create-exam/list-exam/list-exam.component';
import { ViewExamComponent } from './client/create-batch/create-exam/view-exam/view-exam.component';
import { CreateBatchCanDeactivateGuardService } from './client/create-batch/create-batch-candeactivate-gaurd-service';
import { DisplayTopicComponent } from './client/topic/display-topic/display-topic.component';





const routes: Routes = [
  { path: 'admin-loginpage', component: AdminLoginpageComponent },
  { path: 'client-loginpage', component: ClientLoginpageComponent },
  { path: 'user-loginpage', component: UserLoginpageComponent },
  { path: 'home-page', component: HomeComponent },
  { path: 'user-registrationpage', component: UserRegistrationpageComponent },

  {
    path: 'admin-portal', component: AdminPortalComponent,
    children: [
      {
        path: 'edit/:id', component: CreateClientComponent,
        canDeactivate: [CreateClientCanDeactivateGuardService]
      },
      { path: '', redirectTo: 'admin-dashboard', pathMatch: 'full' },
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      {
        path: 'list-client',
        component: ListClientComponent,
        resolve: { clientslist: ClientDataResolverService }
      },
      {
        path: "clients/:id",
        component: DisplaysClientComponent,
        canActivate: [ClientDetailsGuardService],
      }
    ]
  },


  {
    path: 'client-portal', component: ClientPortalComponent,
    children: [
      { path: '', redirectTo: 'client-dashboard', pathMatch: 'full' },
      { path: 'client-dashboard', component: ClientDashboardComponent },

      {
        path: 'batch', component: CreateBatchComponent,
        children: [
          {
            path: 'list', component: ListBatchComponent,
            resolve: { batcheslist: BatchDataResolverService }
          },
          { path: 'edit/:id', component: NewBatchComponent,
          canDeactivate: [CreateBatchCanDeactivateGuardService]
        },
          { path: 'examslist/:id', component: ListExamComponent },
          { path: ':batchid', component: DisplayBatchComponent },
          { path: ':batchid/createexam/:id', component: CreateExamComponent },
          { path: 'exam/:id', component: ViewExamComponent },

        ]
      },

      {
        path: 'course', component: CourseComponent,
        children: [
          {
            path: 'courselist', component: ListCourseComponent,
           
          },
          { path: 'addcourse/:id', component: NewCourseComponent },
          { path: ":id", component: DisplayCoursesComponent, }

        ]
      },

      {
        path: 'topic', component: TopicComponent,
        children: [
          {
            path: 'topicshow', component: ListTopicComponent,
            resolve: { topicslist: TopicDataResolverService }
          },
          { path: 'addtopic/:id', component: NewTopicComponent },
          {path:'viewtopic/:id',component:DisplayTopicComponent},

        ]
      },
      {
        path: 'questionPaper', component: QuestionPaperComponent,
        children: [
          {
            path: 'list', component: ListQuestionpaperComponent,
            resolve: { questionpaperlist: QuestionPaperDataResolverService }
          },
          { path: 'search', component: SearchQuestionpaperComponent },
          { path: 'create', component: CreateQuestionpaperComponent },
          {
            path: ":id", component: DisplayQuestionPaperComponent,
          },
          {
            path: 'asso/:id', component: QuestionPaperAssoComponent,
            resolve: {  topicList: TopicDataResolverService }
          }


        ]
      },
      {
        path: 'question', component: QuestionComponent,
        children: [
          {
            path: 'list', component: ListQuestionsComponent,

            resolve: { questionslist: QuestionsDataResolverService },
          },
          { path: 'display/:id', component: DisplayQuestionComponent },
          {
            path: 'create/:id', component: CreateQuestionsComponent,
            resolve: { topicslist: TopicDataResolverService }
          }
        ]
      },

    ]
  },


  {
    path: 'user-portal', component: UserPortalComponent, children: [
      { path: '', redirectTo: 'user-dashboard', pathMatch: 'full' },
      { path: 'user-dashboard', component: UserDashboardComponent }
    ]
  },

  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'notFound', component: PageNotFoundComponent }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminLoginpageComponent, HomeComponent,
  ClientLoginpageComponent, UserLoginpageComponent, AdminPortalComponent,
  UserRegistrationpageComponent, PageNotFoundComponent, DisplaysClientComponent, ClientPortalComponent, AdminDashboardComponent, ListClientComponent, UserPortalComponent, UserDashboardComponent, ClientDashboardComponent, CreateClientComponent]

