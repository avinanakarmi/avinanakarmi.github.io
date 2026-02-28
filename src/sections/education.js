const educationData = [
	{
		degree: "Ph.D. in Data Science",
		school: "New Jersey Institute of Technology",
		location: "Newark, NJ",
		period: "Feb 2025 – Present",
		detail: "Thesis (tentative): Semantic Reasoning Framework for Human-AI Collaboration",
	},
	{
		degree: "B.S. in Computer Science & IT",
		school: "Tribhuvan University",
		location: "Deerwalk Institute of Technology, Kathmandu",
		period: "Feb 2020",
		detail: "",
	},
];

const Education = () => {
	return (
		<section id="education" className="py-20 px-4 bg-white">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-textPrimary mb-8">Education</h2>
				<div className="space-y-6">
					{educationData.map((edu, idx) => (
						<div key={idx} className="border-l-4 border-accentYellow pl-5">
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
								<h3 className="text-lg font-semibold text-textPrimary">
									{edu.degree}
								</h3>
								<span className="text-sm text-textSecondary italic shrink-0">
									{edu.period}
								</span>
							</div>
							<p className="text-sm text-accentTeal font-medium mt-0.5">
								{edu.school} &middot; {edu.location}
							</p>
							{edu.detail && (
								<p className="text-sm text-textSecondary mt-1 leading-relaxed">
									{edu.detail}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Education;
