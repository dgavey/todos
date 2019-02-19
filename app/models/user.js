import EmberObject, { computed, observer } from '@ember/object';
let User = EmberObject.extend({

  firstName: 'Jane',

  lastName: 'Doe',

  fullName: computed(function() {
    return `${this.firstName} ${this.lastName}`;
  }),

  fullNameDidChange: observer('fullName', function() {
    let names = this.fullName.split();
    this.set('firstName', names[0]);
    this.set('lastName', names[1]);
  })
});

export default User;
