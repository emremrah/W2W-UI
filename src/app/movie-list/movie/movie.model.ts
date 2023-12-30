export class Movie {
  constructor(
    public id: string,
    public title: string,
    public plot?: string,
    public rating?: number,
    public genres?: Array<string>,
    public image_url?: string
  ) {}
}
