var overlay_menu_subsection_content_sw = "";
var overlay_menu_subsection_content_u = "";
var overlay_menu_subsection_content_pr = "";
var overlay_menu_subsection_content_cr = "";

for (var ii = 0; ii < layer_filter('SW', json_1070I_plan_boundaries)['features'].length; ii++) {
  overlay_menu_subsection_content_sw += popup_sheet_entry_creator('_twin_menu',
    layer_filter('SW', json_1070I_plan_boundaries)['features'][ii].properties.dwg_type,
    layer_filter('SW', json_1070I_plan_boundaries)['features'][ii].properties.dwg_no
                                                                 ) + '<br>';
}

overlay_menu_subsection_content_u = overlay_menu_subsection_content_sw.replace(/SW/g,'U');

for (var ii = 0; ii < layer_filter('PR', json_1070I_plan_boundaries)['features'].length; ii++) {
  overlay_menu_subsection_content_pr += popup_sheet_entry_creator('_twin_menu',
    layer_filter('PR', json_1070I_plan_boundaries)['features'][ii].properties.dwg_type,
    layer_filter('PR', json_1070I_plan_boundaries)['features'][ii].properties.dwg_no
                                                                 ) + '<br>';
}

for (var ii = 0; ii < layer_filter('CR', json_1070I_plan_boundaries)['features'].length; ii++) {
  overlay_menu_subsection_content_cr += popup_sheet_entry_creator('_twin_menu',
    layer_filter('CR', json_1070I_plan_boundaries)['features'][ii].properties.dwg_type,
    layer_filter('CR', json_1070I_plan_boundaries)['features'][ii].properties.dwg_no
                                                                 ) + '<br>';
}
var menu_card_sheet_overlay_content =

  '<div class="accordion" id="heading_sheet_overlays_0">\
     <div class="card">\
       <div class="card-header">\
         <h2 class="mb-0">\
           <button class="btn btn-link btn-layer" type="button" data-toggle="collapse"\
                   data-target="#heading_sheet_overlays_0_collapse" aria-expanded="false"\
                   aria-controls="heading_sheet_overlays_0_collapse">\
             <strong>Sheet Links and Overlay(s)</strong>\
           </button>\
         </h2>\
       </div>\
       <div id="heading_sheet_overlays_0_collapse" class="collapse"\
            aria-labelledby="heading_sheet_overlays_0" data-parent="#map_master_menu">\
         <div class="card-body">\
         <div class="scroll_card">\
\
           <div class="card">\
             <div class="card-header p-0" id="sheet_overlays_sw">\
               <h2 class="mb-0">\
                 <button class="btn btn-link collapsed" type="button"\
                         data-toggle="collapse" data-target="#heading_sheet_overlays_0_collapse_sw"\
                         aria-expanded="false" aria-controls="heading_sheet_overlays_0_collapse_sw">\
                   <strong>SW - Sewer</strong>\
                 </button>\
               </h2>\
             </div>\
             <div id="heading_sheet_overlays_0_collapse_sw" class="collapse"\
                      aria-labelledby="sheet_overlays_sw" data-parent="#heading_sheet_overlays_0">\
               <div class="card-body">\
                 <div class="scroll_card_sub">' +
  overlay_menu_subsection_content_sw +
  '</div>\
               </div>\
             </div>\
           </div>\
\
           <div class="card">\
             <div class="card-header p-0" id="sheet_overlays_u">\
               <h2 class="mb-0">\
                 <button class="btn btn-link collapsed" type="button"\
                         data-toggle="collapse" data-target="#heading_sheet_overlays_0_collapse_u"\
                         aria-expanded="false" aria-controls="heading_sheet_overlays_0_collapse_u">\
                   <strong>U - Utilities</strong>\
                 </button>\
               </h2>\
             </div>\
             <div id="heading_sheet_overlays_0_collapse_u" class="collapse"\
                      aria-labelledby="sheet_overlays_u" data-parent="#heading_sheet_overlays_0">\
               <div class="card-body">\
                 <div class="scroll_card_sub">' +
  overlay_menu_subsection_content_u +
  '</div>\
               </div>\
             </div>\
           </div>\
\
           <div class="card">\
             <div class="card-header p-0" id="sheet_overlays_pr">\
               <h2 class="mb-0">\
                 <button class="btn btn-link collapsed" type="button"\
                         data-toggle="collapse" data-target="#heading_sheet_overlays_0_collapse_pr"\
                         aria-expanded="false" aria-controls="heading_sheet_overlays_0_collapse_pr">\
                   <strong>PR - Pavement Restoration</strong>\
                 </button>\
               </h2>\
             </div>\
             <div id="heading_sheet_overlays_0_collapse_pr" class="collapse"\
                      aria-labelledby="sheet_overlays_pr" data-parent="#heading_sheet_overlays_0">\
               <div class="card-body">\
                 <div class="scroll_card_sub">' +
  overlay_menu_subsection_content_pr +
  '</div>\
               </div>\
             </div>\
           </div>\
\
           <div class="card">\
             <div class="card-header p-0" id="sheet_overlays_cr">\
               <h2 class="mb-0">\
                 <button class="btn btn-link collapsed" type="button"\
                         data-toggle="collapse" data-target="#heading_sheet_overlays_0_collapse_cr"\
                         aria-expanded="false" aria-controls="heading_sheet_overlays_0_collapse_cr">\
                   <strong>CR - Curb Ramps</strong>\
                 </button>\
               </h2>\
             </div>\
             <div id="heading_sheet_overlays_0_collapse_cr" class="collapse"\
                      aria-labelledby="sheet_overlays_cr" data-parent="#heading_sheet_overlays_0">\
               <div class="card-body">\
                 <div class="scroll_card_sub">' +
  overlay_menu_subsection_content_cr +
  '</div>\
               </div>\
             </div>\
           </div>\
\
           </div>\
         </div>\
       </div>\
     </div>\
   </div>';

document.getElementById("map_master_menu").innerHTML += menu_card_sheet_overlay_content.replace(/_aaaa/g, "_bbbb");
