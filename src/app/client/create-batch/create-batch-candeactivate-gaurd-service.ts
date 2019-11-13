import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { NewBatchComponent } from './new-batch/new-batch.component';

@Injectable()
export class CreateBatchCanDeactivateGuardService implements CanDeactivate<NewBatchComponent> {
    canDeactivate(component: NewBatchComponent): boolean {
    
        if(component.batchForm.dirty){
            return confirm("Are you sure you want to discard your changes?");
        }
        return true;
    }
}
 