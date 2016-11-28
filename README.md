# [mizmoz.com](https://www.mizmoz.com) / css-math
Simple library for performing math operations on css properties.

## API

#### Helpers

```js
import { parser } from 'css-math';

// the parser will the value with the provided unit
// only a single unit type can be provided right now
parser('10px * 5'); // 50px

parser('100% / 3'); // 33.333333%
```

## Roadmap

#### Add support for setting a base for a unit
```js
parser('10px * 1.5rem', { rem: '15px' }) // 150px
parser('100px + 10%', { percent: '1280px' }) // 228px
```