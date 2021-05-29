export class Movie {
  constructor(
    public id: string,
    public title: string,
    public plot: string,
    public genres: Array<string>,
    public rating: number
  ) {
    (this.title = title),
      (this.plot = plot),
      (this.genres = genres),
      (this.rating = rating);
  }
}
