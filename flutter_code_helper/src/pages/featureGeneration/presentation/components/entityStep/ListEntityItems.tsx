import { Button, Checkbox, Flex, Form, Input, Card, Space, Switch, List, Skeleton } from 'antd'
import React, { useState } from 'react'
import { IClass } from '../../../../../core/interfaces/IClass'
import { IClassProp } from '../../../../../core/interfaces/IClassProp'
import { labelAddClass, labelAddProperty, labelClass, labelDataType, labelErrorEmptyClassName, labelErrorEmptyPropDataType, labelErrorEmptyPropName, labelGenerate, labelIsList, labelIsNullable, labelProperties, labelPropName } from '../../../../../utils/constant'
import { CloseOutlined } from '@ant-design/icons';
import { DispatchType } from '../../../../../redux/configStore'
import { useDispatch } from 'react-redux'
import { generateListEntity } from '../../redux/featureGenerationSlice'

type Props = {}


const ListEntityItems = (props: Props) => {

  const dispatch: DispatchType = useDispatch()

  const onFinish = (values: any) => {
    console.log('Success:', values);
    let inputData: IClass[] = []
    if (values.items) {
      values.items.forEach((item: any) => {
        inputData.push({
          name: item.name,
          props: item.props
        })
      })
    }
    dispatch(generateListEntity({
      data: inputData
    }))
  };

  const renderListInputEntity = () => {
    return (
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        onFinish={onFinish}


        autoComplete="on"
        initialValues={{
          items: [{
            name: "Default",
            props: [{
              propName: '',
              type: '',
              isNullable: false,
              isList: false
            }]
          }]
        }}
      >
        <Button type="primary" className='bg-slate-800 my-3 ' htmlType="submit">{labelGenerate}</Button>
        <Form.List name="items">
          {(fields, { add, remove }) => (
            <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
              {fields.map((field) => (
                <Card
                  size="small"
                  title={`Class ${field.name + 1}`}
                  key={field.key}
                  extra={(fields.length > 1) &&
                    <CloseOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  }
                >
                  <Form.Item label="Name" name={[field.name, 'name']} rules={[{ required: true, message: labelErrorEmptyClassName }]}>
                    <Input />
                  </Form.Item>

                  <Form.Item label={labelProperties}>
                    <Form.List name={[field.name, 'props']} initialValue={[{
                      propName: '',
                      type: '',
                      isNullable: false,
                      isList: false
                    }]}>
                      {(subFields, subOpt) => (
                        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
                          {subFields.map((subField) => (
                            <div key={`entity-${subField.key}`}>
                              <Space key={`entity-prop-name-${subField.key}`} className='mb-3'>
                                <Form.Item noStyle name={[subField.name, 'type']} rules={[{ required: true, message: labelErrorEmptyPropName }]}>
                                  <Input placeholder={labelDataType} />
                                </Form.Item>
                                <Form.Item noStyle name={[subField.name, 'propName']} rules={[{ required: true, message: labelErrorEmptyPropDataType }]}>
                                  <Input placeholder={labelPropName} />
                                </Form.Item>

                                {(subFields.length > 1) && <CloseOutlined
                                  onClick={() => {
                                    subOpt.remove(subField.name);
                                  }}
                                />}



                              </Space>

                              <Space key={`entity-prop-prop-${subField.key}`} >

                                {/* is nullable */}
                                <Form.Item label={labelIsNullable} name={[subField.name, 'isNullable']} colon={false} style={{ marginBottom: "0" }}>
                                  <Switch className='bg-slate-400' />
                                </Form.Item>
                                {/* is list */}
                                <Form.Item label={labelIsList} name={[subField.name, 'isList']} colon={false} style={{ marginBottom: "0" }}>
                                  <Switch className='bg-slate-400' />
                                </Form.Item>
                              </Space>
                            </div>


                          ))}
                          <Button className='bg-slate-300' onClick={() => subOpt.add()} block>
                            + {labelAddProperty}
                          </Button>
                        </div>
                      )}
                    </Form.List>
                  </Form.Item>
                </Card>
              ))}

              <Button className="bg-orange-400 font-bold mb-5" onClick={() => add()} block>
                + {labelAddClass}
              </Button>
            </div>
          )}
        </Form.List>
      </Form>
    )
  }

  return (

    <div className='h-full'>
      {renderListInputEntity()}
    </div>
  )
}

export default ListEntityItems