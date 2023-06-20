var sw_sewer_feature_menu =
        '<div class="card">\
           <div class="card-header" id="heading_sewer_features">\
            <h2 class="mb-0">\
              <button class="btn btn-link btn-layer" type="button"\
                      data-toggle="collapse" data-target="#collapse_sewer"\
                      aria-expanded="true" aria-controls="collapse_sewer">\
                <strong>\
                  Sewer Feature(s)\
                </strong>\
              </button>\
            </h2>\
          </div>\
          <div id="collapse_sewer" class="collapse"\
                aria-labelledby="heading_sewer_features" data-parent="#map_master_menu">\
            <div class="card-body">\
              <div class="scroll_card">\
              <table>\
                <tr>\
                  <td><input type="checkbox" id="sw_mn_checkbox"\
                             onchange="feature_layer_toggle(\'sw_mn_checkbox\',' 
                             + index_limits_sw_mn[0] + ',' + index_limits_sw_mn[1] + ')"></td>\
                  <td><label class="layer_label" for="sw_mn_checkbox"><strong>Mains</strong></label></td>\
                </tr>'
               
 
for (var ll = index_limits_sw_mn[0]; ll <= index_limits_sw_mn[1]; ll++) // SEWER MAINS               
 
   {sw_sewer_feature_menu += layer_card_entry_generator(ll);}
  
    sw_sewer_feature_menu +=

                '<tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="sw_cl_checkbox"\
                             onchange="feature_layer_toggle(\'sw_cl_checkbox\','
                             + index_limits_sw_cl[0] + ',' + index_limits_sw_cl[1] + ')"></td>\
                  <td><label class="layer_label" for="sw_cl_checkbox"><strong>Culverts</strong></label></td>\
                </tr>'
                
                
              
for (ll = index_limits_sw_cl[0]; ll <= index_limits_sw_cl[1]; ll++) // SEWER clvt 
 
   {sw_sewer_feature_menu += layer_card_entry_generator(ll);}   
 
    sw_sewer_feature_menu +=                                
      
                '<tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="sw_lt_checkbox"\
                             onchange="feature_layer_toggle(\'sw_lt_checkbox\','
                             + index_limits_sw_lt[0] + ',' + index_limits_sw_lt[1] + ')"></td>\
                  <td><label class="layer_label" for="sw_lt_checkbox"><strong>Laterals</strong></label></td>\
                </tr>'
                
for (ll = index_limits_sw_lt[0]; ll <= index_limits_sw_lt[1]; ll++) // SEWER lateral
 
   {sw_sewer_feature_menu += layer_card_entry_generator(ll);}    
  
    sw_sewer_feature_menu +=
 
              '<tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="sw_mh_checkbox"\
                             onchange="feature_layer_toggle(\'sw_mh_checkbox\','
                             + index_limits_sw_mh[0] + ',' + index_limits_sw_mh[1] + ')"></td>\
                  <td><label class="layer_label" for="sw_mh_checkbox"><strong>Manholes</strong></label></td>\
                </tr>'          

for (ll = index_limits_sw_mh[0]; ll <= index_limits_sw_mh[1]; ll++) // SEWER MHs
 
 {sw_sewer_feature_menu += layer_card_entry_generator(ll);} 

sw_sewer_feature_menu +=                
                
                '<tr>\
                  <td colspan="2">&nbsp;</td>\
                </tr>\
                <tr>\
                  <td><input type="checkbox" id="sw_cb_checkbox"\
                             onchange="feature_layer_toggle(\'sw_cb_checkbox\','
                             + index_limits_sw_cb[0] + ',' + index_limits_sw_cb[1] + ')"></td>\
                  <td><label class="layer_label" for="sw_cb_checkbox"><strong>Drains</strong></label></td>\
                </tr>'
                
for (ll = index_limits_sw_cb[0]; ll <= index_limits_sw_cb[1]; ll++) // Sewer Catch Basins
 
   {sw_sewer_feature_menu += layer_card_entry_generator(ll);}                 
                                
                
sw_sewer_feature_menu +=                                                

              '</table>\
              </div>\
            </div>\
          </div>\
         </div>';

document.getElementById("map_master_menu").innerHTML += sw_sewer_feature_menu;
