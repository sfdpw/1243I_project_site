function pop_r(feature, layer) {
  layer.on({
    mouseout: function(e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });

popupContent = return_plan_boundary_popup(feature);

layer.bindPopup(popupContent, {
    maxHeight: 400
  });
}

        map.createPane('pane_1243I_r_dwgs');
        map.getPane('pane_1243I_r_dwgs').style.zIndex = 52;
        map.getPane('pane_1243I_r_dwgs').style['mix-blend-mode'] = 'normal';

        var layer_1243I_r_dwgs = new L.geoJson(layer_filter('R', json_1243I_plan_boundaries), {
            attribution: '',
            interactive: true,
            dataVar: 'json_1243I_r_dwgs',
            layerName: 'layer_1243I_r_dwgs',
            pane: 'pane_1243I_r_dwgs',
            onEachFeature: pop_r,
            style: style_1243I_project_dwgs,
            
        });
        
        bounds_group.addLayer(layer_1243I_r_dwgs);
        //map.addLayer(layer_1243I_r_dwgs);

function toggle_r() {

  if (document.getElementById("checkbox_r").checked) {

    layer_1243I_r_dwgs = new L.geoJson(layer_filter('R', json_1243I_plan_boundaries), {
      attribution: '',
      interactive: true,
      dataVar: 'json_1243I_r_dwgs',
      layerName: 'layer_1243I_r_dwgs',
      pane: 'pane_1243I_r_dwgs',
      onEachFeature: pop_r,
      style: style_1243I_project_dwgs,
    });
    
        //bounds_group.addLayer(layer_1243I_r_dwgs);
        map.addLayer(layer_1243I_r_dwgs);

  } else {
  
    map.removeLayer(layer_1243I_r_dwgs);
    
  }

}
