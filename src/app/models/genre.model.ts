export class Genre {
  name: string;
  selected: boolean = false;

  constructor(name: string, selected: boolean) {
    (this.name = name), (this.selected = selected);
  }
}
