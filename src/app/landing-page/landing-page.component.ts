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

  userData!: UserDetails
  userRepos!: Repos[]
  // user: UserDetails;

  constructor(private githubservice: GitHubApiService) {
    // this.user = new UserDetails('', '', '', '', 0, 0, new Date(), '');
    
  }

  ngOnInit(): void {
    
    this.githubservice.getUserDetail().subscribe(
      data => {
        this.userData = data
      // console.log(this.userData);
      }      
    )
    this.githubservice.getUserRepos().subscribe(data=>this.userRepos=data)
    // console.log(UserDetails);

  }

}
