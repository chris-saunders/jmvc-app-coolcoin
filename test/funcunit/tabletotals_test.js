steal(
    function() {
        module('tabletotals test', {
            setup: function(){
                S.open('//coolcoin/coolcoin.html');
            }
        });

        test('table has a totals row at the bottom', function() {
            ok(S('.tabletotals-row').length);
        });

        test('totals row contains same amount of columns as other rows', function() {
            equals(S('tbody tr:first-child td').length, S('.tabletotals-row td').length);
        });

        test('amount is correctly totalled and appended to corresponding column cell', function() {
            equals(S('.tabletotals-row td').eq(5).text(), 50);
        });
    }
);