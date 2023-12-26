import TextArea from 'antd/es/input/TextArea'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import {  useSelector } from 'react-redux'
import { IClass } from '../../../../../core/interfaces/IClass'
import { RootState } from '../../../../../redux/configStore'

type Props = {}

const EntityContent = (props: Props) => {

    const listInputEntity : string | null = useSelector((state: RootState) => state.featureGenerationSlice.listEntity)

    const displayListEntity = ():string => {

        return listInputEntity || ''
    }

  return (
    <TextArea rows={39} value={displayListEntity()}></TextArea>
  )
}

export default EntityContent