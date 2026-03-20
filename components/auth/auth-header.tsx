import Image from "next/image";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function AuthHeader() {
  return (
    <CardHeader className="space-y-1">
      <CardTitle className="flex items-center justify-center gap-3 mb-6 text-primary">
        <Image src="/logo.svg" alt="Logo" width={32} height={32} />
        <div className="text-[18px] font-semibold text-slate-900 whitespace-nowrap">
          Stayware
        </div>
      </CardTitle>
      <CardDescription>
        Enter the verification code from your authenticator app
      </CardDescription>
    </CardHeader>
  );
}
