import React from "react";

const experiencesData = [
	{
		year: "2025 - Present",
		role: "Research Assistant",
		company: "NJIT's Intelligible Information Visualization lab",
		contribution:
			"Advised by Dr. Aritra Dasgupta. Researching data visualization, semantic clarity, and interpretability. My work focuses on how visual and textual representations (such as charts and captions) can be designed and analyzed to more effectively communicate scientific evidence to diverse audiences.",
	},
	{
		year: "2022 - 2024",
		role: "Software Engineer",
		company: "Deerhold Ltd.",
		contribution:
			"Developed React.js interface for healthcare apps to support real-time monitoring of patient vitals. Improved server-state management by integrating Next.js and React Query.",
	},
	{
		year: "2020 - 2022",
		role: "Associate Software Engineer",
		company: "Deerhold Ltd.",
		contribution:
			"Enhanced a DNA-powered health and wellness app by implementing telehealth, file management, and biometric login features, directly improving usability. Strengthened testing culture by configuring Jest and React Testing Library.",
	},
	{
		year: "2018 - 2019",
		role: "Software Engineer Intern",
		company: "Deerwalk Group",
		contribution:
			"Contributed to the creation of DWIT News (a news portal) and DLC Mobile (a mobile learning application), both reaching 10,000+ users in Nepal. Developed early professional skills by participating in structured code reviews and adapting to the waterfall software development lifecycle.",
	},
];

const timelineData = {
	"2025": [experiencesData[0]],
	"2024": [experiencesData[1]],
	"2022": [experiencesData[2]],
	"2020": [experiencesData[3]],
	"2018": [],
}


const Experiences = () => {
	return (
		<section
			id="experiences"
			className="flex flex-col p-8 bg-background snap-start h-screen items-center justify-center"
		>
			<h2 className="text-5xl text-textPrimary font-bold mb-2">Experiences</h2>
			<div className="flex flex-col w-full mx-auto pt-12">
				{Object.keys(timelineData).sort((a, b) => b - a).map((year, idx) => {
					const exps = timelineData[year];
					return (
						<div key={year} className="flex flex-row w-full gap-2">
							{/* Year Column */}
							<div
								className="text-3xl font-bold text-textPrimary basis-[25%] border-r-2 border-accentTeal pr-4 text-right"
								style={{ paddingTop: idx > 0 ? "1rem" : "0" }}
							>
								{year}
							</div>

							{/* Experience Details */}
							<div className="pt-8 basis-[60%] space-y-6">
								{exps.length > 0 &&
									exps.map((exp, idx) => (
										<div key={`exp-${idx}`} className="pt-8 text-left">
											<h3 className="font-semibold text-textSecondary">
												{exp.year} · {exp.role}, {exp.company}
											</h3>
											<p className="text-sm text-textSecondary mt-2">
												{exp.contribution}
											</p>
										</div>
									))}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Experiences;