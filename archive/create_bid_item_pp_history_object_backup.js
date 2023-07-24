// ######## COMPLETE BID ITEM PAYMENT HISTORY OBJECT #####################

var bid_item_pp_hist_obj = {}

for (const construction_instance of json_1243I_sewer_points.features.concat(json_1243I_sewer_lines.features).concat(json_1243I_flatwork_polygons.features))

{

    for (const bid_item of Object.entries(construction_instance.properties.pp_history))

    {

      if ( bid_item_pp_hist_obj.hasOwnProperty(bid_item[0]) == false )
      
        {   
         
          bid_item_pp_hist_obj[bid_item[0]] = {};
          
          for ( var jj = 0; jj < max_pp_no; jj++ )
          
            {
            
             bid_item_pp_hist_obj[bid_item[0]][jj] = [0, 0, 0];
            
            }
        
          }

        for (const pp_specifics of Object.entries(bid_item[1]))

       {

            if ( pp_specifics[0] != 'PP0' )

            {

                for (var ii = 0; ii < pp_specifics[1].length; ii++)

                {

                    bid_item_pp_hist_obj[bid_item[0]][pp_specifics[0].replace('PP0', '').replace('PP', '')][ii] += pp_specifics[1][ii];

                  }
         
             }

        }

   }

}

//console.log(bid_item_pp_hist_obj)
