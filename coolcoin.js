steal(
    './coolcoin.css',           // application CSS file
    './models/models.js',       // steals all your models
    './fixtures/fixtures.js',   // sets up fixtures for your models
    'jquery/controller',
    function(){                 // configure your application
        $.Controller('Home',
        {

        }, {
            init: function() {
                console.log('fire');
            }
        });
    }
);