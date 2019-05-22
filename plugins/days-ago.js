import Vue from 'vue'
import moment from 'moment'

Vue.filter('daysAgo', function(value) {
  if (!value) return ''
  value = value.toString()
  return moment(value).fromNow()
})
Vue.filter('daysAgoFb', function(value) {
  if (!value) return ''
  const date = new Date(value.seconds * 1000)
  return moment(date).fromNow()
})
