import LoadingComponent from '@/components/loading'
import MemberInfoComponent from '@/components/memberInfo'
import db from '@/lib/db'
import { RequestInfo } from '@/types/types'
import React, { Suspense } from 'react'

const MemberInfo = async ({ params }: { params: { wca_id: string } }) => {

  const member = await db.members.findUnique({
    where: {
      wcaid: params.wca_id
    }
  })
  

  return (
    <>
      <Suspense fallback={
        <div className='flex items-center justify-center min-h-[50vh] w-full'>
          <LoadingComponent />
        </div>
      }><MemberInfoComponent member={member as RequestInfo} /></Suspense>
    </>

  )
}

export default MemberInfo