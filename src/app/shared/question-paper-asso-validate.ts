import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    selector:'[questionValidate]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: QuestionPaperValidate,
            multi: true
        }]
})
export class QuestionPaperValidate implements Validator{
    validate(control:AbstractControl):{[Key:string]:any}|null{
        return control.value==='1'?{'default':true}:null;
    }

    
}