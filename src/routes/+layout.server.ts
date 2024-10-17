/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	return {
		components: {
            pricing: {
                'description': 'Our platform offers a range of pricing plans to suit your needs. These comprehensive plans provide access to all platform features and services. Alternatively, if you prefer, you can pay individually for specific services.',
                'discount-disclaimer': '* %5 off when you pay yearly, %20 off when you pay for 2+ years upfront !',
                'dynamic-pricing-disclaimer': '* We use dynamic pricing based on several factors: supply and demand, data-driven insights, regular market analysis, and usage. We are constantly improving our pricing model to provide the best value for our customers. ',
                'upgrade-disclaimer': '* You can upgrade or downgrade your plan at any time. The changes will take effect at the end of the current billing cycle.',
                'trail-disclaimer': '* Free trials are available for 7 days. You can cancel your subscription at any time during the trial period. After the trial period ends, you will be charged for the selected plan.',
                'plans': [
                    {
                        'name': 'Basic',
                        'description': 'Perfect for individuals and small teams, who want to get started with a simple service.',
                        'price': 15,
                        'freeTrial': true,
                        'featuresHeader': 'Highlighted features:',
                        'features': [
                            {
                                'name': '2 Services',
                                'description': 'This is a description of Feature 1.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            {
                                'name': '4 Team Members',
                                'description': 'This is a description of Feature 2.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            {
                                'name': 'Complete Customisation',
                                'description': 'This is a description of Feature 3.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            {
                                'name': 'Template Reports',
                                'description': 'This is a description of Feature 3.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            {
                                'name': 'Automation Tools',
                                'description': 'This is a description of Feature 3.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            {
                                'name': 'Migration Tools',
                                'description': 'This is a description of Feature 3.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            {
                                'name': 'Limited API Access',
                                'description': 'This is a description of Feature 3.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            'Addons: ',
                            {
                                'name': '10% Commission on Referrals.',
                                'description': 'This is a description of Feature 2.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': true
                            },
                            {
                                'name': '20% Discount on Extra Services.',
                                'description': 'This is a description of Feature 2.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': true
                            }
                        ]
                    },
                    {
                        'name': 'Pro',
                        'description': 'Great for growing businesses, who want to get more customers and increase their revenue.',
                        'price': 25,
                        'freeTrial': true,
                        'featuresHeader': 'Everything in Basic, plus:',
                        'features': [
                            {
                                'name': '4 Services',
                                'description': 'This is a description of Feature 1.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            {
                                'name': '6 Team Members',
                                'description': 'This is a description of Feature 2.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            {
                                'name': 'AI-Powered Insights',
                                'description': 'This is a description of Feature 3.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            {
                                'name': 'Custom Reports',
                                'description': 'This is a description of Feature 3.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            {
                                'name': 'Rate limited Full API Access',
                                'description': 'This is a description of Feature 3.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            {
                                'name': 'Slack & Email Notifications',
                                'description': 'This is a description of Feature 3.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            {
                                'name': 'Email Support',
                                'description': 'This is a description of Feature 3.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            'Addons: ',
                            {
                                'name': '15% Commission on Referrals.',
                                'description': 'This is a description of Feature 2.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': true
                            },
                            {
                                'name': '50% Discount on Extra Services.',
                                'description': 'This is a description of Feature 2.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': true
                            }
                        ]
                    },
                    {
                        'name': 'Enterprise',
                        'description': 'Best for large businesses, who want to get the most out of our service and support.',
                        'price': 100,
                        'freeTrial': false,
                        'featuresHeader': 'Everything in Pro, plus:',
                        'features': [
                            {
                                'name': '6 Services',
                                'description': 'This is a description of Feature 1.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            {
                                'name': '20 Team Members',
                                'description': 'This is a description of Feature 2.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            {
                                'name': 'Full API Access',
                                'description': 'This is a description of Feature 2.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': false
                            },
                            '',
                            '',
                            '',
                            '',
                            'Addons: ',
                            {
                                'name': '70% Discount on Extra Services.',
                                'description': 'This is a description of Feature 2.',
                                'isHighlighted': false,
                                'isIncluded': true,
                                'isAddOn': true
                            },
                        ]
                    }
                ]
            }
        }
	};
}