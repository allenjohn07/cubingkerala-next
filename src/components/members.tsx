'use client'

import SearchComponent from "@/components/search"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { RequestInfo, UserInfo } from "@/types/types"
import cookie from "cookie"
import { toast } from "sonner"
import Link from "next/link"


export default function MembersComponent({ membersfromdb }: { membersfromdb: RequestInfo[] }) {

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [membersList, setMembersList] = useState<RequestInfo[]>([]);

  useEffect(() => {
    const cookies = cookie.parse(document.cookie);
    const userInfoFromCookie = cookies.userInfo;
    if (userInfoFromCookie) {
      setUserInfo(JSON.parse(userInfoFromCookie));
    }
    if (membersfromdb) {
      setMembersList(membersfromdb)
    }
  }, []);

  console.log(userInfo);
  console.log(membersList);



  const handleJoinCK = async () => {
    if (userInfo == null) {
      toast.error("Please login to join Cubing Kerala");
      return;
    }

    try {
      const response = await fetch('/api/join-cubingkerala', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(`${data.message}`);
        window.location.reload();
      } else {
        const error = await response.json();
        toast(`${error.message}`);
        window.location.reload();
      }
    } catch (error) {
      toast(`${error}`);
      window.location.reload();
    }
  };

  return (
    <div className="w-full py-6 md:py-8 px-4 md:px-6">
      <h1 className="text-3xl font-bold text-center mb-5">Members</h1>
      <div className="flex items-center justify-center gap-3 md:justify-between mb-6">
        <SearchComponent />
        <Button onClick={handleJoinCK} className="bg-green-400 hover:bg-green-500 rounded-none text-black" size="sm">Join Cubing Kerala</Button>
      </div>
      <div className="overflow-auto rounded-none border h-[400px]">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>WCA ID</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              membersList.length > 0 ? membersList?.map((member, index) => (
                <TableRow className="border-b border-b-black" key={index}>
                  <TableCell className="cursor-default">{index + 1}</TableCell>
                  <TableCell><Link href={`/members/${member.wcaid}`}><span className="hover:underline hover:underline-offset-2 cursor-pointer hover:text-blue-500">{member.name}</span></Link></TableCell>
                  <TableCell><Link href={`/members/${member.wcaid}`}><span className="hover:underline hover:underline-offset-2 cursor-pointer hover:text-blue-500">{member.wcaid}</span></Link></TableCell>
                  <TableCell className="cursor-default">{(member.role).split('')[0].toUpperCase()  + (member.role).slice(1)}</TableCell>
                </TableRow>
              )) : <TableRow><TableCell className="text-muted-foreground px-2 py-2" colSpan={4}>Loading...</TableCell></TableRow>
            }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}