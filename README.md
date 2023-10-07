# @architecturex/utils.config

## mergeConfig(defaults: object, userConfig: object): object

This utility provides functions to deeply merge objects, specifically designed for configurations. It's useful when you have a default configuration and want to override it with user-specific settings without mutating the original objects.

## Installation

`npm install @architecturex/utils.config`

## Usage

```javascript
import { mergeConfig } from '@architecturex/utils.slug'
```

Use mergeConfig to merge default and user-specific configurations:

```javascript
const defaults = {
  a: 1,
  nested: {
    value: 2
  }
}

const userConfig = {
  nested: {
    value: 3
  },
  b: 4
}

const merged = mergeConfig(defaults, userConfig)
console.log(merged) // Outputs: { a: 1, nested: { value: 3 }, b: 4 }
```

## Contribution

Feel free to suggest improvements, report issues, or contribute to enhancing the utility. Your feedback and contributions are welcome!
