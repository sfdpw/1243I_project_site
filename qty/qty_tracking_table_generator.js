function generate_qty_tracking_table(table_id, bid_item, tvi_arg = '')

{

    document.getElementById(table_id).style.borderColor = 'black';

    $('#'.concat(table_id)).bootstrapTable({
        data: qty_array[bid_item],
	showColumns: true,
	showColumnsToggleAll: true,
        showExport: true,
        clickToSelect: true,
        minimumCountColumns: 1,
        pagination: true,
        sortable: true,
        pageList: '[5, 10, 15, 20, 50, All]',
	pageSize: '10',
        responseHandler: 'responseHandler',
        filterControl: true,
        headerStyle: 'header_styler',	
	search: true,

        columns: [{
                   field: 'pp_no',
                   title: 'Payment No.',
                   sortable: true,
                   searchable: true
                  },
                  {
                   field: 'id_a',
                   title: 'ID',
                   sortable: true,
                   searchable: true
                  },
                  {
                   field: 'location',
                   title: 'Location',
                   searchable: true
                  },
                  {
                   field: 'qty_tot',
                   title: 'QTY',
                   align: 'right',
                   class: 'period_qty_tot',
                   formatter: qty_formatter_with_dec
                  },
                  {
                   field: 'amt_tot',
                   title: 'Amount',
                   align: 'center',
                   class: 'period_amt_tot',
                   formatter: dollar_formatter_accounting
                  },
                  {
                   field: 'qty_esh',
                   title: 'ESH<br>QTY',
                   align: 'right',
                   class: 'period_qty_esh',
                   formatter: qty_formatter_with_dec
                  },
                  {
                   field: 'amt_esh',
                   title: 'ESH<br>Amount',
                   align: 'center',
                   class: 'period_amt_esh',
                   formatter: dollar_formatter_accounting
                  },   
                  {
                   field: 'qty_rnr',
                   title: 'R&R<br>QTY',
                   align: 'right',
                   class: 'period_qty_rnr',
                   formatter: qty_formatter_with_dec
                  },
                  {
                   field: 'amt_rnr',
                   title: 'R&R<br>Amount',
                   align: 'center',
                   class: 'period_amt_rnr',
                   formatter: dollar_formatter_accounting
                  },   
                  {
                   field: 'qty_ssp',
                   title: 'SSIP<br>QTY',
                   align: 'right',
                   class: 'period_qty_ssp',
                   formatter: qty_formatter_with_dec
                  },
                  {
                   field: 'amt_ssp',
                   title: 'SSIP<br>Amount',
                   align: 'center',
                   class: 'period_amt_ssp',
                   formatter: dollar_formatter_accounting
                  }              
        ]
    })

}


