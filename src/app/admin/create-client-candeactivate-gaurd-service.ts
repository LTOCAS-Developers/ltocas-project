import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';

@Injectable()
export class CreateClientCanDeactivateGuardService implements CanDeactivate<CreateClientComponent> {
    canDeactivate(component: CreateClientComponent): boolean {
    
        if(component.clientForm.dirty){
            return confirm("Are you sure you want to discard your changes?");
        }
        return true;
    }
}
 