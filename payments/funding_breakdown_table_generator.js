function generate_funding_breakdown_table()

{

    document.getElementById(table_id).style.borderColor = 'black';

    $('#'.concat(table_id)).bootstrapTable({
        data: base_sov,
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
                field: 'bid_item',
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
                formatter: dollar_formatter_accounting
            },
            {
                field: 'payment_details.allctd.amt.tot',
                title: 'Contract Total',
                align: 'center',
                formatter: dollar_formatter_accounting
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
                formatter: dollar_formatter_accounting
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
                formatter: dollar_formatter_accounting
            },

            // ######## ESH #######


            {
                field: 'payment_details.period.qty.esh'.concat('.', pp_number),
                title: 'Period<br>QTY<br>ESH',
                align: 'center',
                formatter: qty_formatter_with_dec,
                visible: false
            },
            {
                field: 'payment_details.period.amt.esh'.concat('.', pp_number),
                title: 'Period<br>Amount<br>ESH',
                align: 'center',
                class: 'period_amt_esh',
                formatter: dollar_formatter_accounting,
                visible: false
            },
            {
                field: 'payment_details.todate.qty.esh'.concat('.', pp_number),
                title: 'To Date<br>QTY<br>ESH',
                align: 'center',
                formatter: qty_formatter_with_dec,
                visible: false
            },
            {
                field: 'payment_details.todate.amt.esh'.concat('.', pp_number),
                title: 'To Date<br>Amount<br>ESH',
                align: 'center',
                class: 'todate_amt_esh',
                formatter: dollar_formatter_accounting,
                visible: false
            },
            {
                field: 'payment_details.allctd.qty.esh',
                title: 'Allocated<br>QTY<br>ESH',
                align: 'center',
                formatter: qty_formatter_with_dec,
                visible: false
            },
            {
                field: 'payment_details.allctd.amt.esh',
                title: 'Allocated<br>Amount<br>ESH',
                align: 'center',
                class: 'allctd_amt_esh',
                formatter: dollar_formatter_accounting,
                visible: false
            },

            // ######## R&R #######

            {
                field: 'payment_details.period.qty.rnr'.concat('.', pp_number),
                title: 'Period<br>QTY<br>R&R',
                align: 'center',
                formatter: qty_formatter_with_dec,
                visible: false
            },
            {
                field: 'payment_details.period.amt.rnr'.concat('.', pp_number),
                title: 'Period<br>Amount<br>R&R',
                align: 'center',
                class: 'period_amt_rnr',
                formatter: dollar_formatter_accounting,
                visible: false
            },
            {
                field: 'payment_details.todate.qty.rnr'.concat('.', pp_number),
                title: 'To Date<br>QTY<br>R&R',
                align: 'center',
                formatter: qty_formatter_with_dec,
                //visible: false
            },
            {
                field: 'payment_details.todate.amt.rnr'.concat('.', pp_number),
                title: 'To Date<br>Amount<br>R&R',
                align: 'center',
                class: 'todate_amt_rnr',
                formatter: dollar_formatter_accounting,
                //visible: false
            },
            {
                field: 'payment_details.allctd.qty.rnr',
                title: 'Allocated<br>QTY<br>R&R',
                align: 'center',
                formatter: qty_formatter_with_dec,
                visible: false
            },
            {
                field: 'payment_details.allctd.amt.rnr',
                title: 'Allocated<br>Amount<br>R&R',
                align: 'center',
                class: 'allctd_amt_rnr',
                formatter: dollar_formatter_accounting,
                visible: false
            },

            // ######## SSIP #######	

            {
                field: 'payment_details.period.qty.ssp'.concat('.', pp_number),
                title: 'Period<br>QTY<br>SSIP',
                align: 'center',
                formatter: qty_formatter_with_dec,
                visible: false
            },
            {
                field: 'payment_details.period.amt.ssp'.concat('.', pp_number),
                title: 'Period<br>Amount<br>SSIP',
                align: 'center',
                class: 'period_amt_ssp',
                formatter: dollar_formatter_accounting,
                visible: false
            },
            {
                field: 'payment_details.todate.qty.ssp'.concat('.', pp_number),
                title: 'To Date<br>QTY<br>SSIP',
                align: 'center',
                formatter: qty_formatter_with_dec,
                //visible: false
            },
            {
                field: 'payment_details.todate.amt.ssp'.concat('.', pp_number),
                title: 'To Date<br>Amount<br>SSIP',
                align: 'center',
                class: 'todate_amt_ssp',
                formatter: dollar_formatter_accounting,
                //visible: false
            },
            {
                field: 'payment_details.allctd.qty.ssp',
                title: 'Allocated<br>QTY<br>SSIP',
                align: 'center',
                formatter: qty_formatter_with_dec,
                visible: false
            },
            {
                field: 'payment_details.allctd.amt.ssp',
                title: 'Allocated<br>Amount<br>SSIP',
                align: 'center',
                class: 'allctd_amt_ssp',
                formatter: dollar_formatter_accounting,
                visible: false
            }
        ]
    })

}
