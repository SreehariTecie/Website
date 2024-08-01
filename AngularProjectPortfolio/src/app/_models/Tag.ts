export class Tag {
  static readonly Angular = new Tag('Angular', 'red');
  static readonly Typescript = new Tag('TypeScript', 'green');
  static readonly JavaScript = new Tag('JavaScript', 'orange');
  static readonly HTML = new Tag('HTML', 'yellow');
  static readonly React = new Tag('React', 'Gray');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}
