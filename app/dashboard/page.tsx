import ChallengeCard from "@/components/ChallengeCard";
import StatCard from "@/components/StatCard";
import TalentStats from "@/components/TalentStats";
import {
  fetchHackathons,
  getTotalParticipants,
  numberedHackathons,
} from "@/lib/actions/hackathon";
import { findUser } from "@/lib/actions/user";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user = await currentUser();
  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-up");
  }

  const dbUser = await findUser(userId);

  const hackathons = await fetchHackathons();
  const totalParticipants = await getTotalParticipants(userId);
  console.log(totalParticipants);

  const role = dbUser.role;
  if (!role) {
    return redirect("/onboarding");
  }

  // Count hackathons by status
  const totalHackathons = hackathons.length;
  const openHackathons = hackathons.filter(
    (h: any) => h.status === "Open"
  ).length;
  const ongoingHackathons = hackathons.filter(
    (h: any) => h.status === "Ongoing"
  ).length;
  const closedHackathons = hackathons.filter(
    (h: any) => h.status === "Closed"
  ).length;

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

      {role === "organizer" && (
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex gap-3">
            <StatCard
              timeline=""
              title="Total Challenges"
              number={totalHackathons}
              metric="23%"
            />
            <StatCard
              timeline=""
              title="Total Participants"
              number={totalParticipants}
              metric="23%"
            />
          </div>
          <div className="flex gap-3">
            <StatCard
              timeline=""
              title="Completed Challenges"
              number={closedHackathons}
              metric="23%"
            />
            <StatCard
              timeline=""
              title="Open Challenges"
              number={openHackathons}
              metric="23%"
            />
            <StatCard
              timeline=""
              title="Ongoing Challenges"
              number={ongoingHackathons}
              metric="23%"
            />
          </div>
        </div>
      )}

      {role === "talent" && (
        <div className="flex gap-3 mt-4">
          <TalentStats
            timeline=""
            title="Completed Challenges"
            number={closedHackathons}
            metric="23%"
          />
          <TalentStats
            timeline=""
            title="Open Challenges"
            number={openHackathons}
            metric="23%"
          />
          <TalentStats
            timeline=""
            title="Ongoing Challenges"
            number={ongoingHackathons}
            metric="23%"
          />
        </div>
      )}

      <div className="mt-4">
        <h1 className="text-lg font-semibold">Recent Challenges</h1>
        <div className="grid grid-cols-3">
          {hackathons.length > 0 ? (
            hackathons.map((hackathon: any) => (
              <ChallengeCard
                key={hackathon._id.toString()}
                status={hackathon.status}
                title={hackathon.title}
                level="(Intermediate, Senior)"
                timeline={hackathon.timeline}
                id={hackathon._id.toString()}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-mutedtext italic mt-6">
              There are currently no challenges
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
