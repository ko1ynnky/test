new Vue({
  el: '#app',
  data: {
    message: ''
  },
  methods: {
    onclick: function() {
      this.message = new Date().toLocaleString();
    }
  }
})
