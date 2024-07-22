"use client";

import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

import { checkAuthStatus } from "@/actions/auth.actions";

const Page = () => {
  const router = useRouter();

  const fetchAuthStatus = async () => {
    // Assuming checkAuthStatus returns a promise
    const response = await checkAuthStatus();
    return response;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["authCheck"],
    queryFn: fetchAuthStatus,
  });

  if (isLoading) {
    return (
      <div className="mt-20 w-full flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader className="w-10 h-10 animate-spin text-muted-foreground" />
          <h3 className="text-xl font-bold">Redirecting...</h3>

          <p>Please wait</p>
        </div>
      </div>
    );
  }

  if (data?.success) router.push("/");
};
export default Page;
