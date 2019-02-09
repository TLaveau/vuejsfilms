<template>
    <div>
        <li class="card">
            <span>{{ movie.title }}</span><br>
            <button v-on:click="edit(movie)">Editer</button>
            <button v-on:click="suppr(movie)">Supprimer</button>
        </li><br>
    </div>
</template>
<script>
export default {
    props: ["movie"],
    methods: {
        edit() {
            this.$emit('edit', this.movie)
        },
        suppr() {
            this.$emit('remove', this.movie)
        }
    },
    data: function() {
        return {
            //data
        }
    } 
}
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 20%;
  padding: 2px 16px;
  background-color: lightgrey;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

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
  background-color: white;
  color: orange;
}
</style>