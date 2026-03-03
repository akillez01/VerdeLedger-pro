'use client';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { polygon, polygonAmoy } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';

const config = getDefaultConfig({
  appName: 'VerdeLedger Community',
  projectId: 'e01b4421d017a78363717d3b5934f59e', // Public demo project ID for WalletConnect
  chains: [polygon, polygonAmoy],
  ssr: true,
});

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider 
          theme={lightTheme({
            accentColor: '#5A5A40',
            accentColorForeground: 'white',
            borderRadius: 'large',
            fontStack: 'system',
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
