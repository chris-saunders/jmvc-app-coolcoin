steal(
    function() {
        var $fixture = null,
            $div = null,
            $model = null,
            repeat = {
                setup: function() {
                    $fixture = $('#qunit-fixture');
                    $fixture.append('<div></div>');
                    $div = $fixture.find('div');
                    $model = Coolcoin.Models.Transaction;
                },
                teardown: function() {
                    $fixture = $div = $model = null;
                }
            };

        module('transaction model', repeat);
        test('model exists', function() {
            ok($model);
        });

        asyncTest('results are returned for findAll', function() {
            expect(1);

            $model.findAll()
            .done(
                function(data) {
                    ok(data);
                    start();
                }
            );
        });
    }
);