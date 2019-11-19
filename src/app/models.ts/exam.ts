import { Batches } from './batch';
import { QuestionPaper } from './questionpaper';

export class Exam{
    id:number;
    name:string;
    public batchPojo=new Batches();
    public questionPaperPojo= new QuestionPaper();
}
