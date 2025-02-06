"use client";
import { Search } from "lucide-react";
import React, { Suspense } from "react";
import { Input } from "./ui/input";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    console.log(term);
  }, 100);
  return (
    <Suspense>
      <div className="text-left relative max-w-[200px]">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-darktext" />
        <Input
          placeholder="Search"
          className="pl-8 max-w-[400px] lg:w-[300px] w-full bg-muted focus-visible:ring-0 focus-visible:ring-offset-0"
          type="search"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
    </Suspense>
  );
};

export default SearchBar;
