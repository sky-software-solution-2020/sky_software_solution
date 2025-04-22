import "./globals.css";



export const metadata = {
  title: "Sky Software Solution",
  description: "Sky Software Solution ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
