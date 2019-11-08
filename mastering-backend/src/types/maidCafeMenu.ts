export interface MaidCafeResponse {
  success: true
  data: MaidCafeMenu
}
export interface MaidCafeMenu {
  [menu: string]: {
    [category: string]: MaidCafeItem
  }
}
export interface MaidCafeItem {
  price: number
  name: {
    jp: string
    th: string
    en: string
  }
}
