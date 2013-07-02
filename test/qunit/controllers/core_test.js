steal(
    function() {
        var $fixture = null,
            $div = null,
            repeat = {
                setup: function() {
                    $fixture = $('#qunit-fixture');
                    $fixture.append('<div></div>');
                    $div = $fixture.find('div');
                    stop();
                    Coolcoin.Controllers.Core.prototype.init = function() { this._super(); console.log('haha') };
                    $div.coolcoin_core({ cb: function() { start(); console.log('good') } });
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