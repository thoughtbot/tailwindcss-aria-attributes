# @thoughtbot/tailwindcss-aria-attributes

A plugin that provides variants for various [`aria-*`
attributes](https://www.w3.org/TR/wai-aria/#state_prop_def) and their supported
values.

## Installation

Install the plugin from npm:

```sh
# Using npm
npm install @thoughtbot/tailwindcss-aria-attributes

# Using Yarn
yarn add @thoughtbot/tailwindcss-aria-attributes
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("@thoughtbot/tailwindcss-aria-attributes"),
    // ...
  ],
}
```

## Usage

There are two styles of attributes supported by the variants: boolean
attributes, and enumerated values.

In some cases, attributes belong to both groups.

### Boolean attributes

Variants for boolean attributes are active when the value is `"true"` and _only_
`"true"`. When the attribute is missing or the value is `"false"`, its other
applicable utility classes are applied.

Currently, the collection of variants includes support for the following boolean
attributes:

| Attribute                                                                           | Variant
|-------------------------------------------------------------------------------------|------------------------
| [aria-atomic="true"](https://www.w3.org/TR/wai-aria/#aria-atomic)                   | `aria-atomic:`
| [aria-busy="true"](https://www.w3.org/TR/wai-aria/#aria-busy)                       | `aria-busy:`
| [aria-checked="true"](https://www.w3.org/TR/wai-aria/#aria-checked)                 | `aria-checked:`
| [aria-current="true"](https://www.w3.org/TR/wai-aria/#aria-current)                 | `aria-current:`
| [aria-disabled="true"](https://www.w3.org/TR/wai-aria/#aria-disabled)               | `aria-disabled:`
| [aria-expanded="true"](https://www.w3.org/TR/wai-aria/#aria-expanded)               | `aria-expanded:`
| [aria-grabbed="true"](https://www.w3.org/TR/wai-aria/#aria-grabbed)                 | `aria-grabbed:`
| [aria-haspopup="true"](https://www.w3.org/TR/wai-aria/#aria-haspopup)               | `aria-haspopup:`
| [aria-hidden="true"](https://www.w3.org/TR/wai-aria/#aria-hidden)                   | `aria-hidden:`
| [aria-invalid="true"](https://www.w3.org/TR/wai-aria/#aria-invalid)                 | `aria-invalid:`
| [aria-live="true"](https://www.w3.org/TR/wai-aria/#aria-live)                       | `aria-live:`
| [aria-modal="true"](https://www.w3.org/TR/wai-aria/#aria-modal)                     | `aria-modal:`
| [aria-multiline="true"](https://www.w3.org/TR/wai-aria/#aria-multiline)             | `aria-multiline:`
| [aria-multiselectable="true"](https://www.w3.org/TR/wai-aria/#aria-multiselectable) | `aria-multiselectable:`
| [aria-pressed="true"](https://www.w3.org/TR/wai-aria/#aria-pressed)                 | `aria-pressed:`
| [aria-readonly="true"](https://www.w3.org/TR/wai-aria/#aria-readonly)               | `aria-readonly:`
| [aria-required="true"](https://www.w3.org/TR/wai-aria/#aria-required)               | `aria-required:`
| [aria-selected="true"](https://www.w3.org/TR/wai-aria/#aria-selected)               | `aria-selected:`

To utilize a boolean variant, prefix the attribute name with `aria-` and omit
the value:

```html
<ul role="listbox">
  <li role="option" class="aria-selected:border">Not selected</li>
  <li role="option" class="aria-selected:border" aria-selected="true">Selected</li>
</ul>

<button class="aria-disabled:cursor-not-allowed" aria-disabled="true">Submit</button>
```

### Enumerated values

Variants for enumerated values are active when the value is equivalent to the
variant's suffix.

 When the attribute is missing or the value does not match the specified suffix,
its other applicable utility classes are applied.

Currently, the collection of variants includes support for the following
attributes and value combinations:

| Attribute                                                              | Variants                      |
|------------------------------------------------------------------------|-------------------------------|
| [aria-autocomplete](https://www.w3.org/TR/wai-aria/#aria-autocomplete) | `aria-autocomplete-both:`
|                                                                        | `aria-autocomplete-inline:`
|                                                                        | `aria-autocomplete-list:`
|                                                                        | `aria-autocomplete-none:`
| [aria-current](https://www.w3.org/TR/wai-aria/#aria-current)           | `aria-current-date:`
|                                                                        | `aria-current-location:`
|                                                                        | `aria-current-page:`
|                                                                        | `aria-current-step:`
|                                                                        | `aria-current-time:`
| [aria-dropeffect](https://www.w3.org/TR/wai-aria/#aria-dropeffect)     | `aria-dropeffect-copy:`
|                                                                        | `aria-dropeffect-execute:`
|                                                                        | `aria-dropeffect-link:`
|                                                                        | `aria-dropeffect-move:`
|                                                                        | `aria-dropeffect-none:`
|                                                                        | `aria-dropeffect-popup:`
| [aria-haspopup](https://www.w3.org/TR/wai-aria/#aria-dropeffect)       | `aria-haspopup-dialog:`
|                                                                        | `aria-haspopup-grid:`
|                                                                        | `aria-haspopup-listbox:`
|                                                                        | `aria-haspopup-menu:`
|                                                                        | `aria-haspopup-tree:`
| [aria-orientation](https://www.w3.org/TR/wai-aria/#aria-dropeffect)    | `aria-orientation-horizontal:`
|                                                                        | `aria-orientation-undefined:`
|                                                                        | `aria-orientation-vertical:`
| [aria-sort](https://www.w3.org/TR/wai-aria/#aria-dropeffect)           | `aria-sort-ascending:`
|                                                                        | `aria-sort-descending:`
|                                                                        | `aria-sort-none:`
|                                                                        | `aria-sort-other:`
| [aria-relevant](https://www.w3.org/TR/wai-aria/#aria-dropeffect)       | `aria-relevant-additions:`
|                                                                        | `aria-relevant-all:`
|                                                                        | `aria-relevant-removals:`
|                                                                        | `aria-relevant-text:`

To utilize an enumerated value variant, prefix the attribute name with `aria-`
and include the value:

```html
<nav>
  <a class="aria-current-page:font-bold" href="/" aria-current="page">Root</a>
  <a class="aria-current-page:font-bold" href="/about">About us</a>
</nav>
```

## License

tailwindcss-aria-attributes is Copyright (c) 2021 thoughtbot, inc.
It contains free software that may be redistributed
under the terms specified in the [LICENSE] file.

[LICENSE]: /LICENSE

## About

![thoughtbot](http://presskit.thoughtbot.com/images/thoughtbot-logo-for-readmes.svg)

This project is maintained and funded by thoughtbot, inc.
The names and logos for thoughtbot are trademarks of thoughtbot, inc.

We love open source software!
See [our other projects][community]
or [hire us][hire] to help build your product.

[community]: https://thoughtbot.com/community?utm_source=github
[hire]: https://thoughtbot.com/hire-us?utm_source=github
