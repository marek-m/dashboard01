export class DashboardCardModel {
  public value: number;

  constructor( options: {
    value?: number,
  } = {}) {
    this.value = options.value;
  }
}
