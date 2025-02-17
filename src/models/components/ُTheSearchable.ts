export interface IOptions {
  id: number
  name: string
}
export interface IProps {
  options: Array<IOptions>
  modelValue: IOptions | null
}
