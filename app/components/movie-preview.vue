<template>
  <div class="movie-preview" :style="{ 'background-image': 'url(' + movieData.image + ')' }">
    <span>{{ movieData.title }}</span>
  </div>
</template>

<script>
  export default {
    props: ['movieData']
  }
</script>

<style>
  .movie-preview {
    height: 200px;
    width: 25%;
    background-size: cover;
    border-radius: 5px;
    position: relative;
  }

  .movie-preview span {
    position: absolute;
    bottom: 25px;
    left: 10px;
    font-size: 1.3em;
    font-family: sans-serif;
    background-color: rgba(255,255,255,0.5);
    padding: 1px 5px;
    border-radius: 2px;
  }
</style>