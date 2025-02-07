import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen bg-primary items-center justify-center">
      <SignIn />
    </div>
  );
}
