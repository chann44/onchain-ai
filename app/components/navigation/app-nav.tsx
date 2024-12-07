"use client";
import { Button } from "../ui/button";
import { SiteLogo } from "../logo/transparent";
import { Wallet } from "../wallet";
import { createSiweMessage } from "viem/siwe";
import { useAccount, useSignMessage } from "wagmi";

export function MainAppTopNav() {
  const { address, chainId } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const onConnect = async () => {
    const message = createSiweMessage({
      address: address ?? ("" as `0x${string}`),
      chainId: chainId ?? 0,
      domain: "example.com",
      nonce: "foobarbaz",
      uri: "https://example.com/path",
      version: "1",
    });

    const signedMessage = await signMessageAsync({ message });

    return signedMessage;
  };
  return (
    <nav className="h-16 mb-10 flex w-full bg-transparent justify-between items-center">
      <SiteLogo className="h-6 w-6 stroke-primary" />
      <Wallet onConnect={onConnect} />
    </nav>
  );
}
