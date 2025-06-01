import { AppProvider } from "@/components/context/AppContext";
import "./globals.css";

export const metadata = {
  title: "Sky Software Solution",
  description: "Sky Software Solution provides IT training at Neemuch, specializing in Web Development Training and the best coding classes at Neemuch!",
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
