import React from 'react'
import UseCaseContent from './UseCaseContent'
import UseCaseItem from './UseCaseItem'

type Props = {}

const UseCaseWorkspace = (props: Props) => {
  return (
    <div className='flex'>
      <div className='w-2/5 mr-5'>
        <UseCaseItem></UseCaseItem>
      </div>
      <div className='w-3/5 mr-5'>
        <UseCaseContent></UseCaseContent>
      </div>
    </div>
  )
}

export default UseCaseWorkspace