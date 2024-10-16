/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	return {
		components: {
            pricing: {
                'discount-disclaimer': '* %5 off when you pay yearly, %10 off when you pay for 2+ years upfront !',
                'dynamic-pricing-disclaimer': '* We use dynamic pricing based on several factors: supply and demand, data-driven insights, regular market analysis, and usage. We are constantly improving our pricing model to provide the best value for our customers. ',
                'plans': [
                    {
                        'name': 'Basic',
                        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate?',
                        'price': '$10',
                        'freeTrial': true,
                        'features': [
                            {
                                'name': 'Feature 1',
                                'description': 'This is a description of Feature 1.',
                                'isHighlighted': false,
                                'isIncluded': true
                            },
                            {
                                'name': 'Feature 2',
                                'description': 'This is a description of Feature 2.',
                                'isHighlighted': false,
                                'isIncluded': true
                            },
                            {
                                'name': 'Feature 3',
                                'description': 'This is a description of Feature 3.',
                                'isHighlighted': false,
                                'isIncluded': true
                            },
                        ]
                    },
                    {
                        'name': 'Pro',
                        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate?',
                        'price': '$20',
                        'freeTrial': true,
                        'features': [
                            {
                                'name': 'Feature 1',
                                'description': 'This is a description of Feature 1.',
                                'isHighlighted': false,
                                'isIncluded': true
                            },
                            {
                                'name': 'Feature 2',
                                'description': 'This is a description of Feature 2.',
                                'isHighlighted': true,
                                'isIncluded': true
                            },
                            {
                                'name': 'Feature 3',
                                'description': 'This is a description of Feature 3.',
                                'isHighlighted': true,
                                'isIncluded': true
                            },
                            {
                                'name': 'Feature 4',
                                'description': 'This is a description of Feature 4.',
                                'isHighlighted': false,
                                'isIncluded': false
                            },
                            {
                                'name': 'Feature 5',
                                'description': 'This is a description of Feature 5.',
                                'isHighlighted': false,
                                'isIncluded': false
                            },
                        ]
                    },
                    {
                        'name': 'Enterprise',
                        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate?',
                        'price': '$30',
                        'freeTrial': false,
                        'features': [
                            {
                                'name': 'Feature 1',
                                'description': 'This is a description of Feature 1.',
                                'isHighlighted': false,
                                'isIncluded': true
                            },
                            {
                                'name': 'Feature 2',
                                'description': 'This is a description of Feature 2.',
                                'isHighlighted': false,
                                'isIncluded': true
                            },
                            {
                                'name': 'Feature 3',
                                'description': 'This is a description of Feature 3.',
                                'isHighlighted': false,
                                'isIncluded': true
                            },
                            {
                                'name': 'Feature 4',
                                'description': 'This is a description of Feature 4.',
                                'isHighlighted': false,
                                'isIncluded': true
                            },
                            {
                                'name': 'Feature 5',
                                'description': 'This is a description of Feature 5.',
                                'isHighlighted': false,
                                'isIncluded': true
                            },
                        ]
                    }
                ]
            }
        }
	};
}