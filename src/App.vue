<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
        <div class="container" style="max-width: 960px">
          <span class="navbar-brand mb-0 h1">TweetBook</span>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse" v-if="isLoggedOn()">
            <ul class="navbar-nav ml-auto mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#/feed">Flux</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/wall">Moi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/friends/list">Amis</a>
              </li>
            </ul>
            <div class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i></a>
                <div class="dropdown-menu dropdown-menu-right">
                  <a href="#/settings" class="dropdown-item">Paramètres</a>
                  <a href="#/logout" class="dropdown-item">Se déconnecter</a>
                </div>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <loader v-show="loading" v-bind:text="loading_text" />
    <modaldialog :title="modal_title" :content="modal_content" :visible="modal" />
  </div>
</template>

<script>
import loader from './components/loader.vue'
import modaldialog from './components/modaldialog.vue'
import auth from './services/auth.js'
export default {
  name: 'app',
  data () {
    return {
      loading: false,
      loading_text: 'Chargement',
      modal: true,
      modal_title: '',
      modal_content: ''
    }
  },
  components: {
    loader,
    modaldialog
  },
  methods: {
    isLoggedOn: function () {
      return auth.authenticated
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  margin: 1em auto 5em;
  max-width: 960px;
}

h1, h2, h3, h4, h5, h6, a, a:hover, a:visited {
  color: #446E9B;
}
a:hover {
  text-decoration: underline;
}
.navbar-dark .navbar-nav .nav-link {
  color: white;
  text-transform: uppercase;
  padding-left: 1em;
  padding-right: 1em;
}
.navbar-dark .navbar-nav .nav-link:hover {
  font-weight: bold;
}
.navbar-dark .navbar-nav .nav-item:last-child .nav-link {
  padding-right: 0;
}
@media (min-width: 576px) {
.navbar-dark .navbar-nav .nav-item {
  border-right: 1px solid white;
}
.navbar-dark .navbar-nav .nav-item:last-child {
  border-right-style: none;
}
}

.dropdown-item:hover {
  background-color: #446E9B;
  color: white;
}
</style>
