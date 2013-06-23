steal(
    './coolcoin.css',
    './models/models.js',
    './fixtures/fixtures.js',
    'jquery/controller',
    '//components/table/table',
    function() {
        $.Controller('Home',
        {

        }, {
            init: function() {
                this.element.append('<table></table>');
                this.render();
            },

            render: function() {
                this.find('table').components_table({
                    headers: {
                        foo: 'Foo'
                    },
                    rows: new $.Model.List([
                        new $.Model({ foo: 'bar' })
                    ])
                });
            }
        });

        $('.wrapper').home();
    }
);