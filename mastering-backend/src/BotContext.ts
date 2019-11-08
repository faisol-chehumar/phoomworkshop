import {MaidCafeResponse} from '../src/types/maidCafeMenu'

export interface BotContext {
  bookPurchase: []
  getIP: () => Promise<string>
  getMaidCafeMenu: () => Promise<MaidCafeResponse>
  addBookPurchase: () => Promise<void>
  getPurchaseAmount: () => Promise<number>
}
