import GitHubIcon from "../icons/github";
import LinkedInIcon from "../icons/linkedin";
import MailIcon from "../icons/mail";
import ScholarIcon from "../icons/scholar";

const About = () => {
	return (
		<section id="about" className="bg-background text-textPrimary py-5 px-4">
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="mb-2">
					<h1 className="text-5xl font-bold tracking-tight mb-2">Avina Nakarmi</h1>
					<p className="text-lg text-accentTeal font-semibold mb-1">
						Ph.D. Student in Data Science
					</p>
					<p className="text-base text-textSecondary">
						New Jersey Institute of Technology &middot; Newark, NJ
					</p>
				</div>

				{/* Contact Row */}
				<div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-textSecondary">
					<a href="mailto:avinanakarmi5@gmail.com" className="hover:text-accentTeal transition flex items-center gap-1">
						<MailIcon /> avinanakarmi5@gmail.com
					</a>
					<span className="hidden sm:inline">&middot;</span>
					<div className="flex items-center gap-3">
						<a
							href="https://www.linkedin.com/in/avina-nakarmi-9b296a294/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-accentTeal transition flex items-center gap-1"
						>
							<LinkedInIcon /> LinkedIn
						</a>
						<a
							href="https://github.com/avinanakarmi"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-accentTeal transition flex items-center gap-1"
						>
							<GitHubIcon /> GitHub
						</a>
						<a
							href="https://scholar.google.com/citations?user=deAxRaEAAAAJ&hl=en"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-accentTeal transition flex items-center gap-1"
						>
							<ScholarIcon /> Google Scholar
						</a>
					</div>
				</div>

				{/* Research Focus */}
				<div>
					<p className="text-base text-textSecondary leading-relaxed text-justify">
						My research is on multimodal semantic reasoning through human-AI collaboration. I study how evidence from text and visual representations, such as charts, captions and their surrounding context, connects to claims, and I use argumentation and reasoning strategies to judge whether that evidence is sufficient across the many aspects of a question. Rather than handing people a final verdict, I want AI to help them build a mental framework for reasoning about consequential and contested claims, making it a partner in critical thinking rather than a tool that amplifies our cognitive shortcuts.
					</p>
					<p className="text-base text-textSecondary leading-relaxed text-justify mt-3">
						My background in human-data interaction and information visualization shapes this approach. Visualization is about making information meaningful to people, and I believe AI reasoning should be grounded the same way: in how people actually reason, and in the values and lived experience of the communities it serves.
					</p>
					<p className="text-base text-textSecondary mt-3">
						Advised by{" "}
						<a
							href="https://aedeegee.github.io/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-accentTeal hover:underline"
						>
							Dr. Aritra Dasgupta
						</a>
						{" "}at the{" "}
						<a
							href="https://niiv.njitvis.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-accentTeal hover:underline"
						>
							NIIV Lab
						</a>
						, NJIT.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;