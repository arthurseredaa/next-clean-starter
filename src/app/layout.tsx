import '../global.css';
import Footer from "../components/Footer";

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        {children}
      	<Footer />
      </body>
    </html>
  );
};

export default RootLayout;
