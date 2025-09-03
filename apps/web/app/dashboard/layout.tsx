import {SidebarDemo} from "@components/manualComponents/DashboardDemo";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
        <SidebarDemo children={children}/>
    </div>
  );
}
