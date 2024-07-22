import Image from "next/image";
import AuthButtons from "./AuthButtons";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { GradientComponent } from "@/components/NeatBackground";

const page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (await isAuthenticated()) return redirect("/");

  return (
    <div className="relative min-h-screen">
      <GradientComponent />
      <div className="flex flex-col gap-2 px-4 xl:mx-40 text-center font-semibold relative z-20 h-full">
        <div className="flex justify-center">
					<Image
						src={"/jaychat-logo.svg"}
						alt="logo"
						width={763}
						height={150}
						className="mt-20 w-[420px] pointer-events-none select-none"
					/>
				</div>

        <AuthButtons />
      </div>
    </div>
  );
};
export default page;
