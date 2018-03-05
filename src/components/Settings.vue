<template>
  <div class="container">
    <h2>Paramètres du compte</h2>
    <form>
        <div class="form-group row">
          <label for="lastNameInput" class="col-sm-4 col-md-3 col-form-label">Nom de famille</label>
          <div class="col-sm-8 col-md-9">
            <input type="text" id="lastNameInput" class="form-control" placeholder="Nom de famille" autocomplete="family-name" v-model="lastName" required />
          </div>
        </div>
        <div class="form-group row">
          <label for="firstNameInput" class="col-sm-4 col-md-3 col-form-label">Prénom</label>
          <div class="col-sm-8 col-md-9">
            <input type="text" id="firstNameInput" class="form-control" placeholder="Prénom" autocomplete="given-name" v-model="firstName" required />
          </div>
        </div>
        <div class="form-group row">
          <label for="birthDateInput" class="col-sm-4 col-md-3 col-form-label">Date de naissance</label>
          <div class="col-sm-8 col-md-9">
            <input type="date" id="birthDateInput" class="form-control" placeholder="Date de naissance" autocomplete="bday" v-model="birthDate" required />
          </div>
        </div>
        <div class="form-group row">
          <label for="emailInput" class="col-sm-4 col-md-3 col-form-label">Adresse e-mail</label>
          <div class="col-sm-8 col-md-9">
            <input type="email" id="emailInput" class="form-control" placeholder="Adresse e-mail" autocomplete="email" v-model="email" required />
          </div>
        </div>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-4 col-md-3 pt-0">Visibilité des publications</legend>
            <div class="col-sm-8 col-md-9">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="activityVisibility" id="allVisibility" value="all" v-model="visibility" />
                <label for="publicVisibility" class="form-check-label">Tout le monde</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="activityVisibility" id="friendsVisibility" value="friends" v-model="visibility" />
                <label for="friendsVisibility" class="form-check-label">Amis seulement</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="activityVisibility" id="authorVisibility" value="author" v-model="visibility" />
                <label for="myselfVisibility" class="form-check-label">Moi uniquement</label>
              </div>
            </div>
          </div>
        </fieldset>
        <button type="button" class="btn btn-primary text-uppercase d-block ml-auto" v-on:click="saveSettings">Enregistrer</button>
    </form>
    <h2>Modification du mot de passe</h2>
    <form>
      <div class="form-group row">
        <label for="currentPasswordInput" class="col-sm-4 col-md-3 col-form-label">Mot de passe actuel</label>
        <div class="col-sm-8 col-md-9">
          <input type="password" id="currentPasswordInput" class="form-control" placeholder="Mot de passe actuel" autocomplete="current-password" v-model="currentPassword" required />
        </div>
      </div>
      <div class="form-group row">
        <label for="newPasswordInput" class="col-sm-4 col-md-3 col-form-label">Nouveau mot de passe</label>
        <div class="col-sm-8 col-md-9">
          <input type="password" id="newPasswordInput" class="form-control" placeholder="Nouveau mot de passe" autocomplete="new-password" v-model="newPassword" required />
        </div>
      </div>
      <div class="form-group row">
        <label for="confirmPasswordInput" class="col-sm-4 col-md-3 col-form-label">Confirmation du mot de passe</label>
        <div class="col-sm-8 col-md-9">
          <input type="password" id="confirmPasswordInput" class="form-control" placeholder="Confirmation du mot de passe" autocomplete="new-password" v-model="confirmPassword" required />
        </div>
      </div>
      <button type="button" class="btn btn-primary text-uppercase d-block ml-auto" v-on:click="savePassword">Modifier</button>
    </form>
  </div>
</template>

<script>
import users from '@/services/users'
export default {
  name: 'Settings',
  data: function () {
    return {
      lastName: '',
      firstName: '',
      birthDate: '',
      email: '',
      visibility: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  },
  methods: {
    saveSettings: function () {
      users.saveUserSettings(this.$data.firstName, this.$data.lastName, this.$data.birthDate, this.$data.email, this.$data.visibility)
        .then(() => {
          this.$parent.$data.loading = false
          this.$parent.$data.modal_title = 'Paramètres sauvegardés'
          this.$parent.$data.modal_content = 'Votre nouvelle configuration prend effet immédiatement.'
          this.$parent.$data.modal = true
        }, err => {
          this.$parent.$data.loading = false
          this.$parent.$data.modal_title = "Erreur lors de l'enregistrement"
          this.$parent.$data.modal_content = err.message
          this.$parent.$data.modal = true
        })
    },
    savePassword: function () {
      // TODO: Modification du mot de passe
    }
  },
  mounted: function () {
    this.$parent.$data.loading = true
    users.getUserSettings().then(settings => {
      this.$data.firstName = settings.firstName
      this.$data.lastName = settings.lastName
      this.$data.birthDate = settings.birthdate
      this.$data.email = settings.email
      // this.$data.visibility = settings.visibility
      this.$parent.$data.loading = false
    }, err => {
      this.$parent.$data.loading = false
      this.$parent.$data.modal_title = 'Échec du chargement des paramètres'
      this.$parent.$data.modal_content = err.message
      this.$parent.$data.modal = true
      this.$router.back()
    })
  }
}
</script>
