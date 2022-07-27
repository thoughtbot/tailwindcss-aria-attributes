const plugin = require("tailwindcss/plugin")

module.exports = plugin(({ addVariant }) => {
  const addAriaVariant = (name, value) => {
    addVariant(name,                          `[${name}="${value}"]&`)
    addVariant(`peer-${name}`,   `:merge(.peer)[${name}="${value}"] ~ &`)
    addVariant(`group-${name}`, `:merge(.group)[${name}="${value}"] &`)
  }

  const booleans = [
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
  ]

  for (const attribute of booleans) {
    addAriaVariant(`aria-${attribute}`, "true")
  }

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
      addAriaVariant(`aria-${attribute}-${value}`, value)
    }
  }
})
