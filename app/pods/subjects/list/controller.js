import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newSubject(formData) {
            var subject = this.store.createRecord(
                'subject', 
                Object.assign(
                    {
                        code: 'new',
                        name: 'asdsad',
                        description: 'labor',
                        credit: 'rossz'
                    }, 
                    formData
                )
            );
            subject.save();
            $('.modal').modal('hide');
            //this.transitionToRoute('errors.list');
        }
    }
});
