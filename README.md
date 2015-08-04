# PostCSS Filter [![Build Status][ci-img]][ci]

[PostCSS] plugin for filter shortcut.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/alanev/postcss-filter.svg
[ci]:      https://travis-ci.org/alanev/postcss-filter

```css
.foo {
  filter: white();
  filter: black()
}
```

```css
.foo {
  filter: brightness(0) invert(100%);
  filter: brightness(0);
}
```

## Usage

```js
postcss([ require('postcss-filter') ])
```

See [PostCSS] docs for examples for your environment.
