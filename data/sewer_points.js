var json_1243I_sewer_points = {
    "type": "FeatureCollection",
    "name": "1243I_sewer_points",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "31312",
                "id_b": "none",
                "location": "490 South Van Ness Ave",
                "scope": "Mortar (E) manhole",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417537391532392, 37.765248646983601]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "197444",
                "id_b": "none",
                "location": "566 South Van Ness Ave",
                "scope": "Mortar (E) manhole",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417409440162743, 37.763980697192601]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "197442",
                "id_b": "none",
                "location": "510 South Van Ness Ave",
                "scope": "Mortar (E) manhole",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417487104467739, 37.764768346320793]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "106519",
                "id_b": "none",
                "location": "370 South Van Ness Ave",
                "scope": "Remove (E)",
                "pp_history": {
                    'SW-07': {
                         'PP13': [0, 0, 3700]
                     },
                    'PCO-02_SW-07': {
                        'PP13': [0, 0, -3700]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.41772716813729, 37.767274994627044]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "315340",
                "id_b": "none",
                "location": "Erie St - East of South Van Ness Ave",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP08': [0, 0, 8500]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417695965699764, 37.769226665913123]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "318727",
                "id_b": "none",
                "location": "Bryant St between Beale St and Main St",
                "scope": "Install (N) manhole per std 87,182",
                "pp_history": {
                    'SW-04': {
                        'PP12': [0, 40000, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.389216728175597, 37.786580832876588]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "318726",
                "id_b": "none",
                "location": "Intersection of Bryant St and Main St",
                "scope": "Install (N) manhole per std 87,182",
                "pp_history": {
                    'SW-04': {
                        'PP12': [0, 40000, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.388800178438743, 37.786904656260383]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "318716",
                "id_b": "none",
                "location": "170 South Van Ness Ave",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP07': [0, 8095.24, 404.76],
                        'PP08': [0, 404.76, -404.76],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417982471549621, 37.770496124289345]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "318714",
                "id_b": "none",
                "location": "1601 Mission St",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP08': [0, 8500, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.418537551093493, 37.772231591334574]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "318718",
                "id_b": "none",
                "location": "139 South Van Ness Ave",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP04': [0, 8095.24, 404.76],
                        'PP08': [0, 404.76, -404.76],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417945169313654, 37.771312348007577]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "318717",
                "id_b": "none",
                "location": "101 South Van Ness Ave",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP05': [0, 8095.24, 404.76],
                        'PP08': [0, 404.76, -404.76]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.418139660574738, 37.77194446043702]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "316603",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 15th St",
                "scope": "Remove (E)",
                "pp_history": {
                    'SW-07': {
                        'PP13': [0, 0, 3700]
                    },
                    'PCO-02_SW-07': {
                        'PP13': [0, 0, -3700]
                    },
                    'PCO-02_SW-39': {
                        'PP13': [0, 0, 3000]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417690051505232, 37.766877506348102]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320212",
                "id_b": "none",
                "location": "Intersection of Brussels St and Wilde Ave - NWC",
                "scope": "Install (N) catchbasin",
                "pp_history": {
                    'SW-23': {
                        'PP02': [5000, 0, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.401226087846894, 37.716362143879564]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320503",
                "id_b": "none",
                "location": "Intersection of Visitacion Ave and Sawyer St - SWC",
                "scope": "Install (N) catchbasin",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.414494488580402, 37.713217155125179]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320528",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Elliot St",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP03': [0, 8095.24, 404.76],
                        'PP08': [0, 404.76, -404.76],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.411656583086, 37.713722462670304]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320531",
                "id_b": "none",
                "location": "Intersection of 10th St and Sheridan St - North Corner",
                "scope": "Install (N) catchbasin",
                "pp_history": {
                    'SW-23': {
                        'PP09': [5000, 0, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.411837581128722, 37.772183822700043]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320540",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and Plum St - NWC",
                "scope": "Install (N) catchbasin",
                "pp_history": {
                    'SW-23': {
                        'PP08': [5000, 0, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.418147702516023, 37.770959884425586]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320544",
                "id_b": "none",
                "location": "450 South Van Ness Ave",
                "scope": "Install (N) manhole per std 87,184",
                "pp_history": {
                    'SW-05': {
                        'PP08': [0, 0, 40000]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417613566698762, 37.76603093997155]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "173584",
                "id_b": "none",
                "location": "Intersection of Brussels St and Campbell Ave - NWC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.400739542820602, 37.715188994687786]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "157544",
                "id_b": "none",
                "location": "Intersection of Bryant St and Beale St - North Corner",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.38966029818954, 37.786349041935274]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "173186",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Delta St - NWC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.409545551243198, 37.713193951826298]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "35489",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.409470867981852, 37.713213901129059]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "30761",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.411187024204409, 37.713452141425662]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "158388",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.415469633546891, 37.713479793546078]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "173281",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.415370529252172, 37.713628098909787]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "30576",
                "id_b": "none",
                "location": "Intersection of Visitacion Ave and Sawyer St",
                "scope": "Mortar (E) manhole",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.41440859819167, 37.713262398252837]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "17146",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.415974889251061, 37.771318901555901]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "204874",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.414827006938125, 37.770895628635046]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "155220",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.41747049484519, 37.763498124388775]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "197441",
                "id_b": "none",
                "location": "550 South Van Ness Ave",
                "scope": "Install (N) manhole per std 87,184",
                "pp_history": {
                    'SW-05': {
                        'PP08': [0, 0, 40000]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417447470471444, 37.764372258925206]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "168118",
                "id_b": "none",
                "location": "490 South Van Ness Ave",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417630519969023, 37.765274726568336]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "18403",
                "id_b": "none",
                "location": "483 South Van Ness Ave",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417477367792188, 37.765204818771899]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320543",
                "id_b": "none",
                "location": "490 South Van Ness Ave",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417583325730448, 37.765705310049157]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "293014",
                "id_b": "none",
                "location": "490 South Van Ness Ave",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417746443680898, 37.765769421949237]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "18386",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 15th St",
                "scope": "Mortar (E) manhole",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417686013922918, 37.766830065380773]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "331044",
                "id_b": "N-423712",
                "location": "South Van Ness Ave - North of 15th St",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'PCO-02_SW-03': {
                        'PP13': [0, 0, 9500]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417693354981807, 37.766918708875998]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "168088",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 15th St - NEC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417574980407522, 37.766880553014694]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "35488",
                "id_b": "none",
                "location": "241 Sawyer St",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.413883860691229, 37.714422050268332]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320530",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Schwerin St",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP02': [0, 8095.24, 404.76],
                        'PP08': [0, 404.76, -404.76]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.410262455128404, 37.713339104803502]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "35492",
                "id_b": "none",
                "location": "Intersection of Visitacion Ave and Hahn St",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.415353392467921, 37.713526506501033]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "168558",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 12th St - NEC",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.418266846971946, 37.772387527589402]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "293775",
                "id_b": "none",
                "location": "154 South Van Ness Ave",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.418246309090605, 37.771280123673854]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "276299",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.416193825502589, 37.77141279232611]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "204873",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.414840406563485, 37.77097587608899]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320539",
                "id_b": "none",
                "location": "160 South Van Ness Ave",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP08': [0, 8500, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.418116029638895, 37.770912941313398]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "168760",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417248040449252, 37.763513790622319]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "168116",
                "id_b": "none",
                "location": "501 South Van Ness Ave",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417409898359168, 37.765129115435997]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "168117",
                "id_b": "none",
                "location": "483 South Van Ness Ave",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417425820687086, 37.765280069259887]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "18385",
                "id_b": "none",
                "location": "490 South Van Ness Ave",
                "scope": "Mortar (E) manhole",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417575650939241, 37.765622091271105]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "168089",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 15th St - SEC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417566354663364, 37.766777401519029]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "156552",
                "id_b": "N-43487",
                "location": "349 South Van Ness Ave",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417659402584562, 37.767640039555374]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "229466",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.418012732206549, 37.769198897468556]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "168470",
                "id_b": "none",
                "location": "Intersection of Bryant St and Beale St - West Corner",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.389834281284664, 37.786244612228224]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "304801",
                "id_b": "none",
                "location": "Bryant St between Beale St and Main St",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.389258721363021, 37.786641768480536]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "158717",
                "id_b": "none",
                "location": "Intersection of Bryant St and Main St - South Corner",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.388774318659699, 37.786823393564596]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "29753",
                "id_b": "none",
                "location": "451 Leland Ave",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.413072905162124, 37.71390119183787]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320506",
                "id_b": "none",
                "location": "Visitacion Ave - East of Hahn St",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP04': [0, 8095.24, 404.76],
                        'PP08': [0, 404.76, -404.76],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.415096547170734, 37.713450720433372]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "318715",
                "id_b": "none",
                "location": "154 South Van Ness Ave",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP08': [0, 8500, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.418224533987612, 37.771256163234519]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "302012",
                "id_b": "none",
                "location": "131 South Van Ness Ave",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417940715315339, 37.771341296107252]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "318719",
                "id_b": "none",
                "location": "165 South Van Ness Ave",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP04': [0, 8095.24, 404.76],
                        'PP08': [0, 404.76, -404.76],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417736821168859, 37.770659447992465]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "296329",
                "id_b": "none",
                "location": "255 12th St",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.415508627711063, 37.771117834878339]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "18357",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 17th St",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417368202478755, 37.763571656045798]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "168761",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417481606110016, 37.763631875882872]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "18358",
                "id_b": "none",
                "location": "South Van Ness Ave - North of 17th St",
                "scope": "Mortar (E) manhole",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417379199194457, 37.763670271663138]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "31292",
                "id_b": "none",
                "location": "415 South Van Ness Ave",
                "scope": "Install (N) manhole riser per std 87,185",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.41764655573148, 37.76644096125262]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "157478",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 15th St - NWC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.4177900734323, 37.766868656506368]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "29876",
                "id_b": "none",
                "location": "Intersection of Brussels St and Wilde Ave",
                "scope": "Install (N) manhole per std 87,181",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.401139682652087, 37.71631921446415]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "318925",
                "id_b": "none",
                "location": "1375 Brussels St",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP01': [0, 8095.23, 404.77],
                        'PP08': [0, 404.77, -404.77],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.400804315455872, 37.71551838836848]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "156610",
                "id_b": "N-45890",
                "location": "Bryant St between Beale St and Main St",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.389060940248513, 37.786598102956503]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "170158",
                "id_b": "none",
                "location": "Intersection of Bryant St and Main St - West Corner",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.388932503324099, 37.78691498035132]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "173278",
                "id_b": "none",
                "location": "500 Leland Ave",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.413965552123045, 37.71437676538303]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "29754",
                "id_b": "none",
                "location": "301 Sawyer St",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.41392725289829, 37.714327451561864]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "173280",
                "id_b": "none",
                "location": "241 Sawyer St",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.413853099079702, 37.714391591754222]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "17109",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.415021415061958, 37.770910529175552]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "307524",
                "id_b": "none",
                "location": "255 12th St",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.415539742095376, 37.771202749711534]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "159893",
                "id_b": "none",
                "location": "2901 16th St",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.41762960357616, 37.765117343379202]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "274118",
                "id_b": "none",
                "location": "490 South Van Ness Ave",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417678172403868, 37.765731389472855]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "331043",
                "id_b": "N-423713",
                "location": "344 South Van Ness Ave",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-07': {
                        'PP13': [0, 0, 3700]
                    },
                    'PCO-02_SW-03': {
                        'PP13': [0, 0, 9500]
                    },
                    'PCO-02_SW-07': {
                        'PP13': [0, 0, -3700]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417761489184443, 37.767636630225383]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "106517",
                "id_b": "none",
                "location": "330 South Van Ness Ave",
                "scope": "Remove (E)",
                "pp_history": {
                    'SW-07': {
                        'PP13': [0, 0, 3700]
                    },
                    'PCO-02_SW-07': {
                        'PP13': [0, 0, -3700]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417784045718292, 37.767879836751803]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "168543",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 14th St - NWC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417734510793068, 37.768490880089075]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "35455",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.401250658933378, 37.716290924559431]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "173585",
                "id_b": "none",
                "location": "Intersection of Brussels St and Campbell Ave - NEC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.400611748161893, 37.715215306669243]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "175168",
                "id_b": "none",
                "location": "Intersection of Bryant St and Main St - East Corner",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.388662376927556, 37.786909855059712]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "160265",
                "id_b": "none",
                "location": "302 Sawyer St",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.414012814996326, 37.714299088042011]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "173277",
                "id_b": "none",
                "location": "2 Loehr St",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.41308166509107, 37.714046877856802]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "30757",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Delta St",
                "scope": "Install (N) manhole per std 87,181",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.409514375484719, 37.71313015786609]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "160259",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Delta St - NEC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.40942652912544, 37.713169179607718]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320527",
                "id_b": "none",
                "location": "Leland Ave - West of Rey St",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP03': [0, 8095.24, 404.76],
                        'PP08': [0, 404.76, -404.76],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.411209730548165, 37.713606713589307]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "173182",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Elliot St - NWC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.411707503491343, 37.713778528566408]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "250608",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.415432469436325, 37.713621238976614]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "173282",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.415242932472765, 37.71357893604128]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "276298",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.416197232187017, 37.771500040621362]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "32331",
                "id_b": "none",
                "location": "1585 Folsom St",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.414875608969112, 37.770849490797708]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "293778",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and Howard St - North Corner",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417676692190966, 37.770718542722754]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "17147",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.416075499997362, 37.771167383503219]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "200673",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.41509068431165, 37.770796979799961]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "32333",
                "id_b": "none",
                "location": "12th St - West of Folsom St",
                "scope": "Install (N) manhole riser per std 87,185",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.415130485741329, 37.770956307925942]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "163111",
                "id_b": "none",
                "location": "550 South Van Ness Ave",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417538193376458, 37.764366463392015]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "17127",
                "id_b": "none",
                "location": "275 South Van Ness Ave",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417844879558928, 37.768848048310119]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "17120",
                "id_b": "N-30041",
                "location": "Intersection of South Van Ness Ave and 14th St",
                "scope": "Mortar (E) manhole",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417831275125266, 37.768427336686536]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320545",
                "id_b": "none",
                "location": "South Van Ness Ave - South of 14th St",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-05': {
                        'PP09': [0, 0, 40000]
                    },   
                    'PCO-02_SW-05': {
                        'PP13': [0, 0, -40000]
                    },
                    'PCO-02_SW-03': {
                        'PP13': [0, 0, 9500]
                    }

                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.41782755871418, 37.768348995430159]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "157545",
                "id_b": "none",
                "location": "Intersection of Bryant St and Beale St - East Corner",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.389544130622227, 37.786219161740391]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320526",
                "id_b": "none",
                "location": "462 Leland Ave",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP03': [0, 8095.24, 404.76],
                        'PP08': [0, 404.76, -404.76],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.413060834794521, 37.714099898471737]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "256234",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.41161636635745, 37.713814206841811]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "299993",
                "id_b": "none",
                "location": "565 South Van Ness Ave",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417290079977093, 37.764505737173401]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "168090",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 15th St - SWC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417781264161675, 37.766764924675748]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "106516",
                "id_b": "none",
                "location": "310 South Van Ness Ave",
                "scope": "Remove (E)",
                "pp_history": {
                    'SW-07': {
                        'PP13': [0, 0, 3700]
                    },
                    'PCO-02_SW-07': {
                        'PP13': [0, 0, -3700]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417805877375713, 37.76811522683527]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "168545",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 14th St - SWC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.41793492170018, 37.768357917632997]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "168544",
                "id_b": "none",
                "location": "Intersection of South Van Ness and 14th St - SEC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417713588775314, 37.76836553414676]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "166359",
                "id_b": "none",
                "location": "Intersection of Brussels St and Wilde Ave - NEC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.401115424174719, 37.716391225082269]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "14069",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.389794456040391, 37.786344763221074]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "304802",
                "id_b": "none",
                "location": "Bryant St between Beale St and Main St",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.389296666415063, 37.786611584757999]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "175161",
                "id_b": "none",
                "location": "Intersection of Bryant St and Main St - North Corner",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.388778830165293, 37.787038878597521]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320525",
                "id_b": "none",
                "location": "301 Sawyer St",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP03': [0, 8095.23, 404.77],
                        'PP08': [0, 404.77, -404.77],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.413777926665034, 37.714295059132063]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "173179",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Rey St - SWC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.411217472528463, 37.713545858930786]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "173285",
                "id_b": "none",
                "location": "Intersection of Visitacion Ave and Sawyer St - NWC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.414441632956581, 37.71334798445492]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "17130",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 12th St - NEC",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.418278724300876, 37.772317896640082]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "306831",
                "id_b": "none",
                "location": "1675 Howard St",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417522534359435, 37.770530378287553]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "204872",
                "id_b": "none",
                "location": "Intersection of 12th St and Folsom St - West Corner",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.415209918266115, 37.770917530633348]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "284092",
                "id_b": "none",
                "location": "Erie St - West of South Van Ness Ave",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417632429119791, 37.769231736671443]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "156553",
                "id_b": "none",
                "location": "565 South Van Ness Ave",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417345750850671, 37.764382401107206]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_catchbasin_001",
                "id_b": "none",
                "location": "Intersection of Brussels St and Wilde Ave - SWC",
                "scope": "Abandon (E)",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.401202829719153, 37.716249936325937]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "318926",
                "id_b": "none",
                "location": "Intersection of Brussels St and Campbell Ave",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP01': [0, 8095.24, 404.76],
                        'PP08': [0, 404.76, -404.76],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.400645259872846, 37.715123313610583]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "14068",
                "id_b": "none",
                "location": "Intersection of Bryant St and Beale Se",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.389657981167801, 37.786235547142518]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "168469",
                "id_b": "N-52658",
                "location": "Intersection of Bryant St and Beale Se",
                "scope": "Abandon (E)",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": null
        },

        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "14067",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.389591016946426, 37.786181918072799]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "30758",
                "id_b": "none",
                "location": "337 Leland Ave",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.410280952744884, 37.713109331647232]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "158368",
                "id_b": "none",
                "location": "337 Leland Ave",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.410272639209325, 37.713283942869246]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "173181",
                "id_b": "none",
                "location": "Intersection of Leland Ave and Elliot St - NEC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.411569810558163, 37.713736520252326]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320504",
                "id_b": "none",
                "location": "Intersection of Visitacion Ave and Sawyer St - NEC",
                "scope": "Install (N) catchbasin",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.414303712813123, 37.713308131350217]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "326043",
                "id_b": "none",
                "location": "Visitacion Ave - West of Sawyer St",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP04': [0, 8095.23, 404.77],
                        'PP08': [0, 404.77, -404.77],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.414525252205266, 37.713294084759056]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "160693",
                "id_b": "none",
                "location": "Intersection of 12th St and Folsom St - North Corner",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.415069335756101, 37.77101429430234]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "197442",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 17th St - NEC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417260755401841, 37.763646002634545]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "17123",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417838845592229, 37.768481522673618]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320207",
                "id_b": "none",
                "location": "Intersection of Bryant St and Beale St - South Corner",
                "scope": "Install (N) catchbasin",
                "pp_history": {
                    'SW-23': {
                        'PP09': [5000, 0, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.389561056249974, 37.786088765120127]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320206",
                "id_b": "none",
                "location": "Intersection of Bryant St and Beale St - South Corner",
                "scope": "Install (N) catchbasin",
                "pp_history": {
                    'SW-23': {
                        'PP09': [5000, 0, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.389691864742659, 37.786087387224271]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320532",
                "id_b": "none",
                "location": "Intersection of 10th St and Sheridan St - East Corner",
                "scope": "Install (N) catchbasin",
                "pp_history": {
                    'SW-23': {
                        'PP09': [5000, 0, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.411794134298219, 37.772148809282058]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320546",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and Erie St - NEC",
                "scope": "Install (N) catchbasin",
                "pp_history": {
                    'SW-23': {
                        'PP08': [5000, 0, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417752018403746, 37.769297294301204]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "168469",
                "id_b": "N-52658",
                "location": "Intersection of Bryant St and Beale St - South Corner",
                "scope": "Abandon (E)",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.389655394473181, 37.78610411508307]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "163323",
                "id_b": "N-49478",
                "location": "Bryant St between Beale St and Main St",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.389296377403355, 37.786410882418885]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320208",
                "id_b": "none",
                "location": "Intersection of Bryant St and Main St - West Corner",
                "scope": "Install (N) catchbasin",
                "pp_history": {
                    'SW-23': {
                        'PP12': [5000, 0, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.388974237138498, 37.786861469080527]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "163089",
                "id_b": "none",
                "location": "344 South Van Ness Ave",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417853023012199, 37.767634961829806]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "157559",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and 14th St - NWC",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417943124522708, 37.768473835544299]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "229469",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.41804572235381, 37.768847323912297]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "229470",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.418087265502336, 37.769122353093515]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "17125",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and Erie St",
                "scope": "Mortar (E) manhole",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417846406880528, 37.769202036510627]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "260012",
                "id_b": "none",
                "location": "Intersection of South Van Ness Ave and Erie St - NEC",
                "scope": "Abandon (E)",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.417738807071629, 37.7692598069344]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_catchbasin_006",
                "id_b": "none",
                "location": "Intersection of Brussels St and Wilde Ave - NWC",
                "scope": "Abandon (E)",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.401241468221656, 37.716349977250566]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320213",
                "id_b": "none",
                "location": "Intersection of Brussels St and Wilde Ave - SWC",
                "scope": "Install (N) catchbasin",
                "pp_history": {
                    'SW-23': {
                        'PP02': [5000, 0, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.401182385074648, 37.716246709197073]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "318909",
                "id_b": "none",
                "location": "Intersection of Campbell Ave and Goettingen St",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP01': [0, 8095.24, 404.76],
                        'PP08': [0, 404.76, -404.76]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.401621771682201, 37.714862862516839]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "173586",
                "id_b": "none",
                "location": "Intersection of Campbell Ave and Goettingen St - NWC",
                "scope": "Install (N) catchbasin",
                "pp_history": {
                    'SW-23': {
                        'PP01': [5000, 0, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.401712819921315, 37.714901003052155]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "320211",
                "id_b": "none",
                "location": "Intersection of Campbell Ave and Goettingen St - NEC",
                "scope": "Install (N) catchbasin",
                "pp_history": {
                    'SW-23': {
                        'PP01': [5000, 0, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.401595491849406, 37.714958295664843]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "297405",
                "id_b": "none",
                "location": "Intersection of Campbell Ave and Goettingen St - South",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.401555554780856, 37.714827013669613]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_catchbasin_005",
                "id_b": "none",
                "location": "Intersection of Campbell Ave and Goettingen St - NWC",
                "scope": "Abandon (E)",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.401709302148348, 37.714916390215329]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_catchbasin_004",
                "id_b": "none",
                "location": "Intersection of Campbell Ave and Goettingen St - NEC",
                "scope": "Abandon (E)",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.401586180097638, 37.714945527600712]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "35456",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.401658863493154, 37.714953507641077]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "318910",
                "id_b": "none",
                "location": "Campbell Ave - West of Brussels St",
                "scope": "Install (N) manhole per std 87,181",
                "pp_history": {
                    'SW-03': {
                        'PP01': [0, 8095.24, 404.76],
                        'PP08': [0, 404.76, -404.76],
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.400800940766828, 37.71508937281142]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_catchbasin_003",
                "id_b": "none",
                "location": "Intersection of Visitacion Ave and Sawyer St - NEC",
                "scope": "Abandon (E)",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.414308461560239, 37.713323974595205]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "unknown_catchbasin_002",
                "id_b": "none",
                "location": "Visitacion Ave and Sawyer St Intersection - SWC",
                "scope": "Abandon (E)",
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
                "rlvnt": "none",
                "sw_type": "cb",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.414522568130153, 37.713231855061345]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "30575",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.414152269062228, 37.71319878020077]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "306346",
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
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.411820100568008, 37.772163968350107]
            },
            get asset_coordinate() {
                return linked_asset_function_point(this.properties.location, this.geometry.coordinates)
            }

        },


        // ######################################

        {
            "type": "Feature",
            "properties": {
                "id_a": "331683",
                "id_b": "none",
                "location": "Bryant St - Southwest of Main St",
                "scope": "Install (N) manhole per std 87,182",
                "pp_history": {
                    'SW-04': {
                        'PP12': [40000, 0, 0]
                    }
                },
                get pp_summary() {
                    return payment_summary_from_pp_history(this.pp_history)
                },
                get bid_items() {
                    return bid_item_flattener(this.pp_history)
                },
                "rlvnt": "none",
                "sw_type": "mh",
                get status() {
                    return sw_point_status_from_scope_and_pp_history(this.scope, this.pp_history)
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-122.388916558978949, 37.786814182836665]
            }
        }
    ]
}
