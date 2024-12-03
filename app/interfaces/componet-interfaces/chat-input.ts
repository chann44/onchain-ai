import { ComponentProps } from "react";

export interface ChatInputInterface extends ComponentProps<"input"> {
    sendChatAction: CallableFunction;
}
