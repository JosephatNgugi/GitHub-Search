import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../users';
import { environment } from 'src/environments/environment';
import { RepoApiResponse, UserApiInterface } from '../response/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GitHubApiService {
  private userName: string;
  apiKey: string = environment.apiKey;
  apiUrl: string = 'https://api.github.com/users/';

  constructor(private http: HttpClient) {
    this.userName = 'JosephatNgugi';
  }
  changeUser(userName:string){this.userName = userName}

  getUserDetail(): Observable<UserApiInterface> {
    return this.http.get<UserApiInterface>(`${this.apiUrl}${this.userName}`);
  }

  getUserRepos(): Observable<RepoApiResponse[]> {
    return this.http.get<RepoApiResponse[]>(`${this.apiUrl}${this.userName}/repos`);
  }

  

  /*getUser(){
    let promise = new Promise<void>((resolve, reject))=>{
      this.http.get<UserApiInterface>(`${this.apiUrl}JosephatNgugi`).toPromise().then(response=>{
        this.user.userName = response!.name
        resolve()
      }); 
    }
  }*/
}
