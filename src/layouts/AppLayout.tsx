import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

/**
 * AppLayout - Standalone PWA layout without header/footer
 * 
 * This layout is designed for Progressive Web App (PWA) usage where
 * the app runs in standalone mode without browser chrome.
 * 
 * Features:
 * - No header or footer navigation
 * - Full-screen content area
 * - Clean, app-like experience
 * - Optimized for mobile and desktop PWA installation
 */
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  );
}