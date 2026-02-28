const skillCategories = [
	{
		category: "Research & AI",
		skills:
			"Multimodal LLMs (GPT, Gemini, Claude), RAG, Chain-of-Verification, Instruction Tuning, Prompt Engineering",
		color: "border-accentTeal",
	},
	{
		category: "Study Design & Analysis",
		skills:
			"User Studies, Thematic Analysis, Participatory Design, Community-Based Participatory Action Research",
		color: "border-accentLavender",
	},
	{
		category: "Data & Visualization",
		skills:
			"D3.js, Tableau, Matplotlib, Seaborn, React (Recharts), PostgreSQL + pgvector, Pandas, NumPy",
		color: "border-accentYellow",
	},
	{
		category: "Engineering",
		skills:
			"FastAPI, React / Next.js, React Native, Docker, Git",
		color: "border-accentTeal",
	},
];

const Skills = () => {
	return (
		<section id="skills" className="py-20 px-4 bg-background">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-textPrimary mb-8">Technical Skills</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					{skillCategories.map((cat, idx) => (
						<div
							key={idx}
							className={`bg-white rounded-lg shadow-soft p-5 border-l-4 ${cat.color}`}
						>
							<h3 className="text-base font-semibold text-textPrimary mb-2">
								{cat.category}
							</h3>
							<p className="text-sm text-textSecondary leading-relaxed">
								{cat.skills}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
