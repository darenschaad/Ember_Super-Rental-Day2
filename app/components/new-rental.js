import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

    save1() {
      var params = {
        //on owner this protects against an undefined field from being sent to firebase so that it does not cause an error.
        owner: this.get('owner') ? this.get('owner') : "test",
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.set('addNewRental', false);
      this.sendAction('save2', params);
    }
  }
});
