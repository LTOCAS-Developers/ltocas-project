import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Clients } from './models.ts/models';
import { catchError } from 'rxjs/operators';
import { Batches } from './models.ts/batch';
import { questionPaper } from './client/question-paper/create-questionpaper/questionpaper';
import { Topics } from './models.ts/topic';
import { Question } from './models.ts/question';
import { Courses } from './models.ts/course';
import { CourseAndTopicIds } from './models.ts/CourseAndTopicIds';
import { QuesQuesPaperAsso } from './models.ts/quespaperasso';




@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }
  _url = 'http://localhost:3000/userData';
  _url1 = 'http://localhost:8086/users/save';
  private handleError(errorResponse: HttpErrorResponse) {

    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error:', errorResponse.error.message);
    }
    else {
      console.error('Server Side Error:', errorResponse.error);

    }
    return throwError('there is a problem with a server .We are notified & working on it.Please try again later.');
  }
  register(userData) {
    return this._http.post<any>(this._url, userData);
  }
  clientRegister(clientData: Clients): Observable<Clients> {


    console.log(clientData);
    console.log(new Clients());
    return this._http.post<Clients>(this._url1, clientData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));


  }
  updateEmployee(client: Clients): Observable<void> {
    return this._http.put<void>("http://localhost:8086/users/edit", client, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
  }
  getClients(): Observable<Clients[]> {
    return this._http.get<Clients[]>('http://localhost:8086/users/list')
      .pipe(catchError(this.handleError));
  }
  getClient(id: number): Observable<Clients> {
    return this._http.get<Clients>("http://localhost:8086/users/get/" + id)
      .pipe(catchError(this.handleError));
  }

  deleteClient(id: number): Observable<void> {
    console.log(id)
    return this._http.delete<void>("http://localhost:8086/users/delete/" + id)
      .pipe(catchError(this.handleError));
  }

  batchRegister(batch: Batches): Observable<Batches> {


    console.log(batch);
    console.log(new Clients());
    return this._http.post<Batches>("http://localhost:8086/batch/save", batch, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));


  }
  getBatches(): Observable<any> {
    return this._http.get<any>("http://localhost:8086/batch/list")
      .pipe(catchError(this.handleError));
  }
  getQuestionPaper(id: number): Observable<questionPaper> {
    return this._http.get<questionPaper>("http://localhost:8086/questionPaper/get/" + id)
      .pipe(catchError(this.handleError));
  }
  deleteQuestionPaper(id: number): Observable<void> {
    console.log(id)
    return this._http.delete<void>("http://localhost:8086/questionPaper/delete/" + id)
      .pipe(catchError(this.handleError));
  }
  getQuestionPapers(): Observable<any> {
    return this._http.get<questionPaper[]>('http://localhost:8086/questionPaper/list')
      .pipe(catchError(this.handleError));
  }
  updateQuestionPaper(newQuestionPaper: questionPaper): Observable<void> {
    return this._http.put<void>("http://localhost:8086/questionPaper/update" + newQuestionPaper, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
  }

  questionPaperCreate(newQuestionPaper: questionPaper): Observable<questionPaper> {


    console.log(newQuestionPaper);
    console.log(new questionPaper());
    return this._http.post<questionPaper>("http://localhost:8086/questionPaper/save", newQuestionPaper, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));


  }

  getBatch(id: number): Observable<Batches> {
    return this._http.get<Batches>("http://localhost:8086/batch/get/" + id)
      .pipe(catchError(this.handleError));
  }

  deleteBatch(id: number): Observable<void> {
    console.log(id)
    return this._http.delete<void>("http://localhost:8086/batch/delete/" + id)
      .pipe(catchError(this.handleError));
  }

  updateBatch(batch: Batches): Observable<void> {
    return this._http.put<void>("http://localhost:8086/batch/update" + batch, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
  }

  courseRegister(course: Courses): Observable<Courses> {


    console.log(course);
    return this._http.post<Courses>("http://localhost:8086/course/save", course, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));


  }

  getCourses(): Observable<any> {
    return this._http.get<any>("http://localhost:8086/course/list")
      .pipe(catchError(this.handleError));
  }

  getCourse(id: number): Observable<Courses> {
    return this._http.get<Courses>("http://localhost:8086/course/getCourse/" + id)
      .pipe(catchError(this.handleError));
  }

  updateCourse(course: Courses): Observable<void> {
    return this._http.put<void>("http://localhost:8086/course/update" + course, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
  }
  deleteCourse(id:number):Observable<void>{
    return this._http.delete<any>("http://localhost:8086/course/delete/"+id)
    .pipe(catchError(this.handleError));
  }

  topicRegister(topic: Topics): Observable<Topics> {


    console.log(topic);
    console.log(new Courses());
    return this._http.post<Topics>("http://localhost:8086/questionsTopic/save", topic, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));


  }

  getTopics(): Observable<any> {
    return this._http.get<any>("http://localhost:8086/questionsTopic/list")
      .pipe(catchError(this.handleError));
  }

  getTopic(id: number): Observable<Topics> {
    return this._http.get<Topics>("http://localhost:8086/questionsTopic/get/" + id)
      .pipe(catchError(this.handleError));
  }

  updateTopic(topic: Topics): Observable<void> {
    return this._http.put<void>("http://localhost:8086/questionsTopic/update" + topic, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
  }
  getQuestions(): Observable<any> {
    return this._http.get<any>("http://localhost:8086/questions/getQuestions")
      .pipe(catchError(this.handleError));
  }



  createQuestions(question: Question): Observable<Question> {
    return this._http.post<any>("http://localhost:8086/questions/createQuestion", question, {    
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  getQuestionsById(questionId):Observable<any>{
    return this._http.get("http://localhost:8086/questions/getQuestionsById/"+questionId)
    .pipe(catchError(this.handleError));
  }

  editQuestion(question: Question): Observable<void>{
    return this._http.put<any>("http://localhost:8086/questions/editQuestions",question,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  deleteQuestion(questionId):Observable<void>{
    return this._http.delete<any>("http://localhost:8086/questions/deleteQuestion/"+questionId)
    .pipe(catchError(this.handleError));
  }

  findQuestionsTopicByCourseId(courseId): Observable<any> {
    return this._http.get<any>("http://localhost:8086/questionsTopic/getbycourseid/" + courseId)
      .pipe(catchError(this.handleError));
  }


  findQuestionsByCourseAndTopic(courseAndTopic:CourseAndTopicIds):Observable<any>{
    return this._http.post<any>("http://localhost:8086/questions/getQuestionsByAsso",courseAndTopic)
      .pipe(catchError(this.handleError));
      }
      associateQuesQuesPaper(quesQuesPaperAsso:QuesQuesPaperAsso){
        return this._http.post<any>("http://localhost:8086/questionsasso/createasso",quesQuesPaperAsso)
        .pipe(catchError(this.handleError));
      }


}
