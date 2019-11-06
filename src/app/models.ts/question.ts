import { Courses } from './course';
import { Topics } from './topic';

 
export class Question{
    public questionNumber:number;
    public questions:string;
    public option1:string;
    public option2:string;
    public option3:string;
    public option4:string;
    public answer:string;
    public coursePojo : Courses;
    public questionsTopicPojo: Topics;

}