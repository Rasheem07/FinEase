"use client";
import "./globals.css";
import SideNav from "./components/sideNav";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "./components/header";
import { AppContextProvider } from "./contexts/cardContext";

export default function RootLayout({
  children,
  app,
}: Readonly<{
  children: React.ReactNode;
  app: React.ReactNode;
}>) {
  const router = useRouter();
  const location = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("token")) {
        router.push("/login");
      }
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>FinEase - your financial management app</title>
        <meta name="description" content="financial management app" />
        <link rel="icon" type="image/png" href="/logo.jpg" />
      </head>
      <body>
        <AppContextProvider>
          <main className="flex flex-row m-0 p-0 min-h-[100vh] max-w-[100vw] min-w-[100vw] basis-full transition-transform">
            {location !== "/signup" && location !== "/login" && <SideNav />}
            <div className=" min-h-[100vh] bg-mainBG flex-auto ">
              <Header />
              {location === "/" ? children : app}
            </div>
          </main>
        </AppContextProvider>
      </body>
    </html>
  );
}
