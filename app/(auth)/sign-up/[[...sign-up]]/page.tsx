import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-blue-300 flex items-center justify-center">
      <SignUp />;
    </div>
  );
}
