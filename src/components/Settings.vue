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
                <input class="form-check-input" type="radio" name="activityVisibility" id="publicVisibility" value="public" v-model="visibility" />
                <label for="publicVisibility" class="form-check-label">Tout le monde</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="activityVisibility" id="friendsVisibility" value="friends" v-model="visibility" />
                <label for="friendsVisibility" class="form-check-label">Amis seulement</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="activityVisibility" id="myselfVisibility" value="myself" v-model="visibility" />
                <label for="myselfVisibility" class="form-check-label">Moi uniquement</label>
              </div>
            </div>
          </div>
        </fieldset>
        <button type="submit" class="btn btn-primary text-uppercase d-block ml-auto" v-on:click="saveSettings">Enregistrer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data: function () {
    return {
      lastName: '',
      firstName: '',
      birthDate: '',
      email: '',
      visibility: ''
    }
  },
  methods: {
    saveSettings: function () {
      // TODO: Enregistrement des paramètres
    }
  }
}
</script>
