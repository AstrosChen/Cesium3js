function techniques() {
    return {
        "techniques": {
            "technique_id": {
                "name": "user-defined technique name",
                "parameters": {
                    "ambient": {
                        "type": 35666,
                        "extensions": {
                            "extension_name": {
                                "extension specific": "value"
                            }
                        },
                        "extras": {
                            "Application specific": "The extra object can contain any properties."
                        }
                    },
                    "diffuse": {
                        "type": 35678
                    },
                    "lightColor": {
                        "type": 35665,
                        "value": [
                            1,
                            1,
                            1
                        ]
                    },
                    "lightTransform": {
                        "node": "directional_light_node_id",
                        "type": 35676
                    },
                    "modelViewMatrix": {
                        "semantic": "MODELVIEW",
                        "type": 35676
                    },
                    "projectionMatrix": {
                        "semantic": "PROJECTION",
                        "type": 35676
                    },
                    "normalMatrix": {
                        "semantic": "MODELVIEWINVERSETRANSPOSE",
                        "type": 35675
                    },

                    "position": {
                        "semantic": "POSITION",
                        "type": 35665
                    },
                    "normal": {
                        "semantic": "NORMAL",
                        "type": 35665
                    },
                    "texcoord": {
                        "semantic": "TEXCOORD_0",
                        "type": 35664
                    },

                    "joint": {
                        "semantic": "JOINT",
                        "type": 35666
                    },
                    "jointMatrix": {
                        "semantic": "JOINTMATRIX",
                        "type": 35676
                    },
                    "weight": {
                        "semantic": "WEIGHT",
                        "type": 35666
                    }
                },
                "attributes": {
                    "a_position": "position",
                    "a_normal": "normal",
                    "a_texcoord0": "texcoord0",
                    "a_joint": "joint",
                    "a_jointMatrix": "jointMatrix",
                    "a_weight": "weight"
                },
                "program": "program_id",
                "uniforms": {
                    "u_ambient": "ambient",
                    "u_diffuse": "diffuse",
                    "u_lightColor": "lightColor",
                    "u_lightTransformMatrix": "lightTransform",
                    "u_modelViewMatrix": "modelViewMatrix",
                    "u_projectionMatrix": "projectionMatrix",
                    "u_normalMatrix": "normalMatrix"
                },
                "states": {
                    "enable": [3042, 2884, 2929, 32823, 32926, 3089],
                    "functions": {
                        "blendColor": [0.0, 0.0, 0.0, 0.0],
                        "blendEquationSeparate": [32774, 32774],
                        "blendFuncSeparate": [1, 1, 0, 0],
                        "colorMask": [true, true, true, true],
                        "cullFace": [1029],
                        "depthFunc": [513],
                        "depthMask": [true],
                        "depthRange": [0.0, 1.0],
                        "frontFace": [2305],
                        "lineWidth": [1.0],
                        "polygonOffset": [0.0, 0.0],
                        "scissor": [0, 0, 0, 0],
                        "extensions": {
                            "extension_name": {
                                "extension specific": "value"
                            }
                        },
                        "extras": {
                            "Application specific": "The extra object can contain any properties."
                        }
                    },
                    "extensions": {
                        "extension_name": {
                            "extension specific": "value"
                        }
                    },
                    "extras": {
                        "Application specific": "The extra object can contain any properties."
                    }
                },
                "extensions": {
                    "extension_name": {
                        "extension specific": "value"
                    }
                },
                "extras": {
                    "Application specific": "The extra object can contain any properties."
                }
            }
        }
    }
}