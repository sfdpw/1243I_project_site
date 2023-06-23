
// ######## REFLEXIVE PAYMENT FUNCTIONS #####################


function get_payment_details (item_obj) {

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

// PERIOD


    for ( var pp = 0; pp < item_obj.pp_history.length; pp++ )
    
    {
    
     if ( item_obj.pp_history[pp].length == 0 ) { item_obj.pp_history[pp] = [0, 0, 0]; }
  
  
  
     return_obj.period.qty.esh[pp] = item_obj.pp_history[pp][0] / item_obj.unit_price;   
     return_obj.period.amt.esh[pp] = item_obj.pp_history[pp][0];
     return_obj.period.amt.rnr[pp] = item_obj.pp_history[pp][1];
     return_obj.period.amt.ssp[pp] = item_obj.pp_history[pp][2];
     return_obj.period.amt.tot[pp] = item_obj.pp_history[pp][0] +  item_obj.pp_history[pp][1] +  item_obj.pp_history[pp][2];    
   
     } 


// ALLOCATION

    return_obj.allctd.qty.esh = item_obj.alloc_esh / item_obj.unit_price;
    return_obj.allctd.amt.esh = item_obj.alloc_esh;

    return_obj.allctd.qty.rnr = item_obj.alloc_rnr / item_obj.unit_price;
    return_obj.allctd.amt.rnr = item_obj.alloc_rnr;

    return_obj.allctd.qty.ssp = item_obj.alloc_ssp / item_obj.unit_price;    
    return_obj.allctd.amt.ssp = item_obj.alloc_ssp;

    return_obj.allctd.qty.tot = ( item_obj.alloc_esh + item_obj.alloc_rnr + item_obj.alloc_ssp ) / item_obj.unit_price;
    return_obj.allctd.amt.tot = item_obj.alloc_esh + item_obj.alloc_rnr + item_obj.alloc_ssp;



    if ( return_obj.allctd.amt.tot != item_obj.qty*item_obj.unit_price ){ console.log('unbalanced allocated amount for '.concat(item_obj.bid_item))}
    if ( return_obj.allctd.qty.tot != item_obj.qty  ){ console.log('unbalanced allocated qty for '.concat(item_obj.bid_item))}
    
    
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

    } else if (row.unit == 'SF' || row.unit == 'LF' || row.unit == 'CY' || row.unit == 'TON')

    {

        return_string = parseFloat(qty_input).toFixed(2).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    } else if (row.unit == 'EA')

    {

        return_string = qty_input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    }


    return return_string

}
