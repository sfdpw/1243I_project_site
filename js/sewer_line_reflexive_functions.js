function sw_line_status_from_scope_and_submittals(line_scope, submittals_obj, ad_hoc_status = '') {

    var return_string = sewer_status_code_array[0];

    var bid_item_stuff = '' // update this when loading pp info

    if (line_scope == '(E) to remain') {

        if (submittals_obj.tvi_post_con.response == 'NET' || submittals_obj.tvi_post_con.response == 'MCN') {

            return_string = sewer_status_code_array[4];

        } else if (submittals_obj.tvi_post_con.response == 'R&R') {

            return_string = sewer_status_code_array[5];

        } else if (submittals_obj.tvi_post_con.response == 'none') {

            if (bid_item_stuff == '' && submittals_obj.tvi_pre_con.response == 'MCN - Do Not Replace') {

                return_string = sewer_status_code_array[1];

            } else if (bid_item_stuff != '' && submittals_obj.tvi_pre_con.response == 'MCN - Do Not Replace') {

                return_string = sewer_status_code_array[3];

            } else if (submittals_obj.tvi_pre_con.response == 'MCN - Replace' || submittals_obj.tvi_pre_con.response == 'Replace (per Email)') {

                return_string = sewer_status_code_array[10];

            }  else if (submittals_obj.tvi_pre_con.response == 'none') {

                return_string = sewer_status_code_array[1];

            }

        }

    } else if (line_scope.includes('Install (N)')) {

        if (submittals_obj.tvi_post_con.response == 'none') {

            return_string = sewer_status_code_array[6];

        } else if (submittals_obj.tvi_post_con.response == 'NET' || submittals_obj.tvi_post_con.response == 'MCN') {

            return_string = sewer_status_code_array[4];

        } else if (submittals_obj.tvi_post_con.response == 'R&R') {

            return_string = sewer_status_code_array[5];

        }

    } else if (line_scope.includes('Line (E)')) {

        if (submittals_obj.tvi_post_con.response == 'none') {

            if (submittals_obj.tvi_pre_con.response == 'none') {

                return_string = sewer_status_code_array[7];

            } else if (submittals_obj.tvi_pre_con.response = 'MCN - Proceed with Lining') {

                return_string = sewer_status_code_array[8];

            }

        } else if (submittals_obj.tvi_post_con.response == 'NET' || submittals_obj.tvi_post_con.response == 'MCN') {

            return_string = sewer_status_code_array[4];

        } else if (submittals_obj.tvi_post_con.response == 'R&R') {

            return_string = sewer_status_code_array[5];

        }

    } else if (line_scope.includes('Improve (E)')) {


        if (submittals_obj.tvi_post_con.response == 'none') {

            if (submittals_obj.tvi_pre_con.response == 'none') {

                return_string = sewer_status_code_array[7];

            } else if (submittals_obj.tvi_pre_con.response == 'MCN - Do Not Replace') {

                return_string = sewer_status_code_array[9];

            } else if (submittals_obj.tvi_pre_con.response == 'MCN - Replace' || submittals_obj.tvi_pre_con.response == 'Replace (per Email)') {

                return_string = sewer_status_code_array[10];

            }

        } else if (submittals_obj.tvi_post_con.response == 'NET' || submittals_obj.tvi_post_con.response == 'MCN') {

            return_string = sewer_status_code_array[4];

        } else if (submittals_obj.tvi_post_con.response == 'R&R') {

            return_string = sewer_status_code_array[5];

        }

    } else if (line_scope == 'Remove (E)' || line_scope == 'Abandon (E) culvert') {

        return_string = sewer_status_code_array[2];

    }

    if (ad_hoc_status != '') {

        return_string = ad_hoc_status;

    }

    return return_string

}
