import '@/global.css';
import Footer from "@/components/Footer";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex justify-between flex-col min-h-screen">
        {children}
      	<Footer />
      </body>
    </html>
  );
};

export default RootLayout;
