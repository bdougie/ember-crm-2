App.LeadController = Ember.ObjectController.extend({

  showUnsavedMessage: function() {
    return this.get('isDirty') && !this.get('isSaving')
  }.property('isDirty', 'isSaving'),
})