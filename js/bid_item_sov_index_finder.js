function bid_item_sov_index_finder ( bid_item_input ) {

  var nn = 0;

  while ( base_sov[nn].bid_item != bid_item_input ) { nn++; }

  return nn

}
