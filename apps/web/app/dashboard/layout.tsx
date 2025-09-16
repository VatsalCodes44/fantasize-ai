import { auth } from "@clerk/nextjs/server";
import {SidebarDemo} from "@components/manualComponents/DashboardDemo";
import PrismaClient from "@repo/db/client";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {userId} = await auth();
  let FAIs = 0;
  if (userId) {
    const user = await PrismaClient.fAITokenAccount.findUnique({
      where: {
        userId
      }
    })
    if (user) {
      FAIs = user.FAI
    }
  }
  return (
    <div className="">
      <SidebarDemo FAIs={FAIs} children={children}/>
    </div>
  );
}
