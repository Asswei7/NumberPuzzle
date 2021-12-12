<template>
  <div>
<!--    <p>{{ message }}</p>-->
<!--    <button v-on:click="reverseMessage">Reverse Message</button>-->
    <li>{{ todo.text }}</li>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['todo'],
  data () {
    return {
      message: 'Hello Vue.js!',
      seen: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]

    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
