<template>
  <div class="movie-preview">
    <h3>{{ title }}</h3>
    <img :src="image">
    <a :href="link">More Details</a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Interstellar',
        image: 'http://theredlist.com/media/database/films/cinema/2010/interstellar/016-interstellar-theredlist.png',
        link: 'http://www.imdb.com/title/tt0816692/'
      }
    }
  }
</script>

<style>
  .movie-preview {
    border: 1px dotted black;
    border-radius: 5px;
  }

  .movie-preview img {
    height: 100px;
    width: 150px;
  }
</style>