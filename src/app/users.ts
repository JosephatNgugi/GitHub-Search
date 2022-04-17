export class Users {
  constructor(
    public userName: string,
    public type: string,
    public avatarUrl: string,
    public bio: string,
    public following: number,
    public followers: number,
    public creationDate: Date
  ) {}
}
