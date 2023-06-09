function top_nav(nav_element, pp_no = null, bid_item_id = null)

{

    var return_block = '';
    var nav_path = '../';

    if (nav_element == 'map')

    {

        nav_path = '';

    }

    return_block =

    '<nav class="navbar navbar-expand-lg bg-nav navbar-dark bg-primary">\
       <button class="navbar-toggler"\
                type="button"\
                data-bs-toggle="collapse"\
                data-bs-target="#main_nav"\
                aria-expanded="false"\
                aria-label="Toggle navigation">\
         <span class="navbar-toggler-icon"></span>\
       </button>\
       <div class="collapse navbar-collapse" id="main_nav" >\
         <ul class="navbar-nav">\
	   <li class="nav-item active">\
             <a class="nav-link" href="' + nav_path + 'index.html">Map</a>\
           </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Payments</a>\
	     <ul class="dropdown-menu">\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'payments/payment_details_PP01.html">PP01 - ' + payment_array.PP01 + '</a>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'payments/payment_details_PP02.html">PP02 - ' + payment_array.PP02 + '</a>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'payments/payment_details_PP03.html">PP03 - ' + payment_array.PP03 + '</a>\
	       </li>\
	       <li>\
                 <a class="dropdown-item" href="' + nav_path + 'payments/payment_details_PP04.html">PP04 - ' + payment_array.PP04 + '</a>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'payments/payment_details_PP05.html">PP05 - ' + payment_array.PP05 + '</a>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'payments/payment_details_PP06.html">PP06 - ' + payment_array.PP06 + '</a>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'payments/payment_details_PP07.html">PP07 - ' + payment_array.PP07 + '</a>\
	       </li>\
	       <li>\
                 <a class="dropdown-item" href="' + nav_path + 'payments/payment_details_PP08.html">PP08 - ' + payment_array.PP08 + '</a>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'payments/payment_details_PP09.html">PP09 - ' + payment_array.PP09 + '</a>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'payments/payment_details_PP10.html">PP10 - ' + payment_array.PP10 + '</a>\
	       </li>\
	     </ul>\
	   </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">QTYs</a>\
	     <ul class="dropdown-menu">\
	       <li>\
	         <a class="dropdown-item" href="#">Flatwork &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	       </li>\
	       <li>\
	             <a class="dropdown-item" href="#">Street Rennovation &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-02.html"><b>R-02:</b> Temp Tape</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-03.html"><b>R-03:</b> Planing</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-04.html"><b>R-04:</b> HMA Paving</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-05.html"><b>R-05:</b> 8in Concrete Street Base</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-06.html"><b>R-06:</b> 10in Concrete Street Base</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-07.html"><b>R-07:</b> Conc. Pavement, Gutter, Parking Stip</a>\
	               </li>\
	             </ul>\
	       </li>\
	       <li>\
	             <a class="dropdown-item" href="#">Sidewalk, Curb and Gutter &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-08.html"><b>R-08:</b> Sidewalk</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-10.html"><b>R-10:</b> Concrete Curb</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-11.html"><b>R-11:</b> Combined Curb and Gutter</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-12.html"><b>R-12:</b> Curb Ramps</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-18.html"><b>R-18:</b> Tree Protection</a>\
	               </li>\
	             </ul>\
	       </li>\
	     </ul>\
	     </li>\
	     <li>\
	       <a class="dropdown-item" href="#">Sewer &raquo;</a>\
	       <ul class="submenu dropdown-menu">\
	         <li>\
	             <a class="dropdown-item" href="#">Side Sewers, Culverts &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-19.html"><b>SW-19:</b> Side Sewer Connection</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-20.html"><b>SW-20:</b> Pre-Con TVI of (E) Side Sewers and Culverts</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-21.html"><b>SW-21:</b> Side Sewer Construction</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-22.html"><b>SW-22:</b> Culvert Construction</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-27.html"><b>SW-27:</b> Post-Con TVI of (N) Side Sewers and Culverts</a>\
	               </li>\
	             </ul>\
	       </li>\
	       <li>\
	             <a class="dropdown-item" href="#">Mains &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-11.html"><b>SW-11:</b> 12in VCP Main</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-25.html"><b>SW-25:</b> Post-Con TVI of (N) Mains </a>\
	               </li>\
	             </ul>\
	       </li>\
	       <li>\
	             <a class="dropdown-item" href="#">Catch Basins &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-23.html"><b>SW-23</b> - (N) CB - STD 87,188</a>\
	               </li>\
	             </ul>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="#">Manholes &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-03.html"><b>SW-03</b> - (N) MH - STD 87,181</a>\
	           </li>\
	         </ul>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="#">Misc &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-31.html"><b>SW-31</b> - Potholing</a>\
	           </li>\
	         </ul>\
	       </li>\
	     </ul>\
	   </li>\
	 </ul>\
	   </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">FA</a>\
	     <ul class="dropdown-menu">\
	       <li>\
	         <a class="dropdown-item" href="#">CO 2 &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="#">PCO 2 &raquo;</a>\
	           <ul class="submenu dropdown-menu">\
	             <li>\
	               <a class="dropdown-item" href="' + nav_path + 'co/co_02/pco_02/pco_02_daily_cost_tracking.html"><b>PCO 2</b> Cost Tracking</a>\
	               </li>\
	             </ul>\
	           </li>\
	         </ul>\
	       </li>\
	     </ul>\
	   </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Tracking</a>\
	     <ul class="dropdown-menu">\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_lines.html">Sewer Mains, Culverts and Laterals</a>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_points.html">Sewer MHs and CBs</a>\
	       </li>\
	     </ul>\
	   </li>\
	   <li class="nav-item active">\
	     <a class="nav-link" href="' + nav_path + 'specs/specs.html">Specs</a>\
           </li>\
	   <li class="nav-item active">\
	     <a class="nav-link" href="' + nav_path + 'other/1243I_mixes.pdf" target="_blank">Mixes</a>\
           </li>\
         </ul>\
       </div>';

    if (nav_element == 'sov')

    {

        return_block += '<div style="float:right; padding-right:10px; color:white; font-weight:bold">Schedule of Values (SOV) for PP ' + pp_no + '</div>';

    } else if (nav_element == 'funding')

    {

        return_block += '<div style="float:right; padding-right:10px; color:white; font-weight:bold">Funding Breakdown for PP ' + pp_no + '</div>';

    } else if (nav_element == 'qty')

    {

        return_block +=

            '<div style="float:right;\
                    padding-right:10px;\
                    color:white;\
                    font-weight:bold"\
                    data-toogle="tooltip"\
	            title="' + base_sov[bid_item_sov_index_finder(bid_item_id)].description + ' (' + 
	                       base_sov[bid_item_sov_index_finder(bid_item_id)].unit  + ')"\> Quantity Details for ' + bid_item_id + '</div>';

    } else if (nav_element.includes('Asset_Tracking'))

    {

        return_block +=

            '<div style="float:right;\
                    padding-right:10px;\
                    color:white;\
                    font-weight:bold"\
                    >' + nav_element.replace(/_/g, " ") + '</div>';

    }

    return_block += '</nav>';

    return return_block

}
