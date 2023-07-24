// #######################

var sov_summation = {};
   
    sov_summation.allctd = [0, 0, 0];
    sov_summation.todate = [];    


for ( const bid_iitem of base_sov ) {

   sov_summation.allctd[0] += bid_iitem.alloc_esh;
   sov_summation.allctd[1] += bid_iitem.alloc_rnr;
   sov_summation.allctd[2] += bid_iitem.alloc_ssp;

}


for ( var ppp = 0; ppp < max_pp_no; ppp++ )

  {
  
   sov_summation.todate[ppp] = [0, 0, 0];
   
   for ( const bid_iitem of base_sov ) 
   
   {
   
    if ( bid_iitem.pp_history[ppp].length == 0 ) { bid_iitem.pp_history[ppp] = [0, 0, 0]; }
   
     sov_summation.todate[ppp][0] += bid_iitem.pp_history[ppp][0];
     sov_summation.todate[ppp][1] += bid_iitem.pp_history[ppp][1];
     sov_summation.todate[ppp][2] += bid_iitem.pp_history[ppp][2];
   
    }
   
  }
  

       
// #######################

base_sov = base_sov.concat(

    [
        {
            "bid_item": '',
            'linked_bi': false,
            get linked_bid_item() { if ( this.linked_bi ) { return linked_bid_item_string_geneator_from_sov( this.bid_item ) } 
                else { return this.bid_item } },
            "description": '<b>Totals:<b>',
            "unit": '',
            "qty": '',
            "unit_price": '',
            "alloc_esh": sov_summation.allctd[0],
            "alloc_rnr": sov_summation.allctd[1],
            "alloc_ssp": sov_summation.allctd[2],
            'pp_history': sov_summation.todate,
            get payment_details() {
                return get_payment_details(this)
            }
           }     
           
     ]
     
     )
