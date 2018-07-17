declare module "ischool-sdk" {
  declare type AwesomeType = {
    a: number,
    b: string,
    sum: () => number
  };
  declare function makeAwesome(name: string): AwesomeType;
}
