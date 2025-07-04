import { GetPasswording } from "@/app/util/server";
import React from "react";
import Password from "./Password";

type Props = {
  children: React.ReactNode;
};

export default async function PasswordCheck({ children }: Props) {
  const check = await GetPasswording();
  // return <>{children}</>;
  return check.pw ? <Password>{children}</Password> : <>{children}</>;
}
