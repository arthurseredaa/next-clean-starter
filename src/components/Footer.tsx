const links = [
  {href: "/", text: "Main"},
  {href: "/hit-counter", text: "Hit counter"},
  {href: "/hit-counter-with-client-side", text: "Hit counter with client side"},
  {href: "/styled-components-fix-usage", text: "Styled components usage with rsc"},
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
