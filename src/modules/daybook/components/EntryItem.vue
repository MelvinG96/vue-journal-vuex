<template>
  <div class="entry-container mb-3 pointer p-2"
    @click=" $router.push( { name: 'entry', params: { id:10 } } ) ">

    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5"> Julio</span>
        <span class="mx-2 fw-light"> 2021. Jueves</span>
    </div>

    <div class="entry-description">
      Laboris ex duis amet consequat ut ipsum dolore. Tempor mollit magna esse magna cupidatat duis incididunt in veniam. Adipisicing et commodo est laborum aliqua dolor velit anim veniam commodo non minim ad.
    </div>


  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
      background-color: lighten($color: grey,  $amount: 45);
    }

    .entry-description{
      font-size: 12px;
    }
  }
</style>