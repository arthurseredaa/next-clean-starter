const Footer = () => {
  const timestamp = new Date().toLocaleString();

  return (
	<footer className="footer p-10 bg-neutral text-neutral-content">
	  <nav>
		<h6 className="footer-title">Other pages</h6>
		<a href="/" className="link link-hover">Main</a>
		<a href="/hit-counter" className="link link-hover">Hit Counter</a>
	  </nav>
	  <nav>
		<h6 className="footer-title">Page rendered at</h6>
		<p className="text-sm">{timestamp}</p>
	  </nav>
	</footer>
  );
};

export default Footer;
