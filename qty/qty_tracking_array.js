function cmp(a, b) {
    if (a > b) return +1;
    if (a < b) return -1;
    return 0;
};

var qty_array = {};

for (const entry of base_sov) {

    qty_array[entry.bid_item] = [];

}

for (const construction_instance of json_1243I_sewer_points.features.concat(json_1243I_sewer_lines.features).concat(json_1243I_flatwork_polygons.features)) {

    for (const bid_item_charged of Object.keys(construction_instance.properties.pp_history)) {

        if (bid_item_charged != 'SW-0') {

            for (const bid_item of Object.keys(qty_array)) {

                if (bid_item == bid_item_charged) {

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


                    for (const period_charge of Object.keys(construction_instance.properties.pp_history[bid_item])) {

                        var push_object = {

                            'row_type': 'construction_instance',
                            'pp_no': '<a href=\"..\\payments/payment_details_'.concat(period_charge, '.html\" target=\"_blank\">', period_charge, '</a>'),
                            'id_a': construction_instance.properties.id_a,
                            'location': location_string,
                            'amt_esh': construction_instance.properties.pp_history[bid_item][period_charge][0],
                            'qty_esh': construction_instance.properties.pp_history[bid_item][period_charge][0] / unit_price,
                            'amt_rnr': construction_instance.properties.pp_history[bid_item][period_charge][1],
                            'qty_rnr': construction_instance.properties.pp_history[bid_item][period_charge][1] / unit_price,
                            'amt_ssp': construction_instance.properties.pp_history[bid_item][period_charge][2],
                            'qty_ssp': construction_instance.properties.pp_history[bid_item][period_charge][2] / unit_price,
                            'amt_fol': construction_instance.properties.pp_history[bid_item][period_charge][3],
                            'qty_fol': construction_instance.properties.pp_history[bid_item][period_charge][3] / unit_price,
                            'amt_tot': construction_instance.properties.pp_history[bid_item][period_charge][0] +
                                construction_instance.properties.pp_history[bid_item][period_charge][1] +
                                construction_instance.properties.pp_history[bid_item][period_charge][2] +
                                construction_instance.properties.pp_history[bid_item][period_charge][3],
                            'qty_tot': (construction_instance.properties.pp_history[bid_item][period_charge][0] +
                                construction_instance.properties.pp_history[bid_item][period_charge][1] +
                                construction_instance.properties.pp_history[bid_item][period_charge][2] +
                                construction_instance.properties.pp_history[bid_item][period_charge][3]) / unit_price,
                            'unit': uunit

                        };

                        if (construction_instance.properties.hasOwnProperty('submittals')) {

                            push_object.submittals = construction_instance.properties.submittals;

                        }

                        qty_array[bid_item].push(push_object);

                    }

                }

            }

        }

    }

};

for (const bid_item of Object.keys(qty_array)) {

    if (bid_item == 'SW-16' || bid_item == 'SW-20') {
        qty_array[bid_item].sort(function (a, b) {
            return cmp(a.pp_no, b.pp_no) ||
                cmp(Number(a.submittals.tvi_pre_con.submittal_no), Number(b.submittals.tvi_pre_con.submittal_no)) ||
                cmp(Number(a.submittals.tvi_pre_con.video_no), Number(b.submittals.tvi_pre_con.video_no))
        });

    } else if (bid_item == 'SW-25' || bid_item == 'SW-26' || bid_item == 'SW-27') {

        qty_array[bid_item].sort(function (a, b) {
            return cmp(a.pp_no, b.pp_no) ||
                cmp(Number(a.submittals.tvi_post_con.submittal_no), Number(b.submittals.tvi_post_con.submittal_no)) ||
                cmp(Number(a.submittals.tvi_post_con.video_no), Number(b.submittals.tvi_post_con.video_no))
        });

    } else {

        qty_array[bid_item].sort(function (a, b) {
            return cmp(a.pp_no, b.pp_no) ||
                cmp(a.id_a, b.id_a)

        });

    };

};


// To-Date Summer

var qty_array_to_date = {}

for (const bid_item of Object.keys(qty_array)) {

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
    bid_item_total.qty.fol = 0;
    bid_item_total.amt.fol = 0;
    bid_item_total.qty.tot = 0;
    bid_item_total.amt.tot = 0;

    for (const charge_instance of qty_array[bid_item]) {

        bid_item_total.qty.esh += charge_instance.qty_esh;
        bid_item_total.amt.esh += charge_instance.amt_esh;
        bid_item_total.qty.rnr += charge_instance.qty_rnr;
        bid_item_total.amt.rnr += charge_instance.amt_rnr;
        bid_item_total.qty.ssp += charge_instance.qty_ssp;
        bid_item_total.amt.ssp += charge_instance.amt_ssp;
        bid_item_total.qty.fol += charge_instance.qty_fol;
        bid_item_total.amt.fol += charge_instance.amt_fol;
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
        'amt_fol': bid_item_total.amt.fol,
        'qty_fol': bid_item_total.qty.fol,
        'amt_tot': bid_item_total.amt.tot,
        'qty_tot': bid_item_total.qty.tot,
        'unit': uunit

    }

}

// Period Totals

var period_summary_row_obj =

{
    'row_type': 'period_summary',
    'pp_no': '',
    'id_a': '',
    'location': '<div style="text-align:right"><b>Period Totals:</b></div>',
    'amt_esh': 0,
    'qty_esh': 0,
    'amt_rnr': 0,
    'qty_rnr': 0,
    'amt_ssp': 0,
    'qty_ssp': 0,
    'amt_fol': 0,
    'qty_fol': 0,
    'amt_tot': 0,
    'qty_tot': 0,
    'submittals.tvi_pre_con.submittal_no': '',
    'submittals.tvi_pre_con.video_no': '',
    'submittals.tvi_pre_con.response': '',
    'submittals.tvi_post_con.submittal_no': '',
    'submittals.tvi_post_con.video_no': '',
    'submittals.tvi_post_con.response': ''
}

var empty_instance_row_obj = structuredClone(period_summary_row_obj);

empty_instance_row_obj.row_type = 'spacer_row';
empty_instance_row_obj.location = '<div style="padding:5px;">&nbsp;</div>';

for (const bid_item of Object.keys(qty_array)) {

    var injection_index_array = [];

    // qty_array[bid_item].sort((a, b) => (a.pp_no > b.pp_no) ? 1 : -1);

    // qty_array[bid_item].sort(function (a, b) {
    //    return cmp(a.pp_no, b.pp_no) || cmp(a.id_a, b.id_a)
    // })


    var period_double_row_tracker = 0;


    for (var instance_index = 1; instance_index < qty_array[bid_item].length; instance_index++) {

        if (qty_array[bid_item][instance_index].pp_no != qty_array[bid_item][instance_index - 1].pp_no) {

            injection_index_array.push(instance_index)

        }

    }

    injection_index_array.reverse();

    for (const injection_index of injection_index_array) {

        qty_array[bid_item].splice(injection_index, 0, structuredClone(empty_instance_row_obj))
        qty_array[bid_item].splice(injection_index, 0, structuredClone(period_summary_row_obj))

    }

    qty_array[bid_item].push(structuredClone(period_summary_row_obj));
    qty_array[bid_item].push(structuredClone(empty_instance_row_obj));

    var qty_period_details_unit = '';
    var qty_period_details_amt_esh = 0;
    var qty_period_details_qty_esh = 0;
    var qty_period_details_amt_rnr = 0;
    var qty_period_details_qty_rnr = 0;
    var qty_period_details_amt_ssp = 0;
    var qty_period_details_qty_ssp = 0;
    var qty_period_details_amt_fol = 0;
    var qty_period_details_qty_fol = 0;
    var qty_period_details_amt_tot = 0;
    var qty_period_details_qty_tot = 0;

    for (var instance_index = 0; instance_index < qty_array[bid_item].length; instance_index++) {

        if (qty_array[bid_item][instance_index].row_type == 'construction_instance') {

            qty_period_details_unit = qty_array[bid_item][instance_index].unit;
            qty_period_details_amt_esh += qty_array[bid_item][instance_index].amt_esh;
            qty_period_details_qty_esh += qty_array[bid_item][instance_index].qty_esh;
            qty_period_details_amt_rnr += qty_array[bid_item][instance_index].amt_rnr;
            qty_period_details_qty_rnr += qty_array[bid_item][instance_index].qty_rnr;
            qty_period_details_amt_ssp += qty_array[bid_item][instance_index].amt_ssp;
            qty_period_details_qty_ssp += qty_array[bid_item][instance_index].qty_ssp;
            qty_period_details_amt_fol += qty_array[bid_item][instance_index].amt_fol;
            qty_period_details_qty_fol += qty_array[bid_item][instance_index].qty_fol;
            qty_period_details_amt_tot += qty_array[bid_item][instance_index].amt_tot;
            qty_period_details_qty_tot += qty_array[bid_item][instance_index].qty_tot;

        }

        else if (qty_array[bid_item][instance_index].row_type == 'period_summary') {

            qty_array[bid_item][instance_index].unit = qty_period_details_unit;
            qty_array[bid_item][instance_index].amt_esh = qty_period_details_amt_esh;
            qty_array[bid_item][instance_index].qty_esh = qty_period_details_qty_esh;
            qty_array[bid_item][instance_index].amt_rnr = qty_period_details_amt_rnr;
            qty_array[bid_item][instance_index].qty_rnr = qty_period_details_qty_rnr;
            qty_array[bid_item][instance_index].amt_ssp = qty_period_details_amt_ssp;
            qty_array[bid_item][instance_index].qty_ssp = qty_period_details_qty_ssp;
            qty_array[bid_item][instance_index].amt_fol = qty_period_details_amt_fol;
            qty_array[bid_item][instance_index].qty_fol = qty_period_details_qty_fol;
            qty_array[bid_item][instance_index].amt_tot = qty_period_details_amt_tot;
            qty_array[bid_item][instance_index].qty_tot = qty_period_details_qty_tot;

            qty_period_details_unit = '';
            qty_period_details_amt_esh = 0;
            qty_period_details_qty_esh = 0;
            qty_period_details_amt_rnr = 0;
            qty_period_details_qty_rnr = 0;
            qty_period_details_amt_ssp = 0;
            qty_period_details_qty_ssp = 0;
            qty_period_details_amt_fol = 0;
            qty_period_details_qty_fol = 0;
            qty_period_details_amt_tot = 0;
            qty_period_details_qty_tot = 0;

        }

    }

}








