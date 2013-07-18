steal(
    function() {
        $.Model('Wrapper', {
            attributes: {
                list: 'Coolcoin.Models.Transaction.models'
            }
        }, {

        })

        $.Controller('Coolcoin.Controllers.Core',
        {
            defaults: {
                model: new Wrapper()
            }

        }, {
            init: function() {
                this.instantiated = true;
                this.element.append(this.view('./core.ejs'));
                this.getTransactions();
            },

            getTransactions: function() {
                var self = this;
                Coolcoin.Models.Transaction.findAll()
                .done(
                    function(data) {
                        self.options.model.attr('list', data);
                    }
                );
            },

            calculateTotal: function() {
                var totalValue = 0;
                this.options.model.attr('list').each(function(index, model) {
                    totalValue += model.attr('value');
                });

                this.options.model.attr('total', new $.Model({
                    id: "",
                    date: "",
                    type: "",
                    description: "",
                    tags: "",
                    value: totalValue
                }));
            },

            render: function() {
                this.find('.tableWrapper').components_table({
                    headers: {
                        id: '#',
                        date: 'Date',
                        type: 'Type',
                        description: 'Description',
                        tags: 'Tags',
                        value: 'Value'
                    },
                    rows: this.options.model.attr('list'),
                    row_tpl: '//coolcoin/views/row_tpl.ejs'
                })
                .components_tablefilter({
                    filters: {
                        tags: {
                            type: 'select',
                            position: 4,
                            data: ['Food', 'Horses']
                        },
                    }
                });

                this.find('.tableWrapper tbody').append(this.view('./row_tpl.ejs', this.options.model.attr('total')));
            },

            '{model} list': function(Model, ev, newModel) {
                this.calculateTotal();
            },

            '{model} total': function(Model, ev, newModel) {
                if (this.instantiated) {
                    this.options.model.backup();
                    this.instantiated = false;
                }
                this.render();
            },

            'button.filter-show click': function(el, ev) {
                this.find('.components_tablefilter').trigger('tablefilter.toggleVisibility');
            },

            'tablefilter.submit': function(el, ev, data) {
                var matchedModels = this.options.model.attr('list').match('tags', data.tags);
                if (matchedModels.length) {
                    this.options.model.attr('list', matchedModels);    
                }
            },

            'tablefilter.reset': function(el, ev, data) {
                if (this.options.model.isDirty(true)) {
                    this.options.model.restore(true);
                }
            }
        });

        $('.wrapper').coolcoin_core();
    }
);