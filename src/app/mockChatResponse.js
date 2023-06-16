const mockChatResponse = [
	{
		id: 1,
		message: 'ANSWER 1',
		user: false,
	},
	{
		id: 2,
		message: 'ANSWER 2',
		user: false,
	},
	{
		id: 3,
		message: 'ANSWER 3',
		user: false,
	},
	{
		id: 4,
		message: 'ANSWER 4',
		user: false,
	},
	{
		id: 5,
		prompt: 'optimize',
		user: false,
		reference: ['how-to-optimize-interchange-fees.pdf', 'data1.csv'],
		message:
			'Interchange fees are set by the card networks and are non-negotiable, but there are some ways you can\nlower them or avoid paying them altogether. Here are some tips based on the search results\n\n- **Apply a surcharge** to your customers who pay with credit cards. This way, you can pass on the\ninterchange fee to them and avoid paying it yourself. However, you need to comply with the rules and\nregulations of surcharging, which may vary by state and card network.\n- **Capture more customer data** when processing card transactions, especially for e-commerce and\nphone-based transactions. Providing the cardholder&#39;s full billing address, CVV code, invoice number, and\nother information can help you qualify for lower interchange rates and reduce the risk of fraud and\nchargebacks.\n- **Use updated hardware** that accepts chip cards and contactless payments. Chip cards are more\nsecure than magnetic stripe cards and have lower interchange rates for card-present transactions.\nContactless payments, such as Apple Pay and Google Pay, also have lower interchange rates than regular\ncredit cards.\n- **Settle your batch every day**. This means sending your transactions to your processor for\nsettlement at the end of each business day. Doing this can help you avoid higher interchange rates for\ndelayed settlement and reduce the risk of errors and disputes.\n- **Provide more data for B2B transactions**. If you sell to other businesses or government entities, you\nmay qualify for lower interchange rates by providing more data about the transaction, such as tax\namount, customer code, merchant name, and product description. This is called Level 2 or Level 3\nprocessing and requires specialized software or hardware.\n- **Contact your issuing bank** and ask for a reduction. This may not always work, but it doesn&#39;t hurt to\ntry. Sometimes, your bank may be willing to lower your interchange fees if you have a good relationship\nwith them, a high volume of transactions, or a low risk profile.\n- **Use a different payment method** that doesn&#39;t involve an intermediary such as a merchant bank.\nFor example, you can use direct debit, ACH transfer, e-check, or cryptocurrency to accept payments\nfrom your customers. These methods may have lower fees than credit cards or no fees at all. However,\nthey may also have less convenience, security, or customer appeal than credit cards.\n',
	},
	{
		id: 6,
		prompt: 'opportunities',
		user: false,
		reference: [
			'how-to-reduce-payment-card-interchange-fees.pdf',
			'data2.csv',
		],
		message:
			'The opportunities in this data depend on your goals and what you want to achieve with your data.\nHowever, some possible opportunities are:\n- **Optimizing your interchange fees**. You can analyze your data to see which transactions have the\nhighest or lowest interchange fees and why. You can then use the tips from the previous answer to\nlower your interchange fees or avoid paying them altogether. For example, you can see if using a\ndifferent card type, card product, or payment method can reduce your interchange fees. You can also\nsee if providing more data or using address verification service can help you qualify for lower\ninterchange rates.\n- **Improving your sales and marketing**. You can use your data to understand your customers better\nand segment them based on their preferences, behaviors, and spending patterns. You can then tailor\nyour products, services, prices, and promotions to each segment and increase your customer\nsatisfaction and loyalty. You can also use your data to identify new markets or niches that you can target\nwith your products or services.\n- **Enhancing your business operations**. You can use your data to monitor and improve your internal\nprocesses and workflows. You can identify and eliminate any inefficiencies, errors, or bottlenecks that\nmay affect your performance or quality. You can also use your data to forecast demand, inventory, cash\nflow, and revenue and plan accordingly.',
	},
	{
		id: 7,
		prompt: 'show',
		user: false,
		reference: ['data2.csv'],
		message:
			'To optimize your interchange fees between 2023/03/01 and 2023/06/15, you can use the following\nsteps:\n\n- **Filter your data**. Select only the transactions that occurred between 2023/03/01 and 2023/06/15.\nYou can use a spreadsheet software or a data analysis tool to do this. You should have 25 transactions in\nthis period.\n- **Calculate your total interchange fees**. Sum up the interchange cost column for the selected\ntransactions. You should get $1,489 as the total interchange fees for this period.\n- **Analyze your data**. Look for patterns and trends in your data that may affect your interchange\nfees. For example, you can look at the distribution of card types, card products, payment methods,\nmerchant category codes, address verification service responses, and interchange program names. You\ncan use charts and graphs to visualize your data and make it easier to understand.\n- **Identify opportunities to lower your interchange fees**. Based on your data analysis, look for ways\nto reduce your interchange fees or avoid paying them altogether. For example, you can see if using a\ndifferent card type, card product, or payment method can reduce your interchange fees.',
	},
];

export default mockChatResponse;
