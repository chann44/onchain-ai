import { MagicCard } from "../ui/magic-card"

const DATA = [
    {
        label: "",
        description: "",
        icon: <></>
    }, {
        label: "",
        description: "",
        icon: <></>
    }, {
        label: "",
        description: "",
        icon: <></>
    }
]

export function CreateYourCustomAgent() {
    return <section className="h-screen gap-y-20 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">Create Your Custom Agent in 3 Steps</h2>
        <div className="grid grid-cols-3 gap-6 w-full">
 {DATA.map(({ icon, label, description }) => {
            return <MagicCard className="h-[300px]" key={label}>
                <h1>{label}</h1>
                {icon}
                <p>{description}</p>
            </MagicCard>
        })}

        </div>
           </section>
}
