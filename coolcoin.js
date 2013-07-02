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
        $.Controller.extend('Coolcoin.Controllers.Core',
        {

        }, {
            init: function() {
                var self = this;
                this.element.append(this.view('./core.ejs'));
                this.getTransactions(
                    function() {
                        self.render();
                    }
                );
            },

            getTransactions: function(cb) {
                var self = this;
                Coolcoin.Models.Transaction.findAll()
                .done(
                    function(data) {
                        self.transactionList = data;
                        cb();
                    }
                );
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
                    rows: this.transactionList
                })
                .components_tablefilter({
                    filters: {
                        // date: {
                        //     type: 'date',
                        //     position: 1
                        // },
                        tags: {
                            type: 'select',
                            position: 4,
                            data: ['Food', 'Leisure']
                        },
                    }
                });

                var totalValue = 0;
                this.transactionList.each(function(index, model) {
                    totalValue += model.attr('value');
                });

                this.find('table.components_table tbody')
                    .append(this.view('./tabletotals.ejs', { totalValue: totalValue }));

                this.options.cb();
            },

            'button.filter-show click': function(el, ev) {
                this.find('.components_tablefilter').trigger('tablefilter.toggleVisibility');
            },

            'tablefilter.submit': function(el, ev, data) {
                this.render();
            }
        });

        $('.wrapper').coolcoin_core();
    }
);