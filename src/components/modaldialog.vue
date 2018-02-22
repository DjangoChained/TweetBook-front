<template>
  <div class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="close" aria-label="Close" v-on:click="hide">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>{{ content }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" v-on:click="hide">Fermer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import 'bootstrap'
export default {
  name: 'modaldialog',
  props: ['title', 'content', 'visible'],
  mounted: function () {
    if (this.$props['visible']) {
      $('.modal').modal('show')
    }
  },
  watch: {
    visible: function (visibility) {
      $('.modal').modal(visibility ? 'show' : 'hide')
    }
  },
  methods: {
    hide: function () {
      this.$parent.$data.modal = false
    }
  }
}
</script>
