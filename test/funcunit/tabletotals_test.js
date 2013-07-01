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

        

    }
);