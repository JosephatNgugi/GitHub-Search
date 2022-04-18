export interface RepoApiResponse {
  repoName: string;
  description: string;
  repoLink: string;
  liveLink: string;
  repoDate: Date;
}

export interface UserApiInterface {
  userName: string;
  type: string;
  avatarUrl: string;
  bio: string;
  following: number;
  followers: number;
  creationDate: Date;
}