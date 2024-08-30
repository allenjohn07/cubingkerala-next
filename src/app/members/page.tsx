import LoadingComponent from '@/components/loading'
import MembersComponent from '@/components/members'
import React, { Suspense } from 'react'

const Members = () => {
  return (
    <>
      <Suspense
      fallback={
        <div className='flex items-center justify-center min-h-[50vh] w-full'>
          <LoadingComponent />
        </div>
      }
      ><MembersComponent /></Suspense>
    </>
  )
}

export default Members