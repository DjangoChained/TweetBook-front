<template>
  <div class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="close" aria-label="Close" data-dismiss = "modal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>{{ content }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'modaldialog',
  props: ['title', 'content', 'visible'],
  mounted: function () {
    var dis = this
    $('.modal').on('hide.bs.modal', function () {
      dis.$parent.$data.modal = false
    })
    if (this.$props['visible']) {
      $('.modal').modal('show')
    }
  },
  watch: {
    visible: function (visibility) {
      $('.modal').modal(visibility ? 'show' : 'hide')
    }
  }
}
</script>
