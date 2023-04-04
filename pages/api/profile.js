export default async function handler(req, res) {
	if (req.method === "GET") {
		res.status(200).json({
			id: "jmonagas",
			name: "Jose G. Monagas",
			email: "jmonagas@hotmail.ca",
			location: "Calgary, AB, Canada",
			occupation: "Website Developer, Full Stack",
			website: "https://jmonagas.com",
			skills:
				"Website Optimization, Content Creation, Proofreading, Translation in English-Spanish",
		});
	} else {
		res.status(500).json({ ERROR: "ONLY GET REQUETS ARE PERMITTED" });
	}
}
