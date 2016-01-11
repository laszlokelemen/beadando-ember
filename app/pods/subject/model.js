import DS from 'ember-data';

const SubjectModel = DS.Model.extend({
  code: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  credit: DS.attr('string'),
});

SubjectModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            code: '2021.12.12',
            name: 'pc1',
            description: 'rossz',
            credit: 'new',
        },    
        {
            id: 2,
            code: '2012.12.12',
            name: 'pc2',
            description: 'rossz',
            credit: 'assigned',
        },    
        {
            id: 3,
            code: '2015.12.12',
            name: 'pc9',
            description: 'rossz',
            credit: 'success',
        },    
    ]
});

export default SubjectModel;