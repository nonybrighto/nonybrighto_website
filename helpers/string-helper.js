function slugify(value) {
  return value.replace(/ /g, '-')
}

function unslug(value) {
  return value.replace(/-/g, ' ')
}

export { slugify, unslug }
