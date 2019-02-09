

<template>
<div class="form">
    New movie<br />
    Title : <input type="text" v-model="movie_to_edit.title" /><br />
    Year : <input type="text" v-model="movie_to_edit.year" /><br />
    Synopsys : <textarea v-model="movie_to_edit.synopsys"></textarea><br />
    <button v-on:click="save">Save</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            movie_to_edit: window.shared_data.movie_to_edit,
            movies : window.shared_data.movies
        }
    },

    methods: {
        edit: function(movie) {
            this.movie_to_edit = movie
        },
        save: function() {
            this.movie_to_edit = null
        },
    },

    computed: {
        firstletter: function() {
            return this.message[0]
        },
        movies_search: function() {
            return this.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!=-1);
        }
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

