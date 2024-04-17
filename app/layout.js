import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {
  FolderGit2,
  HomeIcon,
  MessageCircleIcon,
  ProjectorIcon,
  UserIcon,
} from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "./Providers";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "EmpowerU",
  description: "Generated by create next app",
};

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Add Project",
    link: "/create",
    icon: (
      <ProjectorIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "All Projects",
    link: "/projects",
    icon: <FolderGit2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Login",
    link: "/login",
    icon: <UserIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <FloatingNav navItems={navItems} />
            {children}
            <Toaster richColors />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
