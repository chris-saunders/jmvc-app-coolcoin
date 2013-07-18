steal(
    'jquery/controller',
    'jquery/controller/view',
    'jquery/view/ejs',
    'jquery/model',
    'jquery/model/list',
    'jquery/model/backup',
    'jquery/dom/fixture'
).then(
    'components/table',
    'components/tablefilter',
    './coolcoin.css'
).then(
    './models/models.js'
).then(
    './controllers/controllers.js',
    './fixtures/fixtures.js'
).then(
    'public/js/libs/jqueryui/ui/latest.js',
    'public/js/libs/jqueryui/themes/base/jquery-ui.css',
    function() {
        if(window.location.href.indexOf("qunit") === -1) {
            steal('public/js/libs/bootstrap/css/bootstrap.css')
        }
    },
    'public/js/libs/bootstrap/js/bootstrap.js'
);