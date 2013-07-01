steal(
    function() {
        module('coolcoin integration test', {
            setup: function(){
                S.open('//coolcoin/coolcoin.html');
            }
        });
        
        test('table component integrates properly', function(){
            equals(S('h1').text(), 'Cool Coin','Page header');
        });

        test('table contains cols: #, Date, Type, Description, Value', function() {
            ok(S('th.id').length);
            ok(S('th.date').length);
            ok(S('th.type').length);
            ok(S('th.description').length);
            ok(S('th.tags').length);
            ok(S('th.value').length);
        });

        test('table can accomodate tablefilter component', function() {
            ok(S('table.components_tablefilter').length);
        });

        test('table has a totals row at the bottom', function() {
            ok(S('.tabletotals-row').length);
        });

    }
);