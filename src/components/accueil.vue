

<template>
<div>
    <div class="navbar">
        <ul>
            <li>{{ message }}</li>
            <li>Search : <input type="text" v-model="search" /></li>
        </ul>
    </div>

    <p>Movie number : {{movies.length}}</p>
    <router-link class="button" to="/add">Ajout Film</router-link>

    <ul>
        <movie-item v-for="(movie, index) in movies_search" v-bind:key="movie.title" v-bind:movie="movie" v-on:click="edit(index)" v-on:remove="remove(index)"></movie-item>
    </ul>

</div>
</template>

<script>
export default {
    data() {
        return {
            message: window.shared_data.message,
            movie_to_edit: window.shared_data.movie_to_edit,
            search: window.shared_data.search,
            movies : window.shared_data.movies
        }
    },

    methods: {
        remove: function(index) {
            this.movies.splice(index, 1)
        },
        edit: function(index){
            this.movie_to_edit = index
            this.$router.push({ path: `edit/${this.movie.id}` })
        }
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
@import url('https://fonts.googleapis.com/css?family=Quicksand');
html{
  font-family: Quicksand;
  background-color: darkslategrey;
}

#msg {
  color: red;
}

ul {
  list-style-type: none;
}

p{
    color: white;
}

.button {
  background-color: orange;
  border: none;
  color: white;
  padding: 6px 26px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
}

.button:hover {
  background-color: white;
  color: orange;
}

.navbar {
    padding: 10px;
    display: flex;
    flex-direction: row;
    color: white;
    font-size: 18px;
    background-color: orange;
}

</style>

