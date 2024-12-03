import { TopMainNav } from "@/components/navigation/top-main-nav";
import { Spacer } from "@/components/spacer";
import { PropsWithChildren } from "react";

export default function MainAppLayout(props: PropsWithChildren) {
    return <>
        <Spacer className="h-4" />
        <TopMainNav />
        {props.children}</>
}
