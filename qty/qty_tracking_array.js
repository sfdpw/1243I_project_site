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

                    if (location_coordinates[0].constructor === Array) // test if line or polygon

                    {

                        location_coordinates = construction_instance.geometry.coordinates[0][0];

                        if (location_coordinates[0].constructor === Array) // test if polygon

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

                            'pp_no': '<a href=\"..\\payments/payment_details_'.concat(period_charge, '.html\" target=\"_blank\">', period_charge, '</a>'),
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
            'location': '',
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


// Period Totals

for (const bid_item of Object.keys(qty_array))

{

    var qty_period_details = [];

    qty_period_details[0] = {};
    qty_period_details[0].amt_esh = 0;
    qty_period_details[0].qty_esh = 0;
    qty_period_details[0].amt_rnr = 0;
    qty_period_details[0].qty_rnr = 0;
    qty_period_details[0].amt_ssp = 0;
    qty_period_details[0].qty_ssp = 0;
    qty_period_details[0].amt_tot = 0;
    qty_period_details[0].qty_tot = 0;

    var qty_period_detail_inj_array = [];
    var pp_ticker = 0;

    qty_array[bid_item].sort((a, b) => (a.pp_no > b.pp_no) ? 1 : -1);

    for (var ppi = 1; ppi < qty_array[bid_item].length; ppi++) {

        qty_period_details[ppi] = qty_period_details[0];

        qty_period_details[ppi].amt_esh = qty_array[bid_item][ppi - 1].amt_esh + qty_period_details[ppi - 1].amt_esh;
        qty_period_details[ppi].qty_esh = qty_array[bid_item][ppi - 1].qty_esh + qty_period_details[ppi - 1].qty_esh;
        qty_period_details[ppi].amt_rnr = qty_array[bid_item][ppi - 1].amt_rnr + qty_period_details[ppi - 1].amt_rnr;
        qty_period_details[ppi].qty_rnr = qty_array[bid_item][ppi - 1].qty_rnr + qty_period_details[ppi - 1].qty_rnr;
        qty_period_details[ppi].amt_ssp = qty_array[bid_item][ppi - 1].amt_ssp + qty_period_details[ppi - 1].amt_ssp;
        qty_period_details[ppi].qty_ssp = qty_array[bid_item][ppi - 1].qty_ssp + qty_period_details[ppi - 1].qty_ssp;
        qty_period_details[ppi].amt_tot = qty_array[bid_item][ppi - 1].amt_tot + qty_period_details[ppi - 1].amt_tot;
        qty_period_details[ppi].qty_tot = qty_array[bid_item][ppi - 1].qty_tot + qty_period_details[ppi - 1].qty_tot;

        if (ppi == qty_array[bid_item].length - 1 || qty_array[bid_item][ppi].pp_no != qty_array[bid_item][ppi - 1].pp_no)

        {

            qty_period_detail_inj_array[pp_ticker] = [0, {}];

            if (ppi == qty_array[bid_item].length - 1) {
            
                qty_period_detail_inj_array[pp_ticker][0] = ppi + 1;
                qty_period_details[ppi].amt_esh += qty_array[bid_item][ppi].amt_esh;
                qty_period_details[ppi].qty_esh += qty_array[bid_item][ppi].qty_esh;
                qty_period_details[ppi].amt_rnr += qty_array[bid_item][ppi].amt_rnr;
                qty_period_details[ppi].qty_rnr += qty_array[bid_item][ppi].qty_rnr;
                qty_period_details[ppi].amt_ssp += qty_array[bid_item][ppi].amt_ssp;
                qty_period_details[ppi].qty_ssp += qty_array[bid_item][ppi].qty_ssp;
                qty_period_details[ppi].amt_tot += qty_array[bid_item][ppi].amt_tot;
                qty_period_details[ppi].qty_tot += qty_array[bid_item][ppi].qty_tot;
                
            } else {
                qty_period_detail_inj_array[pp_ticker][0] = ppi;
            }

            qty_period_detail_inj_array[pp_ticker][1].pp_no = '';
            qty_period_detail_inj_array[pp_ticker][1].id_a = '';
            qty_period_detail_inj_array[pp_ticker][1].location = '<div style="text-align:right"><b>Period Totals:</b></div>';
            qty_period_detail_inj_array[pp_ticker][1].amt_esh = qty_period_details[ppi].amt_esh;
            qty_period_detail_inj_array[pp_ticker][1].qty_esh = qty_period_details[ppi].qty_esh;
            qty_period_detail_inj_array[pp_ticker][1].amt_rnr = qty_period_details[ppi].amt_rnr;
            qty_period_detail_inj_array[pp_ticker][1].qty_rnr = qty_period_details[ppi].qty_rnr;
            qty_period_detail_inj_array[pp_ticker][1].amt_ssp = qty_period_details[ppi].amt_ssp;
            qty_period_detail_inj_array[pp_ticker][1].qty_ssp = qty_period_details[ppi].qty_ssp;
            qty_period_detail_inj_array[pp_ticker][1].amt_tot = qty_period_details[ppi].amt_tot;
            qty_period_detail_inj_array[pp_ticker][1].qty_tot = qty_period_details[ppi].qty_tot;
            qty_period_detail_inj_array[pp_ticker][1].unit = qty_array[bid_item][ppi].unit;

            qty_period_details[ppi].amt_esh = 0;
            qty_period_details[ppi].qty_esh = 0;
            qty_period_details[ppi].amt_rnr = 0;
            qty_period_details[ppi].qty_rnr = 0;
            qty_period_details[ppi].amt_ssp = 0;
            qty_period_details[ppi].qty_ssp = 0;
            qty_period_details[ppi].amt_tot = 0;
            qty_period_details[ppi].qty_tot = 0;

            pp_ticker += 1;

        }

    }

    var inj_entry_adjustment = 0;

    for ( const inj_entry of qty_period_detail_inj_array ) {

        qty_array[bid_item].splice(inj_entry[0] + inj_entry_adjustment, 0, inj_entry[1]);

        qty_array[bid_item].splice(inj_entry[0] + inj_entry_adjustment + 1, 0, {
        
             'pp_no': '',
              'id_a': '',
          'location': '<div style="padding:5px;">&nbsp;</div>',
           'amt_esh': 0,
           'qty_esh': 0,
           'amt_rnr': 0,
           'qty_rnr': 0,          
           'amt_ssp': 0,
           'qty_ssp': 0,
           'amt_tot': 0,
           'qty_tot': 0
           
        });

        inj_entry_adjustment += 2;

    }

}
