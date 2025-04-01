export type IFormInputsType = 'input' | 'textarea' | 'checkbox' | 'select'

export interface IFormItemType {
  name: string
  type: IFormInputsType
  label: string
  placeholder?: string
  multiple?: boolean
  items?: any
}
