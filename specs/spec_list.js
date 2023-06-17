var list_of_specs = [

	'1243I_spec_00_01_03_project_information.pdf',
	'1243I_spec_00_01_07_seals_page.pdf',
	'1243I_spec_00_01_10_table_of_contents.pdf',
	'1243I_spec_00_11_13_advertisement_for_bids.pdf',
	'1243I_spec_00_21_13_instructions_to_bidders_appendix_A_sharefile_bid_submission_procedures.pdf',
	'1243I_spec_00_21_13_instructions_to_bidders_appendix_B_joining_a_microsoft_teams_meeting.pdf',
	'1243I_spec_00_21_13_instructions_to_bidders.pdf',
	'1243I_spec_00_21_14_questions_on_bid_documents.pdf',
	'1243I_spec_00_22_11_LBE_program.pdf',
	'1243I_spec_00_22_30_escrow_bid_documents.pdf',
	'1243I_spec_00_40_13_bidding_forms_checklist.pdf',
	'1243I_spec_00_41_00_bid_form.pdf',
	'1243I_spec_00_43_13_bid_security_form.pdf',
	'1243I_spec_00_43_20_acknowledgment_of_receipt_of_addenda.pdf',
	'1243I_spec_00_43_36_proposed_subcontractors_form.pdf',
	'1243I_spec_00_45_13_bidders_qualifications.pdf',
	'1243I_spec_00_45_14_bidders_safety_record.pdf',
	'1243I_spec_00_45_16_release_and_waiver_agreement.pdf',
	'1243I_spec_00_45_60_highest_prevailing_wage_rate_certification.pdf',
	'1243I_spec_00_45_65_certificate_of_bidder_regarding_apprenticeship_training_program.pdf',
	'1243I_spec_00_45_70_certificate_of_bidder_regarding_nondiscrimination_in_contracts_and_benefits.pdf',
	'1243I_spec_00_45_78_certificate_of_bidder_regarding_contracting_in_states_that_allow_discrimination.pdf',
	'1243I_spec_00_45_80_noncollusion_affidavit.pdf',
	'1243I_spec_00_45_82_certification_of_bidder_regarding_debarment_and_suspension.pdf',
	'1243I_spec_00_45_xx_CMD_form_2B_good_faith_outreach.pdf',
	'1243I_spec_00_49_00_1_CMD_form_3_non_discrimination_affidavit.pdf',
	'1243I_spec_00_49_00_2_CMD_form_6_LBE_subcontractor_participation_affidavit.pdf',
	'1243I_spec_00_49_00_3_CMD_form_6A_LBE_trucking.pdf',
	'1243I_spec_00_49_00_supplementary_bidding_forms_checklist.pdf',
	'1243I_spec_00_49_12_experience_statement.pdf',
	'1243I_spec_00_49_14_certification_of_subcontractor_lower-tier_subcontractor_or_supplier_regarding_debarment_and_suspension.pdf',
	'1243I_spec_00_49_15_certificate_of_subcontractor_regarding_apprenticeship_training_program.pdf',
	'1243I_spec_00_49_16_escrow_bid_documents_declaration.pdf',
	'1243I_spec_00_49_18_request_for_substitution_(RFS).pdf',
	'1243I_spec_00_52_00_agreement_form.pdf',
	'1243I_spec_00_52_10_addendum_A_to_project_labor_agreement_letter_of_assent.pdf',
	'1243I_spec_00_61_13_performance_bond_and_payment_(labor_and_materials)_bond_form.pdf',
	'1243I_spec_00_63_30_escrow_agreement_for_security_deposits_in_lieu_of_retention.pdf',
	'1243I_spec_00_72_00_general_conditions.pdf',
	'1243I_spec_00_73_00_supplementary_conditions.pdf',
	'1243I_spec_00_73_01_permits_and_agreements.pdf',
	'1243I_spec_00_73_02_contract_time_and_liquidated_damages.pdf',
	'1243I_spec_00_73_03_additional_liquidated_damages.pdf',
	'1243I_spec_00_73_16_insurance_requirements.pdf',
	'1243I_spec_00_73_20_exisiting_utility_facilities.pdf',
	'1243I_spec_00_73_21_utility_crossings_specifications.pdf',
	'1243I_spec_00_73_27_specific_project_requirements.pdf',
	'1243I_spec_00_73_30_form_1_local_hiring_workforce_projection.pdf',
	'1243I_spec_00_73_30_form_2_local_hiring_plan.pdf',
	'1243I_spec_00_73_30_form_4_conditional_waivers.pdf',
	'1243I_spec_00_73_30_local_hiring_requirements.pdf',
	'1243I_spec_00_73_34_project_labor_agreement.pdf',
	'1243I_spec_00_73_73_statutory_requirements.pdf',
	'1243I_spec_01_11_00_00_summary_of_work.pdf',
	'1243I_spec_01_11_00_01_appendix_A_upcoming_temporary_street_closures.pdf',
	'1243I_spec_01_11_00_02_appendix_B_operational_and_safety_training_assumption_of_risk_waiver_of_claims.pdf',
	'1243I_spec_01_20_00_price_and_payment_procedures.pdf',
	'1243I_spec_01_21_00_allowances.pdf',
	'1243I_spec_01_21_53_mobilization_and_demobilization_items.pdf',
	'1243I_spec_01_25_13_product_substitution_procedures.pdf',
	'1243I_spec_01_26_10_contract_modification_procedures.pdf',
	'1243I_spec_01_29_73_schedule_of_values.pdf',
	'1243I_spec_01_31_13_project_coordination.pdf',
	'1243I_spec_01_31_19_project_meetings.pdf',
	'1243I_spec_01_31_33_partnering_procedures.pdf',
	'1243I_spec_01_31_34_third_party_facilitator_agreement.pdf',
	'1243I_spec_01_32_16_construction_progress_schedules_CPM.pdf',
	'1243I_spec_01_32_33_photographic_documentation.pdf',
	'1243I_spec_01_33_00_submittal_procedures.pdf',
	'1243I_spec_01_35_45_00_health_and_safety_criteria.pdf',
	'1243I_spec_01_35_45_01_health_and_safety_public_health_directive.pdf',
	'1243I_spec_01_35_45_02_health_and_safety_PW_project_safety_protocols.pdf',
	'1243I_spec_01_35_45_03_health_and_safety_order_of_health_officer_C1907q.pdf',
	'1243I_spec_01_35_45_04_health_and_safety_order_of_health_officer_C1907q_appendix_A_social_distancing_protocol.pdf',
	'1243I_spec_01_35_45_05_attachment_A-1_personnel_screening_form.pdf',
	'1243I_spec_01_35_45_06_attachment_A-2_san_francisco_COVID_19_health_screening_form_for_non_personnel.pdf',
	'1243I_spec_01_35_45_07_appendix_B-1_small_construction_project_safety_protocol.pdf',
	'1243I_spec_01_35_45_08_appendix_B-2_large_construction_project_safety_protocol.pdf',
	'1243I_spec_01_35_45_09_appendix_C-1_additional_businesses_permitted_to_operate.pdf',
	'1243I_spec_01_35_45_10_appendix_C-2_allowed_additional_activities.pdf',
	'1243I_spec_01_35_49_0_minimum_environmental_procedures.pdf',
	'1243I_spec_01_35_49_1_appendix_A_alert_sheet_affidavit.pdf',
	'1243I_spec_01_35_49_2_appendix_B_alert_sheet_and_cultural_briefing_english.pdf',
	'1243I_spec_01_35_49_3_appendix_C_alert_sheet_and_cultural_briefing_spanish.pdf',
	'1243I_spec_01_35_50_additional_environmental_mitigation_measures.pdf',
	'1243I_spec_01_35_51_additional_clean_construction_requirements_on_major_construction_projects.pdf',
	'1243I_spec_01_41_00_regulatory_requirements.pdf',
	'1243I_spec_01_42_00_references.pdf',
	'1243I_spec_01_45_00_quality_control.pdf',
	'1243I_spec_01_50_00_0_temporary_facilities_and_controls.pdf',
	'1243I_spec_01_50_00_1_project_sign.pdf',
	'1243I_spec_01_50_00_2_CA_DT_sign.pdf',
	'1243I_spec_01_50_00_3_tow_away_sign.pdf',
	'1243I_spec_01_55_26_00_traffic_control.pdf',
	'1243I_spec_01_55_26_01_de-energization_and_overhead_wire_movement_request_form.pdf',
	'1243I_spec_01_55_26_02_temporary_bus_zone_and_reroute_relocation_request.pdf',
	'1243I_spec_01_55_26_03_inspector_and_vehicle_charter_request_form.pdf',
	'1243I_spec_01_55_26_04_inspector_and_vehicle_charter_request_form_cancellation.pdf',
	'1243I_spec_01_55_26_05_track_department_RWP_request_form.pdf',
	'1243I_spec_01_55_26_06_track_department_RWP_request_form_cancellation.pdf',
	'1243I_spec_01_55_26_07_application_for_subway_surface_and_electrical_permit.pdf',
	'1243I_spec_01_56_39_temporary_tree_and_plant_protection.pdf',
	'1243I_spec_01_57_13_temporary_erosion_and_sediment_controls_(ESCP).pdf',
	'1243I_spec_01_57_26_temporary_protection_of_catch_basins_and_storm_drain_inlets.pdf',
	'1243I_spec_01_60_00_product_requirements.pdf',
	'1243I_spec_01_71_23_field_engineering.pdf',
	'1243I_spec_01_71_43_00_site_specific_work_plan_(SSWP).pdf',
	'1243I_spec_01_71_43_01_attachment_1_SSWP_form.pdf',
	'1243I_spec_01_74_50_material_reduction_and_recovery_plan.pdf',
	'1243I_spec_01_77_00_closeout_procedures.pdf',
	'1243I_spec_01_77_13_waiver_and_release_of_claims_on_final_payment_form.pdf',
	'1243I_spec_01_78_36_warranties.pdf',
	'1243I_spec_01_78_39_project_record_documents.pdf',
	'1243I_spec_02_81_10_environmental_management_of_excavated_materials.pdf',
	'1243I_spec_26_04_00_general_requirements_for_electrical.pdf',
	'1243I_spec_26_05_00_common_work_results_for_electrical.pdf',
	'1243I_spec_31_23_19_dewatering.pdf',
	'1243I_spec_31_23_33_trenching_and_backfilling.pdf',
	'1243I_spec_31_23_34_pavement_cutting_and_excavation.pdf',
	'1243I_spec_32_01_16.71_cold_milling_asphalt_paving.pdf',
	'1243I_spec_32_11_23_aggregate_base_courses.pdf',
	'1243I_spec_32_12_16_asphalt_paving.pdf',
	'1243I_spec_32_13_13_concrete_paving.pdf',
	'1243I_spec_32_17_34_concrete_detectable_warning_tiles.pdf',
	'1243I_spec_33_01_30.63_sewerage_system_mortar_rehabilitation.pdf',
	'1243I_spec_33_01_30.73_cured-in-place_liner_pipe.pdf',
	'1243I_spec_33_24_00_ground_water_wells.pdf',
	'1243I_spec_33_33_00_sanitary_sewerage_utilities.pdf',
	'1243I_spec_34_23_16.18_overhead_cable_isolation.pdf'

];