

<template>
<div class="form">
    New movie<br><br>
    Title : <input type="text" v-model="movie_to_add.title" /><br><br>
    Year : <input type="text" v-model="movie_to_add.year" /><br><br>
    Synopsys : <textarea v-model="movie_to_add.synopsys"></textarea><br><br>
    <button v-on:click="newmovie2">Add</button>
    <router-link to="/">Retour</router-link>
</div>
</template>

<script>
export default {
    data() {
        return {
            movie_to_add: window.shared_data.movie_to_add,
            movies : window.shared_data.movies
        }
    },

    methods: {
        newmovie1: function() {
            this.movies.push({title:"New movie"})
        },
        newmovie2: function() {
            this.movie_to_add.id = this.movies.length
            this.movies.push(this.movie_to_add)
            this.movie_to_add = {}
        }
    },

    created: function() {
        console.log("Created")
    },

    computed: {

    }
}
</script>

<style>
button {
  background-color: orange;
  border: none;
  color: white;
  padding: 6px 26px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
}

button:hover {
  background-color: white; /* Green */
  color: orange;
}

.form{
    background-color: white;
    color: black;
    width: 40%;
    text-align: center;
    margin: auto;
    vertical-align: center;
    padding: 10px;
    border-radius: 5%
}
</style>

