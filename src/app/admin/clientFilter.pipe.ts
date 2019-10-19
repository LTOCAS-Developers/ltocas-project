import { PipeTransform, Pipe } from '@angular/core';
import { Clients } from '../models.ts/models';

@Pipe({
    name:"clientFilter"
})
export class ClientFilterPipe implements PipeTransform{
    
    transform(clients:Clients[],searchTerm:string):Clients[]{

        if(!clients || !searchTerm ){
            return clients;
        }
        return clients.filter(client => 
            client.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 )
    }
}