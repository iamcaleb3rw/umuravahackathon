"use client";

import { useState, useMemo } from "react";
import TagComponent from "./TagComponent";
import Link from "next/link";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import ChallengeCard from "./ChallengeCard";

import { Hackathon } from "@/types/hackathon";

interface ListProps {
  hackathons: Hackathon[];
}

type HackathonStatus = "Completed" | "Ongoing" | "Open";
type ActiveStatus = HackathonStatus | "All";

const getHackathonStatus = (
  startDate: Date,
  endDate: Date,
  deadline: Date
): HackathonStatus => {
  const now = new Date();

  if (now > endDate) return "Completed";
  if (now >= deadline && now <= endDate) return "Ongoing";
  return "Open";
};

const List = ({ hackathons }: ListProps) => {
  const [activeStatus, setActiveStatus] = useState<ActiveStatus>("All");

  const filteredHackathons = useMemo(() => {
    if (activeStatus === "All") return hackathons;
    return hackathons.filter((hackathon) => {
      const status = getHackathonStatus(
        new Date(hackathon.startDate),
        new Date(hackathon.endDate),
        new Date(hackathon.deadline)
      );
      return status === activeStatus;
    });
  }, [hackathons, activeStatus]);

  const statusCounts = useMemo(() => {
    return hackathons.reduce(
      (acc, hackathon) => {
        const status = getHackathonStatus(
          new Date(hackathon.startDate),
          new Date(hackathon.endDate),
          new Date(hackathon.deadline)
        );
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      },
      { All: hackathons.length, Completed: 0, Ongoing: 0, Open: 0 } as Record<
        ActiveStatus,
        number
      >
    );
  }, [hackathons]);

  return (
    <div>
      <div className="mt-6 flex justify-between">
        <div className="flex gap-2 overflow-x-auto">
          {(["All", "Completed", "Open", "Ongoing"] as const).map((status) => (
            <div
              key={status}
              onClick={() => setActiveStatus(status)}
              className={`cursor-pointer flex items-center rounded-lg bg-muted ${
                activeStatus === status
                  ? "opacity-100 border-yellow-300 border bg-primary/30"
                  : ""
              }`}
            >
              <TagComponent
                name={`${status} challenges`}
                count={statusCounts[status]}
                onClick={() => {}}
                isActive={activeStatus === status}
              />
            </div>
          ))}
        </div>
        <Link href="/dashboard/create">
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Create a Challenge
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filteredHackathons.length > 0 ? (
          filteredHackathons.map((hackathon) => (
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
            There are currently no {activeStatus} challenges
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
