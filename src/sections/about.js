import GitHubIcon from "../icons/github";
import LinkedInIcon from "../icons/linkedin";
import MailIcon from "../icons/mail";

const About = () => {
	return (
		<section id="about" className="bg-background text-white p-4 snap-start h-screen flex items-center justify-center">
			<div className="container mx-auto flex justify-center items-center h-full">
				<div className="bg-cardBackground rounded-2xl shadow-2xl flex flex-col md:flex-row h-full w-full max-w-6xl overflow-hidden">
					<div className="flex-1 flex flex-col justify-center items-start p-8">
						<h2 className="text-4xl text-textPrimary font-bold mb-2 tracking-wider">Avina Nakarmi.</h2>
						<p className="my-4 text-lg text-textSecondary text-justify leading-relaxed">
							I am a PhD student in Data Science at the New Jersey Institute of Technology with a background in Computer Science and experience as a software engineer. My research focuses on data visualization, semantic clarity, and interpretability, especially how charts and captions communicate scientific evidence. I study how design choices shape understanding to make complex data clearer and easier to share with wider audiences.
						</p>
						<div className="mt-12 w-full flex flex-col items-center space-y-4">
							{/* Email row */}
							<div className="flex items-center">
								<a
									href="mailto:avinanakarmi5@gmail.com"
									className="flex items-center gap-2 text-base text-gray-800 hover:text-accentTeal underline"
								>
									<MailIcon /> avinanakarmi5@gmail.com
								</a>
							</div>
							{/* Social icons row */}
							<div className="flex space-x-4">
								<a
									href="https://github.com/avinanakarmi"
									target="_blank"
									rel="noopener noreferrer"
									className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm hover:bg-accentTeal hover:text-black transition"
								>
									<GitHubIcon />
								</a>
								<a
									href="https://www.linkedin.com/in/avina-nakarmi-9b296a294/"
									target="_blank"
									rel="noopener noreferrer"
									className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-accentTeal hover:text-black transition"
								>
									<LinkedInIcon />
								</a>
							</div>
						</div>
					</div>
					<div className="flex-1 flex justify-center items-center bg-gray-900 p-8">
						<img
							src="/path/to/your/image.jpg"
							alt="About"
							className="object-cover w-64 h-64 rounded-xl shadow-lg"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}


export default About;