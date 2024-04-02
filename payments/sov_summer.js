// #######################
var sov_summation = {};

sov_summation.allctd = [0, 0, 0, 0];
sov_summation.todate = [];


for (const bid_iitem of base_sov) {

    sov_summation.allctd[0] += bid_iitem.alloc_esh;
    sov_summation.allctd[1] += bid_iitem.alloc_rnr;
    sov_summation.allctd[2] += bid_iitem.alloc_ssp;
    sov_summation.allctd[3] += bid_iitem.alloc_fol;

}


for (var ppp = 0; ppp < max_pp_no; ppp++)

{

    sov_summation.todate[ppp] = [0, 0, 0, 0];

    for (const bid_iitem of base_sov)

    {

        if (bid_iitem.pp_history[ppp].length == 0) {
            bid_iitem.pp_history[ppp] = [0, 0, 0, 0];
        }

        sov_summation.todate[ppp][0] += bid_iitem.pp_history[ppp][0];
        sov_summation.todate[ppp][1] += bid_iitem.pp_history[ppp][1];
        sov_summation.todate[ppp][2] += bid_iitem.pp_history[ppp][2];
        sov_summation.todate[ppp][3] += bid_iitem.pp_history[ppp][3];

    }

}

// #######################

var base_sov_totals_obj =

    {
        "alloc_esh": sov_summation.allctd[0],
        "alloc_rnr": sov_summation.allctd[1],
        "alloc_ssp": sov_summation.allctd[2],
        "alloc_fol": sov_summation.allctd[3],
        'pp_history': sov_summation.todate,
        get payment_details() {return get_payment_details(this)}
    }
    
    
