import { Component, DoCheck, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients: {
    _id: string;
    email: string;
    isVerified: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    isActive: string;
  }[] = [];

  filteredClients: {
    _id: string;
    email: string;
    isVerified: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    isActive: string;
  }[] = [];
  constructor(private serveiceUsers: UsersService) {}

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.serveiceUsers.getAllClients().subscribe((data) => {
      this.filteredClients = data.clients;
      this.clients = data.clients;
    });
  }

  deactiveClient(id: string) {
    const data = {
      clientId: id,
    };

    this.serveiceUsers.deactivatedClient(data);
    setTimeout(() => {
      this.loadData();
    }, 100);
  }

  verifyClient(id: string) {
    const data = {
      clientId: id,
    };

    this.serveiceUsers.verifyClient(data);
    setTimeout(() => {
      this.loadData();
    }, 100);
  }

  filterClient(text: string) {
    if (text) {
      this.filteredClients = this.clients.filter((acc) =>
        acc.email.includes(text)
      );
    } else {
      this.filteredClients = this.clients;
    }
  }
}
