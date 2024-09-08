'use client'

import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from './ui/button'


const UpdatePopover = ({handleApprove, index}: {handleApprove: (index: number) => void, index: number}) => {
    return (
        <Popover>
            <PopoverTrigger>
                <Button
                    className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-none"
                    size="sm"
                >
                    Update
                </Button>
            </PopoverTrigger>
            <PopoverContent>Are you sure you want to approve this request?
                    <Button
                    onClick={() => handleApprove(index)}
                    size="sm" className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-none block">
                    Update
                </Button>
            </PopoverContent>
        </Popover>
    )
}

export default UpdatePopover