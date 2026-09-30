const skillCategories = [
	{
		category: "LLMs & NLP",
		skills:
			"Retrieval-augmented generation, Open-weight models via Hugging Face Transformers, LLM-as-a-judge evaluation, Chain-of-Verification, Prompt engineering, LangChain Framework",
		color: "border-accentTeal",
	},
	{
		category: "Multimodal AI & Visualization",
		skills:
			"Chart question answering, Chart–caption reasoning, YOLO object detection, D3.js, Tableau, Matplotlib, Seaborn",
		color: "border-accentLavender",
	},
	{
		category: "Research Methods & Statistics",
		skills:
			"Human-subject studies, Annotation design and inter-rater reliability (Cohen's κ), Participatory design / CBPR, Qualitative thematic analysis, Statistical evaluation (SciPy, statsmodels)",
		color: "border-accentYellow",
	},
	{
		category: "Engineering",
		skills:
			"Python, Pandas, NumPy, scikit-learn, SQL / PostgreSQL, JavaScript, React, Node.js / Express, FastAPI, Docker / Docker Compose, Git, React Native, Next.js",
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
