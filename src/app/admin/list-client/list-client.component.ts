import { Component, OnInit } from '@angular/core';
import { Clients } from '../../models.ts/models';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients: Clients[];
  filteredClients: Clients[];
  private _searchTerm: string;
  error: string;


  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private service: ServiceService,
  ) {
    const resolvedData: Clients[] | string = this._route.snapshot.data['clientslist'];
    if (Array.isArray(resolvedData)) {
      this.clients = resolvedData;
    }
    else {
      this.error = resolvedData;
    }
    this.clients = this._route.snapshot.data['clientslist'];
    this._route.queryParamMap.subscribe((queryParams) => {
      if (queryParams.has('searchTerm')) {
        this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
      }
      else {
        this.filteredClients = this.clients;
      }
    });

  }
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) { // set searchTerm bound to our input search bar value
    this._searchTerm = value;
    this.filteredClients = this.filtereClients(value);
  }
  filtereClients(searchString: string) {
    return this.clients.filter(client =>
      client.firstName.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
  }
  selectedClient: Clients;
  onSelect(clientId: number): void {
    this._router.navigate(["admin-portal/clients", clientId],
      {
        queryParams: { 'searchTerm': this.searchTerm }
      });

  }
  onDeleteNotification(id: number) {
    const i = this.filteredClients.findIndex(c => c.sno === id);
    if (i != -1) {
      this.filteredClients.splice(i, 1);
      console.log(this.filteredClients);
    }
  }


  ngOnInit() {
  }
}
