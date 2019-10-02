import { questions } from './question';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-create-question-paper',
  templateUrl: './create-question-paper.component.html',
  styleUrls: ['./create-question-paper.component.css']
})
export class CreateQuestionPaperComponent implements OnInit {

  title:'Create Question Paper';
    constructor( private serivces:ServiceService) { }

    questionPaper: questions[]=[];
    selectedQuestions:questions[]=[];
    count:number=0;

    // course:string;

    getJava(){
      for(var i=0;i<this.questionPaper.length;i++)   {
       
        if( this.questionPaper[i].course ==="java"){
          this.selectedQuestions[this.count] =this.questionPaper[i];
          this.count++;
        }   
       } 
    }

    getDotNet(){
      for(var i=0;i<this.questionPaper.length;i++)   {
       
        if( this.questionPaper[i].course ==="Net"){
          this.selectedQuestions[this.count] =this.questionPaper[i];
          this.count++;
        }   
       } 
    }

    getcPlus(){
      for(var i=0;i<this.questionPaper.length;i++)   {
       
        if( this.questionPaper[i].course ==="c++"){
          this.selectedQuestions[this.count] =this.questionPaper[i];
          this.count++;
        }   
       } 
    }

    getAngular(){
      for(var i=0;i<this.questionPaper.length;i++)   {
       
        if( this.questionPaper[i].course ==="Angular 2+"){
          this.selectedQuestions[this.count] =this.questionPaper[i];
          this.count++;
        }   
       } 
    }

  ngOnInit() {
 
  
  }

}
