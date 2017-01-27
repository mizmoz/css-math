# [mizmoz.com](https://www.mizmoz.com) / css-math
Simple library for performing math operations on css properties.

## Installation

**NPM**
```sh
npm install --save css-math
```

**Yarn**
```sh
yarn add css-math
```

## API

#### Parser
```js
import { parser } from 'css-math';

// the parser will the value with the provided unit only a single unit type can be 
// provided right now. Only %, em, rem, px 
parser('10px * 5'); // 50px
parser('10px + 10px'); // 20px

// percents, be default we round to 6 decimal places
parser('100% / 3'); // 33.333333%

// a more complex example
parser('1px + (8 * (8 + 2))'); // 81px
```

#### Fraction ( > 0.2 )

Return the value of the fraction of the supplied number

```js
import { fraction } from 'css-math';

fraction('1/3', '100%'); // 33.333333%
fraction('4/2', '500px'); // 1000px
fraction('25%', '800px'); // 200px
```

#### Max ( > 0.3 )

Find the max value from the provided list

```js
import { max } from 'css-math';

max(['15%', '100%', '50%']); // 100%
```

#### Min ( > 0.3 )

Find the min value from the provided list

```js
import { min } from 'css-math';

min(['800px', '600px', '1024px']); // 600px
```

### Helpers

#### Get padding box values

Find the top, right, bottom & left padding values from a string

```js
import { getPaddingBox } from 'css-math';

getPaddingBox('10px 20px'); // { top: 10px, bottom: 10px, left: 20px, right: 20px, width: 40px, height: 20px }
```

#### Parse value

Parse a string and return it's numeric value and unit type

```js
import { parseValuesAndUnit } from 'css-math';

parseValuesAndUnit('10px'); // { value: 10, unit: px }
```

## Roadmap

#### Add support for setting a base for a unit

```js
parser('10px * 1.5rem', { rem: '15px' }) // 150px
parser('100px + 10%', { percent: '1280px' }) // 228px
```