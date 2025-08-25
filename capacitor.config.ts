import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bhatakti.chat',
  appName: 'NextJS AI Chat',
  webDir: 'public',
  server: {
    // --- DEV (when running `pnpm dev` locally) ---
    // Uncomment these lines while testing on your LAN:
    // url: 'http://192.168.29.65:3000',  // replace with your machine’s LAN IP
    // cleartext: true,                   // HTTP only for dev

    // --- PROD (when shipping to stores) ---
    url: 'https://nextjs-ai-chatbot-ashy-ten-10.vercel.app/' // replace with your Vercel deploy URL

  },
  android: {
    allowMixedContent: false // keep strict in prod; flip to true only if you must load http resources
  }
};

export default config;
