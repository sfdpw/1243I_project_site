function generate_qty_tracking_table(table_id, bid_item)

{

    var columns_object_array = [{
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
            class: 'table_location',
            searchable: true,
            footerFormatter: function() { return '<div style="text-align: right"><b>To-Date Totals:<b></div>' }
        },
        {
            field: 'qty_tot',
            title: 'QTY',
            align: 'right',
            class: 'period_qty_tot',
            formatter: qty_formatter_with_dec,
            footerFormatter: function() {
                return '<b>'.concat( qty_formatter_with_dec_core_function(qty_array_to_date[bid_item].qty_tot, qty_array_to_date[bid_item].unit), '<b>')
            }
        },
        {
            field: 'amt_tot',
            title: 'Amount',
            align: 'center',
            class: 'period_amt_tot',
            formatter: dollar_formatter_accounting,
            footerFormatter: function() {
                return '<b>'.concat(dollar_formatter_accounting(qty_array_to_date[bid_item].amt_tot), '<b>')
            }
        },
        {
            field: 'qty_esh',
            title: 'ESH<br>QTY',
            align: 'right',
            class: 'period_qty_esh',
            formatter: qty_formatter_with_dec,
            footerFormatter: function() {
                return '<b>'.concat(qty_formatter_with_dec_core_function(qty_array_to_date[bid_item].qty_esh, qty_array_to_date[bid_item].unit), '<b>')
            }
        },
        {
            field: 'amt_esh',
            title: 'ESH<br>Amount',
            align: 'center',
            class: 'period_amt_esh',
            formatter: dollar_formatter_accounting,
            footerFormatter: function() {
                return '<b>'.concat(dollar_formatter_accounting(qty_array_to_date[bid_item].amt_esh), '<b>')
            }
        },
        {
            field: 'qty_rnr',
            title: 'R&R<br>QTY',
            align: 'right',
            class: 'period_qty_rnr',
            formatter: qty_formatter_with_dec,
            footerFormatter: function() {
                return '<b>'.concat(qty_formatter_with_dec_core_function(qty_array_to_date[bid_item].qty_rnr, qty_array_to_date[bid_item].unit), '<b>')
            }
        },
        {
            field: 'amt_rnr',
            title: 'R&R<br>Amount',
            align: 'center',
            class: 'period_amt_rnr',
            formatter: dollar_formatter_accounting,
            footerFormatter: function() {return '<b>'.concat(dollar_formatter_accounting(qty_array_to_date[bid_item].amt_rnr), '<b>')}
        },
        {
            field: 'qty_ssp',
            title: 'SSIP<br>QTY',
            align: 'right',
            class: 'period_qty_ssp',
            formatter: qty_formatter_with_dec,
            footerFormatter: function() {
                return '<b>'.concat(qty_formatter_with_dec_core_function(qty_array_to_date[bid_item].qty_ssp, qty_array_to_date[bid_item].unit), '<b>')
            }
        },
        {
            field: 'amt_ssp',
            title: 'SSIP<br>Amount',
            align: 'center',
            class: 'period_amt_ssp',
            formatter: dollar_formatter_accounting,
            footerFormatter: function() {
                return '<b>'.concat(dollar_formatter_accounting(qty_array_to_date[bid_item].amt_ssp), '<b>')
            }
        }
    ];


    if (bid_item.includes('SW-16') || bid_item.includes('SW-20')) {

        columns_object_array.splice(3, 0, {
            field: 'submittals.tvi_pre_con.submittal_no',
            title: 'Sub. No.',
            sortable: true,
            searchable: true
        }, {
            field: 'submittals.tvi_pre_con.video_no',
            title: 'Vid. No.',
            sortable: true,
            searchable: true
        }, {
            field: 'submittals.tvi_pre_con.response',
            title: 'Response',
            sortable: true,
            searchable: true
        }, )

    } else if (bid_item.includes('SW-25') || bid_item.includes('SW-26') || bid_item.includes('SW-27')) {

        columns_object_array.splice(3, 0, {
            field: 'submittals.tvi_post_con.submittal_no',
            title: 'Sub. No.',
            sortable: true,
            searchable: true
        }, {
            field: 'submittals.tvi_post_con.video_no',
            title: 'Vid. No.',
            sortable: true,
            searchable: true
        }, {
            field: 'submittals.tvi_post_con.response',
            title: 'Response',
            sortable: true,
            searchable: true
        }, )

    }



    document.getElementById(table_id).style.borderColor = 'black';

    $('#'.concat(table_id)).bootstrapTable({
        data: qty_array[bid_item],
        showColumns: true,
        showColumnsToggleAll: true,
        showExport: true,
        clickToSelect: true,
        minimumCountColumns: 1,
        sortable: true,
        //pageList: '[5, 10, 15, 20, 50, All]',
        //pageSize: '10',
        responseHandler: 'responseHandler',
        filterControl: true,
        headerStyle: 'header_styler',
        search: true,
        showFooter: true,
        columns: columns_object_array
    })

}
