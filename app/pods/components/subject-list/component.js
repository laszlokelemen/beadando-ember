import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteSubject(subject) {
            //console.log(error);
            subject.deleteRecord();
            subject.save();
        }
    }
});
