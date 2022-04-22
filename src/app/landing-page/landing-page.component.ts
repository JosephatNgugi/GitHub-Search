import { Component, OnInit } from '@angular/core';
import { GitHubApiService } from '../git-hub-api.service/git-hub-api.service';
import { Repos } from '../repos';
import { UserDetails } from '../users';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  userData!: UserDetails;
  userRepos!: Repos[];
  userName!: string;

  constructor(private githubservice: GitHubApiService) {
    // this.user = new UserDetails('', '', '', '', 0, 0, new Date(), '');
    // this.githubservice.changeUser(this.userName)
  }
  searchUsers(){
    this.githubservice.changeUser(this.userName.replace(/\s+/g, ''));
    this.githubservice.getUserDetail().subscribe(data=>this.userData=data)
    this.githubservice.getUserRepos().subscribe(data=>this.userRepos=data);
    
    console.log(this.userData);
    console.log(this.userRepos);
    return false;
  }

  ngOnInit(): void {
    
    this.githubservice.getUserDetail().subscribe(
      data => {
        this.userData = data
      // console.log(this.userData);
      }      
    )
    this.githubservice.getUserRepos().subscribe(data=>this.userRepos=data)
  }

}
