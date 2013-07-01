steal(
    './coolcoin.css',
    './models/models.js',
    './fixtures/fixtures.js',
    'jquery/controller',
    '//components/table/table',
    '//components/tablefilter/tablefilter'
).then(
    'public/js/libs/jqueryui/ui/latest.js',
    'public/js/libs/jqueryui/themes/base/jquery-ui.css',
    'public/js/libs/bootstrap/css/bootstrap.css',
    'public/js/libs/bootstrap/js/bootstrap.js',
    function() {
        $.Controller('Coolcoin',
        {

        }, {
            init: function() {
                this.element.append(this.view('./core.ejs'));
                this.render();
            },

            render: function() {
                this.find('table').components_table({
                    headers: {
                        id: '#',
                        date: 'Date',
                        type: 'Type',
                        description: 'Description',
                        tags: 'Tags',
                        value: 'Value'
                    },
                    rows: new $.Model.List([
                        new $.Model({ id: 1, date: '23/01/2005', type: 'POS', description: "McDonalds", tags: 'Food, Leisure', value: -11.50 })
                    ])
                })
                .components_tablefilter({
                    filters: {
                        date: {
                            type: 'date',
                            position: 1
                        }
                    }
                });

                this.find('table.components_table tbody').append(this.view('tabletotals.ejs'));
            },

            'button.filter-show click': function(el, ev) {
                this.find('.components_tablefilter').trigger('tablefilter.toggleVisibility');
            }
        });

        $('.wrapper').coolcoin();
    }
);