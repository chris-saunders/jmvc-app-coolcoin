$.Model.extend('Coolcoin.Models.Transaction',
{
    findAll: function(params, success, error) {
        return $.ajax({
            url: '/transactions.json',
            type: 'get',
            dataType: 'json transaction.models',
            data: params,
            success: success,
            error: error
        });
    }
}, {

});