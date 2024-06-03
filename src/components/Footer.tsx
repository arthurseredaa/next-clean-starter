const links = [
  {href: "/", text: "Main"},
  {href: "/hit-counter", text: "Hit Counter"},
  {href: "/hit-counter-with-client-side", text: "Hit Counter With Client Side"},
]

const Footer = () => {
  const timestamp = new Date().toLocaleString();

  return (
	<footer className="footer p-10 bg-neutral text-neutral-content">
	  <nav>
		<h6 className="footer-title">Other pages</h6>
		{
		  links.map(({href, text}) => (
			<a key={href} href={href} className="link link-hover">{text}</a>
		  ))
		}
	  </nav>
	  <nav>
		<h6 className="footer-title">Page rendered at</h6>
		<p className="text-sm">{timestamp}</p>
	  </nav>
	</footer>
  );
};

export default Footer;
