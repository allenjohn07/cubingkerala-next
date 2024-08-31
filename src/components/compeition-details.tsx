"use client"

import { CompetitionDetails } from '@/types/types'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import React from 'react'
import "@cubing/icons";


const CompetitionDetailsComponent = ({ compInfo }: { compInfo: CompetitionDetails }) => {

    console.log(compInfo);


    return (
        <div className="w-full mx-auto py-6 md:py-8 px-4 md:px-5">
            <div className="grid gap-12">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{compInfo.name}</h1>
                    <p className="mt-4 text-muted-foreground">
                        {new Date(compInfo?.date?.from).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(compInfo?.date?.till).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} | {compInfo.venue.name}, {compInfo.city}
                    </p>
                </div>
                <div className="grid gap-8">
                    <div>
                        <h2 className="text-2xl font-bold">Event Details</h2>
                        <div className="mt-4 grid gap-4">
                            <div className="flex items-center gap-2">
                                <div>
                                    <p className="font-medium">Location</p>
                                    <p className="text-muted-foreground">
                                        {compInfo.venue.name}, {compInfo.venue.address}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <p className="font-medium">Events</p>
                                    <div className='py-2'>
                                        {
                                            compInfo?.events.map((event, index) => (
                                                <TooltipProvider key={index}>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <span className={`cubing-icon event-${event} pr-3`}></span>
                                                        </TooltipTrigger>
                                                        <TooltipContent className='bg-green-400 rounded-md text-xs p-1 text-black'>
                                                            <p>{event}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Important Information</h2>
                        <div className="mt-4 grid gap-4">
                            <div className="flex items-center gap-2">
                                <div>
                                    <p className="text-muted-foreground">{compInfo.information}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Organizers</h2>
                        <div className="mt-4 grid gap-4">
                            {
                                compInfo.organisers.map((organiser) => <div className="flex items-center gap-2">
                                    <div key={organiser.email}>
                                        <p className="font-medium">{organiser.name}</p>
                                        <p className="text-muted-foreground">{organiser.email}</p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CompetitionDetailsComponent