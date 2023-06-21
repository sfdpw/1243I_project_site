var base_sov = 

	[
// #######################

	  {
	    "bid_item": "R-1",
	    "description": "Traffic Control for Roadway Work",
	    "unit": "LS",
	    "qty": 1,
	    "unit_price": 300000,
	    "fund_sfpw_esh": 300000,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-2",
	    "description": "Temporary Retroflective Pavement Markings",
	    "unit": "LF",
	    "qty": 12000,
	    "unit_price": 1,
	    "fund_sfpw_esh": 12000,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-3",
	    "description": "Full Depth Planing per 2-Inch Depth of Cut",
	    "unit": "SF",
	    "qty": 626340,
	    "unit_price": 0.5,
	    "fund_sfpw_esh": 313170,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-4",
	    "description": "Hot Mix Asphalt (Type A ½-Inch Maximum with Medium Grading)",
	    "unit": "TON",
	    "qty": 8897,
	    "unit_price": 165,
	    "fund_sfpw_esh": 1468005,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-5",
	    "description": "8-Inch Thick Concrete Base",
	    "unit": "SF",
	    "qty": 73931,
	    "unit_price": 12,
	    "fund_sfpw_esh": 887172,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-6",
	    "description": "10-Inch Thick Concrete Base",
	    "unit": "SF",
	    "qty": 108444,
	    "unit_price": 13,
	    "fund_sfpw_esh": 1409772,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-7",
	    "description": "8-Inch Thick Concrete Pavement, Gutter, or Parking Strip",
	    "unit": "SF",
	    "qty": 3432,
	    "unit_price": 14,
	    "fund_sfpw_esh": 48048,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-8",
	    "description": "3 ½-Inch Thick Concrete Sidewalk",
	    "unit": "SF",
	    "qty": 15050,
	    "unit_price": 10,
	    "fund_sfpw_esh": 150500,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-9",
	    "description": "Reset Existing Granite Curb",
	    "unit": "LF",
	    "qty": 121,
	    "unit_price": 30,
	    "fund_sfpw_esh": 3630,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-10",
	    "description": "4-Inch or 6-Inch Wide Concrete Curb",
	    "unit": "LF",
	    "qty": 143,
	    "unit_price": 35,
	    "fund_sfpw_esh": 5005,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-11",
	    "description": "Combined 6-Inch Wide Concrete Curb And 2-Foot Wide Concrete Gutter",
	    "unit": "LF",
	    "qty": 1449,
	    "unit_price": 55,
	    "fund_sfpw_esh": 79695,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-12",
	    "description": "Concrete Curb Ramp With Concrete Detectable Surface Tiles",
	    "unit": "EA",
	    "qty": 55,
	    "unit_price": 3100,
	    "fund_sfpw_esh": 170500,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-13",
	    "description": "Pull Box Type I (Contingency Bid Item)**",
	    "unit": "EA",
	    "qty": 20,
	    "unit_price": 25,
	    "fund_sfpw_esh": 500,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-14",
	    "description": "Pull Box Type III (Contingency Bid Item)**",
	    "unit": "EA",
	    "qty": 20,
	    "unit_price": 25,
	    "fund_sfpw_esh": 500,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-15",
	    "description": "Adjust City-Owned Manhole Frame and Cover and Catch Basin Frame and Grate to Grade (Contingency Bid Item)**",
	    "unit": "EA",
	    "qty": 50,
	    "unit_price": 25,
	    "fund_sfpw_esh": 1250,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-16",
	    "description": "Adjust City-Owned Hydrant and Water Main Valve Box Casting Cover to Grade (Contingency Bid Item)**",
	    "unit": "EA",
	    "qty": 50,
	    "unit_price": 25,
	    "fund_sfpw_esh": 1250,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-17",
	    "description": "Reconstruct City-Owned Hydrant and Water Main Valve Box Casting Cover to Grade (Contingency Bid Item)**",
	    "unit": "EA",
	    "qty": 50,
	    "unit_price": 25,
	    "fund_sfpw_esh": 1250,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-18",
	    "description": "Temporary Tree Protection (Contingency Bid Item)**",
	    "unit": "EA",
	    "qty": 100,
	    "unit_price": 50,
	    "fund_sfpw_esh": 5000,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-19",
	    "description": "Mobilization For Paving Work (Maximum 3% of the Sum of Bid Items R-1 Through R-18)",
	    "unit": "LS",
	    "qty": 1,
	    "unit_price": 145000,
	    "fund_sfpw_esh": 145000,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-20",
	    "description": "Demobilization for Paving Work (Maximum 2% of the Sum of Bid Items R-1 Through R-18)",
	    "unit": "LS",
	    "qty": 1,
	    "unit_price": 77000,
	    "fund_sfpw_esh": 77000,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-21",
	    "description": "Allowance for As-Needed Transit Support Provided by Contractor",
	    "unit": "AL",
	    "qty": 1,
	    "unit_price": 50000,
	    "fund_sfpw_esh": 50000,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-22",
	    "description": "Allowance for As-Needed Overhead Contact System (OCS) Support Provided by Contractor",
	    "unit": "AL",
	    "qty": 1,
	    "unit_price": 100000,
	    "fund_sfpw_esh": 100000,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "R-23",
	    "description": "Allowance for Partnering Facilitation and Related Costs",
	    "unit": "AL",
	    "qty": 1,
	    "unit_price": 15000,
	    "fund_sfpw_esh": 15000,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-1",
	    "description": "Traffic Routing for Sewer Work",
	    "unit": "LS",
	    "qty": 1,
	    "unit_price": 275000,
	    "fund_sfpw_esh": 11000,
	    "fund_sfpuc_rr": 171875,
	    "fund_sfpuc_ssip": 92125,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-2",
	    "description": "Trench And Excavation Support For Sewer Work",
	    "unit": "LS",
	    "qty": 1,
	    "unit_price": 275000,
	    "fund_sfpw_esh": 11000,
	    "fund_sfpuc_rr": 225500,
	    "fund_sfpuc_ssip": 38500,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-3",
	    "description": "Concrete Manhole For 12-Inch To 24-Inch Diameter Sewers With Frame And Cover\n(Per SFDPW Standard Plan 87,181)",
	    "unit": "EA",
	    "qty": 21,
	    "unit_price": 8500,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 170000,
	    "fund_sfpuc_ssip": 8500,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-4",
	    "description": "Concrete Manhole For 27-Inch To 48-Inch Diameter Sewers With Frame And Cover\n(Per SFDPW Standard Plan 87,182)",
	    "unit": "EA",
	    "qty": 2,
	    "unit_price": 40000,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 80000,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-5",
	    "description": "Modified Box Manhole For Connection To 3'X5' Brick Sewer With Frame And Cover\n(Per SFDPW Standard Plan 87,184 And Can Be Used As An Insertion Pit For The Liner)",
	    "unit": "EA",
	    "qty": 3,
	    "unit_price": 40000,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 120000,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-6",
	    "description": "Precast Manhole On Existing Brick Sewer With Frame And Cover\n(Per SFDPW Standard Plan 87,185)",
	    "unit": "EA",
	    "qty": 1,
	    "unit_price": 10000,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 10000,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-7",
	    "description": "Clean and Mortar Existing Manhole Riser",
	    "unit": "EA",
	    "qty": 14,
	    "unit_price": 3700,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 51800,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-8",
	    "description": "Removal of Rat Walk Inside 3'x5' Egg-Shaped Brick Sewers And Obstructions Prior to Lining",
	    "unit": "LF",
	    "qty": 835,
	    "unit_price": 50,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 41750,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-9",
	    "description": "Bypassing Main Sewer Flow Related to Lining And Mortar Work",
	    "unit": "LS",
	    "qty": 1,
	    "unit_price": 30000,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 18600,
	    "fund_sfpuc_ssip": 11400,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-10",
	    "description": "Bypassing Side Sewer And Culvert Flow Related to Lining Work (Contingency Bid Item)*",
	    "unit": "EA",
	    "qty": 97,
	    "unit_price": 200,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 5000,
	    "fund_sfpuc_ssip": 14400,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-11",
	    "description": "12-Inch Diameter VCP Sewer On Crushed Rock Bedding Wrapped In Geotextile Fabric",
	    "unit": "LF",
	    "qty": 2640,
	    "unit_price": 375,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 969750,
	    "fund_sfpuc_ssip": 20250,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-12",
	    "description": "Mortar Existing 3'X5' Brick Sewer With Single Component Microsilica Enhanced, Fiber Reinforced Wet Spray Mortar, Minimum 1-Inch Thick",
	    "unit": "LF",
	    "qty": 18,
	    "unit_price": 1400,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 25200,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-13",
	    "description": "27-Inch Diameter VCP Sewer On Crushed Rock Bedding Wrapped In Geotextile Fabric",
	    "unit": "LF",
	    "qty": 338,
	    "unit_price": 675,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 228150,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-14",
	    "description": "Line Existing 3'x5' Egg-Shaped Brick Sewer with  Cured-In-Place Liner (CIPL)",
	    "unit": "LF",
	    "qty": 1975,
	    "unit_price": 472,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 143016,
	    "fund_sfpuc_ssip": 789184,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-15",
	    "description": "Line Exisiting 18-Inch Diameter Iron Stone Pipe (ISP) Sewer with Cured-In-Place Liner (CIPL) (Contingency Bid Item)*",
	    "unit": "LF",
	    "qty": 37,
	    "unit_price": 530,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 19610,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-16",
	    "description": "Clean and Televise Existing Sewers Prior To Performing Rehabilitation Sewer Work",
	    "unit": "LS",
	    "qty": 1,
	    "unit_price": 25000,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 20250,
	    "fund_sfpuc_ssip": 4750,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-17",
	    "description": "Remove Protruding Side Sewers or Obstructions Requiring Internal Reaming From Existing Sewer Prior to Lining Work",
	    "unit": "EA",
	    "qty": 39,
	    "unit_price": 200,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 800,
	    "fund_sfpuc_ssip": 7000,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-18",
	    "description": "Internally Re-Instate Side Sewers, Culverts, And Other Connections in Lined Main Sewer (Contingency Bid Item)*",
	    "unit": "EA",
	    "qty": 78,
	    "unit_price": 300,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 2400,
	    "fund_sfpuc_ssip": 21000,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-19",
	    "description": "6-Inch or 8-Inch Diameter Side Sewer Connection to VCP Main Sewer (Contingency Bid Item)*",
	    "unit": "EA",
	    "qty": 87,
	    "unit_price": 150,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 13050,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-20",
	    "description": "Television Inspection Of Existing 6-Inch Or 8-Inch Diameter Side Sewers And 10-Inch Diameter Culverts Located Within Limits of Main Sewer Construction and Rehabilitation (Contingency Bid Item)*",
	    "unit": "EA",
	    "qty": 206,
	    "unit_price": 50,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 6000,
	    "fund_sfpuc_ssip": 4300,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-21",
	    "description": "Construction or Replacement of 6-Inch or 8-Inch Diameter Side Sewer Located within Limits of Main Sewer Construction and Rehabilitation (Contingency Bid Item)*",
	    "unit": "LF",
	    "qty": 1050,
	    "unit_price": 125,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 93750,
	    "fund_sfpuc_ssip": 37500,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-22",
	    "description": "Construction or Replacement of 10-Inch Diameter VCP Culvert Within Sewer Work Limits (Contingency Bid Item)*",
	    "unit": "LF",
	    "qty": 1550,
	    "unit_price": 50,
	    "fund_sfpw_esh": 19650,
	    "fund_sfpuc_rr": 42450,
	    "fund_sfpuc_ssip": 15400,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-23",
	    "description": "Standard Concrete Catch Basin Without Curb Inlet, With Cast iron Trap, And New Frame And Grating (Per SFDPW Standard Plan 87,188 & 87,193)",
	    "unit": "EA",
	    "qty": 13,
	    "unit_price": 5000,
	    "fund_sfpw_esh": 65000,
	    "fund_sfpuc_rr": 0,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-24",
	    "description": "Cast Iron Water Trap For Existing Catch Basin Including Cleanout Cap (Per SFDPW Standard Plan 87,194) (Contingency Bid Item)*",
	    "unit": "EA",
	    "qty": 55,
	    "unit_price": 150,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 4950,
	    "fund_sfpuc_ssip": 3300,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-25",
	    "description": "Post-Construction Television Inspection Of Newly Constructed Main Sewers",
	    "unit": "LS",
	    "qty": 1,
	    "unit_price": 7500,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 7500,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-26",
	    "description": "Post-Construction Television Inspection Of Newly Rehabilitated Main Sewers And Including Spry Mortar Segment",
	    "unit": "LS",
	    "qty": 1,
	    "unit_price": 5000,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 1100,
	    "fund_sfpuc_ssip": 3900,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-27",
	    "description": "Post-Construction Television Inspection Of Newly Constructed Side Sewers and Culverts (Contingency  Bid Item)*",
	    "unit": "EA",
	    "qty": 48,
	    "unit_price": 50,
	    "fund_sfpw_esh": 650,
	    "fund_sfpuc_rr": 1300,
	    "fund_sfpuc_ssip": 450,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-28",
	    "description": "Reconstruct Pavement Outside of Sewer T-Trench Limit and Outside of Base Repair Work Under R-Drawings with 8-Inch Thick Concrete Base Necessary Per Excavation Code As Directed by the City Representative (Contingency Bid Item)*",
	    "unit": "SF",
	    "qty": 6048,
	    "unit_price": 12,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 70776,
	    "fund_sfpuc_ssip": 1800,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-29",
	    "description": "Reconstruct Pavement Outside of Sewer T-Trench Limit With 2-Inch Thick Asphalt Concrete Wearing Surface Per Excavation Regulations Code As Directed by the City Representative (Contingency Bid Item)*",
	    "unit": "SF",
	    "qty": 18420,
	    "unit_price": 3,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 54810,
	    "fund_sfpuc_ssip": 450,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-30",
	    "description": "Full Depth Grinding Of 2-Inch Thick Asphalt Concrete Wearing Surface as Necessary Per Excavation Regulations Code As Directed by the City Representative(Contingency Bid Item)*",
	    "unit": "SF",
	    "qty": 18488,
	    "unit_price": 1,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 18338,
	    "fund_sfpuc_ssip": 150,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-31",
	    "description": "Exploratory Holes or Potholes (Contingency Bid Item)*",
	    "unit": "CY",
	    "qty": 7,
	    "unit_price": 1000,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 7000,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-32",
	    "description": "Design of Structural Support for SFWD Facilities Located within Sewer Trench",
	    "unit": "LS",
	    "qty": 1,
	    "unit_price": 2500,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 2500,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-33",
	    "description": "Mobilization for Sewer and Drainage Work (Maximum 3% of the Sum of Bid Items SW-1 through SW-32)",
	    "unit": "LS",
	    "qty": 1,
	    "unit_price": 114000,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 114000,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-34",
	    "description": "Demobilization for Sewer and Drainage Work (Maximum 2% of the Sum of Bid Items SW-1 through SW-32)",
	    "unit": "LS",
	    "qty": 1,
	    "unit_price": 61000,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 61000,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-35",
	    "description": "Allowance For De-energizing And Re-energizing MUNI Overhead Wires, Relocation of MUNI Overhead Wires, And Providing Services Of MUNI Inspectors For Sewer And Drainage Work",
	    "unit": "AL",
	    "qty": 1,
	    "unit_price": 30000,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 7500,
	    "fund_sfpuc_ssip": 22500,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-36",
	    "description": "Allowance to Perform Necessary Work due to Unforeseen Conditions Related to Sewer Work",
	    "unit": "AL",
	    "qty": 1,
	    "unit_price": 125000,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 110000,
	    "fund_sfpuc_ssip": 15000,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "SW-37",
	    "description": "Allowance For Unforseen Environmental Work",
	    "unit": "AL",
	    "qty": 1,
	    "unit_price": 117000,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 87000,
	    "fund_sfpuc_ssip": 30000,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "CS-1",
	    "description": "Transportation of surplus California Class I (non-RCRA) Hazardous Waste (soils) to a Class I Disposal Facility",
	    "unit": "US SHORT TON",
	    "qty": 600,
	    "unit_price": 5,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 3000,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "CS-2",
	    "description": "Disposal of surplus California Class I (non-RCRA) Hazardous Waste (soils) at a Class I Disposal Facility",
	    "unit": "US SHORT TON",
	    "qty": 600,
	    "unit_price": 5,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 3000,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "CS-3",
	    "description": "Transportation of surplus non-hazardous soils (Class II & III) California Designated Waste (soils) to a Class II & III Disposal Facility",
	    "unit": "US SHORT TON",
	    "qty": 600,
	    "unit_price": 5,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 3000,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
          },

// #######################

	  {
	    "bid_item": "CS-4",
	    "description": "Disposal of surplus non-hazardous soils (Class II & III) California Designated Waste (soils) at a Class II & III Disposal Facility",
	    "unit": "US SHORT TON",
	    "qty": 600,
	    "unit_price": 5,
	    "fund_sfpw_esh": 0,
	    "fund_sfpuc_rr": 3000,
	    "fund_sfpuc_ssip": 0,
	    get contract_amount() { return this.qty*this.unit_price } 
	  }
	]
