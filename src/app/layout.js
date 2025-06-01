import { AppProvider } from "@/components/context/AppContext";
import "./globals.css";

export const metadata = {
  title: "Sky Software Solution",
  description: "Sky Software Solution provides IT training at Neemuch, specializing in Web Development Training and the best coding classes at Neemuch!",
  keyword:"python classess in neemuch,c and c++ coaching in neemuch, c classes  in neemuch, programming classess in neemuch ,most reviewed class in Neemuch,it sector courses,,best placement coaching in Neemuch,software training institute in Neemuch,best software training institute in Neemuch,java training,react js training, node js training,training and placement in Neemuch,software training and placement,best coding classes in Neemuch"
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
