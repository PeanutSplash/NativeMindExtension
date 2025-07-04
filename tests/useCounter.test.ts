import { describe, expect, it } from 'vitest'

import { useCounter } from '../composables/useCounter'

describe('useCounter', () => {
  it('increments the count', () => {
    const { count, increment } = useCounter()
    expect(count.value).toBe(0)
    increment()
    expect(count.value).toBe(1)
  })
})
