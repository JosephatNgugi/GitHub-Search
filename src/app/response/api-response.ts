export interface RepoApiResponse {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  created_at: Date;
  language: string;
}

export interface UserApiInterface {
  name: string;
  avatar_url: string;
  type: string;
  bio: string;
  following: number;
  followers: number;
  created_at: Date;
  blog: string;
  public_repos:number;
}