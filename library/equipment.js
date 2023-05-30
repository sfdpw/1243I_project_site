var ct_manual_period_10 = {

    'pdf_url': 'https://dot.ca.gov/-/media/dot-media/programs/construction/documents/equipment-rental-rates-and-labor-surcharge/book_2023.pdf',
    'start_date': '2023_04_01',
    'end_date': '2024_03_31'

}

var equipment_pool = {

    'LP_00ZZ1': {
        'general_name': 'Crew Truck - Ford F-350',
        'ct_classification': {
            'ct_type': 'TRUCK',
            'ct_subtype': 'T&TT',
            'ct_code': '12-20'
        },
        'rate_references': {
           'P_001': {
            'desc': 'Caltrans General<br>Equipment Rates<br>2023/2024',
            'url': ct_manual_period_10.pdf_url,
            'start_date': ct_manual_period_10.start_date,
            'end_date': ct_manual_period_10.end_date,
            'rate': 54.71,
            'dlf': 0.11,
            'otf': 0.88
            }
        },
        'extra_work_utilization': {
            'FAR_030_01': { 'regular': 8 },
            'FAR_030_02': { 'regular': 4 },
            'FAR_030_03': { 'regular': 8 },
        }
    },

    'LP_00ZZ2': {
        'general_name': '2 Axel Truck - Ford F-550',
        'ct_classification': {
            'ct_type': 'TRUON',
            'ct_subtype': 'TRUN',
            'ct_code': '2AXL'
        },
        'rate_references': {
           'P_001': {
            'desc': 'Caltrans General<br>Equipment Rates<br>2023/2024',
            'pdf_url': ct_manual_period_10.pdf_url,
            'start_date': ct_manual_period_10.start_date,
            'end_date': ct_manual_period_10.end_date,
            'rate': 73.34,
            'dlf': 0.16,
            'otf': 0.83
            }
        },
        'extra_work_utilization': {
            'FAR_030_01': { 'regular': 8 },
            'FAR_030_02': { 'regular': 8 },
            'FAR_030_03': { 'regular': 2 }
        }
    },



}
