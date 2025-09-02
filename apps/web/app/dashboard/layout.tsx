import {SidebarDemo} from "@components/manualComponents/DashboardDemo";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <SidebarDemo children={children}/>
    </div>
  );
}
