var json_1243I_sewer_lines = {
    "type": "FeatureCollection",
    "name": "1243I_sewer_lines",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-106530",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 14th St",
                "scope": "Line (E) 18in ISP main",
                "pp_history": {
                    'SW-09': {
                        'PP09': [0, 930, 570]
                    },
                    'SW-15': {
                        'PP09': [0, 0, 14310]
                    },
                    'SW-16': {
                        'PP08': [0, 1350, 316.66]
                    },
                    'SW-26': {
                        'PP10': [0, 0, 250]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "74.0",
                        "video_no": "12",
                        "response": "MCN - Proceed with Lining",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "100.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }

            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41782755871418, 37.768348995430159],
                        [-122.41783127512528, 37.768427336686528]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-101999",
                "id_b": "none",
                "location": "South Van Ness Ave between Adair St and 15th St",
                "scope": "Line (E) 3ft x 5ft brick main",
                "pp_history": {
                    'SW-09': {
                        'PP09': [0, 1395, 855]
                    },
                    'SW-14': {
                        'PP09': [0, 0, 69384]
                    },
                    'SW-16': {
                        'PP08': [0, 1350, 316.66]
                    },
                    'SW-26': {
                        'PP10': [0, 0, 240]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "74.0",
                        "video_no": "2",
                        "response": "MCN - Proceed with Lining",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "93.1",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417613566698762, 37.766030939971543],
                        [-122.41764655573148, 37.76644096125262]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-86104",
                "id_b": "none",
                "location": "South Van Ness Ave between 15th St and 16th St",
                "scope": "Line (E) 3ft x 5ft brick main",
                 "pp_history": {
                    'SW-09': {
                        'PP09': [0, 1395, 855]
                    },
                    'SW-14': {
                        'PP09': [0, 0, 68440]
                    },
                    'SW-16': {
                        'PP08': [0, 1350, 316.67]
                    },
                    'SW-26': {
                        'PP10': [0, 0, 240]
                    }  
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "74.0",
                        "video_no": "1",
                        "response": "MCN - Proceed with Lining",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "93.1",
                        "video_no": "1",
                        "response": "MCN",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41764655573148, 37.76644096125262],
                        [-122.417686013922918, 37.766830065380773]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-86769",
                "id_b": "none",
                "location": "South Van Ness Ave between Adair St and 15th St",
                "scope": "Line (E) 3ft x 5ft brick main",
                "pp_history": {
                    'SW-09': {
                        'PP09': [0, 1395, 855]
                    },
                    'SW-14': {
                        'PP09': [0, 0, 42952]
                    },
                    'SW-16': {
                        'PP08': [0, 850, 200]
                    },
                    'SW-26': {
                        'PP10': [0, 0, 240]
                    } 
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "74.0",
                        "video_no": "3",
                        "response": "MCN - Proceed with Lining",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "93.1",
                        "video_no": "3",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417590084127198, 37.76577899043474],
                        [-122.417613566698762, 37.766030939971543]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-86804",
                "id_b": "none",
                "location": "South Van Ness Ave between 15th St and 16th St",
                "scope": "Line (E) 3ft x 5ft brick main",
                "pp_history": {
                    'SW-09': {
                        'PP09': [0, 1395, 855]
                    },
                    'SW-14': {
                        'PP09': [0, 0, 63248]
                    },
                    'SW-16': {
                        'PP08': [0, 1350, 316.67]
                    },
                    'SW-26': {
                        'PP10': [0, 0, 240]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "74.0",
                        "video_no": "6",
                        "response": "MCN - Proceed with Lining",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "94.2",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417537391532392, 37.765248646983608],
                        [-122.417575650939241, 37.765622091271105]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-122752",
                "id_b": "none",
                "location": "South Van Ness Ave between 16th St and 17th St",
                "scope": "Line (E) 3ft x 5ft brick main",
                "pp_history": {
                    'SW-09': {
                        'PP09': [0, 1395, 855]
                    },
                    'SW-14': {
                        'PP09': [0, 0, 73632]
                    },
                    'SW-16': {
                        'PP08': [0, 1000, 250]
                    },
                    'SW-26': {
                        'PP10': [0, 0, 240]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "74.0",
                        "video_no": "8",
                        "response": "MCN - Proceed with Lining",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "98.1",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417487104467739, 37.764768346320785],
                        [-122.417532826048756, 37.765201046178291]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-122753",
                "id_b": "none",
                "location": "South Van Ness Ave between 16th St and 17th St",
                "scope": "Line (E) 3ft x 5ft brick main",
                "pp_history": {
                    'SW-08': {
                        'PP08': [0, 0, 10550]
                    },
                    'SW-09': {
                        'PP09': [0, 1395, 855]
                    },
                    'SW-14': {
                        'PP09': [0, 0, 67496]
                    },
                    'SW-16': {
                        'PP08': [0, 1350, 316.67]
                    },
                    'SW-26': {
                        'PP10': [0, 0, 240]
                    } 
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "74.0",
                        "video_no": "10",
                        "response": "MCN - Proceed with Lining",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "95.1",
                        "video_no": "3",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417409440162714, 37.763980697192601],
                        [-122.417447470471444, 37.764372258925206]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-122754",
                "id_b": "none",
                "location": "South Van Ness Ave between 16th St and 17th St",
                "scope": "Line (E) 3ft x 5ft brick main",
                "pp_history": {
                    'SW-09': {
                        'PP09': [0, 1395, 855]
                    },
                    'SW-14': {
                        'PP09': [0, 0, 55224]
                    },
                    'SW-16': {
                        'PP08': [0, 1350, 316.67]
                    },
                    'SW-26': {
                        'PP10': [0, 0, 240]
                    } 
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "74.0",
                        "video_no": "11",
                        "response": "MCN - Proceed with Lining",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "95.1",
                        "video_no": "4",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417379199194443, 37.763670271663138],
                        [-122.417409440162714, 37.763980697192601]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-122755",
                "id_b": "none",
                "location": "South Van Ness Ave between 16th St and 17th St",
                "scope": "Line (E) 3ft x 5ft brick main",
                "pp_history": {
                    'SW-08': {
                        'PP08': [0, 0, 3350]
                    },
                    'SW-09': {
                        'PP09': [0, 1395, 855]
                    },
                    'SW-14': {
                        'PP09': [0, 0, 73160]
                    },
                    'SW-16': {
                        'PP08': [0, 1350, 316.67]
                    },
                    'SW-26': {
                        'PP10': [0, 0, 240]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "74.0",
                        "video_no": "9",
                        "response": "MCN - Proceed with Lining",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "95.1",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417447470471444, 37.764372258925206],
                        [-122.417487104467739, 37.764768346320785]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-126385",
                "id_b": "none",
                "location": "12th St between Kissling St and Folsom St",
                "scope": "Line (E) 3ft x 5ft brick main",
                "pp_history": {
                    'SW-09': {
                        'PP09': [0, 1395, 855]
                    },
                    'SW-14': {
                        'PP10': [0, 71272, 0]
                    },
                    'SW-16': {
                        'PP09': [0, 2025, 475]
                    },
                    'SW-26': {
                        'PP10': [0, 500, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "78.0",
                        "video_no": "1",
                        "response": "MCN - Proceed with Lining",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "92.1",
                        "video_no": "1",
                        "response": "SUB",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415974889251061, 37.771318901555901],
                        [-122.415508627711063, 37.771117834878339]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417625",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and Adair St",
                "scope": "Line (E) 3ft x 5ft brick main",
                "pp_history": {
                    'SW-09': {
                        'PP09': [0, 930, 570]
                    },
                    'SW-14': {
                        'PP09': [0, 0, 10384]
                    },
                    'SW-16': {
                        'PP08': [0, 500, 116.66]
                    },
                    'SW-26': {
                        'PP10': [0, 0, 240]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "74.0",
                        "video_no": "4",
                        "response": "MCN - Proceed with Lining",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "93.1",
                        "video_no": "3",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417583325730462, 37.765705310049157],
                        [-122.417590084127198, 37.76577899043474]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-86105",
                "id_b": "none",
                "location": "South Van Ness Ave - South of Adair St",
                "scope": "Line (E) 3ft x 5ft brick main",
                "pp_history": {
                    'SW-09': {
                        'PP09': [0, 930, 570]
                    },
                    'SW-14': {
                        'PP09': [0, 0, 13216]
                    },
                    'SW-16': {
                        'PP08': [0, 1350, 316.67]
                    },
                    'SW-26': {
                        'PP10': [0, 0, 240]
                    } 
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "74.0",
                        "video_no": "5",
                        "response": "MCN - Proceed with Lining",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "94.2",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417575650939241, 37.765622091271105],
                        [-122.417583325730462, 37.765705310049157]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-76800",
                "id_b": "none",
                "location": "Intersection of 12th St and Folsom St",
                "scope": "Line (E) 3ft x 5ft brick main",
                "pp_history": {
                    'SW-09': {
                        'PP09': [0, 930, 570]
                    },
                    'SW-14': {
                        'PP10': [0, 15576, 0]
                    },
                    'SW-26': {
                        'PP10': [0, 100, 0]
                    }                    
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "92.1",
                        "video_no": "3",
                        "response": "SUB",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415130485741329, 37.770956307925935],
                        [-122.415021415061958, 37.770910529175552]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-126193",
                "id_b": "none",
                "location": "12th St between Kissling St and Folsom St",
                "scope": "Line (E) 3ft x 5ft brick main",
                "pp_history": {
                    'SW-09': {
                        'PP09': [0, 1395, 855]
                    },
                    'SW-14': {
                        'PP10': [0, 56168, 0]
                    },
                    'SW-16': {
                        'PP09': [0, 2025, 475]
                    },
                    'SW-26': {
                        'PP10': [0, 500, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "78.0",
                        "video_no": "2",
                        "response": "MCN - Proceed with Lining",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "92.1",
                        "video_no": "2",
                        "response": "SUB",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415508627711063, 37.771117834878339],
                        [-122.415130485741329, 37.770956307925935]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-416321",
                "id_b": "none",
                "location": "South Van Ness ave between 12th St and Howard St",
                "scope": "Install (N) 12in VCP main",
                "pp_history": {
                    'SW-11': {
                        'PP08': [0, 136875, 0] 
                    },                    
                    'SW-25': {
                        'PP10': [0, 100, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "84.0",
                        "video_no": "3",
                        "response": "MCN",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418537551093493, 37.77223159133456],
                        [-122.418224533987598, 37.771256163234519]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-416325",
                "id_b": "none",
                "location": "South Van Ness Ave between 12th St and Howard St",
                "scope": "Install (N) 12in VCP main",
                "pp_history": {
                    'SW-11': {
                        'PP04': [0, 88526.42,  1848.58],
                        'PP08': [0,  1848.58, -1848.58],                        
                    },
                    'SW-25': {
                        'PP04': [0, 314.25,  0],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "84.0",
                        "video_no": "2",
                        "response": "MCN",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417945169313654, 37.771312348007577],
                        [-122.417736821168859, 37.770659447992465]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-416326",
                "id_b": "none",
                "location": "South Van Ness Ave between 12th St and Howard St",
                "scope": "Install (N) 12in VCP main",
                "pp_history": {
                    'SW-11': {
                        'PP05': [0, 85587.78,  1787.22],
                        'PP08': [0,  1787.22, -1787.22]
                    },                
                    'SW-25': {
                        'PP10': [0, 100, 0]
                    },
                    'SW-31': {
                        'PP04': [0, 2000, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "84.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418139660574738, 37.77194446043702],
                        [-122.417945169313654, 37.771312348007577]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-416340",
                "id_b": "none",
                "location": "Bryant St between Beale St and Main St",
                "scope": "Install (N) 27in VCP main",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389216728175597, 37.786580832876588],
                        [-122.389657981167801, 37.78623554714251]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-416341",
                "id_b": "none",
                "location": "Bryant St between Beale St and Main St",
                "scope": "Install (N) 27in VCP main",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.388800178438743, 37.78690465626039],
                        [-122.389216728175597, 37.786580832876588]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417582",
                "id_b": "none",
                "location": "Visitacion Ave between Hahn St and Sawyer St",
                "scope": "Install (N) 12in VCP main",
                "pp_history": {
                    'SW-11': {
                        'PP04': [0, 62813.35,  1311.65],
                        'PP08': [0,  1311.65, -1311.65],                        
                    },
                    'SW-25': {
                        'PP04': [0, 435.75, 0],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "66.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415096547170734, 37.713450720433372],
                        [-122.414525252205266, 37.713294084759056]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417593",
                "id_b": "none",
                "location": "Leland Ave between Sawer St and Hoehr St",
                "scope": "Install (N) 12in VCP main",
                "pp_history": {
                    'SW-11': {
                        'PP03': [0,  79343.18,  1656.82],
                        'PP08': [0,   1656.82, -1656.82]                        
                    },
                    'SW-25': {
                        'PP03': [0, 500, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "61.0",
                        "video_no": "3",
                        "response": "MCN",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413777926665006, 37.714295059132063],
                        [-122.413060834794521, 37.714099898471737]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417594",
                "id_b": "none",
                "location": "Leland Ave between Schwerin St and Delta St",
                "scope": "Install (N) 12in VCP main",
                "pp_history": {
                    'SW-11': {
                        'PP02': [0, 81547.16,  1702.84],
                        'PP08': [0,  1702.84, -1702.84]
                    },
                    'SW-25': {
                        'PP03': [0, 500, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "61.0",
                        "video_no": "1",
                        "response": "MCN",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.410262455128404, 37.713339104803502],
                        [-122.409514375484719, 37.71313015786609]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417595",
                "id_b": "none",
                "location": "Leland Ave between Elliot St and Rey St",
                "scope": "Install (N) 12in VCP main",
                "pp_history": {
                    'SW-11': {
                        'PP03': [0, 47752.84,  997.16],
                        'PP08': [0,   997.16, -997.16],
                    },
                    'SW-25': {
                        'PP03': [0, 500, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "61.0",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411656583086, 37.713722462670304],
                        [-122.411209730548165, 37.713606713589307]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-416320",
                "id_b": "none",
                "location": "South Van Ness Ave between 12th St and Howard St",
                "scope": "Install (N) 12in VCP main",
                "pp_history": {
                    'SW-11': {
                        'PP07': [0,   54732.10,   1142.90],
                        'PP08': [0,    1142.90,  -1142.90]
                    },                    
                    'SW-25': {
                        'PP10': [0, 100, 0]
                    },
                    'SW-31': {
                        'PP07': [0, 3780, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "84.0",
                        "video_no": "5",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418116029638895, 37.770912941313398],
                        [-122.417982471549621, 37.770496124289345]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417624",
                "id_b": "none",
                "location": "South Van Ness ave between 12th St and Howard St",
                "scope": "Install (N) 12in VCP main",
                "pp_history": {
                    'SW-11': {
                        'PP08': [0 , 48000, 0]
                    },                    
                    'SW-25': {
                        'PP10': [0, 100, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "84.0",
                        "video_no": "4",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418224533987598, 37.771256163234519],
                        [-122.418116029638895, 37.770912941313398]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-416496",
                "id_b": "none",
                "location": "Brussels St between Wilde St and Campbell Ave",
                "scope": "Install (N) 12in VCP main",
                "pp_history": {
                    'SW-11': {
                        'PP01': [0, 112402.84,  2347.16],
                        'PP08': [0,   2347.16, -2347.16]                        
                    },
                    'SW-25': {
                        'PP02': [0,  500, 0]  
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "49.0",
                        "video_no": "3",
                        "response": "MCN",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400804315455886, 37.71551838836848],
                        [-122.401139682652087, 37.716319214464143]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-416497",
                "id_b": "none",
                "location": "Brussels St between Wilde St and Campbell Ave",
                "scope": "Install (N) 12in VCP main",
                "pp_history": {
                    'SW-11': {
                        'PP01': [0, 53262.78,  1112.22],
                        'PP08': [0,  1112.22, -1112.22]
                    },
                    'SW-25': {
                        'PP02': [0,  500, 0]  
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "49.0",
                        "video_no": "2",
                        "response": "MCN",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400804315455886, 37.71551838836848],
                        [-122.400645259872846, 37.715123313610583]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-412529",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and Erie St",
                "scope": "Install (N) 12in VCP main",
                "pp_history": {
                    'SW-11': {
                        'PP08': [0, 0, 15000]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "84.1",
                        "video_no": "1",
                        "response": "MCN",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417846406880528, 37.769202036510627],
                        [-122.417695965699778, 37.769226665913123]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-363634",
                "id_b": "none",
                "location": "Bryant St between Beale St and Main St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389481709460767, 37.78637348205109],
                        [-122.389402269221762, 37.78631148401621]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-124540",
                "id_b": "none",
                "location": "Intersection of 12th St and Folsom St - East Corner",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414840406563485, 37.77097587608899],
                        [-122.414931496637763, 37.771027414009808]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-157826",
                "id_b": "none",
                "location": "131 South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-19': {
                        'PP05': [0, 150, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417951107978212, 37.771421392310508],
                        [-122.417977377778641, 37.771417028513696]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160015",
                "id_b": "none",
                "location": "359 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3125]
                    },
                     'SW-27': {
                        'PP11': [0, 0, 50]
                    }                   
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "19",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "102.0",
                        "video_no": "6",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417628801730416, 37.767540325203768],
                        [-122.417751609342147, 37.767532528027211]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-364280",
                "id_b": "none",
                "location": "1601 MISSION St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP08': [0, 150, 0]
                    },
                    'SW-21': {
                        'PP08': [0, 250, 0]
                    },
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "104.0",
                        "video_no": "5",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418479154226347, 37.771885635628117],
                        [-122.418429790737733, 37.771895788522386]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160217",
                "id_b": "none",
                "location": "324 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                     'SW-27': {
                        'PP11': [0, 0, 50]
                    }                   
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "6",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "102.0",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41789437764389, 37.767932999550595],
                        [-122.41778959191457, 37.767939636204005]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160216",
                "id_b": "none",
                "location": "330 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "101.0",
                        "video_no": "2",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417891441220334, 37.76789044353221],
                        [-122.417785466711067, 37.767895157993763]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159956",
                "id_b": "none",
                "location": "315 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "4",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417682955148493, 37.768138428713002],
                        [-122.417807336621252, 37.768130960470998]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160020",
                "id_b": "none",
                "location": "387 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                     'SW-21': {
                        'PP10': [0, 0, 3125]
                    },
                    'SW-27': {
                        'PP11': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "28",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "102.0",
                        "video_no": "11",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417585624943001, 37.767109004291363],
                        [-122.417710649888946, 37.767100943752979]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160021",
                "id_b": "none",
                "location": "395 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                 "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                     'SW-21': {
                        'PP10': [0, 0, 3125]
                    },
                     'SW-27': {
                        'PP11': [0, 0, 50]
                    }                   
                    
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "29",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "102.0",
                        "video_no": "12",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417581954413563, 37.76701750780213],
                        [-122.41770206798509, 37.767010517062047]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-364135",
                "id_b": "none",
                "location": "201 Wilde Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-20': {
                        'PP01': [0,  29.12,  20.88],
                        'PP10': [0, -29.12, -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401170380879833, 37.716205016163407],
                        [-122.401099275220361, 37.71622272568306]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159482",
                "id_b": "none",
                "location": "510 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "11",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417583390824404, 37.76466723303794],
                        [-122.417477575021792, 37.764673112781239]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266706",
                "id_b": "none",
                "location": "342 Elliot St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411662090803262, 37.71385210471464],
                        [-122.411606394495763, 37.713836688326666]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-265824",
                "id_b": "none",
                "location": "374 Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411136642514165, 37.713586065985631],
                        [-122.411121866869181, 37.713616886855647]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266173",
                "id_b": "none",
                "location": "308 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP02': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP02': [0,  29.12,  20.88],
                        'PP09': [0,  20.88, -20.88],
                    },
                    'SW-21': {
                        'PP02': [0,  758.93,  303.57],
                        'PP08': [0,  303.57, -303.57]
                    },
                    'SW-27': {
                        'PP02': [  13.54,  27.08,  9.38 ],
                        'PP09': [ -13.54,  22.92, -9.38 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "52.0",
                        "video_no": "2",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "54.0",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.409760456138144, 37.71324404429614],
                        [-122.409776455539671, 37.713203359797809]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266112",
                "id_b": "none",
                "location": "300 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP02': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP02': [0,  29.12,  20.88],
                        'PP09': [0,  20.88, -20.88],
                    },
                    'SW-21': {
                        'PP02': [0,  758.94,  303.56],
                        'PP08': [0,  303.56, -303.56]
                    },
                    'SW-27': {
                        'PP02': [  13.54,  27.08,  9.38 ],
                        'PP09': [ -13.54,  22.92, -9.38 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "52.0",
                        "video_no": "1",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "54.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.40973717823853, 37.713233740814978],
                        [-122.409754742500326, 37.713197295102411]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-265768",
                "id_b": "none",
                "location": "326 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP02': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP02': [0,  29.12,  20.88],
                        'PP09': [0,  20.88, -20.88],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "53.0",
                        "video_no": "3",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.410127637293073, 37.713343133020672],
                        [-122.410142840406337, 37.713305695125186]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266884",
                "id_b": "none",
                "location": "473 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.13,   20.87],
                        'PP09': [0,  20.87,  -20.87]
                    },
                    'SW-21': {
                        'PP03': [0, 1607.14,  642.86],
                        'PP08': [0,  642.86, -642.86]                        
                    },
                    'SW-27': {
                        'PP03': [  13.55, 27.09,  9.36],
                        'PP09': [ -13.55, 22.91, -9.36],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "58.0",
                        "video_no": "4",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "60.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413295213827737, 37.714104652598031],
                        [-122.413270566111549, 37.714156978104278]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266060",
                "id_b": "none",
                "location": "341 Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.410481620710115, 37.71333433670943],
                        [-122.410454302267098, 37.713393302402963]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267622",
                "id_b": "none",
                "location": "1375 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.12,  20.88],
                        'PP09': [0, 20.88, -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "44.0",
                        "video_no": "8",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400697528138352, 37.715466407571171],
                        [-122.400775596658761, 37.71544705451889]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267329",
                "id_b": "none",
                "location": "1320 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.12,  20.88],
                        'PP09': [0, 20.88, -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "44.0",
                        "video_no": "4",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401059154511017, 37.715929485454431],
                        [-122.400984393971768, 37.715948400418924]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-363532",
                "id_b": "none",
                "location": "Bryant St between Beale St and Main St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389256485747296, 37.786549722168246],
                        [-122.389326451690806, 37.786604752193945]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-326774",
                "id_b": "none",
                "location": "1618 Howard St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-19': {
                        'PP10': [0, 150, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418031527392671, 37.77168153322669],
                        [-122.41805696259496, 37.771675685931804]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-157893",
                "id_b": "none",
                "location": "160 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP08': [0, 150, 0]
                    },
                    'SW-21': {
                        'PP08': [0, 250, 0]
                    },
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "104.0",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418203130050955, 37.771098366432916],
                        [-122.418176323547073, 37.771103663736767]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159955",
                "id_b": "none",
                "location": "301 South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417534509931244, 37.768363969965968],
                        [-122.417544955875101, 37.768442940944787]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160220",
                "id_b": "none",
                "location": "366 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                 "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "22",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417846171357269, 37.767395050989272],
                        [-122.417739238111778, 37.767402174294574]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160017",
                "id_b": "none",
                "location": "373 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3125]
                    },
                    'SW-27': {
                        'PP11': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "25",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "102.0",
                        "video_no": "9",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417607648119585, 37.767321592948754],
                        [-122.417730952733962, 37.767314872427285]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159592",
                "id_b": "none",
                "location": "475 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                    'SW-27': {
                        'PP10': [0, 0, 50]
                    },                    
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "17",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "91.0",
                        "video_no": "10",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417457665341516, 37.765702563257868],
                        [-122.417582459286422, 37.765695915086518]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159591",
                "id_b": "none",
                "location": "483 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "1",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417439910227955, 37.765504793988519],
                        [-122.417562956912775, 37.765498187006592]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-364287",
                "id_b": "none",
                "location": "483 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': [0, 0, 0]
                    }                       
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417547016481819, 37.765342594837961],
                        [-122.417422498761312, 37.765350037355134]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159481",
                "id_b": "none",
                "location": "588 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP09': [0, 0, 3562.50]
                    },
                      'SW-27': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "32",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "81.0",
                        "video_no": "6",
                        "response": "MCN",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this )
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417506528363219, 37.763867176686439],
                        [-122.417399039722781, 37.763873936139035]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266034",
                "id_b": "none",
                "location": "2 Loehr St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found' )
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413159129347775, 37.714066458422678],
                        [-122.41313454438793, 37.714119958983517]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-364267",
                "id_b": "none",
                "location": "474 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.12,  20.88],
                        'PP10': [0, -29.12, -20.88],                        
                    },
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found' )
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413307706476189, 37.714167086072102],
                        [-122.413292361757826, 37.714205053226706]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-265813",
                "id_b": "none",
                "location": "382 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.13,   20.87],
                        'PP09': [0,  20.87,  -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "55.0",
                        "video_no": "2",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41127629079277, 37.713662759020984],
                        [-122.411292558568931, 37.713628168706087]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266110",
                "id_b": "none",
                "location": "358 Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.410748485202348, 37.713518483566517],
                        [-122.410763961907961, 37.713480782431361]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-364273",
                "id_b": "none",
                "location": "1582 Folsom St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    "SW-10": {
		        "PP10": [0, 200, 0]
		    },
                    'SW-18': {
                        'PP10': [0, 300, 0]
                    },
                    'SW-20': {
                        'PP10': [0, 50, 0]
                    },
                    'SW-21': {
                        'PP10': [0, 3000, 0]
                    },
                    'SW-27': {
                        'PP10': [0, 50, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "79.2",
                        "video_no": "7",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "82.0",
                        "video_no": "4",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415244723224902, 37.771091848765565],
                        [-122.415288602085013, 37.771023848874563]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-157824",
                "id_b": "none",
                "location": "110 12th St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-19': {
                        'PP05': [0, 150, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418071613377776, 37.771811016559603],
                        [-122.418097114340199, 37.771806182173485]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 

	{
	    "type": "Feature",
	    "properties": {
		"id_a": "unknown_lateral_030",
		"id_b": "none",
		"location": "140 South Van Ness Ave",
		"scope": "Improve (E) side sewer as directed",
		"pp_history": {
		    "SW-19": {
		        "PP08": [0, 150, 0]
		    },
		    "SW-21": {
		        "PP08": [0, 250, 0]
		    }
		},
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 	
		"submittals": {
		    "tvi_pre_con": {
		        "submittal_no": "none",
		        "video_no": "none",
		        "response": "none",
		        get response_date() {
		            return response_date_from_submittal_no(this.submittal_no)
		        }
		    },
		    "tvi_post_con": {
		        "submittal_no": "104.0",
		        "video_no": "4",
		        "response": "NET",
		        get response_date() {
		            return response_date_from_submittal_no(this.submittal_no)
		        }
		    }
		},
		"rlvnt": "none",
		"sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
	    },
	    "geometry": {
		"type": "MultiLineString",
		"coordinates": [
		    [
		        [-122.418322093296936, 37.771560180241949],
		        [-122.418362634280214, 37.771551001864367]
		    ]
		]
	    },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
	},

        // #################################################### 
        
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-364276",
                "id_b": "none",
                "location": "160 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP08': [0, 150, 0]
                    },
                    'SW-21': {
                        'PP08': [0, 250, 0]
                    },
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "104.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418160569622358, 37.770970055429309],
                        [-122.418135802679743, 37.770975487690805]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-157838",
                "id_b": "none",
                "location": "170 South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-19': {
                        'PP07': [0, 150, 0 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418090362338432, 37.770832837266539],
                        [-122.418115658472345, 37.770828272489389]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160218",
                "id_b": "none",
                "location": "310 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "101.0",
                        "video_no": "1",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417899271683112, 37.767989869827815],
                        [-122.417794704278847, 37.767994758008228]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160214",
                "id_b": "none",
                "location": "340 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                    'SW-27': {
                        'PP11': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "Replace (per Email)",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "103.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417874434433955, 37.767703873789948],
                        [-122.417768233376279, 37.767709346777131]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-364292",
                "id_b": "none",
                "location": "341 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417774843748532, 37.767780620403293],
                        [-122.417649308628725, 37.76778782539629]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160012",
                "id_b": "none",
                "location": "341 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "11",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417647351013045, 37.767748364284444],
                        [-122.417771192972452, 37.767741257416922]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160014",
                "id_b": "none",
                "location": "353 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "17",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417634758284791, 37.767599002438139],
                        [-122.417757253781886, 37.767592002535231]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160221",
                "id_b": "none",
                "location": "370 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                    'SW-27': {
                        'PP11': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "23",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "102.0",
                        "video_no": "8",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417834425663074, 37.767281889790496],
                        [-122.417728367878411, 37.767287636144722]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160019",
                "id_b": "none",
                "location": "383 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3125]
                    },
                    'SW-27': {
                        'PP11': [0, 0, 50]
                    }                    
                    
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "27",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "102.0",
                        "video_no": "10",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417592476597946, 37.767181930587547],
                        [-122.417717726627544, 37.767175510580046]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159594",
                "id_b": "none",
                "location": "465 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                    'SW-27': {
                        'PP10': [0, 0, 50]
                    },
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "16",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "91.0",
                        "video_no": "9",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417474160415125, 37.765830424793542],
                        [-122.417594198134935, 37.765823130566289]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-364286",
                "id_b": "none",
                "location": "2901 16th St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "37",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417501324577472, 37.764904165424412],
                        [-122.417606415197994, 37.764899053068753]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-161769",
                "id_b": "none",
                "location": "573 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP09': [0, 0, 3562.50]
                    },
                    'SW-27': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "31",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "81.0",
                        "video_no": "5",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417298736254992, 37.764052091441812],
                        [-122.417415775048681, 37.764045921601067]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266887",
                "id_b": "none",
                "location": "481 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.12,   20.88],
                        'PP09': [0,  20.88,  -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "59.0",
                        "video_no": "3",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413510341388914, 37.714162346715888],
                        [-122.413485600507684, 37.714215500955859]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266583",
                "id_b": "none",
                "location": "1628 Visitacion Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP04': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP04': [0,  29.13,  20.87],
                        'PP09': [0,  20.87, -20.87]    
                    },
                    'SW-21': {
                        'PP10': [0, 2875,  0]                
                    },
                    'SW-27': {
                        'PP11': [0, 50,  0]                
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "63.0",
                        "video_no": "5",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "97.0",
                        "video_no": "4",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414880169460389, 37.713465583655342],
                        [-122.414909114269278, 37.713399330766336]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-265758",
                "id_b": "none",
                "location": "397 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.13,   20.87],
                        'PP09': [0,  20.87,  -20.87]
                    },
                    'SW-21': {
                        'PP03': [0,  1517.86,   607.14],
                        'PP08': [0,   607.14,  -607.14],
                    },
                    'SW-27': {
                        'PP03': [  13.54, 27.08,  9.38],
                        'PP09': [ -13.54, 22.92, -9.38],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "56.0",
                        "video_no": "1",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "57.1",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411560198032859, 37.713639740733697],
                        [-122.41153691309222, 37.71369146433706]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267270",
                "id_b": "none",
                "location": "1360 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.12,  20.88],
                        'PP09': [0, 20.88, -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "45.0",
                        "video_no": "10",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400904975632258, 37.715564631958728],
                        [-122.400831951468504, 37.71558438095839]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267620",
                "id_b": "none",
                "location": "1359 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.12,  20.88],
                        'PP09': [0, 20.88, -20.88]
                    },
                    'SW-21': {
                        'PP02': [0,   1607.14,  642.86],
                        'PP08': [0,    642.86, -642.86],
                    },
                    'SW-27': {
                        'PP02': [  13.54,  27.08,  9.38 ],
                        'PP09': [ -13.54,  22.92, -9.38 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "45.0",
                        "video_no": "9",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "50.0",
                        "video_no": "4",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400751078101692, 37.715593639286929],
                        [-122.40082792564246, 37.715574767611123]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267271",
                "id_b": "none",
                "location": "1340 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.12,  20.88],
                        'PP09': [0, 20.88, -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "45.0",
                        "video_no": "5",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400927389715036, 37.715617750228844],
                        [-122.400854342311149, 37.71563784845835]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267558",
                "id_b": "none",
                "location": "1319 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "44.0",
                        "video_no": "3",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400940988217059, 37.716053229582968],
                        [-122.401019575494331, 37.716032410585811]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267615",
                "id_b": "none",
                "location": "1339 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    },
                    'SW-21': {
                        'PP02': [0,   1607.14,  642.86],
                        'PP08': [0,    642.86, -642.86],
                    },
                    'SW-27': {
                        'PP02': [  13.54,  27.08,  9.38 ],
                        'PP09': [ -13.54,  22.92, -9.38 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "45.0",
                        "video_no": "4",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "50.0",
                        "video_no": "3",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400837639601193, 37.715802476877336],
                        [-122.400914694645195, 37.715781964701307]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159957",
                "id_b": "none",
                "location": "321 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "8",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417640988762031, 37.768026525986727],
                        [-122.41779694182064, 37.768018883298957]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-364291",
                "id_b": "none",
                "location": "1500 15th St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417709174854323, 37.767085401463802],
                        [-122.417813687171787, 37.767078827871899]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-158683",
                "id_b": "none",
                "location": "490 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }         
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "21",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417667061137848, 37.765527432439015],
                        [-122.417566501099145, 37.765532781236665]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266734",
                "id_b": "none",
                "location": "101 Hahn St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP04': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP04': [0,  29.13,  20.87],
                        'PP09': [0,  20.87, -20.87]    
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "63.0",
                        "video_no": "2",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415093243694031, 37.713378037601693],
                        [-122.415063767608316, 37.713441733055468]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266328",
                "id_b": "none",
                "location": "301 Sawyer St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.12,   20.88],
                        'PP09': [0,  20.88,  -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "59.0",
                        "video_no": "1",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413753072912741, 37.714226970520791],
                        [-122.413728252853076, 37.714281540136163]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267465",
                "id_b": "none",
                "location": "406 Sawyer St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414539911381667, 37.713120462138718],
                        [-122.414476114205172, 37.713101924299913]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266402",
                "id_b": "none",
                "location": "464 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.13,   20.87],
                        'PP09': [0,  20.87,  -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "58.0",
                        "video_no": "2",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413118181772191, 37.714161540932423],
                        [-122.41313454438793, 37.714119958983517]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266886",
                "id_b": "none",
                "location": "477 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.13,   20.87],
                        'PP09': [0,  20.87,  -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "58.0",
                        "video_no": "7",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413402777608354, 37.714132371565292],
                        [-122.413378253773217, 37.714186285928506]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266403",
                "id_b": "none",
                "location": "466 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.13,   20.87],
                        'PP09': [0,  20.87,  -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "58.0",
                        "video_no": "3",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413207410817463, 37.714183135926106],
                        [-122.413223446277911, 37.714144154163513]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-265771",
                "id_b": "none",
                "location": "316 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP02': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP02': [0,  29.13,  20.87],
                        'PP09': [0,  20.87, -20.87],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "53.0",
                        "video_no": "2",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.409913148075034, 37.713285148595055],
                        [-122.409930100615142, 37.713246274576328]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-265825",
                "id_b": "none",
                "location": "378 Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411179022426367, 37.713634643826239],
                        [-122.411193797601285, 37.713602212481277]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266061",
                "id_b": "none",
                "location": "355 Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.410694031544267, 37.713394513322001],
                        [-122.410666715209885, 37.713453309879746]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267621",
                "id_b": "none",
                "location": "1363 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.12,  20.88],
                        'PP09': [0, 20.88, -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "45.0",
                        "video_no": "11",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400734853681968, 37.715555284326236],
                        [-122.400811660464768, 37.715535927668597]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267327",
                "id_b": "none",
                "location": "1342 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.12,  20.88],
                        'PP09': [0, 20.88, -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "45.0",
                        "video_no": "6",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400975687843101, 37.715745204246822],
                        [-122.400906931468938, 37.715763426912105]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267559",
                "id_b": "none",
                "location": "1327 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.12,  20.88],
                        'PP09': [0, 20.88, -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "44.0",
                        "video_no": "5",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400913978778419, 37.715984383954229],
                        [-122.40099103732615, 37.715964264131607]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-363629",
                "id_b": "none",
                "location": "Bryant St between Beale St and Main St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.388977047914594, 37.786767159114447],
                        [-122.38889900929945, 37.786706014329624]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-158311",
                "id_b": "none",
                "location": "288 12th St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    "SW-10": {
		        "PP10": [0, 200, 0]
		    },
                    'SW-18': {
                        'PP10': [0, 300, 0]
                    },
                    'SW-20': {
                        'PP10': [0, 50, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "79.2",
                        "video_no": "5",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415498123767193, 37.771028566483906],
                        [-122.415451843606476, 37.771093579028481]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-158312",
                "id_b": "none",
                "location": "286 12th St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    "SW-10": {
		        "PP10": [0, 200, 0]
		    },
                    'SW-18': {
                        'PP10': [0, 300, 0]
                    },
                    'SW-20': {
                        'PP10': [0, 50, 0]
                    },
                    'SW-21': {
                        'PP10': [0, 2875, 0]
                    },
                    'SW-27': {
                        'PP10': [0, 50, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "79.2",
                        "video_no": "4",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "82.0",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41537281455885, 37.770973003698337],
                        [-122.41532697268218, 37.771040239242581]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-364275",
                "id_b": "none",
                "location": "101 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418066911935085, 37.771799085325419],
                        [-122.418093368824401, 37.771794008970531]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-157616",
                "id_b": "none",
                "location": "257 South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41774102168786, 37.769095912667943],
                        [-122.417845945355552, 37.769095068784331]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160010",
                "id_b": "none",
                "location": "333 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
 //                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3125]
                    },
                     'SW-27': {
                        'PP11': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "9",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "102.0",
                        "video_no": "3",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417669374189629, 37.76796153141283],
                        [-122.417791066897834, 37.767955539562337]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160211",
                "id_b": "none",
                "location": "356 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                    'SW-27': {
                        'PP11': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "18",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "102.0",
                        "video_no": "5",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417853318010486, 37.767496136144651],
                        [-122.417748601259376, 37.767500832347423]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159593",
                "id_b": "none",
                "location": "469 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "18",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417468432959041, 37.765762871913424],
                        [-122.417587975575955, 37.765756002909306]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159954",
                "id_b": "none",
                "location": "1486 15th St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "33",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417577182725296, 37.766942646954],
                        [-122.417694957925704, 37.766935598970186]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-364284",
                "id_b": "none",
                "location": "510 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP09': [0, 0, 3500]
                    },
                    'SW-27': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "24",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "81.0",
                        "video_no": "1",
                        "response": "MCN",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417478397574314, 37.764681333053169],
                        [-122.417584421766492, 37.764676469631183]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-364288",
                "id_b": "none",
                "location": "483 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "19",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417573021597178, 37.765596426720968],
                        [-122.417452625180587, 37.76560186761548]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159484",
                "id_b": "none",
                "location": "566 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP09': [0, 0, 3562.50]
                    },
                    'SW-27': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "30",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "81.0",
                        "video_no": "4",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417531041875407, 37.764120008106595],
                        [-122.417423615950682, 37.7641266519718]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-265841",
                "id_b": "none",
                "location": "484 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.12,   20.88],
                        'PP09': [0,  20.88,  -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "59.0",
                        "video_no": "4",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41352388872113, 37.714266373286918],
                        [-122.413540009186761, 37.714230308584462]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267459",
                "id_b": "none",
                "location": "1621 Visitacion Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP04': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP04': [0,  29.13,  20.87],
                        'PP09': [0,  20.87, -20.87]    
                    },
                    'SW-21': {
                        'PP04': [0,  1875,  750],
                        'PP08': [0,   750, -750]    
                    },  
                    'SW-27': {
                        'PP04': [ 13.55,   27.09,   9.36],
                        'PP09': [-13.55,   22.91,  -9.36],  
                    },     
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "63.0",
                        "video_no": "4",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "67.0",
                        "video_no": "4",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41484341828442, 37.713308784679995],
                        [-122.414815285271303, 37.713373605061626]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266400",
                "id_b": "none",
                "location": "460 Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413028035990166, 37.714137286846196],
                        [-122.413046368371511, 37.714096034687039]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266457",
                "id_b": "none",
                "location": "478 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.12,   20.88],
                        'PP09': [0,  20.88,  -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "59.0",
                        "video_no": "2",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413417852835167, 37.714242925017594],
                        [-122.413434443936637, 37.714201578404079]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266393",
                "id_b": "none",
                "location": "312 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP02': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP02': [0,  29.13,  20.87],
                        'PP09': [0,  20.87, -20.87]
                    },
                    'SW-21': {
                        'PP02': [0,  758.93,  303.57],
                        'PP08': [0,  303.57, -303.57]
                    },
                    'SW-27': {
                        'PP02': [  13.54,  27.08,  9.38 ],
                        'PP09': [ -13.54,  22.92, -9.38 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "53.0",
                        "video_no": "1",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "54.0",
                        "video_no": "3",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.409857447386585, 37.713270460661533],
                        [-122.409872991141725, 37.713230323268093]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-265757",
                "id_b": "none",
                "location": "399 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.13,   20.87],
                        'PP09': [0,  20.87,  -20.87]
                    },
                    'SW-21': {
                        'PP10': [0, 2625,  0]                
                    },
                    'SW-27': {
                        'PP03': [  13.54, 27.08,  9.38],
                        'PP09': [ -13.54, 22.92, -9.38],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "56.0",
                        "video_no": "2",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "57.1",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411628369024683, 37.713657497698797],
                        [-122.411604159120685, 37.713708883198088]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_010",
                "id_b": "none",
                "location": "359 Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.410796911547138, 37.713423121858369],
                        [-122.410770571522733, 37.71348264967159]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266109",
                "id_b": "none",
                "location": "354 Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41071398402967, 37.713510262734438],
                        [-122.410729939987263, 37.713471171114186]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-363650",
                "id_b": "none",
                "location": "169 Wilde Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.12,  20.88],
                        'PP09': [0, 20.88, -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "43.0",
                        "video_no": "1",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401057476845139, 37.716122915340137],
                        [-122.400980752112716, 37.716143440999659]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267328",
                "id_b": "none",
                "location": "1336 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.12,  20.88],
                        'PP09': [0, 20.88, -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "45.0",
                        "video_no": "3",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401012825821098, 37.715822655824695],
                        [-122.400939425418997, 37.715841019605676]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267331",
                "id_b": "none",
                "location": "1316 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.12,  20.88],
                        'PP09': [0, 20.88, -20.88]
                    },
                    'SW-21': {
                        'PP02': [0,   1607.14,  642.86],
                        'PP08': [0,    642.86, -642.86],
                    },
                    'SW-27': {
                        'PP02': [  13.54,  27.08,  9.38 ],
                        'PP09': [ -13.54,  22.92, -9.38 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "44.0",
                        "video_no": "2",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "50.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401096667620266, 37.716018213279789],
                        [-122.401022072741384, 37.716038373773273]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-363534",
                "id_b": "none",
                "location": "Bryant St between Beale St and Main St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389251154046761, 37.786553894279443],
                        [-122.389320723255111, 37.786609279366687]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-158113",
                "id_b": "none",
                "location": "154 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP08': [0, 150, 0]
                    },
                    'SW-21': {
                        'PP08': [0, 250, 0]
                    },
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "104.0",
                        "video_no": "3",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418319552618925, 37.771391172874097],
                        [-122.418270951489646, 37.77140081088902]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-157828",
                "id_b": "none",
                "location": "139 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP04': [0, 150, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417906691716681, 37.771276187316644],
                        [-122.417932148482024, 37.77127154483172]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160011",
                "id_b": "none",
                "location": "335 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "10",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417657139091531, 37.767848951390725],
                        [-122.417780561994306, 37.767842274986521]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160013",
                "id_b": "none",
                "location": "349 South Van Ness AVe",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "14",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41763976525209, 37.767655853041319],
                        [-122.417762526787286, 37.767647817767951]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160016",
                "id_b": "none",
                "location": "365 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3125]
                    },
                    'SW-27': {
                        'PP11': [0, 0, 50]
                    }                     
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "21",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "102.0",
                        "video_no": "7",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417613215089233, 37.767399693496287],
                        [-122.417738387854953, 37.767393215262175]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159480",
                "id_b": "none",
                "location": "590 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },                    
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP09': [0, 0, 3625]
                    },
                    'SW-27': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "33",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "81.0",
                        "video_no": "7",
                        "response": "MCN",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417494157057931, 37.763744745115062],
                        [-122.417387064228933, 37.763751006885016]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266401",
                "id_b": "none",
                "location": "462 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.13,   20.87],
                        'PP09': [0,  20.87,  -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "58.0",
                        "video_no": "1",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413093328019897, 37.714154772351023],
                        [-122.413109927871105, 37.714113259450137]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266667",
                "id_b": "none",
                "location": "345 Elliot St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41154985807303, 37.713823886831776],
                        [-122.411605261570955, 37.713839242496405]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266629",
                "id_b": "none",
                "location": "325 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP02': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP02': [0,  29.13,  20.87],
                        'PP09': [0,  20.87, -20.87],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "53.0",
                        "video_no": "6",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.409865822472256, 37.713165636016562],
                        [-122.409841899486565, 37.713221156694949]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-265761",
                "id_b": "none",
                "location": "401 Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411791366281605, 37.71370174622875],
                        [-122.411768659937607, 37.713753044073435]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-265759",
                "id_b": "none",
                "location": "385 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.13,   20.87],
                        'PP09': [0,  20.87,  -20.87]
                    },
                    'SW-21': {
                        'PP10': [0, 2625,  0]                
                    },
                    'SW-27': {
                        'PP11': [0, 50,  0]                
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "55.0",
                        "video_no": "3",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "97.0",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411522163607557, 37.713623299095545],
                        [-122.411495921980162, 37.71368084633275]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-265767",
                "id_b": "none",
                "location": "2 Rey St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411318378066667, 37.713566246582843],
                        [-122.411291696402301, 37.713627945377283]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-265769",
                "id_b": "none",
                "location": "330 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP02': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP02': [0,  29.13,  20.87],
                        'PP09': [0,  20.87, -20.87],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "53.0",
                        "video_no": "5",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.410171976149542, 37.713354971045263],
                        [-122.410187817296645, 37.713318257656148]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-265770",
                "id_b": "none",
                "location": "334 Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.410288386333519, 37.71334643047706],
                        [-122.41027160001731, 37.713383415179919]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266059",
                "id_b": "none",
                "location": "345 Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.410574316631852, 37.713359985763397],
                        [-122.410546032429352, 37.713419216534078]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267623",
                "id_b": "none",
                "location": "1381 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "44.0",
                        "video_no": "9",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400666579823238, 37.715387323490802],
                        [-122.400743294570589, 37.715366820146855]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267333",
                "id_b": "none",
                "location": "1308 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "43.0",
                        "video_no": "2",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401137556909234, 37.716117623927815],
                        [-122.401063516967383, 37.716137338556777]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-231289",
                "id_b": "none",
                "location": "Intersection of Bryant St and Main St - Southeast",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.388545952330247, 37.786733110748713],
                        [-122.388783558382599, 37.786917693467977]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160213",
                "id_b": "none",
                "location": "344 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                    'SW-27': {
                        'PP11': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "12",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "103.0",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417869540394605, 37.767649759771906],
                        [-122.417763263940273, 37.767655765827456]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160212",
                "id_b": "none",
                "location": "350 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "16",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417864772922698, 37.767576907929417],
                        [-122.417756395803949, 37.767582962169833]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160018",
                "id_b": "none",
                "location": "377 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "26",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417596575355802, 37.767239526835638],
                        [-122.417723075494223, 37.767231870958256]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-161765",
                "id_b": "none",
                "location": "550 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "26",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417567583045454, 37.764486485353551],
                        [-122.41745953153638, 37.764492792940104]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },


        // #################################################### 
        
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_031",
                "id_b": "none",
                "location": "565 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-18': {
                        'PP10': [0, 0, 300]
                    },    
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },                       
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "28",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                       [ -122.417455457117896, 37.764452074665748 ],
                       [ -122.417291318828674, 37.764463292098988 ]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266888",
                "id_b": "none",
                "location": "485 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.12,   20.88],
                        'PP09': [0,  20.88,  -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "59.0",
                        "video_no": "5",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413621470256672, 37.714192080119339],
                        [-122.413598042539277, 37.714246389882526]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266769",
                "id_b": "none",
                "location": "241 Sawyer St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413637971518739, 37.714297718212684],
                        [-122.41365450524944, 37.714261469323432]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267466",
                "id_b": "none",
                "location": "400 Sawyer St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414521742260959, 37.713163745332366],
                        [-122.414457691184211, 37.713145712686909]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266033",
                "id_b": "none",
                "location": "1550 Visitacion Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414275323561441, 37.713378282600054],
                        [-122.41434597446289, 37.713396494673042]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266528",
                "id_b": "none",
                "location": "1620 Visitacion Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP04': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP04': [0,  29.12,  20.88],
                        'PP09': [0,  20.88, -20.88]    
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "63.0",
                        "video_no": "3",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414769090063459, 37.71343585720841],
                        [-122.414797538693193, 37.71336873936626]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266819",
                "id_b": "none",
                "location": "71 Hahn St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP04': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP04': [0,  29.13,  20.87],
                        'PP09': [0,  20.87, -20.87]    
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "63.0",
                        "video_no": "1",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41504864676142, 37.713510336635338],
                        [-122.415077891553494, 37.713445605506102]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266404",
                "id_b": "none",
                "location": "474 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.13,   20.87],
                        'PP09': [0,  20.87,  -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "58.0",
                        "video_no": "5",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413334735368366, 37.714221652354453],
                        [-122.413350906526816, 37.714178843217233]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266628",
                "id_b": "none",
                "location": "329 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP02': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP02': [0,  29.13,  20.87],
                        'PP09': [0,  20.87, -20.87],
                    },
                    'SW-21': {
                        'PP02': [ 0,   1651.79,  660.71 ],
                        'PP08': [ 0,    660.71, -660.71 ],
                    },
                    'SW-27': {
                        'PP02': [  13.54,  27.08,  9.38 ],
                        'PP09': [ -13.54,  22.92, -9.38 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "53.0",
                        "video_no": "4",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "54.0",
                        "video_no": "4",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.409968571645564, 37.713191321148663],
                        [-122.409942014305614, 37.71324960220155]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266058",
                "id_b": "none",
                "location": "351 Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.410637499502286, 37.713377742795537],
                        [-122.410610152482136, 37.713437330695442]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267617",
                "id_b": "none",
                "location": "1351 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "45.0",
                        "video_no": "8",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400855081025668, 37.715639612447504],
                        [-122.400777243495469, 37.715658850093291]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267332",
                "id_b": "none",
                "location": "1312 Brussels St",
                "scope": 'Improve (E) side sewer as directed',
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "43.0",
                        "video_no": "3",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401103795111013, 37.716038095420075],
                        [-122.401029532918386, 37.716056187960639]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-364269",
                "id_b": "none",
                "location": "255 12th St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    "SW-10": {
		        "PP10": [0, 200, 0]
		    },
                    'SW-18': {
                        'PP10': [0, 300, 0]
                    },
                    'SW-20': {
                        'PP10': [0, 50, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "79.2",
                        "video_no": "3",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415390106799421, 37.77106720757741],
                        [-122.415346696645003, 37.771131703110882]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-157825",
                "id_b": "none",
                "location": "123 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP05': [0, 150, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418005916902231, 37.771588332469832],
                        [-122.418028492703172, 37.771583156467365]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-157829",
                "id_b": "none",
                "location": "165 South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-19': {
                        'PP04': [0, 150, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417839263130588, 37.771064943980726],
                        [-122.41786445888556, 37.771059426642474]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160215",
                "id_b": "none",
                "location": "334 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                    'SW-27': {
                        'PP11': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "Replace (per Email)",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "102.0",
                        "video_no": "4",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417884956618323, 37.767832315840288],
                        [-122.417780146098295, 37.767837790763963]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-160219",
                "id_b": "none",
                "location": "360 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "20",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417848128972949, 37.767424066653369],
                        [-122.417741846822139, 37.767429661889487]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159483",
                "id_b": "none",
                "location": "560 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP09': [0, 0, 3562.50]
                    },
                    'SW-27': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "27",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "81.0",
                        "video_no": "3",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417532416464866, 37.764125622548093],
                        [-122.417424187659023, 37.764132538309781]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-364283",
                "id_b": "none",
                "location": "588 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417399592901972, 37.763879614556089],
                        [-122.417506757461439, 37.76387297225876]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-161766",
                "id_b": "none",
                "location": "599 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417282012083092, 37.763887098964361],
                        [-122.417399592901972, 37.763879614556089]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266885",
                "id_b": "none",
                "location": "475 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.12,   20.88],
                        'PP09': [0,  20.88,  -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "58.0",
                        "video_no": "6",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413357551927845, 37.714120284807592],
                        [-122.41333404263645, 37.714174253611574]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-265760",
                "id_b": "none",
                "location": "379 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP03': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP03': [0,  29.13,   20.87],
                        'PP09': [0,  20.87,  -20.87]
                    },
                    'SW-21': {
                        'PP03': [0, 1607.14,  642.86],
                        'PP08': [0,  642.86, -642.86]                        
                    },
                    'SW-27': {
                        'PP11': [0, 50,  0]                
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "55.0",
                        "video_no": "1",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "97.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41142406388775, 37.713595348302306],
                        [-122.411397173474597, 37.713655267316724]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267268",
                "id_b": "none",
                "location": "100 Campbell Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    },
                    'SW-21': {
                        'PP02': [0,   1607.14,  642.86],
                        'PP08': [0,    642.86, -642.86],
                    },
                    'SW-27': {
                        'PP02': [  13.54,  27.08,  9.38 ],
                        'PP09': [ -13.54,  22.92, -9.38 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "44.0",
                        "video_no": "1",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "50.0",
                        "video_no": "7",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400773304618895, 37.715245179659469],
                        [-122.400701708354376, 37.715263525026671]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267624",
                "id_b": "none",
                "location": "1387 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    },
                    'SW-21': {
                        'PP02': [0,   1607.14,  642.86],
                        'PP08': [0,    642.86, -642.86],
                    },
                    'SW-27': {
                        'PP02': [  13.54,  27.08,  9.38 ],
                        'PP09': [ -13.54,  22.92, -9.38 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "44.0",
                        "video_no": "10",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "50.0",
                        "video_no": "6",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400628504017391, 37.715290285873479],
                        [-122.400704829081121, 37.715271276538601]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267269",
                "id_b": "none",
                "location": "1366 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    },
                    'SW-21': {
                        'PP10': [0, 2250,  0]                
                    },
                    'SW-27': {
                        'PP02': [  13.54,  27.08,  9.38 ],
                        'PP09': [ -13.54,  22.92, -9.38 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "44.0",
                        "video_no": "6",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "50.0",
                        "video_no": "5",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400864836605422, 37.715464478692184],
                        [-122.400790054170159, 37.715482965152127]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267330",
                "id_b": "none",
                "location": "1330 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    },
                    'SW-21': {
                        'PP02': [0,   1607.14,  642.86],
                        'PP08': [0,    642.86, -642.86],
                    },
                    'SW-27': {
                        'PP11': [0, 50,  0]                
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "45.0",
                        "video_no": "1",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "97.0",
                        "video_no": "3",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401033270465646, 37.715872509671094],
                        [-122.400960147532018, 37.715890502145797]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-420922",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Elliot St - NEC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                   'SW-20': {
                        'PP03': [0,  29.13,   20.87],
                        'PP09': [0,  20.87,  -20.87]
                    },
                    'SW-22': {
                        'PP03': [ 266.22, 575.13,  208.65],
                        'PP08': [-266.22, 474.87, -208.65],                        
                    },
                    'SW-27': {
                        'PP03': [  13.54, 27.08,  9.38],
                        'PP09': [ -13.54, 22.92, -9.38],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "55.0",
                        "video_no": "4",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "57.1",
                        "video_no": "3",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411569810558163, 37.713736520252326],
                        [-122.411656583086, 37.713722462670304]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-416349",
                "id_b": "none",
                "location": "Bryant St between Beale St and Main St",
                "scope": "Install (N) culvert",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",

                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389296666415049, 37.786611584757999],
                        [-122.389216728175597, 37.786580832876588]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-420850",
                "id_b": "none",
                "location": "Intersection of Leleand Ave and Schwern St - SWC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP02': [0,  29.13,  20.87],
                        'PP09': [0,  20.87, -20.87],
                    },
                    'SW-22': {
                        'PP02': [  247.20,  534.04,  193.74 ],
                        'PP08': [ -247.20,  440.94, -193.74 ]
                    },
                    'SW-27': {
                        'PP02': [  13.57,  27.13,  9.30 ],
                        'PP09': [ -13.57,  22.87, -9.30 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "52.0",
                        "video_no": "5",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "54.1",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.410272639209325, 37.713283942869239],
                        [-122.410262455128404, 37.713339104803502]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417367",
                "id_b": "none",
                "location": "Intersection of Brussels St and Wilde Ave - SWC",
                "scope": "Install (N) culvert",
                "pp_history": {
                    'SW-22': {
                        'PP02': [  367.65,  794.23,  288.13 ],
                        'PP08': [ 1082.36, -794.23, -288.13 ]
                    },
                    'SW-27': {
                        'PP02': [  13.54,  27.08,  9.38 ],
                        'PP09': [  36.46, -27.08, -9.38 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "50.0",
                        "video_no": "11",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401182385074648, 37.716246709197065],
                        [-122.401139682652087, 37.716319214464143]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417368",
                "id_b": "none",
                "location": "Intersection of Brussels St and Wilde Ave - NWC",
                "scope": "Install (N) culvert",
                "pp_history": {
                    'SW-22': {
                        'PP02': [   380.32,  821.61,  298.06 ],
                        'PP08': [  1119.67, -821.61, -298.06 ]
                    },
                    'SW-27': {
                        'PP02': [  13.54,  27.08,  9.38 ],
                        'PP09': [  36.46, -27.08, -9.38 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "97.0",
                        "video_no": "5",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401226087846879, 37.716362143879557],
                        [-122.401139682652087, 37.716319214464143]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417583",
                "id_b": "none",
                "location": "Visitacion Ave and Sawyer St Intersection - NEC",
                "scope": "Install (N) culvert",
                "pp_history": {
                    'SW-22': {
                        'PP04': [ 354.97,  766.84,  278.19],
                        'PP08': [1045.03, -766.84, -278.19],                       
                    },
                    'SW-27': {
                        'PP04': [13.54,   27.09,   9.37],
                        'PP09': [36.46,  -27.09,  -9.37],  
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "67.0",
                        "video_no": "3",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414303712813123, 37.713308131350217],
                        [-122.41440859819167, 37.713262398252837]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417602",
                "id_b": "none",
                "location": "Intersection of 10th St and Sheridan St - East Corner",
                "scope": "Install (N) culvert",
                "pp_history": {
                    'SW-22': {
                        'PP09': [337.50, 0, 0]
                    },
                    'SW-27': {
                        'PP11': [50, 0, 0]
                    },                    
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "99.0",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411794134298219, 37.772148809282058],
                        [-122.411820100568008, 37.772163968350107]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417603",
                "id_b": "none",
                "location": "Intersection of 10th St and Sheridan St - North Corner",
                "scope": "Install (N) culvert",
                "pp_history": {
                    'SW-22': {
                        'PP09': [337.50, 0, 0]
                    },
                    'SW-27': {
                        'PP11': [50, 0, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "99.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411837581128722, 37.772183822700043],
                        [-122.411820100568008, 37.772163968350107]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417611",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and Plum St - NWC",
                "scope": "Install (N) culvert",
                "pp_history": {
                    'SW-22': {
                        'PP08': [1350, 0, 0]
                    },
                    'SW-27': {
                        'PP09': [0, 50, 0]
                    }
                    
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "77.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418147702516023, 37.770959884425586],
                        [-122.418116029638895, 37.770912941313398]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417621",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and Erie St - NEC",
                "scope": "Install (N) culvert",
                "pp_history": {
                    'SW-22': {
                        'PP08': [2150, 0, 0]
                    },
                    'SW-27': {
                        'PP10': [50, 0, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "85.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417752018403746, 37.769297294301204],
                        [-122.417846406880528, 37.769202036510627]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-416480",
                "id_b": "none",
                "location": "Bryant St between Beale St and Main St",
                "scope": "Install (N) culvert",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389258721363021, 37.786641768480536],
                        [-122.389216728175597, 37.786580832876588]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417356",
                "id_b": "none",
                "location": "Intersection of Bryant St and Beale St - South Corner",
                "scope": "Install (N) culvert",
                "pp_history": {
                    'SW-22': {
                        'PP09': [ 900, 0, 0 ]
                    },
                    'SW-27': {
                        'PP11': [ 50, 0, 0 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "99.0",
                        "video_no": "4",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389561056249988, 37.786088765120127],
                        [-122.389517343385521, 37.78612159141823]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417357",
                "id_b": "none",
                "location": "Intersection of Bryant St and Beale St - South Corner",
                "scope": "Install (N) culvert",
                "pp_history": {
                    'SW-22': {
                        'PP09': [2275, 0, 0]
                    },
                    'SW-27': {
                        'PP11': [50, 0, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "99.0",
                        "video_no": "3",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389691864742659, 37.786087387224264],
                        [-122.389591016946412, 37.786181918072799]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417359",
                "id_b": "none",
                "location": "Intersection of Bryant St and Main St - West Corner",
                "scope": "Install (N) culvert",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.388974237138498, 37.786861469080527],
                        [-122.388916558978934, 37.786814182836665]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-122658",
                "id_b": "none",
                "location": "Leland Ave between Loehr St and Britton St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413060834794521, 37.714099898471737],
                        [-122.412791874413273, 37.714028062781424]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-110273",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Sawyer St - NEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413927252898276, 37.714327451561864],
                        [-122.413853099079716, 37.714391591754222]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-110270",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Sawyer St - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413965552123045, 37.71437676538303],
                        [-122.413927252898276, 37.714327451561864]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-110271",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Sawyer St - SWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414012814996326, 37.714299088042011],
                        [-122.413927252898276, 37.714327451561864]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-93764",
                "id_b": "none",
                "location": "Leland Ave and Sawyer St Intersection",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413927252898276, 37.714327451561864],
                        [-122.413883860691229, 37.714422050268325]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-99453",
                "id_b": "none",
                "location": "Leland Ave - West of Sawer St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413927252898276, 37.714327451561864],
                        [-122.41425488443258, 37.71441608749145]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-120386",
                "id_b": "none",
                "location": "Sawer St - North of Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413883860691229, 37.714422050268325],
                        [-122.413830129730925, 37.714544045355453]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-98147",
                "id_b": "none",
                "location": "Sawyer St - South of Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413927252898276, 37.714327451561864],
                        [-122.414060943676773, 37.71403656381181]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-110269",
                "id_b": "none",
                "location": "Leland Ave and Loehr St Intersection - SWC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP03': [0,  29.12,   20.88],
                        'PP09': [0,  20.88,  -20.88]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "58.0",
                        "video_no": "8",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413060834794521, 37.714099898471737],
                        [-122.41308166509107, 37.714046877856802]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-102085",
                "id_b": "none",
                "location": "Loehr - South of Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.413072905162124, 37.71390119183787],
                        [-122.413127909368058, 37.713782580000277]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-423715",
                "id_b": "none",
                "location": "South Van Ness Ave between 14th St and 15th St",
                "scope": "Install (N) 18in VCP main",
                "pp_history": {
                    'SW-16': {
                        'PP08': [0, 1350, 316.67]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41782755871418, 37.768348995430159],
                        [-122.417761489184443, 37.767636630225375]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-423714",
                "id_b": "none",
                "location": "South Van Ness Ave between 14th St and 15th St",
                "scope": "Install (N) 18in VCP main",
                "pp_history": {
                    'SW-16': {
                        'PP08': [0, 1350, 316.67]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417761489184443, 37.767636630225375],
                        [-122.417693354981822, 37.766918708875998]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417617",
                "id_b": "none",
                "location": "349 South Van Ness Ave",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "15",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417761489184443, 37.767636630225375],
                        [-122.417659402584562, 37.767640039555374]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417618",
                "id_b": "none",
                "location": "344 South Van Ness Ave",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "13",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417853023012199, 37.767634961829806],
                        [-122.417761489184443, 37.767636630225375]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_main_001",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 15th St",
                "scope": "Remove (E)",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417693354981822, 37.766918708875998],
                        [-122.417690051505232, 37.766877506348102]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-116033",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 15th St - NEC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "35",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417686013922918, 37.766830065380773],
                        [-122.417574980407522, 37.766880553014687]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-118880",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 15th St - NWC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "37",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417686013922918, 37.766830065380773],
                        [-122.4177900734323, 37.766868656506368]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-118881",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 15th St - SWC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "39",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417686013922918, 37.766830065380773],
                        [-122.417781264161675, 37.766764924675748]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-116034",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 15th St - SEC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "38",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417686013922918, 37.766830065380773],
                        [-122.417566354663364, 37.766777401519029]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-412451",
                "id_b": "none",
                "location": "15th St - West of South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417686013922918, 37.766830065380773],
                        [-122.417311069341309, 37.766851537137384]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-412447",
                "id_b": "none",
                "location": "15th St - West of South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417686013922918, 37.766830065380773],
                        [-122.418047744598596, 37.766807142823005]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-350142",
                "id_b": "none",
                "location": "Intersection of Bryant St and Beale St - South Corner",
                "scope": "Abandon (E) culvert",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389591016946412, 37.786181918072799],
                        [-122.389655394473181, 37.78610411508307]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-76477",
                "id_b": "none",
                "location": "Intersection of Bryant St and Beale St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389657981167801, 37.78623554714251],
                        [-122.389591016946412, 37.786181918072799]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-76513",
                "id_b": "none",
                "location": "Beale St - Southeast of Bryant St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389591016946412, 37.786181918072799],
                        [-122.389422824197013, 37.786048240715274]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-100207",
                "id_b": "none",
                "location": "Intersection of Bryant St and Beale St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389794456040391, 37.786344763221074],
                        [-122.389657981167801, 37.78623554714251]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-126485",
                "id_b": "none",
                "location": "Beale St - Northwest of Bryant St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389794456040391, 37.786344763221074],
                        [-122.389878571799528, 37.786412413672522]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-341235",
                "id_b": "none",
                "location": "Intersection of Bryant St and Beale St - North Corner",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 50, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "89.0",
                        "video_no": "6",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389794456040391, 37.786344763221074],
                        [-122.38966029818954, 37.786349041935267]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-126441",
                "id_b": "none",
                "location": "Intersection of Bryant St and Beale St - West Corner",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 50, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "89.0",
                        "video_no": "5",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": 'cl',
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389794456040391, 37.786344763221074],
                        [-122.389834281284664, 37.786244612228224]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-113300",
                "id_b": "none",
                "location": "Intersection of Bryant St and Beale St - West Corner",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 50, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "89.0",
                        "video_no": "7",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389544130622227, 37.786219161740391],
                        [-122.389657981167801, 37.78623554714251]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-416346",
                "id_b": "none",
                "location": "Bryant St between Beale St and Main St",
                "scope": "Abandon (E) culvert",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389258721363021, 37.786641768480528],
                        [-122.38919991283106, 37.786593905056769]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-416345",
                "id_b": "none",
                "location": "Bryant St between Beale St and Main St",
                "scope": "Abandon (E) culvert",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389296666415049, 37.786611584757999],
                        [-122.389236801997015, 37.786565124906716]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-341229",
                "id_b": "none",
                "location": "Bryant St between Beale St and Main St",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389216728175597, 37.786580832876588],
                        [-122.389060940248513, 37.786598102956503]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-341231",
                "id_b": "none",
                "location": "Bryant St between Beale St and Main St",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.389216728175597, 37.786580832876588],
                        [-122.389292165318338, 37.786415209874768],
                        [-122.389296377403355, 37.786410882418885]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-112819",
                "id_b": "none",
                "location": "Intersection of Bryant St and Main St - West Corner",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 50, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "89.0",
                        "video_no": "1",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.388932503324099, 37.78691498035132],
                        [-122.388800178438743, 37.78690465626039]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-112818",
                "id_b": "none",
                "location": "Intersection of Bryant St and Main St - North Corner",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 50, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "89.0",
                        "video_no": "2",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.388800178438743, 37.78690465626039],
                        [-122.388778830165307, 37.787038878597514]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-122323",
                "id_b": "none",
                "location": "Intersection of Bryant St and Main St - East Corner",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 50, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "89.0",
                        "video_no": "3",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.388800178438743, 37.78690465626039],
                        [-122.388668776730526, 37.78690680721396],
                        [-122.388662376927556, 37.786909855059712]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-122322",
                "id_b": "none",
                "location": "Intersection of Bryant St and Main St - South Corner",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 50, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "89.0",
                        "video_no": "4",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.388800178438743, 37.78690465626039],
                        [-122.388774318659699, 37.786823393564603]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-122274",
                "id_b": "none",
                "location": "Bryant St - Norhteast of Main St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.388800178438743, 37.78690465626039],
                        [-122.388567518205761, 37.787087160834943]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-100143",
                "id_b": "none",
                "location": "Main St - Northwest of Bryant St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.388800178438743, 37.78690465626039],
                        [-122.389017705856176, 37.787090622767991]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-96279",
                "id_b": "none",
                "location": "Elliot St - North of Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411656583086, 37.713722462670304],
                        [-122.41161636635745, 37.713814206841818]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-110348",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Elliot St - NEC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                   'SW-20': {
                        'PP03': [0,  29.13,   20.87],
                        'PP09': [0,  20.87,  -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "55.0",
                        "video_no": "5",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411707503491343, 37.713778528566415],
                        [-122.411656583086, 37.713722462670304]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-297197",
                "id_b": "none",
                "location": "Elliot St - North of Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41161636635745, 37.713814206841818],
                        [-122.411560977426703, 37.713939080670528]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-122657",
                "id_b": "none",
                "location": "Leland Ave - West of Elliot St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411656583086, 37.713722462670304],
                        [-122.411880736789172, 37.713783625463947]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-420921",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Rey St - SWC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP03': [0,  29.13,   20.87],
                        'PP09': [0,  20.87,  -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "55.0",
                        "video_no": "6",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411209730548165, 37.713606713589307],
                        [-122.411217472528463, 37.713545858930779]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-126257",
                "id_b": "none",
                "location": "Leland Ave between Rey St and Schwern St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411209730548165, 37.713606713589307],
                        [-122.410262455128404, 37.713339104803502]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-90674",
                "id_b": "none",
                "location": "Rey St - South of Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411187024204409, 37.713452141425662],
                        [-122.411268081176345, 37.713277941642922]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266336",
                "id_b": "none",
                "location": "359 Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.410811668072782, 37.713428054363519],
                        [-122.410785357362869, 37.713486826725074]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_011",
                "id_b": "none",
                "location": "359 Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.410804191721596, 37.713425320569122],
                        [-122.410777497040939, 37.713484606155639]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_002",
                "id_b": "none",
                "location": "1 Rey St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411190295442452, 37.713445111206028],
                        [-122.411119996323762, 37.713425177068906]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_014",
                "id_b": "none",
                "location": "9 Rey St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411231759232166, 37.713356001293263],
                        [-122.411160732648128, 37.71333606308837]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_007",
                "id_b": "none",
                "location": "17 rey St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411249452190702, 37.713317977288369],
                        [-122.411179022426367, 37.713297918325921]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_008",
                "id_b": "none",
                "location": "2 Rey St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411301647076215, 37.713390649524591],
                        [-122.411226704396412, 37.713366864656557]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_012",
                "id_b": "none",
                "location": "374 Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411118288478946, 37.713580880911003],
                        [-122.411105447636388, 37.713612940861601]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-90439",
                "id_b": "none",
                "location": "Schwern St - South of Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.410280952744884, 37.713109331647225],
                        [-122.410323767453136, 37.713015613590024]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-93765",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Delta St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.409514375484719, 37.71313015786609],
                        [-122.409470867981852, 37.713213901129059]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-96278",
                "id_b": "none",
                "location": "Delta St - North of Leland Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.409470867981852, 37.713213901129059],
                        [-122.409414890175626, 37.713337981287118]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-110351",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Delta St - NWC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP02': [0,  29.13,  20.87],
                        'PP09': [0,  20.87, -20.87],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "52.0",
                        "video_no": "4",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.409514375484719, 37.71313015786609],
                        [-122.409545551243198, 37.713193951826291]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-118380",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Delta St - NEC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP02': [0,  29.12,  20.88],
                        'PP09': [0,  20.88, -20.88],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "52.0",
                        "video_no": "3",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.409514375484719, 37.71313015786609],
                        [-122.40942652912544, 37.713169179607711]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-90624",
                "id_b": "none",
                "location": "Leland Ave - East of Delta St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.409514375484719, 37.71313015786609],
                        [-122.40917684594011, 37.713035234105398]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_009",
                "id_b": "none",
                "location": "333 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.410031215967336, 37.713274517205299],
                        [-122.410056418004913, 37.713218285590536]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_016",
                "id_b": "none",
                "location": "325 Leland Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found' )
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.409677570712816, 37.713175740152664],
                        [-122.409702815624783, 37.713121060097571]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-295285",
                "id_b": "none",
                "location": "South Van Ness Ave - South of 17th St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417368202478755, 37.763571656045784],
                        [-122.417340023394061, 37.763278615657541]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-98949",
                "id_b": "none",
                "location": "17th St - East of South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417368202478755, 37.763571656045784],
                        [-122.416995688731859, 37.763593389526427]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-85522",
                "id_b": "none",
                "location": "17th St - West of South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417368202478755, 37.763571656045784],
                        [-122.417733843277162, 37.763548835884144]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-116415",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 17th St - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417481606110016, 37.763631875882872],
                        [-122.417477015157189, 37.763564864892686]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-116414",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 17th St - SWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41747049484519, 37.763498124388775],
                        [-122.417477015157189, 37.763564864892686]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-116412",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 17th St - NEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "4",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417260755401841, 37.763646002634538],
                        [-122.4172561734364, 37.763641655941939],
                        [-122.417253761825251, 37.763578332830207]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-116413",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 17th St - SEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417253761825251, 37.763578332830207],
                        [-122.417248040449252, 37.763513790622319]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-336740",
                "id_b": "none",
                "location": "565 South Van Ness Ave",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "29",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417447470471444, 37.764372258925206],
                        [-122.417345750850671, 37.764382401107198]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-336741",
                "id_b": "none",
                "location": "550 South Van Ness Ave",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-22': {
                        'PP09': [0, 0, 1100]
                    },
                    'SW-27': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "25",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "81.0",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417538193376458, 37.764366463392015],
                        [-122.417447470471444, 37.764372258925206]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417612",
                "id_b": "none",
                "location": "565 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3500]
                    },
                    'SW-27': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "36",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "88.0",
                        "video_no": "1",
                        "response": "MCN",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417290079977093, 37.764505737173408],
                        [-122.417459678762782, 37.764494264267547]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-287584",
                "id_b": "none",
                "location": "16th St - West of South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417477367792188, 37.765204818771899],
                        [-122.417891806516323, 37.765176626231444]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-98947",
                "id_b": "none",
                "location": "16th St - East of South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417477367792188, 37.765204818771899],
                        [-122.417155026560465, 37.765222627759755]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-336738",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 16th St - SWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41762960357616, 37.765117343379202],
                        [-122.417637336720276, 37.765193936753199]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-336735",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 16th St - SEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417409898359168, 37.76512911543599],
                        [-122.41742193033771, 37.765207881628754]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-336736",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 16th St - NEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417425820687086, 37.765280069259887],
                        [-122.41742193033771, 37.765207881628754]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-122751",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 16th St",
                "scope": "Line (E) 3ft x 5ft brick main",
                "pp_history": {
                    'SW-09': {
                        'PP09': [0, 930, 570]
                    },
                    'SW-12': {
                        'PP10': [0, 0,  25200]
                    },
                    'SW-16': {
                        'PP08': [0, 350, 66.66]
                    },
                    'SW-26': {
                        'PP10': [0, 0, 250]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "74.0",
                        "video_no": "7",
                        "response": "MCN - Proceed with Lining",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "98.1",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417537391532392, 37.765248646983608],
                        [-122.417532826048756, 37.765201046178291]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-336737",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 16th St - NWC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-18': {
                        'PP10': [0, 0, 300]
                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "3",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417630519969023, 37.765274726568336],
                        [-122.417540443668841, 37.765278438495628]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-338072",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and Adair St - SWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417746443680898, 37.765769421949237],
                        [-122.417678172403853, 37.765731389472855]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-385801",
                "id_b": "none",
                "location": "Adair St - West of South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417746443680898, 37.765769421949237],
                        [-122.417944613661362, 37.765760064754971]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-102002",
                "id_b": "none",
                "location": "Adair St - West of South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417746443680898, 37.765769421949237],
                        [-122.417590084127198, 37.76577899043474]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_017",
                "id_b": "none",
                "location": "490 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                     'SW-27': {
                        'PP10': [0, 0, 50]
                    },                   
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "20",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "91.0",
                        "video_no": "11",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417681379777633, 37.765684814755261],
                        [-122.417581920446565, 37.76569007237687]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159601",
                "id_b": "none",
                "location": "401 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Capped')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417669779083013, 37.76666997103235],
                        [-122.417548846442998, 37.766676641636174]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
   
   //     {
   //         "type": "Feature",
   //         "properties": {
   //             "id_a": "L-364290",
   //             "id_b": "none",
   //             "location": "1501 15th St",
   //             "scope": "Improve (E) side sewer as directed",
   //             "pp_history": {
   //                 'SW-0': {
   //                     'PP0': {
   //                         'SFPUC-SW': {
   //                             'QTY': 0,
   //                             'UNIT': ''
   //                         }
   //                     }
   //                 }
   //             },
   //             get pp_summary() {
   //                 return payment_summary_from_pp_history(this.pp_history)
   //             },
   //             get bid_items() {
   //                 return bid_item_flattener(this.pp_history) 
   //             }, 
   //             "submittals": {
   //                 "tvi_pre_con": {
   //                     "submittal_no": "none",
   //                     "video_no": "none",
   //                     "response": "none",
   //                     get response_date() {
   //                         return response_date_from_submittal_no(this.submittal_no)
   //                     }
   //                 },
   //                 "tvi_post_con": {
   //                     "submittal_no": "none",
   //                     "video_no": "none",
   //                     "response": "none",
   //                     get response_date() {
   //                         return response_date_from_submittal_no(this.submittal_no)
   //                   }
   //                 }
   //             },
   //             "rlvnt": "none",
   //             "sw_type": "lt",
   //             get status() {
   //                 return sw_line_status_from_line_object( this)
   //             }
   //         },
   //         "geometry": {
   //             "type": "MultiLineString",
   //             "coordinates": [
   //                 [
   //                     [-122.417649651555294, 37.766471489786746],
   //                     [-122.417752860490609, 37.766469149899706]
   //                 ]
   //             ]
   //         },
   //         get asset_coordinate() {
   //             return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
   //         }
   //     },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159600",
                "id_b": "none",
                "location": "415 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                     'SW-27': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "30, 31",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "91.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417532580467565, 37.766517654122133],
                        [-122.417653668074138, 37.76651109745908]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159599",
                "id_b": "none",
                "location": "423 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250 ]
                    },
                    'SW-27': {
                        'PP10': [0, 0, 50]
                    }                    
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "5",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "91.0",
                        "video_no": "3",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417642580816647, 37.76639155708542],
                        [-122.417522041948331, 37.766398124625532]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159598",
                "id_b": "none",
                "location": "435 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                    'SW-27': {
                        'PP10': [0, 0, 50]
                    },                    
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "6",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "91.0",
                        "video_no": "4",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417511045232544, 37.766239838297857],
                        [-122.417629921914767, 37.766234219529856]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159597",
                "id_b": "none",
                "location": "449 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-18': {
                        'PP10': [0, 0, 300]
                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "12",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417618309041714, 37.766089882777536],
                        [-122.417498788476422, 37.766096221233717]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159596",
                "id_b": "none",
                "location": "453 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "10",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417490082743143, 37.766027400851932],
                        [-122.417612615675708, 37.766020736258469]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-364289",
                "id_b": "none",
                "location": "461 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                    'SW-27': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "15",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "91.0",
                        "video_no": "8",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417602685823795, 37.765914196841642],
                        [-122.417478398732598, 37.765920910240226]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-158962",
                "id_b": "none",
                "location": "454 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                    'SW-27': {
                        'PP10': [0, 0, 50]
                    }                    
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "13",
                        "response": "MCN - Do Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "91.0",
                        "video_no": "7",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417611474577882, 37.766008493193695],
                        [-122.417710704353041, 37.766004038128798]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-158741",
                "id_b": "none",
                "location": "450 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                    'SW-27': {
                        'PP10': [0, 0, 50]
                    }                    
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "9",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "91.0",
                        "video_no": "6",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417615941246481, 37.766060453344018],
                        [-122.417713911728455, 37.766055110118607]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-158740",
                "id_b": "none",
                "location": "442 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "8",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417723762953031, 37.766132442461547],
                        [-122.417622222647537, 37.766138525134593]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-158739",
                "id_b": "none",
                "location": "436 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                    'SW-27': {
                        'PP10': [0, 0, 50]
                    }                   
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "7",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "91.0",
                        "video_no": "5",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417730063154721, 37.766206695923188],
                        [-122.417628089852712, 37.766211448793342]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-158738",
                "id_b": "none",
                "location": "Opposite 415 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                    'SW-27': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "32",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "91.0",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417751827488019, 37.766420219486434],
                        [-122.417645410087871, 37.766426722065695]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-112943",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 14th St - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "36",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417943124522708, 37.768473835544292],
                        [-122.417937522734121, 37.768421890458768]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-118700",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 14th St - NEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "34",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417734510793082, 37.768490880089068],
                        [-122.417730651193864, 37.768431798411747]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-112941",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 14th St - SEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "3",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417713588775314, 37.76836553414676],
                        [-122.417730651193864, 37.768431798411747]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-112942",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 14th St - SWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "2",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41793492170018, 37.76835791763299],
                        [-122.417937522734121, 37.768421890458768]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-122757",
                "id_b": "none",
                "location": "14th St - West of South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41783127512528, 37.768427336686528],
                        [-122.418192497962494, 37.768408820486101]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-76439",
                "id_b": "none",
                "location": "14th St - East of South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41783127512528, 37.768427336686528],
                        [-122.417739341633791, 37.768431276947211]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-76437",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 14th St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417739341633791, 37.768431276947211],
                        [-122.417838845592215, 37.768481522673618]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-76463",
                "id_b": "none",
                "location": "14th St - East of South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417739341633791, 37.768431276947211],
                        [-122.417461674560798, 37.768447938188139]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-76436",
                "id_b": "none",
                "location": "South Van Ness Ave - North of 14th St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417838845592215, 37.768481522673618],
                        [-122.417844879558928, 37.768848048310119]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-133399",
                "id_b": "none",
                "location": "Opposite 275 South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41804572235381, 37.768847323912297],
                        [-122.417844879558928, 37.768848048310119]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-119652",
                "id_b": "none",
                "location": "Opposite 275 South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417844879558928, 37.768848048310119],
                        [-122.418114451827321, 37.768833560353094]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-76435",
                "id_b": "none",
                "location": "South Van Ness Ave - South of Erie St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417844879558928, 37.768848048310119],
                        [-122.417846406880528, 37.769202036510627]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-133402",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and Erie St - West Side",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418012732206563, 37.769198897468549],
                        [-122.418087265502308, 37.769122353093515]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-133397",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and Erie St - West Side",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418012732206563, 37.769198897468549],
                        [-122.417846406880528, 37.769202036510627]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417623",
                "id_b": "none",
                "location": "Erie St - East of South Van Ness Ave",
                "scope": "Install (N) 12in VCP main",
                "pp_history": {
                    'SW-11': {
                        'PP08': [0, 0, 5250]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "84.1",
                        "video_no": "2",
                        "response": "MCN",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417695965699778, 37.769226665913123],
                        [-122.417632429119791, 37.769231736671429]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-308443",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and Erie St - NEC",
                "scope": "Abandon (E) culvert",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417738807071629, 37.7692598069344],
                        [-122.417695965699778, 37.769226665913123]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-76438",
                "id_b": "none",
                "location": "Erie St - East of South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417632429119791, 37.769231736671429],
                        [-122.417532007722414, 37.769239282442122]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-76434",
                "id_b": "none",
                "location": "South Van Ness Ave - North of Erie St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417846406880528, 37.769202036510627],
                        [-122.417837166584874, 37.769366292738241]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-386425",
                "id_b": "none",
                "location": "154 South Van Ness Ave",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-22': {
                        'PP08': [0, 500, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418246309090605, 37.771280123673854],
                        [-122.418224533987598, 37.771256163234519]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_003",
                "id_b": "none",
                "location": "1601 Mission St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found' )
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41852728215288, 37.772039176593729],
                        [-122.418479147857667, 37.772049595364962]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_004",
                "id_b": "none",
                "location": "1601 Mission St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.4185308153926, 37.772210601588668],
                        [-122.418579740355653, 37.772200149773269]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_019",
                "id_b": "none",
                "location": "154 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418322645673314, 37.771399779057887],
                        [-122.418273796248926, 37.771409675806609]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-397229",
                "id_b": "none",
                "location": "139 South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417940715315339, 37.771341296107252],
                        [-122.417945169313654, 37.771312348007577]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-386430",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and Howard St - North Corner",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP04': [0,  29.12,  20.88],
                        'PP09': [0,  20.88, -20.88]    
                    },
                    'SW-27': {
                        'PP10': [0, 50, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "65.0",
                        "video_no": "1",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "90.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41767669219098, 37.770718542722761],
                        [-122.41773682116883, 37.770659447992458]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-82502",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and Howard St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41773682116883, 37.770659447992458],
                        [-122.417982471549621, 37.770496124289345]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-119666",
                "id_b": "none",
                "location": "West Side of South Van Ness Ave - North of HWY 101",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417982471549621, 37.770496124289345],
                        [-122.417916713213003, 37.77030133340687]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_005",
                "id_b": "none",
                "location": "145 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417884792891485, 37.771208315680994],
                        [-122.417910211060899, 37.771202799828387]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-403030",
                "id_b": "none",
                "location": "Howard St - North of South Van Ness Ave Intersection",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417522534359435, 37.770530378287553],
                        [-122.417472550600138, 37.770669056696264]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-80609",
                "id_b": "none",
                "location": "Howard St - North of South Van Ness Ave Intersection",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417522534359435, 37.770530378287553],
                        [-122.417581797281798, 37.770374291417674]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-82463",
                "id_b": "none",
                "location": "12th St - East of South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418278724300876, 37.772317896640082],
                        [-122.417978821745649, 37.772190492371045]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-337573",
                "id_b": "none",
                "location": "12 St - West of South Van Ness Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418278724300876, 37.772317896640082],
                        [-122.41885873386353, 37.772563291657747]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-82225",
                "id_b": "none",
                "location": "South Van Ness Ave - North of 12th St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418278724300876, 37.772317896640082],
                        [-122.418395518035496, 37.772690426346735]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_culvert_005",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 12th St - North Corner",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.418266846971946, 37.772387527589402],
                        [-122.418278724300876, 37.772317896640082]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-105269",
                "id_b": "none",
                "location": "Folsom St - North of 12th St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415021415061958, 37.770910529175552],
                        [-122.414840633675652, 37.771145526459904]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-76608",
                "id_b": "none",
                "location": "Intersection of 12th St and Folsom St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415021415061958, 37.770910529175552],
                        [-122.414875608969112, 37.770849490797708]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-76798",
                "id_b": "none",
                "location": "12th St - East of Folsom St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414875608969112, 37.770849490797708],
                        [-122.414689887890162, 37.770769422731469]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-124539",
                "id_b": "none",
                "location": "Intersection of 12th St and Folsom St - East Corner",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41482700693814, 37.770895628635046],
                        [-122.414863511242217, 37.770844275228676]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-112878",
                "id_b": "none",
                "location": "Intersection of 12th St and Folsom St - North Corner",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    "SW-10": {
		        "PP10": [0, 200, 0]
		    },
                    'SW-18': {
                        'PP10': [0, 50, 0]
                    },
                     'SW-22': {
                        'PP10': [0, 1150, 0]
                    },  
                     'SW-27': {
                        'PP10': [0, 50, 0]
                    },                   
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "79.2",
                        "video_no": "1",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "82.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415069335756101, 37.77101429430234],
                        [-122.415112937101895, 37.77094894247648]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-125341",
                "id_b": "none",
                "location": "Folsom St - South of 12th St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41509068431165, 37.770796979799961],
                        [-122.415210202156217, 37.770634240351214]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-77331",
                "id_b": "none",
                "location": "Folsom St - South of 12th St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415210202156217, 37.770634240351214],
                        [-122.415221557770948, 37.77060677298477]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-124538",
                "id_b": "none",
                "location": "Intersection of 12th St and Folsom St - West Corner",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    "SW-10": {
		        "PP10": [0, 200, 0]
		    },
                    'SW-18': {
                        'PP10': [0, 50, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "79.2",
                        "video_no": "2",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415209918266115, 37.770917530633348],
                        [-122.415130485741329, 37.770956307925935]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-403730",
                "id_b": "none",
                "location": "255 12th St",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    "SW-10": {
		        "PP10": [0, 200, 0]
		    },
                    'SW-18': {
                        'PP10': [0, 300, 0]
                    },                    
                    'SW-20': {
                        'PP10': [0, 50, 0]
                    },
                    'SW-22': {
                        'PP10': [0, 1050, 0]
                    },
                    'SW-27': {
                        'PP10': [0, 50, 0]
                    },
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "79.2",
                        "video_no": "6",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "82.0",
                        "video_no": "3",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415539742095348, 37.771202749711534],
                        [-122.415508627711063, 37.771117834878339]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-339012",
                "id_b": "none",
                "location": "Kissling St - Northeast of 12th St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41619382550256, 37.77141279232611],
                        [-122.416009552264811, 37.771648730508836]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-105477",
                "id_b": "none",
                "location": "12th St - Southeast of Kissling St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41619382550256, 37.77141279232611],
                        [-122.415974889251061, 37.771318901555901]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-98196",
                "id_b": "none",
                "location": "12th St - Northwest of Kissling St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41619382550256, 37.77141279232611],
                        [-122.416334890626231, 37.77147450345101]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-338989",
                "id_b": "none",
                "location": "Intersection of 12th St and Kissling St - North Corner",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.416197232187002, 37.771500040621362],
                        [-122.41621445388158, 37.771421816533469]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_015",
                "id_b": "none",
                "location": "Intersection of 12th St and Kissling St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.416269482285543, 37.771360595894514],
                        [-122.416224070315394, 37.771426023392621]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-82466",
                "id_b": "none",
                "location": "252 12th St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.416075499997362, 37.771167383503219],
                        [-122.416078878292652, 37.771173442436051],
                        [-122.415980311396353, 37.771321226843327]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-129851",
                "id_b": "none",
                "location": "Campbell Ave - East of Brussels St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400645259872846, 37.715123313610583],
                        [-122.40037766636047, 37.715192555708384]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-420852",
                "id_b": "none",
                "location": "Intersection of Brussels St and Campbell Ave - NEC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    },
                    'SW-22': {
                        'PP02': [  367.65,  794.23,  288.13 ],
                        'PP08': [ -367.65,  655.78, -288.13 ]
                    },
                    'SW-27': {
                        'PP02': [  13.54,  27.08,  9.38 ],
                        'PP09': [ -13.54,  22.92, -9.38 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "44.0",
                        "video_no": "11",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "50.0",
                        "video_no": "8",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400611748161893, 37.715215306669243],
                        [-122.400645259872846, 37.715123313610583]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-420851",
                "id_b": "none",
                "location": "Intersection of Brussels St and Campbell Ave - NWC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    },
                    'SW-22': {
                        'PP02': [  367.65,  794.23,  288.13 ],
                        'PP08': [ -367.65,  655.78, -288.13 ]
                    },
                    'SW-27': {
                        'PP02': [  13.54,  27.08,  9.38 ],
                        'PP09': [ -13.54,  22.92, -9.38 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "44.0",
                        "video_no": "12",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "50.0",
                        "video_no": "9",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400739542820574, 37.715188994687786],
                        [-122.400645259872846, 37.715123313610583]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267616",
                "id_b": "none",
                "location": "1345 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "45.0",
                        "video_no": "7",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400889329075142, 37.71572139391057],
                        [-122.400811005293662, 37.715741346503286]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267560",
                "id_b": "none",
                "location": "1333 Brussels St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    },
                    'SW-21': {
                        'PP02': [0,   1607.14,  642.86],
                        'PP08': [0,    642.86, -642.86],
                    },
                    'SW-27': {
                        'PP02': [  13.54,  27.08,  9.38 ],
                        'PP09': [ -13.54,  22.92, -9.38 ]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "45.0",
                        "video_no": "2",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "50.0",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400936442454721, 37.71583389655288],
                        [-122.400860522597739, 37.715853220984485]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-107674",
                "id_b": "none",
                "location": "Intersection of Brussels St and Wilde Ave - NEC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "43.0",
                        "video_no": "4",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "50.1",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401139682652087, 37.716319214464143],
                        [-122.401115424174733, 37.716391225082269]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-94072",
                "id_b": "none",
                "location": "Wilde Ave - West of Brussels St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401139682652087, 37.716319214464143],
                        [-122.401250658933378, 37.716290924559424]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-94931",
                "id_b": "none",
                "location": "Wilde Ave - West of Brussels St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401250658933378, 37.716290924559424],
                        [-122.401403337287874, 37.716251160409257]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-93252",
                "id_b": "none",
                "location": "Wilde Ave - East of Brussels St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401139682652087, 37.716319214464143],
                        [-122.400865399301878, 37.716390334841542]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-331998",
                "id_b": "none",
                "location": "Brussels St - North of Wilde Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401139682652087, 37.716319214464143],
                        [-122.401251221630005, 37.716581291233098]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_culvert_001",
                "id_b": "none",
                "location": "Intersection of Brussels St and Wilde Ave - NWC",
                "scope": "Abandon (E) culvert",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401241468221627, 37.716349977250573],
                        [-122.401139682652087, 37.716319214464143]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_culvert_002",
                "id_b": "none",
                "location": "Intersection of Brussels St and Wilde Ave - SEC",
                "scope": "Abandon (E) culvert",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401202829719153, 37.71624993632593],
                        [-122.401139682652087, 37.716319214464143]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417363",
                "id_b": "none",
                "location": "Intersection of Campbell Ave and Goettingen St - NEC",
                "scope": "Install (N) culvert",
                "pp_history": {
                    'SW-22': {
                        'PP01': [ 361.31,  780.53,  283.16],
                        'PP08': [1063.69, -780.53, -283.16],
                    },
                    'SW-27': {
                        'PP01': [ 13.54,  27.08,  9.38],
                        'PP09': [ 36.46, -27.08, -9.38]
                              }   
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "42.1",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401621771682201, 37.714862862516839],
                        [-122.401595491849392, 37.714958295664843]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417364",
                "id_b": "none",
                "location": "Intersection of Campbell Ave and Goettingen St - NWC",
                "scope": "Install (N) culvert",
                "pp_history": {
                    'SW-22': {
                        'PP01': [ 342.29,  739.45,   268.26],
                        'PP08': [1007.71, -739.45,  -268.26]
                              },
                    'SW-27': {
                        'PP01': [ 13.54,  27.08,   9.38],
                        'PP09': [ 36.46, -27.08,  -9.38]
                              }                      
                             },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "42.1",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401712819921315, 37.714901003052155],
                        [-122.401621771682201, 37.714862862516839]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-391010",
                "id_b": "none",
                "location": "Intersection of Campbell Ave and Goettingen St - SEC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "39.0",
                        "video_no": "8",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401621771682201, 37.714862862516839],
                        [-122.401555554780856, 37.714827013669613]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_culvert_004",
                "id_b": "none",
                "location": "Intersection of Campbell Ave and Goettingen St - NWC",
                "scope": "Abandon (E) culvert",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401621771682201, 37.714862862516839],
                        [-122.401709302148348, 37.714916390215336]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_culvert_003",
                "id_b": "none",
                "location": "Intersection of Campbell Ave and Goettingen St - NEC",
                "scope": "Abandon (E) culvert",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401621771682201, 37.714862862516839],
                        [-122.401586180097638, 37.714945527600712]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-93717",
                "id_b": "none",
                "location": "Intersection of Campbell Ave and Goettingen St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401621771682201, 37.714862862516839],
                        [-122.401542776988165, 37.714685868896048]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-94073",
                "id_b": "none",
                "location": "Intersection of Campbell Ave and Goettingen St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401621771682201, 37.714862862516839],
                        [-122.401658863493154, 37.714953507641077]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-266974",
                "id_b": "none",
                "location": "1386 Goettingen St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401729632806294, 37.71492060531537],
                        [-122.401653839965292, 37.714941231128961]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267267",
                "id_b": "none",
                "location": "1393 Goettingen St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401663561450633, 37.714964123824167],
                        [-122.401590370385975, 37.714984936714693]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-97587",
                "id_b": "none",
                "location": "Goettingen St Intersection - North of Campbell Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401658863493154, 37.714953507641077],
                        [-122.401712250869807, 37.715074149377003]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-416498",
                "id_b": "none",
                "location": "Campbell Ave between Geottingen Ave and Brussels St",
                "scope": "Install (N) 12in VCP main",
                "pp_history": {
                    'SW-11': {
                        'PP01': [0, 89628.41,  1871.59],
                        'PP08': [0,  1871.59, -1871.59],                       
                    },
                    'SW-25': {
                        'PP02': [0,  500, 0]  
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "49.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401621771682201, 37.714862862516839],
                        [-122.400800940766828, 37.715089372811427]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267334",
                "id_b": "none",
                "location": "136 Campbell Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    },
                    'SW-21': {
                        'PP01': [0, 1607.14,  642.86],
                        'PP08': [0,  642.86, -642.86],
                    },
                    'SW-27': {
                        'PP01': [ 13.54, 27.09,  9.37],
                        'PP09': [-13.54, 22.91, -9.37]
                              }                       
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "39.0",
                        "video_no": "7",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "42.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401266570158157, 37.714960881329375],
                        [-122.401295498247862, 37.715024059344984]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267335",
                "id_b": "none",
                "location": "130 Campbell Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "39.0",
                        "video_no": "6",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401184875974195, 37.714983425040053],
                        [-122.40121355483258, 37.715046976357314]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267555",
                "id_b": "none",
                "location": "124 Campbell Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "39.0",
                        "video_no": "5",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401105438440851, 37.71500534601585],
                        [-122.401134646358685, 37.715068365562438]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267556",
                "id_b": "none",
                "location": "118 Campbell Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "39.0",
                        "video_no": "4",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.401009618024517, 37.715031787878473],
                        [-122.401037804140628, 37.715095865959931]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-267557",
                "id_b": "none",
                "location": "108 Campbell Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "39.0",
                        "video_no": "2",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400926290700482, 37.715054782236081],
                        [-122.400955584821602, 37.715118782950057]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_018",
                "id_b": "none",
                "location": "100 Campbell Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "39.0",
                        "video_no": "1",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Capped')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.40081882379333, 37.715084437953983],
                        [-122.400845499223351, 37.715145192044162]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_001",
                "id_b": "none",
                "location": "Opposite 108 Campbell Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "39.0",
                        "video_no": "3",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, sewer_status_code_array[12])
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400842379907914, 37.715077937595893],
                        [-122.400814046195322, 37.715015329052704]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-94606",
                "id_b": "none",
                "location": "Visitacion Ave - West of Hahn St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415353392467921, 37.713526506501033],
                        [-122.415542310029579, 37.713599025855288]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-131168",
                "id_b": "none",
                "location": "Intersection of Visitacion Ave and Hahn St - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415353392467921, 37.713526506501033],
                        [-122.415425449548778, 37.71362172897188],
                        [-122.415432469436311, 37.713621238976614]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-110274",
                "id_b": "none",
                "location": "Intersection of Visitacion Ave and Hahn St - NWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415353392467921, 37.713526506501033],
                        [-122.415370529252172, 37.713628098909787]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-90991",
                "id_b": "none",
                "location": "Hahn St - North of Visitacion Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415353392467921, 37.713526506501033],
                        [-122.415250158827533, 37.713731324494354]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-110275",
                "id_b": "none",
                "location": "Intersection of Visitacion Ave and Hahn St - NEC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415353392467921, 37.713526506501033],
                        [-122.415242932472765, 37.713578936041273]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-110521",
                "id_b": "none",
                "location": "Intersection of Visitacion Ave and Hahn St - SWC",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415469633546891, 37.713479793546078],
                        [-122.415353392467921, 37.713526506501033]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-84449",
                "id_b": "none",
                "location": "Hahn St - South of Visitacion Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.415353392467921, 37.713526506501033],
                        [-122.415446715678641, 37.713300128060233]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_006",
                "id_b": "none",
                "location": "1635 Visitacion Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414882869915246, 37.713392135182538],
                        [-122.414910933085153, 37.713330834555926]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-421184",
                "id_b": "none",
                "location": "Visitacion Ave and Sawyer St Intersection - NWC",
                "scope": "Improve (E) culvert as directed",
                "pp_history": {
                    'SW-20': {
                        'PP04': [0,  29.12,  20.88],
                        'PP09': [0,  20.88, -20.88]    
                    },
                    'SW-22': {
                        'PP04': [ 367.65,  794.22,  288.13 ],
                        'PP08': [-367.65,  655.78, -288.13 ],   
                    },
                    'SW-27': {
                        'PP04': [  13.54,   27.08,   9.38],
                        'PP09': [ -13.54,   22.92,  -9.38],  
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "63.0",
                        "video_no": "6",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "67.0",
                        "video_no": "2",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414441632956567, 37.71334798445492],
                        [-122.41440859819167, 37.713262398252837]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_culvert_006",
                "id_b": "none",
                "location": "Visitacion Ave and Sawyer St Intersection - NEC",
                "scope": "Abandon (E) culvert",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414308461560239, 37.713323974595205],
                        [-122.41440859819167, 37.713262398252837]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-421267",
                "id_b": "none",
                "location": "Visitacion Ave - West of Sawyer St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414525252205266, 37.713294084759056],
                        [-122.41440859819167, 37.713262398252837]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-417584",
                "id_b": "none",
                "location": "Visitacion Ave and Sawyer St Intersection - SWC",
                "scope": "Install (N) culvert",
                "pp_history": {
                    'SW-22': {
                        'PP04': [ 278.9,  602.52,  218.58 ],
                        'PP08': [ 821.1, -602.52, -218.58 ]          
                    },
                    'SW-27': {
                        'PP04': [13.54,   27.08,   9.38],
                        'PP09': [36.46,  -27.08,  -9.38],  
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "67.0",
                        "video_no": "1",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414525252205266, 37.713294084759056],
                        [-122.414494488580402, 37.713217155125179]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_culvert_007",
                "id_b": "none",
                "location": "Visitacion Ave and Sawyer St Intersection - SWC",
                "scope": "Abandon (E) culvert",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "cl",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414522568130153, 37.713231855061352],
                        [-122.41440859819167, 37.713262398252837]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-84415",
                "id_b": "none",
                "location": "Sawyer St - South of Visitacion Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41440859819167, 37.713262398252837],
                        [-122.414499856729222, 37.71304549232083]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_020",
                "id_b": "none",
                "location": "1545 Sawyer St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414466186279839, 37.713125521292831],
                        [-122.414393422846004, 37.713105680513948]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-90434\n",
                "id_b": "none",
                "location": "Visitacion Ave - East of Sawyer St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414152269062228, 37.71319878020077],
                        [-122.414042428468932, 37.713165786991802]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-98147",
                "id_b": "none",
                "location": "Sawyer St - North of Visitacion Ave",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.41440859819167, 37.713262398252837],
                        [-122.414310010064611, 37.713473505261376]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_013",
                "id_b": "none",
                "location": "380 Sawyer St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.414327815709328, 37.713435378033324],
                        [-122.414389912902166, 37.713453578745437]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-77335",
                "id_b": "none",
                "location": "Sheridan St - Northeast of 10th St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411820100568008, 37.772163968350107],
                        [-122.411746274899059, 37.772221384969114]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-159362",
                "id_b": "none",
                "location": "353 10th St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411762873775331, 37.772208475488149],
                        [-122.41179362515571, 37.772233324400624]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-158519",
                "id_b": "none",
                "location": "365 10th St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411787933455614, 37.772188985762995],
                        [-122.411758154891785, 37.772163968350107]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-81898",
                "id_b": "none",
                "location": "10th St - Northwest of Sheridan St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.412090624973544, 37.772213335913058],
                        [-122.411925323360705, 37.772081957307641]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-83108",
                "id_b": "none",
                "location": "10th St - Southeast of Sheridan St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411925323360705, 37.772081957307641],
                        [-122.411761718889636, 37.77195066790307]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-157674",
                "id_b": "none",
                "location": "360 10th St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411884986081404, 37.77204958744754],
                        [-122.411972390760354, 37.771985010658121]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "L-157673",
                "id_b": "none",
                "location": "364 10th St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411824694785537, 37.772001204861709],
                        [-122.411909483370408, 37.771936000679901]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // #################################################### 
        {
            "type": "Feature",
            "properties": {
                "id_a": "P-402346",
                "id_b": "none",
                "location": "Intersection of 10th St and Sheridan St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "mn",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.411925888604074, 37.772082406552819],
                        [-122.411820100568008, 37.772163968350107]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // ####################################################         

        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_021",
                "id_b": "none",
                "location": "1366 Brussels St",
                "scope": "(E) to remain",
                "pp_history": {
                    'SW-19': {
                        'PP01': [0, 150, 0]
                    },
                    'SW-20': {
                        'PP01': [0, 29.13,  20.87],
                        'PP09': [0, 20.87, -20.87]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "44.0",
                        "video_no": "7",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Capped')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.400850951464207, 37.715412736411857],
                        [-122.400768788531792, 37.715430143984996]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // ####################################################         	

        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_lateral_022",
                "id_b": "none",
                "location": "370 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                    'SW-27': {
                        'PP11': [0, 0, 50]
                    }                    
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "76.0",
                        "video_no": "24",
                        "response": "MCN - Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "102.0",
                        "video_no": "13",
                        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417821517109843, 37.767152168582676],
                        [-122.417715977143104, 37.767157076459391]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },


        // ####################################################         	

        {
            "type": "Feature",
            "properties": {
                "id_a": "L-364290",
                "id_b": "none",
                "location": "1501 15th St",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "75.0",
                        "video_no": "35",
                        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417648231406119, 37.766457485415025], 
                        [-122.417752485317848, 37.766454024360300]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // ####################################################         	

        {
            "type": "Feature",
            "properties": {
                "id_a": "unkown_lateral_024",
                "id_b": "none",
                "location": "315 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": 'none',
			"response": 'none',
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Capped' )
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417809494011067, 37.768154221516347],
                        [-122.417689831463193, 37.768160521585799]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // ####################################################         	

        {
            "type": "Feature",
            "properties": {
                "id_a": "unkown_lateral_025",
                "id_b": "none",
                "location": "301 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417817624402716, 37.76824188359079],
                        [-122.417698835610011, 37.768248900105419]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },

        // ####################################################         	

        {
            "type": "Feature",
            "properties": {
                "id_a": "unkown_lateral_026",
                "id_b": "none",
                "location": "300 South Van Ness Ave",
                "scope": "Improve (E) side sewer as directed",
                "pp_history": {
                    'SW-0': {
                        'PP0': {
                            'SFPUC-SW': {
                                'QTY': 0,
                                'UNIT': ''
                            }
                        }
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
                "submittals": {
                    "tvi_pre_con": {
                        "submittal_no": "none",
                        "video_no": 'none',
			"response": 'none',
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    },
                    "tvi_post_con": {
                        "submittal_no": "none",
                        "video_no": "none",
                        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
                    }
                },
                "rlvnt": "none",
                "sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found' )
                }
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-122.417814173142574, 37.768204672035303],
                        [-122.417912684095995, 37.768199669131008]
                    ]
                ]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
        },
        
// ####################################################         	
        
        {
	    "type": "Feature",
	    "properties": {
		"id_a": "L-160210",
		"id_b": "3548001",
		"location": "300 South Van Ness Ave",
		"scope": "Improve (E) side sewer as directed",
                "pp_history": {
//                    'SW-19': {
//                        'PP10': [0, 0, 150]
//                    },
                    'SW-20': {
                        'PP10': [0, 0, 50]
                    },
                    'SW-21': {
                        'PP10': [0, 0, 3250]
                    },
                    'SW-27': {
                        'PP11': [0, 0, 50]
                    }                    
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                },
		"submittals": {
		    "tvi_pre_con": {
		        "submittal_no": "76.0",
		        "video_no": "1",
                        "response": "Replace (per Email)",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
		    },
		    "tvi_post_con": {
		        "submittal_no": "102.0",
		        "video_no": "1",
		        "response": "NET",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
		    }
		},
		"rlvnt": "none",
		"sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
	    },
	    "geometry": {
		"type": "MultiLineString",
		"coordinates": [
		    [
		        [-122.417808385045504, 37.768142264615307],
		        [-122.417913434441573, 37.768137388935706]
		    ]
		]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
	},

// ####################################################         	
        
        {
	    "type": "Feature",
	    "properties": {
		"id_a": "unknown_lateral_027",
		"id_b": "none",
		"location": "1501 15th St",
		"scope": "Improve (E) side sewer as directed",
		"pp_history": {
		    'SW-0': {
		        'PP0': {
		            'SFPUC-SW': {
		                'QTY': 0,
		                'UNIT': ''
		            }
		        }
		    }
		},
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
		"submittals": {
		    "tvi_pre_con": {
		        "submittal_no": "none",
		        "video_no": "none",
		        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
		    },
		    "tvi_post_con": {
		        "submittal_no": "none",
		        "video_no": "none",
		        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
		    }
		},
		"rlvnt": "none",
		"sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this, '(E) Not Found')
                }
	    },
	    "geometry": {
		"type": "MultiLineString",
		"coordinates": [
		    [
                         [-122.417666192793845, 37.766634606015707],
                         [-122.417768617747555, 37.766627819587441]
		    ]
		]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
	},

// ####################################################         	

	{
	    "type": "Feature",
	    "properties": {
		"id_a": 'L-161771',
		"id_b": "none",
		"location": "501 South Van Ness Ave",
		"scope": "Improve (E) side sewer as directed",
		"pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
		        "PP10": [0, 0, 50]
		    }
		},
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                },
		"submittals": {
		    "tvi_pre_con": {
		        "submittal_no": "75.0",
		        "video_no": "22",
		        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
		    },
		    "tvi_post_con": {
		        "submittal_no": "none",
		        "video_no": "none",
		        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
		    }
		},
		"rlvnt": "none",
		"sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
	    },
	    "geometry": {
		"type": "MultiLineString",
		"coordinates": [
		    [
		        [-122.417512952201989, 37.765012964396043],
		        [-122.417392075315121, 37.76502079069661]
		    ]
		]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
	},

// ####################################################         	

	{
	    "type": "Feature",
	    "properties": {
		"id_a": "L-364285",
		"id_b": "none",
		"location": "510 South Van Ness Ave",
		"scope": "Improve (E) side sewer as directed",
		"pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
		        "PP10": [0, 0, 50]
		    }
		},
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
		"submittals": {
		    "tvi_pre_con": {
		        "submittal_no": "75.0",
		        "video_no": "23",
		        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
		    },
		    "tvi_post_con": {
		        "submittal_no": "none",
		        "video_no": "none",
		        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
		    }
		},
		"rlvnt": "none",
		"sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
	    },
	    "geometry": {
		"type": "MultiLineString",
		"coordinates": [
		    [
		        [-122.41758645038864, 37.764715399406633],
		        [-122.417482499137563, 37.76472232247535]
		    ]
		]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
	},

// ####################################################         	

	{
	    "type": "Feature",
	    "properties": {
		"id_a": "unknown_lateral_028",
		"id_b": "none",
		"location": "460 South Van Ness Ave",
		"scope": "Improve (E) side sewer as directed",
		"pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
		        "PP10": [0, 0, 50]
		    }
		},
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
		"submittals": {
		    "tvi_pre_con": {
		        "submittal_no": "75.0",
		        "video_no": "14",
		        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
		    },
		    "tvi_post_con": {
		        "submittal_no": "none",
		        "video_no": "none",
		        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
		    }
		},
		"rlvnt": "none",
		"sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
	    },
	    "geometry": {
		"type": "MultiLineString",
		"coordinates": [
		    [
		        [-122.417604682769309, 37.765935622491767],
		        [-122.417701403389174, 37.765932000315061]
		    ]
		]
            },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
	},
	
// ####################################################         		
	
	{
	    "type": "Feature",
	    "properties": {
		"id_a": "unknown_lateral_029",
		"id_b": "none",
		"location": "490 South Van Ness Ave",
		"scope": "Improve (E) side sewer as directed",
		"pp_history": {
                    'SW-10': {
                        'PP09': [0, 0, 200]
                    },                       
                    'SW-18': {
                        'PP09': [0, 0, 300]
                    },       
                    'SW-20': {
		        "PP10": [0, 0, 50]
		    }
		},
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
		"submittals": {
		    "tvi_pre_con": {
		        "submittal_no": "75.0",
		        "video_no": "2",
		        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
		    },
		    "tvi_post_con": {
		        "submittal_no": "none",
		        "video_no": "none",
		        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
		    }
		},
		"rlvnt": "none",
		"sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
	    },
	    "geometry": {
		"type": "MultiLineString",
		"coordinates": [
		    [
		        [-122.41756167141348, 37.765485639451896],
		        [-122.417658905613223, 37.76548038981916]
		    ]
		]
		    },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
	},
	
// ####################################################         		
	
	{
	    "type": "Feature",
	    "properties": {
		"id_a": "L-158310",
		"id_b": "none",
		"location": "252 12th St",
		"scope": "Improve (E) side sewer as directed",
		"pp_history": {
		    "SW-10": {
		        "PP10": [0, 200, 0]
		    },
		    "SW-18": {
		        "PP10": [0, 300, 0]
		    },
		    "SW-20": {
		        "PP10": [0, 50, 0]
		    }
		},
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history) 
                }, 
		"submittals": {
		    "tvi_pre_con": {
		        "submittal_no": "80.0",
		        "video_no": "1",
		        "response": "MCN - Do Not Replace",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
		    },
		    "tvi_post_con": {
		        "submittal_no": "none",
		        "video_no": "none",
		        "response": "none",
                        get response_date() {
                            return response_date_from_submittal_no(this.submittal_no)
                        }
		    }
		},
		"rlvnt": "none",
		"sw_type": "lt",
                get status() {
                    return sw_line_status_from_line_object( this)
                }
	    },
	    "geometry": {
		"type": "MultiLineString",
		"coordinates": [
		    [
		        [-122.415951875681529, 37.771308977391911],
		        [-122.415998011174452, 37.771242223094383]
		    ]
		]
	    },
            get asset_coordinate() {
                return linked_asset_function_line(this.properties.location, this.geometry.coordinates)
            }
	}

    ]
}
