steal(
    function() {
        var $fixture = null,
            $table = null,
            repeat = {
                setup: function() {
                    $fixture = $('#qunit-fixture');
                    $fixture.append('<table></table>');
                    $table = $fixture.find('table');
                    $table.components_table({
                        headers: {
                            dollars: 'Dollars'
                        },
                        rows: new $.Model.List([
                            new $.Model({ dollars: 25 }),
                            new $.Model({ dollars: 50 }),
                        ])
                    });
                },
                teardown: function() {
                    $fixture = $table = null;
                }
            };

        module('tabletotals', repeat);
        test('table has a totals row at the bottom', function() {
            ok($table.find('.tabletotals-row').length);
        });
    }
);