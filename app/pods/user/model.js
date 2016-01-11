import DS from 'ember-data';

const UserModel = DS.Model.extend({
  name: DS.attr('string'),
  neptun: DS.attr('string'),
  img: DS.attr('img'),
  subjects: DS.hasMany('subjects', { async: true }),
});

export default UserModel;