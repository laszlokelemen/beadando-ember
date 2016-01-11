import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        var store = this.store;
        return {
            CurrentPlayer: store.findRecord('user', 'IQ00oRnAHO4070AahDQA')
        };
    }
});