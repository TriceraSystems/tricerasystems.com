function generatePrice(basePrice: number) {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    const month = date.getMonth();

    let price = basePrice;

    // If business hours (10am-4pm, Mon-Fri), add 10% to price
    /* 
        Businesses are more likely to pay more for services over
        regular users during business hours. This is because they
        are more likely to be using the services to make money.
    */
    if (day >= 1 && day <= 5 && hour >= 10 && hour <= 16) {
        price *= 1.1;
    }

    // If it's March 5th to April 5th (end of tax year), increase price by 20%
    /* 
        https://www.dmcpas.com/article/year-end-tax-planning-strategies-for-your-business/
        https://www.adp.com/spark/articles/2023/12/year-end-tax-planning-for-your-business-8-strategies-to-consider.aspx
        https://sba.thehartford.com/finance/taxes/how-to-reduce-taxable-income/
        https://www.lendingtree.com/business/year-end-tax-planning-strategies/

        Businesses are more likely to spend more on services at the end of the tax year
        to reduce their taxable income. This is because they can claim the cost of the
        services as a business expense, reducing the amount of tax they have to pay.
    */
    if (month === 2 && day >= 5 || month === 3 && day <= 5) {
        price *= 1.2;
    }

    return price.toFixed(0);
}

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	return {
		components: {
            pricing: {
                'description': 'Our platform offers a range of pricing plans to suit your needs. These comprehensive plans provide access to all platform features and services. Alternatively, if you prefer, you can pay individually for specific services.',
                'discount-disclaimer': '%20 off when you pay yearly, %35 off when you pay for 2+ years upfront !',
                'dynamic-pricing-disclaimer': 'We use dynamic pricing based on several factors: supply and demand, data-driven insights, regular market analysis, and usage. We are constantly improving our pricing model to provide the best value for our customers. ',
                'plans': [
                    {
                        'name': 'Basic',
                        'description': 'Perfect for individuals and small teams, who want to get started with a simple service.',
                        'price': generatePrice(15),
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
                        'price': generatePrice(25),
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
                        'price': generatePrice(100),
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