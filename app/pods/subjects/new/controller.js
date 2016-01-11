import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newSubject(formData) {
            console.log(formData);
            // formData.status = 'new';
            // formData.date = Date.now().toLocaleString();
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
            this.transitionToRoute('subjects.list');
        }
    }
});
