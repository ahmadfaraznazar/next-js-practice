import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';

export const Navigation = () => {
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-[var(--foreground)]">Next.js App</h1>
          </div>
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
              {/* <SignOutButton /> */}
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};
