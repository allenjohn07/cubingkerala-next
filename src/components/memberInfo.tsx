'use client'

import { RequestInfo } from '@/types/types'
import React, { useEffect, useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

const MemberInfoComponent = ({ member }: { member: RequestInfo }) => {

    const [currentMember, setCurrentMember] = useState<RequestInfo>(member)

    useEffect(() => {
        if (member) {
            setCurrentMember(member)
        }
    }, [member])

    console.log(currentMember);


    return (
        <div className="min-h-screen bg-white text-black">
            <main className="flex flex-col items-center p-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">{currentMember.name}</h2>
                    <Badge variant="secondary">Cubing Kerala {(currentMember.role).split('')[0].toUpperCase()  + (currentMember.role).slice(1)} </Badge>  
                </div>
                <div className="w-full max-w-[200px] h-[200px] my-4">
                    <Avatar className="w-full h-full rounded-md">
                        <AvatarImage src={currentMember.avatarUrl} alt="Profile Picture" />
                        <AvatarFallback>{currentMember.name}</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex justify-center space-x-8 my-4">
                    <div className="text-center">
                        <p className="text-xs text-muted-foreground">COUNTRY</p>
                        <p>{(currentMember.country).toUpperCase()}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-muted-foreground">WCA ID</p>
                        <p>{currentMember.wcaid}</p>
                    </div>
                </div>
                <div className="w-full max-w-4xl mt-10">
                    <Table className='border'>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Event</TableHead>
                                <TableHead>NR</TableHead>
                                <TableHead>WR</TableHead>
                                <TableHead>Best</TableHead>
                                <TableHead>Average</TableHead>
                                <TableHead>WR</TableHead>
                                <TableHead>NR</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <CuboidIcon className="w-6 h-6" />
                                </TableCell>
                                <TableCell>235</TableCell>
                                <TableCell>6087</TableCell>
                                <TableCell>2.00</TableCell>
                                <TableCell>4.60</TableCell>
                                <TableCell>17575</TableCell>
                                <TableCell>768</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </main>
        </div>
    )
}

export default MemberInfoComponent


function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
            <circle cx="12" cy="12" r="10" />
        </svg>
    )
}


function CuboidIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" />
            <path d="M10 22v-8L2.25 9.15" />
            <path d="m10 14 11.77-6.87" />
        </svg>
    )
}


function FlagIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
    )
}


function GroupIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 7V5c0-1.1.9-2 2-2h2" />
            <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
            <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
            <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
            <rect width="7" height="5" x="7" y="7" rx="1" />
            <rect width="7" height="5" x="10" y="12" rx="1" />
        </svg>
    )
}


function ListOrderedIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="10" x2="21" y1="6" y2="6" />
            <line x1="10" x2="21" y1="12" y2="12" />
            <line x1="10" x2="21" y1="18" y2="18" />
            <path d="M4 6h1v4" />
            <path d="M4 10h2" />
            <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
        </svg>
    )
}


function LogInIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" x2="3" y1="12" y2="12" />
        </svg>
    )
}
