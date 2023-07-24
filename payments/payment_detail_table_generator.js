var turn_on_esh = [[false, true], [false, true], [false, false]];
var turn_on_rnr = [[false, true], [false, true], [false, false]];
var turn_on_ssp = [[false, true], [false, true], [false, false]];
    
turn_on_esh = [[true, true], [true, true], [true, true]];
turn_on_rnr = turn_on_esh;
turn_on_ssp = turn_on_esh;
    
function generate_payment_detail_table(table_id)

{

    document.getElementById(table_id).style.borderColor = 'black';

    $('#'.concat(table_id)).bootstrapTable({
        data: base_sov,
        showColumns: true,
        showColumnsToggleAll: true,
        showExport: true,
        clickToSelect: true,
        minimumCountColumns: 1,
        stickyHeader: true,
        sortable: true,
        //pageList: '[5, 10, 15, 20, 50, All]',
        //pageSize: '5',
        responseHandler: 'responseHandler',
        filterControl: true,
        headerStyle: 'header_styler',
        search: true,
        showFooter: true,
        //sidePagination: "server",

        columns: [{
                field: 'linked_bid_item',
                title: 'Bid Item'
            },
            {
                field: 'description',
                title: 'Description'
            },
            {
                field: 'unit',
                title: 'Unit',
                align: 'center'
            },
            {
                field: 'qty',
                title: 'QTY',
                align: 'center',
                formatter: qty_formatter_no_dec
            },
            {
                field: 'unit_price',
                title: 'Unit Price',
                align: 'center',
                formatter: dollar_formatter_accounting,
                footerFormatter: function() {
                    return '<div style="display:table-cell; padding:5px; text-align: right;"><b>Totals:<b></div>'
                }
            },
            {
                field: 'payment_details.allctd.amt.tot',
                title: 'Contract Total',
                align: 'center',
                formatter: dollar_formatter_accounting,
                footerFormatter: function() {
                    return '<b>'.concat(
                        dollar_formatter_accounting(base_sov_totals_obj.payment_details.allctd.amt.tot),
                        '<b>')
                },
            },
            {
                field: 'payment_details.period.qty.tot'.concat('.', pp_number),
                title: 'Period<br>QTY',
                align: 'center',
                formatter: qty_formatter_with_dec
            },
            {
                field: 'payment_details.period.amt.tot'.concat('.', pp_number),
                title: 'Period<br>Amount',
                align: 'center',
                class: 'period_amt_tot',
                formatter: dollar_formatter_accounting,
                footerFormatter: function() {
                    return '<b>'.concat(
                        dollar_formatter_accounting(base_sov_totals_obj.payment_details.period.amt.tot[pp_number]),
                        '<b>')
                },
            },
            {
                field: 'payment_details.todate.qty.tot'.concat('.', pp_number),
                title: 'To Date<br>QTY',
                align: 'center',
                formatter: qty_formatter_with_dec
            },
            {
                field: 'payment_details.todate.amt.tot'.concat('.', pp_number),
                title: 'To Date<br>Amount',
                align: 'center',
                class: 'todate_amt_tot',
                formatter: dollar_formatter_accounting,
                footerFormatter: function() {
                    return '<b>'.concat(
                        dollar_formatter_accounting(base_sov_totals_obj.payment_details.todate.amt.tot[pp_number]),
                        '<b>')
                },
            },

            // ######## ESH #######


            {
                field: 'payment_details.period.qty.esh'.concat('.', pp_number),
                title: 'Period<br>QTY<br>ESH',
                align: 'center',
                formatter: qty_formatter_with_dec,
                visible: turn_on_esh[0][0]
            },
            {
                field: 'payment_details.period.amt.esh'.concat('.', pp_number),
                title: 'Period<br>Amount<br>ESH',
                align: 'center',
                class: 'period_amt_esh',
                formatter: dollar_formatter_accounting,
                footerFormatter: function() {
                    return '<b>'.concat(
                        dollar_formatter_accounting(base_sov_totals_obj.payment_details.period.amt.esh[pp_number]),
                        '<b>')
                },
                visible: turn_on_esh[0][1]
            },
            {
                field: 'payment_details.todate.qty.esh'.concat('.', pp_number),
                title: 'To Date<br>QTY<br>ESH',
                align: 'center',
                formatter: qty_formatter_with_dec,
                visible: turn_on_esh[1][0]
            },
            {
                field: 'payment_details.todate.amt.esh'.concat('.', pp_number),
                title: 'To Date<br>Amount<br>ESH',
                align: 'center',
                class: 'todate_amt_esh',
                formatter: dollar_formatter_accounting,
                footerFormatter: function() {
                    return '<b>'.concat(
                        dollar_formatter_accounting(base_sov_totals_obj.payment_details.todate.amt.esh[pp_number]),
                        '<b>')
                },
                visible: turn_on_esh[1][1]
            },
            {
                field: 'payment_details.allctd.qty.esh',
                title: 'Allocated<br>QTY<br>ESH',
                align: 'center',
                formatter: qty_formatter_with_dec,
                visible: turn_on_esh[2][0]
            },
            {
                field: 'payment_details.allctd.amt.esh',
                title: 'Allocated<br>Amount<br>ESH',
                align: 'center',
                class: 'allctd_amt_esh',
                formatter: dollar_formatter_accounting,
                footerFormatter: function() {
                    return '<b>'.concat(
                        dollar_formatter_accounting(base_sov_totals_obj.payment_details.allctd.amt.esh),
                        '<b>')
                },
                visible: turn_on_esh[2][1]
            },

            // ######## R&R #######

            {
                field: 'payment_details.period.qty.rnr'.concat('.', pp_number),
                title: 'Period<br>QTY<br>R&R',
                align: 'center',
                formatter: qty_formatter_with_dec,
                visible: turn_on_rnr[0][0]
            },
            {
                field: 'payment_details.period.amt.rnr'.concat('.', pp_number),
                title: 'Period<br>Amount<br>R&R',
                align: 'center',
                class: 'period_amt_rnr',
                formatter: dollar_formatter_accounting,
                footerFormatter: function() {
                    return '<b>'.concat(
                        dollar_formatter_accounting(base_sov_totals_obj.payment_details.period.amt.rnr[pp_number]),
                        '<b>')
                },
                visible: turn_on_rnr[0][1]
            },
            {
                field: 'payment_details.todate.qty.rnr'.concat('.', pp_number),
                title: 'To Date<br>QTY<br>R&R',
                align: 'center',
                formatter: qty_formatter_with_dec,
                visible: turn_on_rnr[1][0]
            },
            {
                field: 'payment_details.todate.amt.rnr'.concat('.', pp_number),
                title: 'To Date<br>Amount<br>R&R',
                align: 'center',
                class: 'todate_amt_rnr',
                formatter: dollar_formatter_accounting,
                footerFormatter: function() {
                    return '<b>'.concat(
                        dollar_formatter_accounting(base_sov_totals_obj.payment_details.todate.amt.rnr[pp_number]),
                        '<b>')
                },
                visible: turn_on_rnr[1][1]
            },
            {
                field: 'payment_details.allctd.qty.rnr',
                title: 'Allocated<br>QTY<br>R&R',
                align: 'center',
                formatter: qty_formatter_with_dec,
                visible: turn_on_rnr[2][0]
            },
            {
                field: 'payment_details.allctd.amt.rnr',
                title: 'Allocated<br>Amount<br>R&R',
                align: 'center',
                class: 'allctd_amt_rnr',
                formatter: dollar_formatter_accounting,
                footerFormatter: function() {
                    return '<b>'.concat(
                        dollar_formatter_accounting(base_sov_totals_obj.payment_details.allctd.amt.rnr),
                        '<b>')
                },
                visible: turn_on_rnr[2][1]
            },

            // ######## SSIP #######	

            {
                field: 'payment_details.period.qty.ssp'.concat('.', pp_number),
                title: 'Period<br>QTY<br>SSIP',
                align: 'center',
                formatter: qty_formatter_with_dec,
                visible: turn_on_ssp[0][0]
            },
            {
                field: 'payment_details.period.amt.ssp'.concat('.', pp_number),
                title: 'Period<br>Amount<br>SSIP',
                align: 'center',
                class: 'period_amt_ssp',
                formatter: dollar_formatter_accounting,
                footerFormatter: function() {
                    return '<b>'.concat(
                        dollar_formatter_accounting(base_sov_totals_obj.payment_details.period.amt.ssp[pp_number]),
                        '<b>')
                },
                visible: turn_on_ssp[0][1]
            },
            {
                field: 'payment_details.todate.qty.ssp'.concat('.', pp_number),
                title: 'To Date<br>QTY<br>SSIP',
                align: 'center',
                formatter: qty_formatter_with_dec,
                visible: turn_on_ssp[1][0]
            },
            {
                field: 'payment_details.todate.amt.ssp'.concat('.', pp_number),
                title: 'To Date<br>Amount<br>SSIP',
                align: 'center',
                class: 'todate_amt_ssp',
                formatter: dollar_formatter_accounting,
                footerFormatter: function() {
                    return '<b>'.concat(
                        dollar_formatter_accounting(base_sov_totals_obj.payment_details.todate.amt.ssp[pp_number]),
                        '<b>')
                },
                visible: turn_on_ssp[1][1]
            },
            {
                field: 'payment_details.allctd.qty.ssp',
                title: 'Allocated<br>QTY<br>SSIP',
                align: 'center',
                formatter: qty_formatter_with_dec,
                visible: turn_on_ssp[2][0]
            },
            {
                field: 'payment_details.allctd.amt.ssp',
                title: 'Allocated<br>Amount<br>SSIP',
                align: 'center',
                class: 'allctd_amt_ssp',
                formatter: dollar_formatter_accounting,
                footerFormatter: function() {
                    return '<b>'.concat(
                        dollar_formatter_accounting(base_sov_totals_obj.payment_details.allctd.amt.ssp),
                        '<b>')
                },
                visible: turn_on_ssp[2][1]
            }
        ]
    })

}
