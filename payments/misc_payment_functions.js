// ######## REFLEXIVE PAYMENT FUNCTIONS #####################
function get_pp_history_from_spatial_data(item_obj) {

    var max_pp_no = 10; // make this smarter

    var return_array = [];

    for (var pp = 0; pp < max_pp_no; pp++)

    {

        return_array[pp] = [0, 0, 0];

        for (const sw_point_item of json_1243I_sewer_points.features)

        {

            for (const bid_item of Object.entries(sw_point_item.properties.pp_history))

            {

                if (bid_item[0] == item_obj.bid_item)

                {


                    for (const pp_specifics of Object.entries(bid_item[1])) {


                        if (pp_specifics[0] == 'PP'.concat(num_pad(pp, 2)))

                        {
                        
                           for ( var ii = 0; ii < pp_specifics[1].length; ii++)
                           
                             {
                           
                               return_array[pp][ii] += pp_specifics[1][ii];

                              }

                        }

                    }

                }

            }

        }

    }

   console.log(return_array)

    return return_array

}


function get_payment_details(item_obj) {

    var return_obj = {};

    return_obj.allctd = {};
    return_obj.allctd.amt = {};
    return_obj.allctd.qty = {};

    return_obj.period = {};
    return_obj.period.amt = {};
    return_obj.period.qty = {};

    return_obj.period.qty.esh = {};
    return_obj.period.amt.esh = {};
    return_obj.period.qty.rnr = {};
    return_obj.period.amt.rnr = {};
    return_obj.period.qty.ssp = {};
    return_obj.period.amt.ssp = {};
    return_obj.period.qty.tot = {};
    return_obj.period.amt.tot = {};

    return_obj.todate = {};
    return_obj.todate.amt = {};
    return_obj.todate.qty = {};

    return_obj.todate.qty.esh = {};
    return_obj.todate.amt.esh = {};
    return_obj.todate.qty.rnr = {};
    return_obj.todate.amt.rnr = {};
    return_obj.todate.qty.ssp = {};
    return_obj.todate.amt.ssp = {};
    return_obj.todate.qty.tot = {};
    return_obj.todate.amt.tot = {};

    // PERIOD

    for (var pp = 0; pp < item_obj.pp_history.length; pp++)

    {

        if (item_obj.pp_history[pp].length == 0) {
            item_obj.pp_history[pp] = [0, 0, 0];
        }


        return_obj.period.qty.esh[pp] = item_obj.pp_history[pp][0] / item_obj.unit_price;
        return_obj.period.amt.esh[pp] = item_obj.pp_history[pp][0];

        return_obj.period.qty.rnr[pp] = item_obj.pp_history[pp][1] / item_obj.unit_price;
        return_obj.period.amt.rnr[pp] = item_obj.pp_history[pp][1];

        return_obj.period.qty.ssp[pp] = item_obj.pp_history[pp][2] / item_obj.unit_price;
        return_obj.period.amt.ssp[pp] = item_obj.pp_history[pp][2];

        return_obj.period.amt.tot[pp] = item_obj.pp_history[pp][0] + item_obj.pp_history[pp][1] + item_obj.pp_history[pp][2];
        return_obj.period.qty.tot[pp] = return_obj.period.amt.tot[pp] / item_obj.unit_price;

    }

    // TO DATE

    for (var pptd = 0; pptd < item_obj.pp_history.length; pptd++)

    {

        return_obj.todate.amt.esh[pptd] = 0;
        return_obj.todate.amt.rnr[pptd] = 0;
        return_obj.todate.amt.ssp[pptd] = 0;
        return_obj.todate.amt.tot[pptd] = 0;

        for (var pp = 0; pp <= pptd; pp++) {

            return_obj.todate.amt.esh[pptd] += return_obj.period.amt.esh[pp];
            return_obj.todate.amt.rnr[pptd] += return_obj.period.amt.rnr[pp];
            return_obj.todate.amt.ssp[pptd] += return_obj.period.amt.ssp[pp];
            return_obj.todate.amt.tot[pptd] += return_obj.period.amt.tot[pp];

        }

        return_obj.todate.qty.esh[pptd] = return_obj.todate.amt.esh[pptd] / item_obj.unit_price;
        return_obj.todate.qty.rnr[pptd] = return_obj.todate.amt.rnr[pptd] / item_obj.unit_price;
        return_obj.todate.qty.ssp[pptd] = return_obj.todate.amt.ssp[pptd] / item_obj.unit_price;
        return_obj.todate.qty.tot[pptd] = return_obj.todate.amt.tot[pptd] / item_obj.unit_price;

    }



    // ALLOCATION

    return_obj.allctd.qty.esh = item_obj.alloc_esh / item_obj.unit_price;
    return_obj.allctd.amt.esh = item_obj.alloc_esh;

    return_obj.allctd.qty.rnr = item_obj.alloc_rnr / item_obj.unit_price;
    return_obj.allctd.amt.rnr = item_obj.alloc_rnr;

    return_obj.allctd.qty.ssp = item_obj.alloc_ssp / item_obj.unit_price;
    return_obj.allctd.amt.ssp = item_obj.alloc_ssp;

    return_obj.allctd.qty.tot = (item_obj.alloc_esh + item_obj.alloc_rnr + item_obj.alloc_ssp) / item_obj.unit_price;
    return_obj.allctd.amt.tot = item_obj.alloc_esh + item_obj.alloc_rnr + item_obj.alloc_ssp;


    if (return_obj.allctd.amt.tot != item_obj.qty * item_obj.unit_price) {
        console.log('unbalanced allocated amount for '.concat(item_obj.bid_item))
    }
    if (return_obj.allctd.qty.tot != item_obj.qty) {
        console.log('unbalanced allocated qty for '.concat(item_obj.bid_item))
    }


    return return_obj

}




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

    } else if (row.unit == 'SF' || row.unit == 'LF' || row.unit == 'CY' || row.unit == 'TON' || row.unit == 'EA')

    {

        return_string = parseFloat(qty_input).toFixed(2).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    } 


    return return_string

}
