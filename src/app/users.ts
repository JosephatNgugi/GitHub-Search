export class UserDetails {
  constructor(
    public name: string,
    public avatar_url: string,
    public type: string,
    public bio: string,
    public following: number,
    public followers: number,
    public created_at: Date,
    public blog: string
  ) {}
}
