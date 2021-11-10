const plugin = require("tailwindcss/plugin")

module.exports = plugin(({ addVariant, e }) => {
  [
    "atomic",
    "busy",
    "checked",
    "current",
    "disabled",
    "expanded",
    "grabbed",
    "haspopup",
    "hidden",
    "invalid",
    "live",
    "modal",
    "multiline",
    "multiselectable",
    "pressed",
    "readonly",
    "required",
    "selected",
  ].forEach(boolean => {
    const selector = `aria-${boolean}`
    addVariant(selector, ({ modifySelectors, separator }) =>
      modifySelectors(({ className }) => `[${selector}="true"].${e(`${selector}${separator}${className}`)}`)
    )

    const groupSelector = `group-aria-${boolean}`
    addVariant(groupSelector, ({ modifySelectors, separator }) =>
      modifySelectors(({ className }) => `.group[aria-${boolean}="true"] .${e(`${groupSelector}${separator}${className}`)}`)
    )

    const peerSelector = `peer-aria-${boolean}`
    addVariant(peerSelector, ({ modifySelectors, separator }) =>
      modifySelectors(({ className }) => `.peer[aria-${boolean}="true"] ~ .${e(`${peerSelector}${separator}${className}`)}`)
    )
  })

  const enumerables = {
    autocomplete: [ "both", "inline", "list", "none" ],
    current: [ "date", "location", "page", "step", "time" ],
    dropeffect: [ "copy", "execute", "link", "move", "none", "popup" ],
    haspopup: [ "dialog", "grid", "listbox", "menu", "tree" ],
    orientation: [ "horizontal", "undefined", "vertial" ],
    relevant: [ "additions", "all", "removals", "text" ],
    sort: [ "ascending", "descending", "none", "other" ],
  }

  for (const [ attribute, values ] of Object.entries(enumerables)) {
    for (const value of values) {
      const selector = `aria-${attribute}-${value}`
      addVariant(selector, ({ modifySelectors, separator }) =>
        modifySelectors(({ className }) => `[aria-${attribute}="${value}"].${e(`${selector}${separator}${className}`)}`)
      )

      const groupSelector = `group-aria-${attribute}-${value}`
      addVariant(groupSelector, ({ modifySelectors, separator }) =>
        modifySelectors(({ className }) => `.group[aria-${attribute}="${value}"] .${e(`${groupSelector}${separator}${className}`)}`)
      )

      const peerSelector = `peer-aria-${attribute}-${value}`
      addVariant(peerSelector, ({ modifySelectors, separator }) =>
        modifySelectors(({ className }) => `.peer[aria-${attribute}="${value}"] ~ .${e(`${peerSelector}${separator}${className}`)}`)
      )
    }
  }
})
