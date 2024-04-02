var empty_pp_history_array = []

for (var jj = 0; jj < max_pp_no; jj++) {

    empty_pp_history_array[jj] = [0, 0, 0, 0];

}

var base_sov =

    [
        // #######################

        {
            "bid_item": "R-01",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Traffic Control for Roadway Work",
            "unit": "LS",
            "qty": 1,
            "unit_price": 300000,
            "alloc_esh": 300000,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [3000, 0, 0, 0], // PP02
                [24000, 0, 0, 0], // PP03
                [27000, 0, 0, 0], // PP04
                [33000, 0, 0, 0], // PP05
                [12000, 0, 0, 0], // PP06
                [6000, 0, 0, 0], // PP07
                [], // PP08
                [3600, 0, 0, 0], // PP09
                [8400, 0, 0, 0], // PP10
                [63000, 0, 0, 0], // PP11
                [60000, 0, 0, 0], // PP12
                [30000, 0, 0, 0], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-02",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Temporary Retroflective Pavement Markings",
            "unit": "LF",
            "qty": 12000,
            "unit_price": 1,
            "alloc_esh": 12000,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-03",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Full Depth Planing per 2-Inch Depth of Cut",
            "unit": "SF",
            "qty": 626340,
            "unit_price": 0.5,
            "alloc_esh": 313170,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-04",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Hot Mix Asphalt (Type A ½-Inch Maximum with Medium Grading)",
            "unit": "TON",
            "qty": 8897,
            "unit_price": 165,
            "alloc_esh": 1468005,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-05",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "8-Inch Thick Concrete Base",
            "unit": "SF",
            "qty": 73931,
            "unit_price": 12,
            "alloc_esh": 887172,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-06",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "10-Inch Thick Concrete Base",
            "unit": "SF",
            "qty": 108444,
            "unit_price": 13,
            "alloc_esh": 1409772,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-07",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "8-Inch Thick Concrete Pavement, Gutter, or Parking Strip",
            "unit": "SF",
            "qty": 3432,
            "unit_price": 14,
            "alloc_esh": 48048,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-08",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "3 ½-Inch Thick Concrete Sidewalk",
            "unit": "SF",
            "qty": 15050,
            "unit_price": 10,
            "alloc_esh": 150500,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-09",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Reset Existing Granite Curb",
            "unit": "LF",
            "qty": 121,
            "unit_price": 30,
            "alloc_esh": 3630,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-10",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "4-Inch or 6-Inch Wide Concrete Curb",
            "unit": "LF",
            "qty": 143,
            "unit_price": 35,
            "alloc_esh": 5005,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-11",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Combined 6-Inch Wide Concrete Curb And 2-Foot Wide Concrete Gutter",
            "unit": "LF",
            "qty": 1449,
            "unit_price": 55,
            "alloc_esh": 79695,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-12",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Concrete Curb Ramp With Concrete Detectable Surface Tiles",
            "unit": "EA",
            "qty": 55,
            "unit_price": 3100,
            "alloc_esh": 170500,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-13",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Pull Box Type I (Contingency Bid Item)**",
            "unit": "EA",
            "qty": 20,
            "unit_price": 25,
            "alloc_esh": 500,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-14",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Pull Box Type III (Contingency Bid Item)**",
            "unit": "EA",
            "qty": 20,
            "unit_price": 25,
            "alloc_esh": 500,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-15",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Adjust City-Owned Manhole Frame and Cover and Catch Basin Frame and Grate to Grade (Contingency Bid Item)**",
            "unit": "EA",
            "qty": 50,
            "unit_price": 25,
            "alloc_esh": 1250,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-16",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Adjust City-Owned Hydrant and Water Main Valve Box Casting Cover to Grade (Contingency Bid Item)**",
            "unit": "EA",
            "qty": 50,
            "unit_price": 25,
            "alloc_esh": 1250,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-17",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Reconstruct City-Owned Hydrant and Water Main Valve Box Casting Cover to Grade (Contingency Bid Item)**",
            "unit": "EA",
            "qty": 50,
            "unit_price": 25,
            "alloc_esh": 1250,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-18",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Temporary Tree Protection (Contingency Bid Item)**",
            "unit": "EA",
            "qty": 100,
            "unit_price": 50,
            "alloc_esh": 5000,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [400, 0, 0, 0], // PP01
                [], // PP02
                [], // PP03
                [450, 0, 0, 0], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [350, 0, 0, 0], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-19",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Mobilization For Paving Work (Maximum 3% of the Sum of Bid Items R-1 Through R-18)",
            "unit": "LS",
            "qty": 1,
            "unit_price": 145000,
            "alloc_esh": 145000,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [36250, 0, 0, 0], // PP02
                [72500, 0, 0, 0], // PP03
                [36250, 0, 0, 0], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [8584.40, 0, 0, 0], // PP11
                [6181, 0, 0, 0], // PP12
                [1076, 0, 0, 0], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-20",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Demobilization for Paving Work (Maximum 2% of the Sum of Bid Items R-1 Through R-18)",
            "unit": "LS",
            "qty": 1,
            "unit_price": 77000,
            "alloc_esh": 77000,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-21",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Allowance for As-Needed Transit Support Provided by Contractor",
            "unit": "AL",
            "qty": 1,
            "unit_price": 50000,
            "alloc_esh": 50000,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-22",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Allowance for As-Needed Overhead Contact System (OCS) Support Provided by Contractor",
            "unit": "AL",
            "qty": 1,
            "unit_price": 100000,
            "alloc_esh": 100000,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [28380, 0, 0, 0], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "R-23",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Allowance for Partnering Facilitation and Related Costs",
            "unit": "AL",
            "qty": 1,
            "unit_price": 15000,
            "alloc_esh": 15000,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [0, 0, 0, 0], // PP00
                [5000, 0, 0, 0], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [600, 0, 0, 0], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-01",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Traffic Routing for Sewer Work",
            "unit": "LS",
            "qty": 1,
            "unit_price": 275000,
            "alloc_esh": 11000,
            "alloc_rnr": 171875,
            "alloc_ssp": 92125,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [1100, 17187.50, 9212.50, 0], // PP01
                [550, 8593.75, 4606.25, 0], // PP02
                [660, 10312.50, 5527.50, 0], // PP03
                [770, 12031.25, 6448.75, 0], // PP04
                [550, 8593.75, 4606.25, 0], // PP05
                [], // PP06
                [220, 3437.50, 1842.50, 0], // PP07
                [770, 12031.25, 6448.75, 0], // PP08
                [2310, 36093.75, 19346.25, 0], // PP09
                [4070, 36093.75, 34086.25, 0], // PP10
                [0, 13750, 0, 0], // PP11
                [0, 13750, 0, 0], // PP12
                [], // PP13
                [0, 0, -1375, 1375], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-02",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Trench And Excavation Support For Sewer Work",
            "unit": "LS",
            "qty": 1,
            "unit_price": 275000,
            "alloc_esh": 11000,
            "alloc_rnr": 225500,
            "alloc_ssp": 38500,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [1100, 22550, 3850, 0], // PP01
                [550, 11275, 1925, 0], // PP02
                [660, 13530, 2310, 0], // PP03
                [770, 15785, 2695, 0], // PP04
                [550, 11275, 1925, 0], // PP05
                [], // PP06
                [220, 4510, 770, 0], // PP07
                [770, 15785, 2695, 0], // PP08
                [2310, 47355, 8085, 0], // PP09
                [4070, 55935, 14245, 0], // PP10
                [0, 13750, 0, 0], // PP11
                [0, 13750, 0, 0], // PP12
                [], // PP13
                [0, 0, -2750, 2750], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-03",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Concrete Manhole For 12-Inch To 24-Inch Diameter Sewers With Frame And Cover\n(Per SFDPW Standard Plan 87,181)",
            "unit": "EA",
            "qty": 21,
            "unit_price": 8500,
            "alloc_esh": 0,
            "alloc_rnr": 170000,
            "alloc_ssp": 8500,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-04",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Concrete Manhole For 27-Inch To 48-Inch Diameter Sewers With Frame And Cover\n(Per SFDPW Standard Plan 87,182)",
            "unit": "EA",
            "qty": 2,
            "unit_price": 40000,
            "alloc_esh": 0,
            "alloc_rnr": 80000,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-05",
            'linked_bi': 2,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Modified Box Manhole For Connection To 3'X5' Brick Sewer With Frame And Cover\n(Per SFDPW Standard Plan 87,184 And Can Be Used As An Insertion Pit For The Liner)",
            "unit": "EA",
            "qty": 3,
            "unit_price": 40000,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": 120000,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-06",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Precast Manhole On Existing Brick Sewer With Frame And Cover\n(Per SFDPW Standard Plan 87,185)",
            "unit": "EA",
            "qty": 1,
            "unit_price": 10000,
            "alloc_esh": 0,
            "alloc_rnr": 10000,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-07",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Clean and Mortar Existing Manhole Riser",
            "unit": "EA",
            "qty": 14,
            "unit_price": 3700,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": 51800,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-08",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Removal of Rat Walk Inside 3'x5' Egg-Shaped Brick Sewers And Obstructions Prior to Lining",
            "unit": "LF",
            "qty": 835,
            "unit_price": 50,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": 41750,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-09",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Bypassing Main Sewer Flow Related to Lining And Mortar Work",
            "unit": "LS",
            "qty": 1,
            "unit_price": 30000,
            "alloc_esh": 0,
            "alloc_rnr": 18600,
            "alloc_ssp": 11400,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-10",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Bypassing Side Sewer And Culvert Flow Related to Lining Work (Contingency Bid Item)*",
            "unit": "EA",
            "qty": 97,
            "unit_price": 200,
            "alloc_esh": 0,
            "alloc_rnr": 5000,
            "alloc_ssp": 14400,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-11",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "12-Inch Diameter VCP Sewer On Crushed Rock Bedding Wrapped In Geotextile Fabric",
            "unit": "LF",
            "qty": 2640,
            "unit_price": 375,
            "alloc_esh": 0,
            "alloc_rnr": 969750,
            "alloc_ssp": 20250,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-12",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Mortar Existing 3'X5' Brick Sewer With Single Component Microsilica Enhanced, Fiber Reinforced Wet Spray Mortar, Minimum 1-Inch Thick",
            "unit": "LF",
            "qty": 18,
            "unit_price": 1400,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": 25200,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-13",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "27-Inch Diameter VCP Sewer On Crushed Rock Bedding Wrapped In Geotextile Fabric",
            "unit": "LF",
            "qty": 338,
            "unit_price": 675,
            "alloc_esh": 0,
            "alloc_rnr": 228150,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-14",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Line Existing 3'x5' Egg-Shaped Brick Sewer with  Cured-In-Place Liner (CIPL)",
            "unit": "LF",
            "qty": 1975,
            "unit_price": 472,
            "alloc_esh": 0,
            "alloc_rnr": 143016,
            "alloc_ssp": 789184,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)

            }
        },

        // #######################

        {
            "bid_item": "SW-15",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Line Existing 18-Inch Diameter Iron Stone Pipe (ISP) Sewer with Cured-In-Place Liner (CIPL) (Contingency Bid Item)*",
            "unit": "LF",
            "qty": 37,
            "unit_price": 530,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": 19610,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-16",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Clean and Televise Existing Sewers Prior To Performing Rehabilitation Sewer Work",
            "unit": "LS",
            "qty": 1,
            "unit_price": 25000,
            "alloc_esh": 0,
            "alloc_rnr": 20250,
            "alloc_ssp": 4750,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-17",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Remove Protruding Side Sewers or Obstructions Requiring Internal Reaming From Existing Sewer Prior to Lining Work",
            "unit": "EA",
            "qty": 39,
            "unit_price": 200,
            "alloc_esh": 0,
            "alloc_rnr": 800,
            "alloc_ssp": 7000,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-18",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Internally Re-Instate Side Sewers, Culverts, And Other Connections in Lined Main Sewer (Contingency Bid Item)*",
            "unit": "EA",
            "qty": 78,
            "unit_price": 300,
            "alloc_esh": 0,
            "alloc_rnr": 2400,
            "alloc_ssp": 21000,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-19",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "6-Inch or 8-Inch Diameter Side Sewer Connection to VCP Main Sewer (Contingency Bid Item)*",
            "unit": "EA",
            "qty": 87,
            "unit_price": 150,
            "alloc_esh": 0,
            "alloc_rnr": 13050,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-20",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Television Inspection Of Existing 6-Inch Or 8-Inch Diameter Side Sewers And 10-Inch Diameter Culverts Located Within Limits of Main Sewer Construction and Rehabilitation (Contingency Bid Item)*",
            "unit": "EA",
            "qty": 206,
            "unit_price": 50,
            "alloc_esh": 0,
            "alloc_rnr": 6000,
            "alloc_ssp": 4300,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-21",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Construction or Replacement of 6-Inch or 8-Inch Diameter Side Sewer Located within Limits of Main Sewer Construction and Rehabilitation (Contingency Bid Item)*",
            "unit": "LF",
            "qty": 1050,
            "unit_price": 125,
            "alloc_esh": 0,
            "alloc_rnr": 93750,
            "alloc_ssp": 37500,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-22",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Construction or Replacement of 10-Inch Diameter VCP Culvert Within Sewer Work Limits (Contingency Bid Item)*",
            "unit": "LF",
            "qty": 1550,
            "unit_price": 50,
            "alloc_esh": 19650,
            "alloc_rnr": 42450,
            "alloc_ssp": 15400,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-23",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Standard Concrete Catch Basin Without Curb Inlet, With Cast iron Trap, And New Frame And Grating (Per SFDPW Standard Plan 87,188 & 87,193)",
            "unit": "EA",
            "qty": 13,
            "unit_price": 5000,
            "alloc_esh": 65000,
            "alloc_rnr": 0,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-24",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Cast Iron Water Trap For Existing Catch Basin Including Cleanout Cap (Per SFDPW Standard Plan 87,194) (Contingency Bid Item)*",
            "unit": "EA",
            "qty": 55,
            "unit_price": 150,
            "alloc_esh": 0,
            "alloc_rnr": 4950,
            "alloc_ssp": 3300,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-25",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Post-Construction Television Inspection Of Newly Constructed Main Sewers",
            "unit": "LS",
            "qty": 1,
            "unit_price": 7500,
            "alloc_esh": 0,
            "alloc_rnr": 7500,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-26",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Post-Construction Television Inspection Of Newly Rehabilitated Main Sewers And Including Spry Mortar Segment",
            "unit": "LS",
            "qty": 1,
            "unit_price": 5000,
            "alloc_esh": 0,
            "alloc_rnr": 1100,
            "alloc_ssp": 3900,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-27",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Post-Construction Television Inspection Of Newly Constructed Side Sewers and Culverts (Contingency  Bid Item)*",
            "unit": "EA",
            "qty": 48,
            "unit_price": 50,
            "alloc_esh": 650,
            "alloc_rnr": 1300,
            "alloc_ssp": 450,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-28",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Reconstruct Pavement Outside of Sewer T-Trench Limit and Outside of Base Repair Work Under R-Drawings with 8-Inch Thick Concrete Base Necessary Per Excavation Code As Directed by the City Representative (Contingency Bid Item)*",
            "unit": "SF",
            "qty": 6048,
            "unit_price": 12,
            "alloc_esh": 0,
            "alloc_rnr": 70776,
            "alloc_ssp": 1800,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-29",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Reconstruct Pavement Outside of Sewer T-Trench Limit With 2-Inch Thick Asphalt Concrete Wearing Surface Per Excavation Regulations Code As Directed by the City Representative (Contingency Bid Item)*",
            "unit": "SF",
            "qty": 18420,
            "unit_price": 3,
            "alloc_esh": 0,
            "alloc_rnr": 54810,
            "alloc_ssp": 450,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-30",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Full Depth Grinding Of 2-Inch Thick Asphalt Concrete Wearing Surface as Necessary Per Excavation Regulations Code As Directed by the City Representative(Contingency Bid Item)*",
            "unit": "SF",
            "qty": 18488,
            "unit_price": 1,
            "alloc_esh": 0,
            "alloc_rnr": 18338,
            "alloc_ssp": 150,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-31",
            'linked_bi': true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Exploratory Holes or Potholes (Contingency Bid Item)*",
            "unit": "CY",
            "qty": 7,
            "unit_price": 1000,
            "alloc_esh": 0,
            "alloc_rnr": 7000,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-32",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Design of Structural Support for SFWD Facilities Located within Sewer Trench",
            "unit": "LS",
            "qty": 1,
            "unit_price": 2500,
            "alloc_esh": 0,
            "alloc_rnr": 2500,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-33",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Mobilization for Sewer and Drainage Work (Maximum 3% of the Sum of Bid Items SW-1 through SW-32)",
            "unit": "LS",
            "qty": 1,
            "unit_price": 114000,
            "alloc_esh": 0,
            "alloc_rnr": 114000,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [0, 28500, 0, 0], // PP01
                [0, 28500, 0, 0], // PP02
                [0, 57000, 0, 0], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [0, 12876.60, 0, 0], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-34",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Demobilization for Sewer and Drainage Work (Maximum 2% of the Sum of Bid Items SW-1 through SW-32)",
            "unit": "LS",
            "qty": 1,
            "unit_price": 61000,
            "alloc_esh": 0,
            "alloc_rnr": 61000,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-35",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Allowance For De-energizing And Re-energizing MUNI Overhead Wires, Relocation of MUNI Overhead Wires, And Providing Services Of MUNI Inspectors For Sewer And Drainage Work",
            "unit": "AL",
            "qty": 1,
            "unit_price": 30000,
            "alloc_esh": 0,
            "alloc_rnr": 7500,
            "alloc_ssp": 22500,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [0, 0, 18920, 0], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-36",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Allowance to Perform Necessary Work due to Unforeseen Conditions Related to Sewer Work",
            "unit": "AL",
            "qty": 1,
            "unit_price": 125000,
            "alloc_esh": 0,
            "alloc_rnr": 110000,
            "alloc_ssp": 15000,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "SW-37",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Allowance For Unforseen Environmental Work",
            "unit": "AL",
            "qty": 1,
            "unit_price": 117000,
            "alloc_esh": 0,
            "alloc_rnr": 87000,
            "alloc_ssp": 30000,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [0, 6181, 0, 0], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "CS-1",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Transportation of surplus California Class I (non-RCRA) Hazardous Waste (soils) to a Class I Disposal Facility",
            "unit": "US SHORT TON",
            "qty": 600,
            "unit_price": 5,
            "alloc_esh": 0,
            "alloc_rnr": 3000,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "CS-2",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Disposal of surplus California Class I (non-RCRA) Hazardous Waste (soils) at a Class I Disposal Facility",
            "unit": "US SHORT TON",
            "qty": 600,
            "unit_price": 5,
            "alloc_esh": 0,
            "alloc_rnr": 3000,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "CS-3",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Transportation of surplus non-hazardous soils (Class II & III) California Designated Waste (soils) to a Class II & III Disposal Facility",
            "unit": "US SHORT TON",
            "qty": 600,
            "unit_price": 5,
            "alloc_esh": 0,
            "alloc_rnr": 3000,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "CS-4",
            'linked_bi': false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Disposal of surplus non-hazardous soils (Class II & III) California Designated Waste (soils) at a Class II & III Disposal Facility",
            "unit": "US SHORT TON",
            "qty": 600,
            "unit_price": 5,
            "alloc_esh": 0,
            "alloc_rnr": 3000,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-01",
            "linked_bi": true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Removal of Blockage from (E) 12in Sewer Main at South Van Ness Ave and Howard St",
            "unit": "LS",
            "qty": 1,
            "unit_price": 24733.74,
            "alloc_esh": 0,
            "alloc_rnr": 24733.74,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-02_SW-05",
            "linked_bi": true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Deletion: Modified Box MH per 87,184",
            "unit": "EA",
            "qty": -1,
            "unit_price": 40000,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": -40000,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-02_SW-07",
            "linked_bi": true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Deletion: Clean and Mortar Existing Manhole Riser",
            "unit": "EA",
            "qty": -5,
            "unit_price": 3700,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": -18500,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-02_SW-14",
            "linked_bi": true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Deletion: Line (E) 3' x 5' Sewer Main",
            "unit": "LF",
            "qty": -527,
            "unit_price": 472,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": -248744,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-02_SW-18",
            "linked_bi": true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Deletion: Reinstate Side Sew, Culverts in Lined Main",
            "unit": "EA",
            "qty": -29,
            "unit_price": 300,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": -8700,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-02_SW-26",
            "linked_bi": true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Deletion: Postcon TVI of Rehabilitated Sewer Mains",
            "unit": "LS",
            "qty": 1,
            "unit_price": 1000,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": -1000,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-02_SW-01",
            "linked_bi": false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Addition: Traffic Routing for Sewer Work",
            "unit": "LS",
            "qty": 1,
            "unit_price": 60000,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": 60000,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [0, 0, 60000, 0], // PP13
                [], // PP14
                [], // PP15
            ],
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-02_SW-02",
            "linked_bi": false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Addition: Trench, Excavation Support For Sewer Work",
            "unit": "LS",
            "qty": 1,
            "unit_price": 75000,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": 75000,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [0, 0, 75000, 0], // PP13
                [], // PP14
                [], // PP15
            ], get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-02_SW-03",
            "linked_bi": true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Addition: (N) Concrete Sewer MH per 87,181",
            "unit": "EA",
            "qty": 3,
            "unit_price": 9500,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": 28500,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-02_SW-19",
            "linked_bi": true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Addition: 6-Inch or 8-Inch Side Sewer Connection",
            "unit": "EA",
            "qty": 29,
            "unit_price": 150,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": 4350,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-02_SW-25",
            "linked_bi": true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Addition: Postcon Sewer Main TVI",
            "unit": "LS",
            "qty": 1,
            "unit_price": 3000,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": 3000,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-02_SW-27",
            "linked_bi": true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Addition: Postcon Side Sewer / Culvert TVI ...",
            "unit": "EA",
            "qty": 5,
            "unit_price": 50,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": 250,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-02_SW-33",
            "linked_bi": false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Addition: Mobilization for Sewer and Drainage Work",
            "unit": "LS",
            "qty": 1,
            "unit_price": 15500,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": 15500,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [0, 0, 15500, 0], // PP13
                [], // PP14
                [], // PP15
            ], get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-02_SW-34",
            "linked_bi": false,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Addition: Demobilization for Sewer and Drainage Work",
            "unit": "LS",
            "qty": 1,
            "unit_price": 10500,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": 10500,
            "alloc_fol": 0,
            'pp_history': [
                [], // PP00
                [], // PP01
                [], // PP02
                [], // PP03
                [], // PP04
                [], // PP05
                [], // PP06
                [], // PP07
                [], // PP08
                [], // PP09
                [], // PP10
                [], // PP11
                [], // PP12
                [0, 0, 10500, 0], // PP13
                [], // PP14
                [], // PP15
            ], get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-02_SW-36",
            "linked_bi": true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Addition: Allowance to Perform Necessary Work",
            "unit": "AL",
            "qty": 1,
            "unit_price": 30000,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": 30000,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-02_SW-38",
            "linked_bi": true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Addition: 18-Inch Diameter VCP Sewer Main",
            "unit": "LF",
            "qty": 515,
            "unit_price": 790,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": 406850,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-02_SW-39",
            "linked_bi": true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Addition: Abandon (E) Manhole",
            "unit": "EA",
            "qty": 1,
            "unit_price": 3000,
            "alloc_esh": 0,
            "alloc_rnr": 0,
            "alloc_ssp": 3000,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        },

        // #######################

        {
            "bid_item": "PCO-03",
            "linked_bi": true,
            get linked_bid_item() {
                if (this.linked_bi) { return linked_bid_item_string_geneator_from_sov(this.bid_item) }
                else { return this.bid_item }
            },
            "description": "Spot Repair of (E) 12in Sewer Main at South Van Ness Ave and Howard St",
            "unit": "LS",
            "qty": 1,
            "unit_price": 119255,
            "alloc_esh": 0,
            "alloc_rnr": 119255,
            "alloc_ssp": 0,
            "alloc_fol": 0,
            'pp_history': structuredClone(empty_pp_history_array),
            get payment_details() {
                return get_payment_details(this)
            }
        }


    ]


