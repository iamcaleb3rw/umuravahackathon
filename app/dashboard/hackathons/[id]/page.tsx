import ContactDetail from "@/components/ContactDetail";
import DeleteButton from "@/components/DeleteButton";
import RegisterButton from "@/components/RegisterButton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  deleteHackathonById,
  fetchHackathonsById,
} from "@/lib/actions/hackathon";
import logo from "@/public/homepage/whitelogo.png";
import { auth, currentUser } from "@clerk/nextjs/server";
import { unstable_cache } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const HackathonPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const hackathonId = (await params).id;
  const { userId } = await auth();
  const user = await currentUser();

  const getHackathon = async () => {
    return await fetchHackathonsById(hackathonId);
  };

  const hackathon = await getHackathon();
  if (!hackathon) {
    return redirect("/dashboard/hackathons");
  }

  const participantsLength = hackathon.participants.length;

  const isAuthor = hackathon.createdBy === userId;

  // Get the current date
  const today = new Date(); // Current date
  const deadlineDate = new Date(hackathon.deadline); // Convert hackathon deadline to Date object

  return (
    <div className="p-2">
      <div className="grid grid-cols-8 gap-3">
        <div className="col-span-5 ">
          <div className="border p-3 rounded-lg">
            <div className="min-h-[270px] bg-primary flex items-center justify-center rounded-md">
              <Image src={logo} alt="Logo" width={180} />
            </div>
            <div>
              <div>
                <h1 className="text-lg font-semibold my-3">
                  Project Brief: {hackathon.title}
                </h1>
                <p>{hackathon.projectBrief}</p>
              </div>
              <div>
                <h1 className="text-lg font-semibold my-3">
                  Project Description
                </h1>
                <p>{hackathon.projectDescription}</p>
              </div>
              <div>
                <h1 className="text-lg font-semibold my-3">Project Tasks</h1>
                <p>{hackathon.projectTasks}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-3">
          <div className="border p-3 rounded-lg">
            <div>
              <h1 className="font-semibold ">Key Instructions</h1>
              <p className="text-sm text-mutedtext mt-2">
                You are free to schedule a clarification call with the team via
                this
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-8">
              <ContactDetail
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    color={"#332ce6"}
                    fill={"none"}
                  >
                    <path
                      d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.01576 13.4756C2.08114 16.5411 2.11382 18.0739 3.24495 19.2093C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.755 19.2093C21.8862 18.0739 21.9189 16.5411 21.9842 13.4756C22.0053 12.4899 22.0053 11.51 21.9842 10.5244C21.9189 7.45883 21.8862 5.92606 20.755 4.79063C19.6239 3.6552 18.0497 3.61565 14.9012 3.53654C12.9607 3.48778 11.0393 3.48778 9.09882 3.53653C5.95033 3.61563 4.37608 3.65518 3.24495 4.79062C2.11382 5.92605 2.08113 7.45882 2.01576 10.5243C1.99474 11.51 1.99474 12.4899 2.01576 13.4756Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                detail={hackathon.contactEmail}
                description={"Contact Email"}
              />
              <ContactDetail
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    color={"#332ce6"}
                    fill={"none"}
                  >
                    <path
                      d="M18 2V4M6 2V4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 8H20.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 8H21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                detail={hackathon.timeline}
                description={"Duration"}
              />
              <ContactDetail
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    color={"#332ce6"}
                    fill={"none"}
                  >
                    <path
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M14.7102 10.0611C14.6111 9.29844 13.7354 8.06622 12.1608 8.06619C10.3312 8.06616 9.56136 9.07946 9.40515 9.58611C9.16145 10.2638 9.21019 11.6571 11.3547 11.809C14.0354 11.999 15.1093 12.3154 14.9727 13.956C14.836 15.5965 13.3417 15.951 12.1608 15.9129C10.9798 15.875 9.04764 15.3325 8.97266 13.8733M11.9734 6.99805V8.06982M11.9734 15.9031V16.998"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                }
                detail={hackathon.prize}
                description={"Money Prize"}
              />
              {!isAuthor && (
                <div>
                  <RegisterButton
                    id={hackathon._id.toString()}
                    clerkId={userId?.toString()}
                    firstName={user?.firstName?.toString()}
                    email={user?.primaryEmailAddress?.emailAddress}
                    avatarUrl={user?.imageUrl}
                  />
                </div>
              )}

              {isAuthor && (
                <div className="grid grid-cols-2 gap-2">
                  <div className="">
                    <Link href={`/dashboard/hackathons/${hackathonId}/update`}>
                      <Button className="w-full">Edit</Button>
                    </Link>
                  </div>
                  <div>
                    <DeleteButton id={hackathon._id} title={hackathon.title} />
                  </div>
                </div>
              )}
              {/* Render message if the registration deadline has passed */}
              {deadlineDate < today && (
                <div className="flex items-center justify-center mt-4">
                  <span className="text-red-500 text-sm border border-red-300 italic w-full p-3 text-center rounded-md bg-red-600/10">
                    The registration deadline has passed.
                  </span>
                </div>
              )}
            </div>
          </div>
          {hackathon.participants && (
            <div className="border rounded-lg">
              <div className="flex border-b p-3 items-center gap-2">
                <h1>Participants</h1>
                <div className="p-1 min-h-5 flex bg-primary text-white font-semibold items-center rounded-full justify-center aspect-video">
                  {participantsLength}
                </div>
              </div>
              <div className="">
                {hackathon.participants.map((participant: any) => (
                  <div
                    key={participant._id}
                    className="border-b p-3 flex items-center gap-4"
                  >
                    <Image
                      src={participant.avatarUrl}
                      alt="Profile Image"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <p className="text-sm">{participant.firstName}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HackathonPage;
