import Vue from 'vue'
import moment from 'moment'

Vue.filter('daysAgo', function(value) {
  if (!value) return ''
  value = value.toString()
  return moment(value).fromNow()
})
