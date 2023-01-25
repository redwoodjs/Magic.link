import { command, description, builder, handler } from '../setup'

test('standard exports', () => {
  expect(command).toEqual('magicLink')
  expect(description).toMatch(/MagicLink/)
  expect(typeof builder).toEqual('function')
  expect(typeof handler).toEqual('function')
})
