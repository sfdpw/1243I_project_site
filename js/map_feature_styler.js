function project_dwgs_layer_styler(feature) {

    switch (String(feature.properties.dwg_type)) {
        case 'SW':
            return {
                pane: 'pane_1243I_sw_dwgs',
                    opacity: 1,
                    color: 'rgba(35,35,35,1.0)',
                    dashArray: '',
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    weight: 1.0,
                    fill: true,
                    fillOpacity: 0.5,
                    fillColor: 'rgba(0,152,68,0.5)',
                    interactive: true,
            }
            break;

        case 'U':
            return {
                pane: 'pane_1243I_u_dwgs',
                    opacity: 1,
                    color: 'rgba(35,35,35,1.0)',
                    dashArray: '',
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    weight: 1.0,
                    fill: true,
                    fillOpacity: 0.5,
                    fillColor: 'rgba(141, 90, 153, 0.5)',
                    interactive: true,
            }
            break;

        case 'R':
            return {
                pane: 'pane_1243I_r_dwgs',
                    opacity: 1,
                    color: 'rgba(35,35,35,1.0)',
                    dashArray: '',
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    weight: 1.0,
                    fill: true,
                    fillOpacity: 0.5,
                    fillColor: 'rgba(238,101,27,0.5)',
                    interactive: true,
            }
            break;

        case 'CR':
            return {
                pane: 'pane_1243I_cr_dwgs',
                    opacity: 1,
                    color: 'rgba(35,35,35,1.0)',
                    dashArray: '',
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    weight: 1.0,
                    fill: true,
                    fillOpacity: 0.5,
                    fillColor: 'rgba(228, 173, 32, 0.5)',
                    interactive: true,
            }
            break;

    }
}




function sw_line_layer_styler(feature) {

    //var dash_code = '';
    //var status_line_weight = 4.0;

    switch (String(feature.properties.status)) {

        case sewer_status_code_array[0]: // Status Not Found
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 50,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case sewer_status_code_array[1]: // No Construction
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case sewer_status_code_array[2]: // Status Not Tracked
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case sewer_status_code_array[3]: // Pending Post-Con Television
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 20.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case sewer_status_code_array[4]: // Post-Con Televised - Accepted
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 10.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case sewer_status_code_array[5]: // Post-Con Televised, Re-Televising Needed
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 20.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;


        case sewer_status_code_array[6]: //  Pre-Construction
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case sewer_status_code_array[7]: //  Pending Direction
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case sewer_status_code_array[8]: //  Televised - Lining Directed
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: '#ffee01',
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 10.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case sewer_status_code_array[9]: // Televised - No Other Work Directed
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: feature.rgba_code_stored_in_each_feature,
                    dashArray: '10, 10',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 10.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case sewer_status_code_array[10]: // Televised - Replacement Directed
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: '#ffee01',
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 10.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case sewer_status_code_array[11]: // Scope Deleted
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: '#000000',
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case sewer_status_code_array[12]: // (E) Capped
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: '#000000',
                    dashArray: '',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

        case sewer_status_code_array[13]: // (E) Not Found
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    opacity: 1,
                    color: '#000000',
                    dashArray: '10, 10',
                    lineCap: 'round',
                    lineJoin: 'round',
                    weight: 4.0,
                    fillOpacity: 0,
                    interactive: true,
            }
            break;

    }
}

function sw_point_layer_styler(feature) {


    switch (String(feature.properties.status)) {
        case 'No Construction':

            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    radius: 4.0,
                    opacity: 1,
                    color: 'rgba(35,35,35,1.0)',
                    dashArray: '',
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    weight: 2,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: feature.rgba_code_stored_in_each_feature,
                    interactive: true,
            }
            break;

        case 'Scope Deleted':

            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    radius: 4.0,
                    opacity: 1,
                    color: 'rgba(35,35,35,1.0)',
                    dashArray: '',
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    weight: 2,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: '#000000',
                    interactive: true,
            }
            break;


        case 'Pre-Construction':
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    radius: 4.0,
                    opacity: 1,
                    color: 'rgba(35,35,35,1.0)',
                    dashArray: '',
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    weight: 2,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: feature.rgba_code_stored_in_each_feature,
                    interactive: true,
            }
            break;

        case 'Post-Construction':
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                    radius: 8.0,
                    opacity: 1,
                    color: 'rgba(35,35,35,1.0)',
                    dashArray: '',
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    weight: 2,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: feature.rgba_code_stored_in_each_feature,
                    interactive: true,
            }
            break;


    }
}
