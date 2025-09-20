export default function Projects() {
	const projects = [
		{
			title: "Claim-Evidence Framework",
			year: "Current Project",
			summary:
				"A framework adapting sensemaking loops and Data/Frame theory to study how charts and captions communicate scientific evidence.",
			details: [
				"Models how readers build and test frames by generating claims, linking them to evidence, and validating them with reasoning strategies.",
				"Operationalized via a generator-validator pipeline with human-in-the-loop calibration, producing a structured claim pool.",
				"Groups claims by reasoning strategy and shows that different strategies yield different claims from the same chart-caption pair.",
				"When primed with these strategies and design cues, the LLM produces claims that support clearer, more interpretable caption rewrites.",
				"Distinguishes between perceptual clarity (ease of reading visuals) and semantic clarity (ease of understanding the message in context).",
				"Introduces VisClaimer, an interactive interface demonstrating how reasoning strategies shape multiple interpretations of the same visualization."
			],
		},
		{
			title: "Multimodal Semantic Interpretability of Scientific Charts",
			year: "Past Project",
			summary:
				"An exploratory study of how readers interpret scientific chart-caption pairs.",
			details: [
				"Collected 200 chart-caption pairs with 800 ratings from climate and energy publications.",
				"Used surveys, focus groups, and computational analysis to study chart features and caption composition.",
				"Found positive chart sentiment improves interpretability, while useful captions mitigate unclear visuals."
			],
		},
	];

	return (
		<section
			id="projects"
			className="flex flex-col p-8 bg-background snap-start h-screen items-center justify-center"
		>
			<h2 className="text-5xl text-textPrimary font-bold mb-2">Projects</h2>
			<div className="w-full max-w-5xl space-y-8">
				{projects.map((proj, idx) => (
					<div
						key={idx}
						className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accentTeal"
					>
						<div className="flex items-center justify-between mb-2">
							<h3 className="text-xl font-semibold text-textPrimary">
								{proj.title}
							</h3>
							<span className="text-sm text-textSecondary italic">
								{proj.year}
							</span>
						</div>
						<p className="text-base text-textSecondary mb-3">{proj.summary}</p>
						<ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
							{proj.details.map((d, i) => (
								<li key={i}>{d}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
