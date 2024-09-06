'use client'

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { UserInfo } from "@/types/types"

export function AlertComponent({ userInfo, show, handleClick }: { userInfo: UserInfo | null, show: boolean, handleClick: () => void }) {
    return (
        <>
            {
                show && userInfo != null ? <Alert className="rounded-none border-green-500 h-max">
                    <div className="absolute right-5"><img onClick={handleClick} className="cursor-pointer hover:bg-gray-200 hover:scale-105 transition-all" src="/closeIcon.svg" alt="close" /></div>
                    <AlertTitle>
                        Logged in as <span className="font-bold">{userInfo?.me.name}</span>
                    </AlertTitle>
                    <AlertDescription>
                        Welcome to Cubing Kerala!
                    </AlertDescription>
                </Alert>
                    : null
            }
        </>

    )
}
