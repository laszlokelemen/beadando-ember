import Ember from 'ember';

export default Ember.Component.extend({
    subjects: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                code: this.$('#kód').val(),
                name: this.$('#név').val(),
                description: this.$('#leiras').val(),
                credit: this.$('#kredit').val(),
            });
        }
    },
    
    validate() {
        var code = this.$('#kód').val();
        var name = this.$('#név').val();
        var description = this.$('#leírás').val();
        var credit = this.$('#kredit').val();
        
        this.set('subjects.code', code === '' ? 'Kód kötelező' : '');
        this.set('subjects.name', name === '' ? 'Név kötelező' : '');
        this.set('subjects.description', description === '' ? 'Leírás kötelező' : '');
        this.set('subjects.credit', credit === '' ? 'Kredit kötelező' : '');
        
        return this.get('subjects.code') === '' &&
               this.get('subjects.name') === '' &&
               this.get('subjects.description') === '' &&
               this.get('subjects.credit') === '';
    }
});
