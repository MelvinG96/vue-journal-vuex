<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click=" $router.push( {name: 'no-entry'} ) " class="btn btn-primary">Primary</button>
    <button @click="goToDayBook" class="btn btn-success">Success</button>
    <button @click="goToDayBook" class="btn btn-danger">Danger</button>
  </div>
</template>

<script>
  export default{
    methods: {
      goToDayBook(){
        this.$router.push( {name: 'daybook'} )
      }
    }
  }
</script>
