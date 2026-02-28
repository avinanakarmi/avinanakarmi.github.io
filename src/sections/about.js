import GitHubIcon from "../icons/github";
import LinkedInIcon from "../icons/linkedin";
import MailIcon from "../icons/mail";

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
					</div>
				</div>

				{/* Research Focus */}
				<div>
					<p className="text-base text-textSecondary leading-relaxed text-justify">
						My research focuses on AI that reasons across representational modalities (text and charts) via semantic reasoning spaces where information connects meaningfully. The goal is to lay groundwork for participatory and communicative AI that challenges assumptions, not just extracts information, making AI a genuine partner in critical thinking rather than a tool that amplifies human cognitive limitations.
						My knowledge of human-data interaction and information visualization shapes how I approach AI reasoning. Visualization is about making information meaningful to humans. AI reasoning should be grounded in how humans actually reason, shaped by community values and cultural context, not just patterns from training data. This perspective drives research toward AI systems that function as intellectual partners.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;