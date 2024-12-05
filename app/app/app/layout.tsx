import { MainAppTopNav } from "@/components/navigation/app-nav";
import { ReactNode } from "react";

export default function MainAppLayout({ children }: { children: ReactNode }) {
    return <>
        <MainAppTopNav />
        {children}
    </>
}
