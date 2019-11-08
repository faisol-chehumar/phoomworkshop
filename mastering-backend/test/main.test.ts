import {Bot} from '../src/Bot'
import {mockContext} from '../src/MockContext'

describe('chatbot', () => {
  it('should say hello to me', async () => {
    const res = await Bot('text')
    expect(res).toBe('สวัสดีชาวโลก 🙃😆')
  })

  it('should get IP from the API', async () => {
    const res = await Bot('IP', mockContext)
    expect(res).toBe('IP คือ 112.112.112.000')
  })

  it('should record 400 THB of book transaction', async () => {
    const res = await Bot('b400', mockContext)
    expect(res).toBe('หนังสือราคา 400 บาท')
  })

  it('should get maidCafe best seller', async () => {
    const res = await Bot('maid cafe')
    expect(res).toBe('kuma dreamin')
  })
})
