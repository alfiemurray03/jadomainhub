import { useEffect } from 'react';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    // Redirect to JA Group Services Privacy Policy
    window.location.href = 'https://jagroupservices.co.uk/privacy-policy';
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <title>Privacy Policy - JA Domain Hub</title>
      <div className="text-center">
        <p className="text-lg text-muted-foreground">Redirecting to Privacy Policy...</p>
      </div>
    </div>
  );
}
