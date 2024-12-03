import Image from "next/image"
import LogoTs from "../../app/images/02421c3f-a230-4d8d-9dfd-b7fd09551dab.png"

export function TransparentLogo() {
    return <div className="shrink-0 w-[200px] h-14 relative">
        <Image  fill src={LogoTs} alt="Quarum Logo" className="object-contain" />
    </div>
}
