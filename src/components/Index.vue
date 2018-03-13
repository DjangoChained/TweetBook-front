<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <div class="jumbotron">
        <h2>La crème<br />{{ joke }}<br />à portée de main.</h2>
        <p class="lead">TweetBook n'accepte que le meilleur.</p>
      </div>
    </div>
    <div class="col-sm-12 col-md-6">
      <div class="text-center" v-if="currentForm == 0">
        <h3>Rejoignez-nous</h3>
        <form>
          <fieldset>
            <input type="text" class="form-control" placeholder="Nom de famille" autocomplete="family-name" v-model="lastName" required />
            <input type="text" class="form-control" placeholder="Prénom" autocomplete="given-name" v-model="firstName" required />
            <input type="date" class="form-control" placeholder="Date de naissance" autocomplete="bday" v-model="birthDate" required />
            <input type="email" class="form-control" placeholder="Adresse e-mail" autocomplete="email" v-model="newEmail" required />
            <input type="text" class="form-control" placeholder="Nom d'utilisateur" autocomplete="username" v-model="username" required />
            <input type="password" class="form-control" placeholder="Mot de passe" autocomplete="new-password" v-model="newPassword" required />
          </fieldset>
          <button type="button" class="btn btn-primary" v-on:click="registerButton">S'inscrire</button>
        </form>
        <p>Déjà membre ? <a href="#" v-on:click="currentForm++"><strong>Se connecter</strong></a></p>
      </div>
      <div class="text-center" v-if="currentForm == 1">
        <h3>Bienvenue</h3>
        <form>
          <fieldset>
            <input type="text" class="form-control" placeholder="Adresse e-mail" autocomplete="email" v-model="email" required />
            <input type="password" class="form-control" placeholder="Mot de passe" autocomplete="current-password" v-model="password" required />
          </fieldset>
          <button type="button" class="btn btn-primary" v-on:click="loginButton">Se connecter</button>
        </form>
        <p>Pas encore membre ? <a href="#" v-on:click="currentForm--"><strong>S'inscrire</strong></a></p>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '@/services/auth'
export default {
  name: 'index',
  data () {
    return {
      jokes: [
        'de la crème',
        'des internets',
        'de la DA2I',
        'de J2EE',
        'de la crème',
        'des théories du complot',
        'des photos de chat',
        'des mèmes'
      ],
      joke: '',
      currentForm: 0,
      lastName: '',
      firstName: '',
      birthDate: '',
      newEmail: '',
      username: '',
      newPassword: '',
      email: '',
      password: ''
    }
  },
  mounted: function () {
    var self = this
    setInterval(function () {
      self.$data.joke = self.$data.jokes[Math.floor(Math.random() * self.$data.jokes.length)]
    }, 3000)
    this.joke = this.jokes[Math.floor(Math.random() * this.jokes.length)]
  },
  methods: {
    loginButton: function () {
      this.$parent.$data.loading = true
      auth.login(this.$data.email, this.$data.password).then(res => {
        this.$parent.$data.loading = false
        this.$parent.$data.currentuser = res.name
        this.$router.push('/wall')
      }, err => {
        this.$parent.$data.loading = false
        this.$parent.$data.modal_title = "Erreur d'authentification"
        this.$parent.$data.modal_content = err.message
        this.$parent.$data.modal = true
      })
    },
    registerButton: function () {
      this.$parent.$data.loading = true
      auth.register(this.$data.firstName, this.$data.lastName, this.$data.birthDate, this.$data.username, this.$data.newEmail, this.$data.newPassword).then(() => {
        this.$parent.$data.loading = false
        this.$data.currentForm = 1
        this.$parent.$data.modal_title = 'Bienvenue parmi nous !'
        this.$parent.$data.modal_content = 'Vous pouvez maintenant vous connecter avec vos identifiants.'
        this.$parent.$data.modal = true
      }, err => {
        this.$parent.$data.loading = false
        this.$parent.$data.modal_title = "Erreur d'inscription"
        this.$parent.$data.modal_content = err.message
        this.$parent.$data.modal = true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}
form fieldset input.form-control {
    border-radius: 0;
    margin-top: -1px;
}

form fieldset input.form-control:first-child {
    border-radius: 5px 5px 0 0;
    margin-top: 1em;
}

form fieldset input.form-control:last-child {
    border-radius: 0 0 5px 5px;
    margin-bottom: 1em;
}

form button {
    text-transform: uppercase;
    min-width: 100%;
    margin-bottom: 1em;
}
</style>
