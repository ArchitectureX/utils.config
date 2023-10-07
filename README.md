# @architecturex/utils.slug

## slug(str: string): string

The slug function is a simple utility designed to convert strings into URL-friendly slugs. This is especially useful when creating web pages with human-readable URLs, based on titles or names that can contain special characters, spaces, or uppercase letters.

## Installation

`npm install @architecturex/utils.slug`

## Usage

To use the slug function, import it into your project:

```javascript
import slug from '@architecturex/utils.slug'
```

Then, call the function with a string argument:

```javascript
const mySlug = slug('Your String Here')
```

## Examples

### Basic String:

```javascript
slug('Hello World') // "hello-world"
```

### String with special characters:

```javascript
slug('Hello, World!') // "hello-world"
```

### String with non-ASCII characters:

```javascript
slug('Café con Leche') // "cafe-con-leche"
```

## Function Behavior

- The function converts the string to lowercase.
- It removes diacritics (accents) from characters.
- Non-alphanumeric characters (excluding hyphens) are replaced with spaces.
- Continuous spaces or hyphens are replaced with a single hyphen.
- The resulting string is trimmed of any leading or trailing spaces or hyphens.

## Contribution

Feel free to suggest improvements, report issues, or contribute to enhancing the utility. Your feedback and contributions are welcome!
