import { AppProvider } from "@/components/context/AppContext";
import "./globals.css";

export const metadata = {
  title: "Sky Software Solution",
  description: "Trust is what we serve",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="overflow-x-hidden h-screen flex relative">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
