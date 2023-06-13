var far_cost_summary = {}

far_cost_summary.labor = 0;
far_cost_summary.equipment = 0;
far_cost_summary.materials = 0;
far_cost_summary.subcontractors = 0;

for (const far_obj of FAR_list) {

    generate_FA_entry(far_obj);

}

function extra_cost_details_from_far(far_no_arg) {

    var far_cost = {};

    far_cost.labor = [];
    far_cost.labor_total = 0;
    var far_laborer_details = {};

    far_cost.equipment = [];
    far_cost.equipment_total = 0;
    var far_equipment_piece_details = {};

    far_cost.material = [];
    far_cost.material_total = 0;
    var far_material_piece_details = {};

    far_cost.subcontractors = [];
    far_cost.subcontractor_total = 0;
    var far_material_piece_details = {};

    for (const laborer of Object.entries(labor_pool))

    {

        for (const cpr of Object.entries(laborer[1].utilization))

        {

            for (const extra_work_utilization_day of Object.entries(cpr[1].regular.extra_work_utilization))

            {

                for (const far_no of Object.entries(extra_work_utilization_day[1]))

                {

                    if (far_no[0] == far_no_arg)

                    {

                        far_laborer_details = {};
                        far_laborer_details.initials = laborer[1].initials;
                        far_laborer_details.classification = cpr[1].classification;
                        far_laborer_details.rate_type = 'Regular';
                        far_laborer_details.base_rate = cpr[1].regular.base_rate;
                        far_laborer_details.fringes = cpr[1].fringes;
                        far_laborer_details.base_rate_plus_fringes = cpr[1].regular.base_rate + cpr[1].fringes;
                        far_laborer_details.surcharge = (cpr[1].regular.base_rate + cpr[1].fringes) * 0.1;
                        far_laborer_details.markup = (cpr[1].regular.base_rate + cpr[1].fringes) * 1.1 * 0.35;
                        far_laborer_details.total_rate = (cpr[1].regular.base_rate + cpr[1].fringes) * 1.1 * 1.35;
                        far_laborer_details.hours = far_no[1];
                        far_laborer_details.amount = far_no[1] * ((cpr[1].regular.base_rate + cpr[1].fringes) * 1.1 * 1.35);

                        far_cost.labor_total += far_laborer_details.amount;
                        far_cost.labor.push(far_laborer_details);

                    }

                }

            }

        }

    }


    for (const equipment of Object.entries(equipment_pool))

    {

        for (const extra_work_utilization_day of Object.entries(equipment[1].extra_work_utilization))

        {

            for (const far_no of Object.entries(extra_work_utilization_day))

            {

                if (far_no[1] == far_no_arg)

                {

                    far_equipment_piece_details = {};
                    far_equipment_piece_details.unique_id = equipment[0];
                    far_equipment_piece_details.general_name = equipment[1].general_name;
                    far_equipment_piece_details.ct_type = equipment[1].ct_classification.ct_type;
                    far_equipment_piece_details.ct_subtype = equipment[1].ct_classification.ct_subtype;
                    far_equipment_piece_details.ct_code = equipment[1].ct_classification.ct_code;

                    for (const time_detail of Object.entries(extra_work_utilization_day[1]))

                    {

                        far_equipment_piece_details.rate_type = time_detail[0];
                        far_equipment_piece_details.rate = equipment[1].rate_references.P_001.rate;
                        far_equipment_piece_details.rate_ref = '<a href="' + equipment[1].rate_references.P_001.url + '" target="_blank">' +
                            equipment[1].rate_references.P_001.desc + '</a>';
                        far_equipment_piece_details.markup = equipment[1].rate_references.P_001.rate * 0.15;
                        far_equipment_piece_details.total_rate = equipment[1].rate_references.P_001.rate * 1.15;
                        far_equipment_piece_details.hours = time_detail[1];
                        far_equipment_piece_details.amount = time_detail[1] * equipment[1].rate_references.P_001.rate * 1.15;

                    }

                    far_cost.equipment_total += far_equipment_piece_details.amount;
                    far_cost.equipment.push(far_equipment_piece_details);

                }

            }

        }

    }
    
    for (const material of Object.entries(material_pool))

    {
    
      for (const extra_work_utilization_day of Object.entries(material[1].extra_work_utilization))
      
      {
          
          for (const far_no of Object.entries(extra_work_utilization_day))

            {

                if (far_no[1] == far_no_arg)

                {
    
       		 far_material_piece_details = {};
    	         far_material_piece_details.general_name = material[0];
         	 far_material_piece_details.unit = material[1].unit;
        	 far_material_piece_details.base_unit_price = material[1].base_unit_price;
        
        //console.log( far_material_piece_details.unit);

          } 
     

         }

       }
       

     }








    far_cost.total_amount = far_cost.labor_total + far_cost.equipment_total + far_cost.material_total + far_cost.subcontractor_total;

    far_cost_summary.labor += far_cost.labor_total;
    far_cost_summary.equipment += far_cost.equipment_total;
    far_cost_summary.materials += far_cost.material_total;
    far_cost_summary.subcontractors += far_cost.subcontractor_total;

    document.getElementById(far_no_arg.concat('_labor_button')).innerHTML = currency_formatter(far_cost.labor_total);
    document.getElementById(far_no_arg.concat('_equipment_button')).innerHTML = currency_formatter(far_cost.equipment_total);
    document.getElementById(far_no_arg.concat('_total_button')).innerHTML = currency_formatter(far_cost.total_amount);

    return far_cost

}


function generate_FA_entry(far_obj_arg) {


    document.getElementById('FAR_summary_table_body').innerHTML += accordion_table_far_entry(far_obj_arg);
    extra_cost_from_far = extra_cost_details_from_far(far_obj_arg.tag_no);

    $('#'.concat(far_obj_arg.tag_no, '_labor_table')).bootstrapTable({
        data: extra_cost_from_far.labor,
        columns: [{
                field: 'initials',
                title: 'Initials',
            },
            {
                field: 'classification',
                title: 'Classification',
            },
            {
                field: 'rate_type',
                title: 'Rate Type',
            },
            {
                field: 'base_rate',
                title: 'Base<br>Rate',
                formatter: "currency_formatter",
                align: 'right'
            },
            {
                field: 'fringes',
                title: 'Fringes',
                formatter: "currency_formatter",
                align: 'right'
            },
            {
                field: 'base_rate_plus_fringes',
                title: 'Base Rate<br>+ Fringes',
                formatter: "currency_formatter",
                align: 'right'
            },
            {
                field: 'surcharge',
                title: '10% Labor<br>Surcharge',
                formatter: "currency_formatter",
                align: 'right'
            },
            {
                field: 'markup',
                title: '35% Markup',
                formatter: "currency_formatter",
                align: 'right'
            },
            {
                field: 'total_rate',
                title: 'Total Rate',
                formatter: "currency_formatter",
                align: 'right'
            },
            {
                field: 'hours',
                title: 'Hours',
                align: 'center'
            },
            {
                field: 'amount',
                title: 'Amount',
                formatter: "currency_formatter",
                align: 'right'
            }
        ]
    })

    $('#'.concat(far_obj_arg.tag_no, '_equipment_table')).bootstrapTable({
        data: extra_cost_from_far.equipment,

        columns: [{
                field: 'unique_id',
                title: 'Unique Id',
            },
            {
                field: 'general_name',
                title: 'General Name',
            },
            {
                field: 'ct_type',
                title: 'Type',
            },
            {
                field: 'ct_subtype',
                title: 'Subtype',
            },
            {
                field: 'ct_code',
                title: 'Code',
            },
            {
                field: 'rate_type',
                title: 'Rate Type',
            },
            {
                field: 'rate_ref',
                title: 'Per',
            },
            {
                field: 'rate',
                title: 'Rate',
                formatter: "currency_formatter",
                align: 'right'
            },
            {
                field: 'markup',
                title: '15% Markup',
                formatter: "currency_formatter",
                align: 'right'
            },
            {
                field: 'total_rate',
                title: 'Total Rate',
                formatter: "currency_formatter",
                align: 'right'
            },
            {
                field: 'hours',
                title: 'Hours',
                align: 'center'
            },
            {
                field: 'amount',
                title: 'Amount',
                formatter: "currency_formatter",
                align: 'right'
            }
        ]
    })

}

function accordion_table_far_entry(far_obj_arg) {

    var return_block = '';

    return_block =

        '<tr data-toggle="collapse" data-target="#' + far_obj_arg.tag_no + '" class="accordion-toggle">\
                    <td>' + far_obj_arg.tag_no + '</td>\
                    <td>' + far_obj_arg.date + ' </td>\
                    <td>' + far_obj_arg.work_desc + ' </td>\
                    <td><button id="' + far_obj_arg.tag_no + '_total_button" class="btn btn-default btn-xs"></button></td>\
                </tr>\
                <tr>\
                    <td colspan="4" class="hiddenRow">\
                        <div class="accordian-body collapse" id="' + far_obj_arg.tag_no + '">\
                            <table class="table">\
                                <tr data-toggle="collapse" data-target="#' + far_obj_arg.tag_no + '_labor" class="accordion-toggle">\
                                    <td style="text-indent:20px">Labor</td>\
                                    <td style="text-align: right">Subtotal:</td>\
                                    <td><button id="' + far_obj_arg.tag_no + '_labor_button" class="btn btn-default btn-xs"></button></td>\
                                </tr>\
                                <tr>\
                                    <td colspan="3" class="hiddenRow">\
                                        <div class="accordian-body collapse" id="' + far_obj_arg.tag_no + '_labor">\
                                            <table class="table" id="' + far_obj_arg.tag_no + '_labor_table"\
                                                   style="width: 90%; margin-left: auto; margin-right: auto;\
                                                          font-size: 12px; font-family: monospace;"></table>\
                                        </div>\
                                    </td>\
                                </tr>\
                                <tr data-toggle="collapse" data-target="#' + far_obj_arg.tag_no + '_equipment" class="accordion-toggle">\
                                    <td style="text-indent:20px">Equipment</td>\
                                    <td style="text-align: right">Subtotal:</td>\
                                    <td><button id="' + far_obj_arg.tag_no + '_equipment_button" class="btn btn-default btn-xs"></button></td>\
                                </tr>\
                                <tr>\
                                    <td colspan="3" class="hiddenRow">\
                                        <div class="accordian-body collapse" id="' + far_obj_arg.tag_no + '_equipment">\
                                            <table class="table" id="' + far_obj_arg.tag_no + '_equipment_table"\
                                                   style="width: 90%; margin-left: auto; margin-right: auto;\
                                                          font-size: 12px; font-family: monospace;"></table>\
                                        </div>\
                                    </td>\
                                </tr>\
                                <tr data-toggle="collapse" data-target="#' + far_obj_arg.tag_no + '_materials" class="accordion-toggle">\
                                    <td style="text-indent:20px">Materials</td>\
                                    <td style="text-align: right">Subtotal:</td>\
                                    <td><button id="' + far_obj_arg.tag_no + '_equipment_button" class="btn btn-default btn-xs"></button></td>\
                                </tr>\
                                <tr>\
                                    <td colspan="3" class="hiddenRow">\
                                        <div class="accordian-body collapse" id="' + far_obj_arg.tag_no + '_materials">\
                                            <table class="table" id="' + far_obj_arg.tag_no + '_materials_table"\
                                                   style="width: 90%; margin-left: auto; margin-right: auto;\
                                                          font-size: 12px; font-family: monospace;"></table>\
                                        </div>\
                                    </td>\
                                </tr>\
                            </table>\
                        </div>\
                    </td>\
                </tr>'

    return return_block

}

document.getElementById('FAR_summary_table_body').innerHTML +=
    '<tr data-toggle="collapse" data-target="#FA_summary_details" class="accordion-toggle">\
       <td colspan="3" style="text-align: right">Total</td>\
       <td><button id="FA_summary_total_button" class="btn btn-default btn-xs"></button></td>\
     </tr>\
     <tr>\
       <td colspan="4" class="hiddenRow">\
         <div class="accordian-body collapse" id="FA_summary_details">\
           <table style="width: 90%; margin-left: auto; margin-right: auto; font-size: 12px; font-family: monospace;">\
             <tr>\
               <td>&nbsp;</td>\
               <td style="text-align:right"><b>Labor:</b></td>\
               <td>' + currency_formatter(far_cost_summary.labor) + '</td>\
               <td>&nbsp;</td>\
             </tr>\
             <tr>\
               <td>&nbsp;</td>\
               <td style="text-align:right"><b>Equipment:</b></td>\
               <td>' + currency_formatter(far_cost_summary.equipment) + '</td>\
               <td>&nbsp;</td>\
             </tr>\
             <tr>\
               <td>&nbsp;</td>\
               <td style="text-align:right"><b>Materials:</b></td>\
               <td>' + currency_formatter(far_cost_summary.materials) + '</td>\
               <td>&nbsp;</td>\
             </tr>\
           </table>\
         </div>\
       </td>\
     </tr>';

document.getElementById('FA_summary_total_button').innerHTML = currency_formatter(far_cost_summary.labor +
    far_cost_summary.equipment +
    far_cost_summary.materials +
    far_cost_summary.subcontractors);

function currency_formatter(data) {

    return '$' + data.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,").padStart(10, '\u00A0');

};
