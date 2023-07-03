var qty_array = {};

for (const entry of base_sov) {

    qty_array[entry.bid_item] = [];

}


for (const construction_instance of json_1243I_sewer_points.features.concat(json_1243I_sewer_lines.features).concat(json_1243I_flatwork_polygons.features))

{

    for (const bid_item_charged of Object.keys(construction_instance.properties.pp_history))

    {

        if (bid_item_charged != 'SW-0')

        {

            for (const bid_item of Object.keys(qty_array))

            {

                if (bid_item == bid_item_charged)


                {

                    var unit_price = base_sov[bid_item_sov_index_finder(bid_item)].unit_price;
                    var uunit = base_sov[bid_item_sov_index_finder(bid_item)].unit;
 
                    var location_coordinates = construction_instance.geometry.coordinates; // works for points only
 
                    if ( location_coordinates[0].constructor === Array ) // test if line or polygon
                    
                    {
                    
                     location_coordinates = construction_instance.geometry.coordinates[0][0];
                    
                     if ( location_coordinates[0].constructor === Array ) // test if polygon
                    
                       {
                     
                         location_coordinates = construction_instance.geometry.coordinates[0][0][0];
                     
                       }
                    
                    }
 
 
                    var location_string = "<a href=\"..\\index.html#20/".concat(location_coordinates[1], '/', 
                                          location_coordinates[0], "\" target=\"_blank\">",
                                          construction_instance.properties.location, "</a>");


                    for (const period_charge of Object.keys(construction_instance.properties.pp_history[bid_item]))


                    {



                        qty_array[bid_item].push({

                              'pp_no': '<a href=\"..\\payments/payment_details_'.concat(period_charge, '.html\" target=\"_blank\">', period_charge,'</a>'),
                               'id_a': construction_instance.properties.id_a,
                           'location': location_string,
                            'amt_esh': construction_instance.properties.pp_history[bid_item][period_charge][0],
                            'qty_esh': construction_instance.properties.pp_history[bid_item][period_charge][0] / unit_price,
                            'amt_rnr': construction_instance.properties.pp_history[bid_item][period_charge][1],
                            'qty_rnr': construction_instance.properties.pp_history[bid_item][period_charge][1] / unit_price,
                            'amt_ssp': construction_instance.properties.pp_history[bid_item][period_charge][2],
                            'qty_ssp': construction_instance.properties.pp_history[bid_item][period_charge][2] / unit_price,
                            'amt_tot': construction_instance.properties.pp_history[bid_item][period_charge][0] +
                                construction_instance.properties.pp_history[bid_item][period_charge][1] +
                                construction_instance.properties.pp_history[bid_item][period_charge][2],
                            'qty_tot': (construction_instance.properties.pp_history[bid_item][period_charge][0] +
                                construction_instance.properties.pp_history[bid_item][period_charge][1] +
                                construction_instance.properties.pp_history[bid_item][period_charge][2]) / unit_price,
                               'unit': uunit

                        })


                    }


                }


            }


        }


    }


}

// To-Date Summer

var qty_array_to_date = {}


for (const bid_item of Object.keys(qty_array))

{

    qty_array_to_date[bid_item] = {};

    var uunit = base_sov[bid_item_sov_index_finder(bid_item)].unit;

    qty_array[bid_item].sort( (a, b) => (a.pp_no > b.pp_no) ?  1 : -1 );

    var bid_item_total = {}

    bid_item_total.qty = {};
    bid_item_total.amt = {};

    bid_item_total.qty.esh = 0;
    bid_item_total.amt.esh = 0;
    bid_item_total.qty.rnr = 0;
    bid_item_total.amt.rnr = 0;
    bid_item_total.qty.ssp = 0;
    bid_item_total.amt.ssp = 0;
    bid_item_total.qty.tot = 0;
    bid_item_total.amt.tot = 0;

    for (const charge_instance of qty_array[bid_item])

    {

        bid_item_total.qty.esh += charge_instance.qty_esh;
        bid_item_total.amt.esh += charge_instance.amt_esh;
        bid_item_total.qty.rnr += charge_instance.qty_rnr;
        bid_item_total.amt.rnr += charge_instance.amt_rnr;
        bid_item_total.qty.ssp += charge_instance.qty_ssp;
        bid_item_total.amt.ssp += charge_instance.amt_ssp;
        bid_item_total.qty.tot += charge_instance.qty_tot;
        bid_item_total.amt.tot += charge_instance.amt_tot;

    }

   qty_array_to_date[bid_item] = 
   
   {

           'pp_no': '',
            'id_a': '',
        'location': '<b>To-Date Totals:</b>',
         'amt_esh': bid_item_total.amt.esh,
         'qty_esh': bid_item_total.qty.esh,
         'amt_rnr': bid_item_total.amt.rnr,
         'qty_rnr': bid_item_total.qty.rnr,
         'amt_ssp': bid_item_total.amt.ssp,
         'qty_ssp': bid_item_total.qty.ssp,
         'amt_tot': bid_item_total.amt.tot,
         'qty_tot': bid_item_total.qty.tot,
            'unit': uunit

    }

}


