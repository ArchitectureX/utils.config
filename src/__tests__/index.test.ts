import { describe, expect, it } from '@jest/globals'

import { mergeConfig } from '../index'

describe('mergeConfig', () => {
  it('should return a merged configuration', () => {
    const defaults = {
      a: 1,
      b: {
        c: 2,
        d: 3
      }
    }

    const userConfig = {
      b: {
        c: 4,
        e: 5
      },
      f: 6
    }

    const result = mergeConfig(defaults, userConfig)

    expect(result).toEqual({
      a: 1,
      b: {
        c: 4,
        d: 3,
        e: 5
      },
      f: 6
    })
  })

  it('should not mutate the default configuration', () => {
    const defaults = {
      a: 1,
      b: {
        c: 2
      }
    }

    const userConfig = {
      b: {
        c: 3
      }
    }

    mergeConfig(defaults, userConfig)

    expect(defaults).toEqual({
      a: 1,
      b: {
        c: 2
      }
    })
  })

  it('should handle no user configuration', () => {
    const defaults = {
      a: 1,
      b: {
        c: 2
      }
    }

    const result = mergeConfig(defaults, {})

    expect(result).toEqual(defaults)
  })

  it('should handle no default configuration', () => {
    const userConfig = {
      a: 1,
      b: {
        c: 2
      }
    }

    const result = mergeConfig({}, userConfig)

    expect(result).toEqual(userConfig)
  })
})
