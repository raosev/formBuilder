jQuery(document).ready(function($) {
  'use strict';
  var template = document.getElementById('fb-template'),
    $buildWrap = $(document.querySelector('.build-form')),
    $renderWrap = $(document.querySelector('.render-form')),
    $renderBtn = $(document.getElementById('render-form-button')),
    formRenderOpts = {
      container: document.getElementById('rendered-form')
    },
    formBuilderOpts = {
      fieldRemoveWarn: true,
      defaultFields: [{
          label: 'First Name',
          name: 'first-name',
          required: 'true',
          description: 'Your first name',
          type: 'text'
        }, {
          label: 'Phone',
          name: 'phone',
          description: 'How can we reach you?',
          type: 'text'
        }]
    };

  $(template).formBuilder(formBuilderOpts);

  var toggleEdit = function() {
    $buildWrap.toggle();
    $renderWrap.toggle();
  };

  $('.fb-save').click(function() {
    toggleEdit();
    $(template).formRender(formRenderOpts);
  });

  $renderBtn.click(function() {
    toggleEdit();
  });

});
