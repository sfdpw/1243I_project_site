// linked_assets
function linked_asset_function(location, asset_coordinates) {

    return "<a href=\"..\\index.html#20/".concat(asset_coordinates[0][0][1], '/', asset_coordinates[0][0][0], "\" target=\"_blank\">", location, "</a>");

}

// status_from_submittal_responses

//   'Status Not Found',                            // 00
//   'No Construction',                             // 01
//   'Status Not Tracked',                          // 02
//   'Pending Post-Con Television',                 // 03
//   'Post-Con Televised - Accepted',               // 04
//   'Post-Con Televised - Rejected',               // 05
//   'Pre-Construction',                            // 06
//   'Pending Direction',                           // 07
//   'Pre-Con Televised - Lining Directed',         // 08   
//   'Pre-Con Televised - No Other Work Directed',  // 09   
//   'Pre-Con Televised - Replacement Directed',    // 10  
//   'Scope Deleted',                               // 11
//   '(E) Capped',                                  // 12 
//   '(E) Not Found',                               // 13 



function sw_line_status_from_scope_and_submittals(line_scope, submittals_obj, ad_hoc_status = '') {

    var return_string = sewer_status_code_array[0];

    var bid_item_stuff = '' // update this when loading pp info

    if (line_scope == '(E) to remain') {

        if (submittals_obj.tvi_post_con.response == 'NET' || submittals_obj.tvi_post_con.response == 'MCN') {

            return_string = sewer_status_code_array[4];

        } else if (submittals_obj.tvi_post_con.response == 'R&R') {

            return_string = sewer_status_code_array[5];

        } else if (submittals_obj.tvi_post_con.response == 'none') {

            if (bid_item_stuff == '' && submittals_obj.tvi_pre_con.response == 'MCN - Do Not Replace') {

                return_string = sewer_status_code_array[1];

            } else if (bid_item_stuff != '' && submittals_obj.tvi_pre_con.response == 'MCN - Do Not Replace') {

                return_string = sewer_status_code_array[3];

            } else if (submittals_obj.tvi_pre_con.response == 'MCN - Replace') {

                return_string = sewer_status_code_array[10];

            } else if (submittals_obj.tvi_pre_con.response == 'none') {

                return_string = sewer_status_code_array[1];

            }



        }

    } else if (line_scope.includes('Install (N)')) {

        if (submittals_obj.tvi_post_con.response == 'none') {

            return_string = sewer_status_code_array[6];

        } else if (submittals_obj.tvi_post_con.response == 'NET' || submittals_obj.tvi_post_con.response == 'MCN') {

            return_string = sewer_status_code_array[4];

        } else if (submittals_obj.tvi_post_con.response == 'R&R') {

            return_string = sewer_status_code_array[5];

        }

    } else if (line_scope.includes('Line (E)')) {

        if (submittals_obj.tvi_post_con.response == 'none') {

            if (submittals_obj.tvi_pre_con.response == 'none') {

                return_string = sewer_status_code_array[7];

            } else if (submittals_obj.tvi_pre_con.response = 'MCN - Proceed with Lining') {

                return_string = sewer_status_code_array[8];

            }

        } else if (submittals_obj.tvi_post_con.response == 'NET' || submittals_obj.tvi_post_con.response == 'MCN') {

            return_string = sewer_status_code_array[4];

        } else if (submittals_obj.tvi_post_con.response == 'R&R') {

            return_string = sewer_status_code_array[5];

        }

    } else if (line_scope.includes('Improve (E)')) {


        if (submittals_obj.tvi_post_con.response == 'none') {

            if (submittals_obj.tvi_pre_con.response == 'none') {

                return_string = sewer_status_code_array[7];

            } else if (submittals_obj.tvi_pre_con.response == 'MCN - Do Not Replace') {

                return_string = sewer_status_code_array[9];

            } else if (submittals_obj.tvi_pre_con.response == 'MCN - Replace') {

                return_string = sewer_status_code_array[10];

            }

        } else if (submittals_obj.tvi_post_con.response == 'NET' || submittals_obj.tvi_post_con.response == 'MCN') {

            return_string = sewer_status_code_array[4];

        } else if (submittals_obj.tvi_post_con.response == 'R&R') {

            return_string = sewer_status_code_array[5];

        }

    } else if (line_scope == 'Remove (E)' || line_scope == 'Abandon (E) culvert') {

        return_string = sewer_status_code_array[2];

    }

    if (ad_hoc_status != '') {

        return_string = ad_hoc_status;

    }

    return return_string

}


// response_date_from_submittal_no

var response_date_obj = {

    'none': 'none',
    '39'  : '2022_06_07',      
    '42'  : '2022_06_27',      
    '42.1': '2022_07_15',      
    '43'  : '2022_06_23',      
    '44'  : '2022_06_23',      
    '45'  : '2022_06_28',      
    '49'  : '2022_07_15',      
    '50'  : '2022_07_20',      
    '50.1': '2022_07_25',      
    '52'  : '2022_07_13',      
    '53'  : '2022_07_18',      
    '54'  : '2022_08_02',      
    '54.1': '2022_08_12',       
    '55'  : '2022_07_26',    
    '56'  : '2022_07_26',    
    '57.1': '2022_08_09',    
    '58'  : '2022_08_02',    
    '59'  : '2022_08_05',
    '60'  : '2022_08_09',
    '61'  : '2022_08_12',
    '63'  : '2022_08_30',
    '65'  : '2022_10_05',
    '66'  : '2022_10_12',
    '67'  : '2022_10_12',
    '68.1': '2023_06_14',
    '74'  : '2023_05_17',
    '75'  : '2023_06_05',
    '76'  : '2023_06_12',
    '77'  : '2023_06_14',
    '78'  : '2023_06_14'

}

function response_date_from_submittal_no(submittal_no) {

    return response_date_obj[submittal_no];

}
