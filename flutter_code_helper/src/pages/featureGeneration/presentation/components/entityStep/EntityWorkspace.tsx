import React from 'react'
import EntityContent from './EntityContent'
import ListEntityItems from './ListEntityItems'

type Props = {}

const EntityWorkspace = (props: Props) => {
  return (
    <div className='flex'>
      <div className='w-2/5 mr-5'>
        <ListEntityItems></ListEntityItems>
      </div>
      <div className='w-3/5 mr-5'>
        <EntityContent></EntityContent>
      </div>
    </div>
  )
}

export default EntityWorkspace