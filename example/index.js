import Vue from 'vue'

Vue.use(require('../src/index'))

new Vue({
  render: h => h(Vue.component('App', {
    data () {
      return {
        img: 'http://sc.seeyouyima.com/activity/20180906/5b9119a4d61b1_200_200.jpg'
      }
    },
    created () {
      // setTimeout(() => {
      //   this.img = 'http://sc.seeyouyima.com/activity/20180906/5b911a5c5363e_200_200.jpg'
      // }, 1000)
    },
    template: require('./app.html')
  }))
}).$mount('#app')
