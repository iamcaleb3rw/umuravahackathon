import StatCard from "@/components/StatCard";
import { currentUser } from "@clerk/nextjs/server";
import { type PageProps } from "@/.next/types/app/layout";

export default async function Dashboard({ searchParams }: PageProps) {
  const user = await currentUser();
  const params = await searchParams;
  const role = params?.role || "organizer";

  return (
    <div className="p-4 bg-[#F9FAFB] min-h-screen">
      <div>
        <h1 className="text-2xl font-semibold">
          Welcome back {user?.firstName || user?.username},
        </h1>
        <p className="text-mutedtext">
          Build Work Experience through Skills Challenges
        </p>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <div className="flex gap-3">
          <StatCard
            timeline={""}
            title={"Total Challenges"}
            number={19341}
            metric={"23%"}
          />
          <StatCard
            timeline={""}
            title={"Total Participants"}
            number={19341}
            metric={"23%"}
          />
        </div>
        <div className="flex gap-3">
          <StatCard
            timeline={""}
            title={"Completed Challenges"}
            number={19341}
            metric={"23%"}
          />
          <StatCard
            timeline={""}
            title={"Open challenges"}
            number={19341}
            metric={"23%"}
          />
          <StatCard
            timeline={""}
            title={"Ongoing Challenges"}
            number={19341}
            metric={"23%"}
          />
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-lg font-semibold">Recent Challenges</h1>
      </div>
      <p>{role}</p>
    </div>
  );
}
