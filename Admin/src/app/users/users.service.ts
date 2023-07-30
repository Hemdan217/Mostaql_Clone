import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clientsType, freelancerType, usersStatisticsType } from './types';


const BASE_URL = 'http://localhost:3300/api/v1'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  message:string = '' 
  constructor(private http:HttpClient) { }


  getAllUsersStatistics() :Observable<usersStatisticsType>{
    return this.http.get<usersStatisticsType>(`${BASE_URL}/admin/statistics`)
  }

  getAllFreelancers():Observable<freelancerType>{
    return this.http.get<freelancerType>(`${BASE_URL}/admin/freelancers`)
  }

  deactivatedFreelancer(data:{freelancerId:string}){
    return this.http.patch<{message:string}>(`${BASE_URL}/admin/deactive-freelancer`,JSON.stringify(data),{
      headers:{
        "Content-type":"application/json"
      }
    }).subscribe(data=>{
     this.message = data.message
    })
  }
  

  verifyFreelancer(data:{freelancerId:string}){
    return this.http.patch<{message:string}>(`${BASE_URL}/admin/verify-freelancer`,JSON.stringify(data),{
      headers:{
        "Content-type":"application/json"
      }
    }).subscribe(data=>{
     this.message = data.message
    })
  }


  ///Clients


  getAllClients():Observable<clientsType>{
    return this.http.get<clientsType>(`${BASE_URL}/admin/clients`)
  }

  deactivatedClient(data:{clientId:string}){
    return this.http.patch<{message:string}>(`${BASE_URL}/admin/deactive-client`,JSON.stringify(data),{
      headers:{
        "Content-type":"application/json"
      }
    }).subscribe(data=>{
     this.message = data.message
    })
  }

  verifyClient(data:{clientId:string}){
    return this.http.patch<{message:string}>(`${BASE_URL}/admin/verify-client`,JSON.stringify(data),{
      headers:{
        "Content-type":"application/json"
      }
    }).subscribe(data=>{
     this.message = data.message
    })
  }

}
