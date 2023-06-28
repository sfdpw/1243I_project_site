function return_plan_boundary_popup(feature) {

    var popupContent = '<div class="accordion" id="PLAN_popup">\
                                <div class="card">\
                                <div class="card-header p-0" id="PLAN_sheet">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" onclick="sweep_check_clone()"\
                                        data-toggle="collapse" data-target="#PLAN_collapse_01"\
                                        aria-expanded="false" aria-controls="PLAN_collapse_01">\
                                  <strong>Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PLAN_collapse_01" class="collapse" aria-labelledby="PLAN_sheet" data-parent="#PLAN_popup">\
                                <div class="card-body">' + popup_sheet_entry_creator('_twin_popup', feature.properties.dwg_type, feature.properties.dwg_no, feature.properties.specifier) + '</div>\
                                </div>\
                                </div>' 
                                
if ( feature.properties.dwg_type != 'U' ) {                             

    popupContent += '<div class="card">\
                                <div class="card-header p-0" id="PLAN_AB">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#PLAN_collapse_02" aria-expanded="false" aria-controls="PLAN_collapse_02"><strong>As Built(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PLAN_collapse_02" class="collapse" aria-labelledby="PLAN_AB" data-parent="#PLAN_popup">\
                                <div class="card-body">' + popup_as_built_entry_creator(feature) + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="PLAN_TCP">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#PLAN_collapse_03" aria-expanded="false" aria-controls="PLAN_collapse_03"><strong>Traffic Control Plan(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PLAN_collapse_03" class="collapse" aria-labelledby="PLAN_TCP" data-parent="#PLAN_popup">\
                                <div class="card-body">' + popup_tcp_entry_creator(feature) + '</div>\
                                </div>\
                                </div>\
\
                                <div class="card">\
                                <div class="card-header p-0" id="PLAN_relevant">\
                                <h2 class="mb-0">\
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#PLAN_collapse_04" aria-expanded="false" aria-controls="PLAN_collapse_04"><strong>Relevant Sheet(s)</strong></button>\
                                </h2>\
                                </div>\
                                <div id="PLAN_collapse_04" class="collapse" aria-labelledby="PLAN_relevant" data-parent="#PLAN_popup">\
                                <div class="card-body">' + feature.properties.rlvnt + '</div>\
                                </div>\
                                </div>' }
                                
//if ( feature.properties.dwg_type == 'SW' ) 

//{

// popupContent += '<div class="card">\
//                                <div class="card-header p-0" id="U_PLANS">\
//                                <h2 class="mb-0">\
//                                <button class="btn btn-link collapsed" type="button" onclick="sweep_check_clone()"\
//                                        data-toggle="collapse" data-target="#PLAN_collapse_05"\
//                                        aria-expanded="false" aria-controls="PLAN_collapse_05">\
//                                  <strong>Utility Plan(s)</strong></button>\
//                                </h2>\
//                               </div>\
//                                <div id="PLAN_collapse_05" class="collapse" aria-labelledby="U_PLANS" data-parent="#PLAN_popup">\
//                                <div class="card-body">' + feature.properties.utility_plan + '</div>\
//                                </div>\
//                                </div>';
 
// }
 
 popupContent += '</div>';                               
                                
 return popupContent

}

function pop_up_creator_for_domain(feature, layer)

{

    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,

    });


    if (layer.feature.L_index_stored_in_each_feature >= index_limits_sw_mn[0] &&
        layer.feature.L_index_stored_in_each_feature <= index_limits_sw_mn[1])

    {

        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['id_a'] !== null ? Autolinker.link(feature.properties['id_a'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['scope'] !== null ? Autolinker.link(feature.properties['scope'].toLocaleString()) : '') +
            '<br><br>\
<strong>Pre-Con Submittal - Video - Response</strong><br>' +
            feature.properties.submittals.tvi_pre_con.submittal_no + ' - ' +
            feature.properties.submittals.tvi_pre_con.video_no + ' - ' +
            feature.properties.submittals.tvi_pre_con.response +
            '<br><br>\
<strong>Post-Con Submittal - Video - Response</strong><br>' +
            feature.properties.submittals.tvi_post_con.submittal_no + ' - ' +
            feature.properties.submittals.tvi_post_con.video_no + ' - ' +
            feature.properties.submittals.tvi_post_con.response +
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['status'] !== null ? Autolinker.link(feature.properties['status'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    } else if (layer.feature.L_index_stored_in_each_feature >= index_limits_sw_mh[0] &&
        layer.feature.L_index_stored_in_each_feature <= index_limits_sw_mh[1])

    {

        var popupContent =
            '<strong>Node ID</strong><br>' +
            (feature.properties['id_a'] !== null ? Autolinker.link(feature.properties['id_a'].toLocaleString()) : '') + '<br><br>\
<strong>Asset ID</strong><br>' +
            (feature.properties['id_b'] !== null ? Autolinker.link(feature.properties['id_b'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['scope'] !== null ? Autolinker.link(feature.properties['scope'].toLocaleString()) : '') +
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['status'] !== null ? Autolinker.link(feature.properties['status'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    } else if (layer.feature.L_index_stored_in_each_feature >= index_limits_sw_cl[0] &&
        layer.feature.L_index_stored_in_each_feature <= index_limits_sw_cl[1])

    {

        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['id_a'] !== null ? Autolinker.link(feature.properties['id_a'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['scope'] !== null ? Autolinker.link(feature.properties['scope'].toLocaleString()) : '') +
            '<br><br>\
<strong>Pre-Con Submittal - Video - Response</strong><br>' +
            feature.properties.submittals.tvi_pre_con.submittal_no + ' - ' +
            feature.properties.submittals.tvi_pre_con.video_no + ' - ' +
            feature.properties.submittals.tvi_pre_con.response +
            '<br><br>\
<strong>Post-Con Submittal - Video - Response</strong><br>' +
            feature.properties.submittals.tvi_post_con.submittal_no + ' - ' +
            feature.properties.submittals.tvi_post_con.video_no + ' - ' +
            feature.properties.submittals.tvi_post_con.response +
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['status'] !== null ? Autolinker.link(feature.properties['status'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);


    } else if (layer.feature.L_index_stored_in_each_feature >= index_limits_sw_cb[0] &&
        layer.feature.L_index_stored_in_each_feature <= index_limits_sw_cb[1])

    {

        var popupContent =
            '<strong>Node ID</strong><br>' +
            (feature.properties['id_a'] !== null ? Autolinker.link(feature.properties['id_a'].toLocaleString()) : '') + '<br><br>\
<strong>Asset ID</strong><br>' +
            (feature.properties['id_b'] !== null ? Autolinker.link(feature.properties['id_b'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['scope'] !== null ? Autolinker.link(feature.properties['scope'].toLocaleString()) : '') +
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['status'] !== null ? Autolinker.link(feature.properties['status'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);



    } else if (layer.feature.L_index_stored_in_each_feature >= index_limits_sw_lt[0] &&
        layer.feature.L_index_stored_in_each_feature <= index_limits_sw_lt[1])

    {

        var popupContent =
            '<strong>Asset ID</strong><br>' +
            (feature.properties['id_a'] !== null ? Autolinker.link(feature.properties['id_a'].toLocaleString()) : '') +
            '<br><br>\
<strong>Address</strong><br>' +
            (feature.properties['location'] !== null ? Autolinker.link(feature.properties['location'].toLocaleString()) : '') +
            '<br><br>\
<strong>Scope</strong><br>' +
            (feature.properties['scope'] !== null ? Autolinker.link(feature.properties['scope'].toLocaleString()) : '') +
            '<br><br>\
<strong>Pre-Con Submittal - Video - Response</strong><br>' +
            feature.properties.submittals.tvi_pre_con.submittal_no + ' - ' +
            feature.properties.submittals.tvi_pre_con.video_no + ' - ' +
            feature.properties.submittals.tvi_pre_con.response + 
            '<br><br>\
<strong>Post-Con Submittal - Video - Response</strong><br>' +
            feature.properties.submittals.tvi_post_con.submittal_no + ' - ' +
            feature.properties.submittals.tvi_post_con.video_no + ' - ' +
            feature.properties.submittals.tvi_post_con.response +             
            '<br><br>\
<strong>Status</strong><br>' +
            (feature.properties['status'] !== null ? Autolinker.link(feature.properties['status'].toLocaleString()) : '') +
            '<br><br>\
<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    } 
    
    else if (layer.feature.L_index_stored_in_each_feature >= index_limits_flatwork[0] &&
        layer.feature.L_index_stored_in_each_feature < index_limits_flatwork[1])

    {

        var bid_item_code = feature.properties.id_a.substring(0, 4).replace('R-0', 'R-');

        var areacalcs = '';

        var popupContent =
            '<strong>Instance Id</strong><br>' +
            feature.properties.id_a + '<br><br>' +
            '<strong>Description</strong><br>' +
            unpack_flatwork_feature_description(bid_item_code) +
            '<br><br>'; 
            
        popupContent +=
            '<strong>Status</strong><br>' +
            feature.properties.status + '<br><br>' +
           '<strong>Relevant Documents</strong><br>' +
            feature.properties.rlvnt +
            '<br><br>' + areacalcs +
            '<strong>Payment History</strong><br>';

        popupContent += pp_history_details(feature);

    }  

    layer.bindPopup(popupContent, {maxHeight: 400});

}

function fund_history_details(pp_specifics, bid_item, fund_number)

{

  var return_string = '';

                 if ( pp_specifics[fund_number] != 0 )   

                   {
                  
                    return_string += 
                    ''.concat( '<tr><td style="text-align: right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', 
                                  qty_formatter_with_dec_core_function(pp_specifics[fund_number] / 
                                  base_sov[bid_item_sov_index_finder(bid_item)].unit_price, 
                                  base_sov[bid_item_sov_index_finder(bid_item)].unit ), '</td>',
                                  '<td>', base_sov[bid_item_sov_index_finder(bid_item)].unit , '</td>',
                                  '<td>', 'totalling', '</td>',        
                                  '<td style="text-align: right">', dollar_formatter( pp_specifics[fund_number] ), '</td>',
                                  '<td>', 'charged to', '</td>', 
                                  '<td>', fund_array[fund_number] , '</td></tr>' );
                  
                    }
                    
   return return_string                 

}

function pp_history_details(ffeature)

{

    var pp_history_details = '';
    var pp_history_mini_table = '<table>';    

    for ( const bid_item of Object.keys( ffeature.properties.pp_history ) )
    
      {
      
        if ( bid_item != 'SW-0' ) 
        
          {
      
            pp_history_mini_table += '<tr><td>&nbsp;</td></tr>\
                                      <tr><td>'.concat( linked_bid_item_string_geneator_from_index(bid_item),'</td></tr>' );
            
            for ( const pp_specifics of Object.keys( ffeature.properties.pp_history[bid_item] ) )
            
              {

                pp_history_mini_table += '<tr><td>&nbsp;</td></tr><tr><td>&nbsp;&nbsp;'.concat( linked_pp_string_geneator_from_index(pp_specifics),
                                         '</td></tr><tr><td>&nbsp;</td></tr>');
                    
                pp_history_mini_table += fund_history_details(ffeature.properties.pp_history[bid_item][pp_specifics], bid_item, 0);
                pp_history_mini_table += fund_history_details(ffeature.properties.pp_history[bid_item][pp_specifics], bid_item, 1);
                pp_history_mini_table += fund_history_details(ffeature.properties.pp_history[bid_item][pp_specifics], bid_item, 2);
                                 
               }
            
      
           }
      
       }  
     
    
    if ( pp_history_mini_table != '<table>' )
    
      {
      
         pp_history_details = pp_history_mini_table.concat('</table>'); 
      
       } else { 
       
         pp_history_details = 'none'; 
       
       }

    return pp_history_details;

}


