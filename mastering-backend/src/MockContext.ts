import {BotContext} from '../src/BotContext'
import {MaidCafeResponse} from '../src/types/maidCafeMenu'

export const mockContext: BotContext = {
  bookPurchase: [],

  async getIP() {
    return '112.112.112.000'
  },

  async getMaidCafeMenu(): Promise<MaidCafeResponse> {
    return {
      success: true,
      data: {
        'best seller': {
          'kuma dreamin': {
            price: 320,
            name: {
              jp: 'くまドりーミン',
              th: 'คุมะดรีมมิน',
              en: 'Kuma dreamin',
            },
          },
          'curry rice kumatan': {
            price: 270,
            name: {
              jp: 'くまたんかしーライ',
              th: 'ข้าวแกงกะหรี่คุณหมี',
              en: 'Curry Rice Kumatan',
            },
          },
        },
      },
    }
  },

  async addBookPurchase(): Promise<void> {},

  async getPurchaseAmount(): Promise<number> {
    return 10
  },
}
