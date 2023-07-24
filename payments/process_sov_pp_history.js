// ######## COMPLETE BID ITEM PAYMENT HISTORY OBJECT #####################

for (const construction_instance of json_1243I_sewer_points.features.concat(json_1243I_sewer_lines.features).concat(json_1243I_flatwork_polygons.features))

{

    for (const bid_item of Object.entries(construction_instance.properties.pp_history))

    {

        for (const pp_specifics of Object.entries(bid_item[1]))

       {

            if ( pp_specifics[0] != 'PP0' )

            {

                for (var ii = 0; ii < pp_specifics[1].length; ii++)

                {

                  base_sov[bid_item_sov_index_finder(bid_item[0])].
                          pp_history[pp_specifics[0].replace('PP0', '').replace('PP', '')][ii] += pp_specifics[1][ii];
                           
                      
                }
         

         
             }

        }

   }

}

