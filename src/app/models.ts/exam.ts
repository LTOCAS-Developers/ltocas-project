import { Batches } from './batch';
import { QuestionPaper } from './questionpaper';

export class Exam{
    name:string;
    public batchPojo=new Batches();
    public questionPaperPojo= new QuestionPaper();
}
