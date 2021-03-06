function animations() {
	return {
		"animations": {
			"an_animation": {
				"channels": [
					{
						"sampler": "a_sampler",
						"target": {
							"id": "node_id",
							"path": "rotation",
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
				],
				"name": "user-defined animation name",
				"parameters": {
					"TIME": "time_accessor",
					"rotation": "rotation_accessor"
				},
				"samplers": {
					"a_sampler": {
						"input": "TIME",
						"interpolation": "LINEAR",
						"output": "rotation",
						"extensions": {
							"extension_name": {
								"extension specific": "value"
							}
						},
						"extras": {
							"Application specific": "The extra object can contain any properties."
						}
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