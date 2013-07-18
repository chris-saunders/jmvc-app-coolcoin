steal(
    function() {
        $.fixture.on = true;
        var $fixture = null,
            $div = null,
            repeat = {
                setup: function() {
                    $fixture = $('#qunit-fixture');
                    $fixture.append('<div></div>');
                    $div = $fixture.find('div');
                    var render = Coolcoin.Controllers.Core.prototype.render;
                    Coolcoin.Controllers.Core.prototype.render = function() {
                        render.call(this);
                        start();
                    };
                    stop();
                    $div.coolcoin_core();
                },
                teardown: function() {
                    $fixture = $div = null;
                }
            };

        // module('tabletotals', repeat);
        // test('table has a totals row at the bottom', function() {
        //     ok($div.find('tbody tr:last').length);
        // });

        // test('amount is correctly totalled and appended to corresponding column cell', function() {
        //     equals($div.find('tbody tr:last td:last').text(), 50);
        // });

        module('tablefilter', repeat);
        // test('data is filtered after triggering a filter event', function() {
        //     $div.find('table').trigger('tablefilter.submit', {
        //         tags: 'Horses'
        //     });

        //     equals($div.find('tr.transaction:first td').eq(4).text(), 'Horses');
        // });

        test('table data is reset after clicking `reset` button', function() {
            $div.find('table').trigger('tablefilter.submit', {
                tags: 'Horses'
            });

            equals($div.find('tr.transaction:first td').eq(4).text(), 'Horses');

            $div.find('table').trigger('tablefilter.reset');
            test = $div;
            debugger;
            equals($div.find('tbody tr').length, 3)
        });
    }
);