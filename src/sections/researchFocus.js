const focusAreas = [
	{
		title: "Argumentation and Evidence Sufficiency",
		description:
			"How reasoning strategies constrain the way evidence supports a claim, and when evidence is sufficient to reach a conclusion, uncertain, or genuinely contested.",
		tools:
			"Argumentation theory, claim–evidence modeling, argument mining, multi-agent LLM pipelines, open-weight models, Sentence-Transformers",
		color: "border-accentTeal",
	},
	{
		title: "Multimodal Reasoning over Charts and Text",
		description:
			"How humans and AI reason across a chart, its caption and surrounding context, whether these actually cohere, and which reasoning each one invites.",
		tools:
			"Multimodal LLMs (GPT, Gemini, Claude), Sentence-Transformers, YOLO, D3.js, Tableau, Matplotlib, Seaborn, React, Node.js / Express, PostgreSQL, Docker",
		color: "border-accentLavender",
	},
	{
		title: "Communication-Oriented Retrieval and Evaluating Reasoning",
		description:
			"Retrieval and reasoning pipelines judged by whether people get the complete answer they need, not just a relevant one, and scrutiny of whether LLM judges actually ground their verdicts in evidence.",
		tools:
			"RAG with Sentence-Transformers, open-weight models via Hugging Face Transformers, LLM-as-a-judge, Chain-of-Verification, OpenAI / Anthropic / Gemini APIs, Python, scikit-learn",
		color: "border-accentTeal",
	},
	{
		title: "Participatory, Human-Centered AI for Science Communication",
		description:
			"Co-designing AI with communities so environmental health information is accurate, locally grounded, and validated by trusted leaders.",
		tools:
			"Community-based participatory research, participatory design, human-subject studies, qualitative thematic analysis, FastAPI, React",
		color: "border-accentYellow",
	},
];

const ResearchFocus = () => {
	return (
		<section id="research" className="py-20 px-4 bg-background">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-textPrimary mb-8">Research Focus</h2>
				<div className="space-y-5">
					{focusAreas.map((area, idx) => (
						<div
							key={idx}
							className={`bg-white rounded-lg shadow-soft p-5 border-l-4 ${area.color}`}
						>
							<h3 className="text-base font-semibold text-textPrimary">{area.title}</h3>
							<p className="text-sm text-textSecondary mt-2 leading-relaxed">
								{area.description}
							</p>
							<p className="text-sm text-textSecondary mt-3 leading-relaxed">
								<span className="font-semibold text-textPrimary">Tools & methods: </span>
								{area.tools}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ResearchFocus;
