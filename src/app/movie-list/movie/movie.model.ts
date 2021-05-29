export class Movie {
  public title: string;
  public description: string;
  public genres: Array<string>;
  public rate: number;

  constructor(
    title: string,
    desctiption: string,
    genres: Array<string>,
    rate: number
  ) {
    (this.title = title),
      (this.description = desctiption),
      (this.genres = genres),
      (this.rate = rate);
  }
}
