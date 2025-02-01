import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div>
      <div className="flex justify-end">
        <Skeleton className="h-10 w-[200px] mb-2" />
      </div>
      <hr />
      <div className="w-[350px] border  flex flex-col gap-3 aspect-square p-3 mt-2 rounded-md">
        <Skeleton className="h-[55%] w-[100%]" />
        <Skeleton className="h-3 w-[90%]" />
        <Skeleton className="h-2 w-[10%]" />
        <div className="flex gap-2">
          <Skeleton className="h-4 w-[20%]" />
          <Skeleton className="h-4 w-[20%]" />
        </div>
        <Skeleton className="h-2 w-[80%]" />
        <Skeleton className="h-2 w-[60%]" />
        <hr />
        <Skeleton className="h-9 w-[130px] mb-2" />
      </div>
    </div>
  );
}
