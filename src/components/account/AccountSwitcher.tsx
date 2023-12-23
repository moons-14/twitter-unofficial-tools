"use client";

import { useAccountStore } from "@/store/accountStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";
import { Twitter } from "lucide-react";

export const AccountSwitcher = () => {
  const { accounts, activeAccount, changeActiveAccount } = useAccountStore();

  return (
    <>
      <Select
        defaultValue={activeAccount.id}
        onValueChange={changeActiveAccount}
      >
        <SelectTrigger
          className={cn(
            "flex flex-1 items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0"
          )}
          aria-label="Select account"
        >
          <SelectValue placeholder="Select an account"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          {accounts.map((account) => (
            <SelectItem key={account.id} value={account.id}>
              <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                <Twitter />
                {account.name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
