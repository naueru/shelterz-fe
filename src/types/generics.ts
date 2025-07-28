export type TObject = Record<string, string>

export interface IObject<T = any> {
  [key: string]: T
}
