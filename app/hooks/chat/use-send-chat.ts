"use client";

import { useSendChatHookInterface } from "@/interfaces/hook-interfaces/use-send-chat-interface";
import { useMutation } from "@tanstack/react-query";

export function useSendChat(input: useSendChatHookInterface) {
    const {
        mutate: sendChat,
        isPending: sendingChat,
        error: chatError,
        ...rest
    } = useMutation({
        mutationFn: async () => {
            console.log(input);
        },
    });

    return {
        sendChat,
        sendingChat,
        chatError,
        ...rest,
    };
}
