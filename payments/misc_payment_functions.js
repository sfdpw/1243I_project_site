// ######## REFLEXIVE PAYMENT FUNCTIONS #####################

//function contract_total () {






//}




// ######### FORMATTERS ######################


function dollar_formatter_accounting(amount, row) {

    var return_string = '';

    return_string =

        '<div style="text-align:left;  display:table-cell; padding:5px; width:5%;  flush:left">$</div>\
             <div style="text-align:right; display:table-cell; padding:5px; width:90%; flush:right">' +
        (amount).toLocaleString('en', {
            style: 'currency',
            currency: 'USD'
        }).replace('$', '') + '</div>';

    return return_string

}


function qty_formatter_no_dec(qty_input, row)

{

    var return_string = '';

    if (row.unit == 'LS' || row.unit == 'AL')

    {

        return_string = Number(qty_input).toLocaleString(undefined, {
            style: 'percent',
            minimumFractionDigits: 0
        });

    } else if (row.unit == 'SF' ||
        row.unit == 'LF' ||
        row.unit == 'CY' ||
        row.unit == 'TON' ||
        row.unit == 'US SHORT TON')

    {

        return_string = parseFloat(qty_input).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    } else if (row.unit == 'EA')

    {

        return_string = qty_input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    }


    return return_string

}


function qty_formatter_with_dec(qty_input, row)

{

    var return_string = '';

    if (row.unit == 'LS' || row.unit == 'AL')

    {

        return_string = Number(qty_input).toLocaleString(undefined, {
            style: 'percent',
            minimumFractionDigits: 2
        });

    } else if (row.unit == 'SF' || row.unit == 'LF' || row.unit == 'CY' || row.unit == 'TON')

    {

        return_string = parseFloat(qty_input).toFixed(2).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    } else if (row.unit == 'EA')

    {

        return_string = qty_input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    }


    return return_string

}
