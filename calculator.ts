export default class Calculator {
  add(x: number, y: number): number {
    return x + y;
  }
  async somethingAsync(): Promise<number> {
    let promise: Promise<number> = new Promise((resolve, reject) => {
      setTimeout(resolve, 500, 10);
    });
    return await promise;
  }
}
