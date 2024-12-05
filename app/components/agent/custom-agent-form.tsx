"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { toast } from "sonner"


const customAgentFormSchema = z.object({
    agentName: z.string().min(2).max(50),
    descripiton: z.string().min(200).max(1000),
    farcasterUserName: z.string(),
    twitterUserName: z.string(),
    skillPrompt: z.string()
})


export function CustomAgentForm() {
    const form = useForm<z.infer<typeof customAgentFormSchema>>({
        resolver: zodResolver(customAgentFormSchema),
        defaultValues: {

        },
    })

    function onSubmit(data: z.infer<typeof customAgentFormSchema>) {
        console.log(data)
        toast.success("Submitted")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                <div className="grid grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="agentName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Agent Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Trading Agent" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is agent public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="twitterUserName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Twitter Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="@jonDoe" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="farcasterUserName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Farcaster Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="@joneDoe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                </div>
                <FormField
                    control={form.control}
                    name="descripiton"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Agent Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Describe your agent" {...field} />
                            </FormControl>
                            <FormDescription>
                                Descripiton should be atleast 200 charachters
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="skillPrompt"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Skill Prompt Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                Skill prompt message should be atleast 200 charachters
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />




                <Button  className="w-full text-xl h-14" type="submit">Submit</Button>
            </form>
        </Form>
    )
}

