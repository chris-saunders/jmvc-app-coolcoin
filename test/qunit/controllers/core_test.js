steal(
    function() {
        // Overload render to enable async start() whilst calling original method
        Coolcoin.Controllers.Core('Coolcoin.Controllers.Coretest',
        {
        }, {
            render: function() {
                this._super();
                start();
            }
        });

        var $fixture = null,
            $div = null,
            repeat = {
                setup: function() {
                    $fixture = $('#qunit-fixture');
                    $fixture.append('<div></div>');
                    $div = $fixture.find('div');
                    stop();
            
                    $div.coolcoin_coretest();
                },
                teardown: function() {
                    $fixture = $div = null;
                }
            };

        module('tabletotals', repeat);
        test('table has a totals row at the bottom', function() {
            test = $fixture;
            debugger;
            ok($div.find('.tabletotals-row').length);
        });

        test('totals row contains same amount of columns as other rows', function() {
            equals($div.find('tbody tr:first-child td').length, $div.find('.tabletotals-row td').length);
        });

        test('amount is correctly totalled and appended to corresponding column cell', function() {
            equals($div.find('.tabletotals-row td').eq(5).text(), 50);
        });
    }
);