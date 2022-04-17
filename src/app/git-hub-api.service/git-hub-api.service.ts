import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubApiService {

  constructor(private http: HttpClient) { }

  getUsers(){}

  getRepos(){}
}
