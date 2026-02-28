export default function Projects() {
	const projects = [
	{
		title: "VisClaimer — Chart-Caption Pairs as Reasoning Tools",
		year: "2024 – Present",
		details: [
			"Investigates chart-caption pairs as reasoning tools for extracting deep insights rather than surface information. Questions how sensemaking loops can apply to multimodal data representations where visual and textual evidence must be reasoned through together.",
			"Examines what reasoning strategies enable moving from evidence to claims when reading charts with captions and contextual knowledge. Studies how different evidentiary reasoning strategies link information across modalities to support insight generation.",
			"Addresses how reasoning processes can be externalized computationally through claim-evidence frameworks. Challenges whether current approaches to multimodal understanding actually engage in evidentiary reasoning or simply aggregate information across modalities.",
		],
	},
	{
		title: "Leap of fAIth — Participatory AI for Equitable Science Communication",
		year: "2023 – Present",
		details: [
			"Explores how AI can amplify rather than replace community expertise in science communication. Questions who controls how scientific information is framed and whether AI can preserve cultural context and community values in knowledge translation.",
			"Challenges the assumption that scientific communication is neutral or universal. Investigates whether AI can be designed to respect epistemic plurality—allowing communities to interpret and communicate science through their own sensemaking frames.",
			"Addresses power dynamics in AI-mediated communication by positioning community leaders as knowledge custodians who validate and shape information before distribution, rather than passive recipients of AI-generated content.",
		],
	},
	{
		title: "Reasoning-on-Demand — Benchmarking Visualization Reasoning Depth",
		year: "2024 – Present",
		details: [
			"Questions what we actually measure when evaluating AI visualization understanding. Examines whether current benchmarks assess genuine reasoning or simply information extraction and pattern recognition.",
			"Investigates the gap between how visualizations are designed to support reasoning and how AI systems actually interact with them. Challenges the treatment of charts as lookup tables rather than reasoning devices.",
			"Addresses fundamental questions about the retrieval-to-reasoning continuum and what cognitive processes are required for meaningful visualization interpretation versus superficial extraction.",
		],
	},
];

	return (
		<section
			id="projects"
			className="py-20 px-4 bg-background"
		>
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-textPrimary mb-8">Research Projects</h2>
				<div className="space-y-6">
					{projects.map((proj, idx) => (
						<div
							key={idx}
							className="bg-white rounded-lg shadow-soft p-6 border-l-4 border-accentTeal"
						>
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
								<h3 className="text-lg font-semibold text-textPrimary">
									{proj.title}
								</h3>
								<span className="text-sm text-textSecondary italic shrink-0">
									{proj.year}
								</span>
							</div>
							<ul className="list-disc list-outside ml-5 space-y-2 text-sm text-textSecondary leading-relaxed">
								{proj.details.map((d, i) => (
									<li key={i}>{d}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
