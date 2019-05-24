import Vue from 'vue'

Vue.filter('capitalize', function(value) {
  if (!value) return ''
  return value.charAt(0).toUpperCase() + value.slice(1)
})
