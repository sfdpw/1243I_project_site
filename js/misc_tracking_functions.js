// linked_assets

function linked_asset_function_point(location, asset_coordinates) {

    return "<a href=\"..\\index.html#20/".concat(asset_coordinates[1], '/', asset_coordinates[0], "\" target=\"_blank\">", location, "</a>");

}

function linked_asset_function_line(location, asset_coordinates) {

    return "<a href=\"..\\index.html#20/".concat(asset_coordinates[0][0][1], '/', asset_coordinates[0][0][0], "\" target=\"_blank\">", location, "</a>");

}

function linked_asset_function_polygon(location, asset_coordinates) {

    return "<a href=\"..\\index.html#20/".concat(asset_coordinates[0][0][0][1], '/', asset_coordinates[0][0][0][0], "\" target=\"_blank\">", location, "</a>");

}



function bid_item_flattener ( pp_history_obj ) {

    var return_string = '';
    var bid_item_array = [];


    for (const bid_item of Object.keys(pp_history_obj))
    
    {
    
      if ( bid_item != 'SW-0' ) 
      
        {
          
          bid_item_array.push(bid_item);
    
         }
    
    }

    bid_item_array.sort();
    
    for (var bi = 0; bi < bid_item_array.length; bi++)
    
     {

      return_string += linked_bid_item_string_geneator (bid_item_array[bi]);
      
      if ( bi != bid_item_array.length - 1 ) { return_string += ', ';}

     }

    if ( return_string == '') { return_string = 'none'; }
  
    return return_string

}



// response_date_from_submittal_no

var response_date_obj = {

    'none': 'none',
    '39.0': '2022_06_07',      
    '42.0': '2022_06_27',      
    '42.1': '2022_07_15',      
    '43.0': '2022_06_23',      
    '44.0': '2022_06_23',      
    '45.0': '2022_06_28',      
    '49.0': '2022_07_15',      
    '50.0': '2022_07_20',      
    '50.1': '2022_07_25',      
    '52.0': '2022_07_13',      
    '53.0': '2022_07_18',      
    '54.0': '2022_08_02',      
    '54.1': '2022_08_12',       
    '55.0': '2022_07_26',    
    '56.0': '2022_07_26',    
    '57.0': '2022_08_09',    
    '58.0': '2022_08_02',    
    '59.0': '2022_08_05',
    '60.0': '2022_08_09',
    '61.0': '2022_08_12',
    '63.0': '2022_08_30',
    '65.0': '2022_10_05',
    '66.0': '2022_10_12',
    '67.0': '2022_10_12',
    '68.1': '2023_06_14',
    '74.0': '2023_05_17',
    '75.0': '2023_06_19',
    '76.0': '2023_06_19',
    '77.0': '2023_06_14',
    '78.0': '2023_06_14',
    '79.2': '2023_06_30',
    '80.0': '2023_07_05',
    '81.0': '2023_07_12',    
    '82.0': '2023_07_20',    
    '84.0': '2023_07_20',    
    '84.1': '2023_08_01',    
    '85.0': '2023_07_20',     
    '86.0': '2023_07_20',    
    '88.0': '2023_07_20',
    '89.0': '2023_07_20',
    '90.0': '2023_07_20',
    '91.0': '2023_07_20',
    '92.1': '2023_08_01',
    '93.1': '2023_08_01',
    '94.2': '2023_08_01',
    '95.1': '2023_08_01',
    '97.0': '2023_08_02',
    '98.1': '2023_08_04', 
    '99.0': '2023_08_02',
   '100.0': '2023_08_01',
   '101.0': '2023_08_04',
   '102.0': '2023_08_08',
   '103.0': '2023_08_09'
    
}

function response_date_from_submittal_no(submittal_no) {

    return response_date_obj[submittal_no];

}
