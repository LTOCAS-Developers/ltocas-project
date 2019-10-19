import { Clients } from './models.ts/models';

export class ResolvedClientList{
    constructor(public clientList: Clients[],public error: any = null){

    }
}
