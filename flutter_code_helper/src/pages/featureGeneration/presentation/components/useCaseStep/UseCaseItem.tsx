import { Button, Card, Form, Input, Space, Switch } from 'antd'
import React, { useState } from 'react'
import { labelAddProperty, labelAddUseCaseParams, labelDataType, labelDomainRepository, labelErrorEmptyClassName, labelErrorEmptyField, labelErrorEmptyPropDataType, labelGenerate, labelIsList, labelIsNullable, labelName, labelOutputType, labelProperties, labelPropName, labelUseCase, labelUseCaseInputParams } from '../../../../../utils/constant'
import { CloseOutlined } from '@ant-design/icons';

type Props = {}

const UseCaseItem = (props: Props) => {

    let [hasUseCaseParams, setHasUseCaseParams] = useState<boolean>(false)

    const onFinish = (values: any) => {
        console.log('Success:', values);

    };

    return (
        <div className='h-full'>
            <Form
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                autoComplete="on"
                onFinish={onFinish}>
                <Button type="primary" className='bg-slate-800 my-3 ' htmlType="submit">{labelGenerate}</Button>

                <Form.Item label={labelDomainRepository} name='domain-repo' rules={[{ required: true, message: labelErrorEmptyField }]} >
                    <Input />
                </Form.Item>

                <Card
                    size='small'
                    title={labelUseCase}
                    key={labelUseCase}
                >
                    {/* Use case name */}
                    <Form.Item label={labelName} name='name' rules={[{ required: true, message: labelErrorEmptyField }]} >
                        <Input />
                    </Form.Item>
                    {/* Use case output type*/}
                    <Form.Item label={labelOutputType} name='dataType' rules={[{ required: true, message: labelErrorEmptyField }]} >
                        <Input />
                    </Form.Item>

                    {/* Input params */}
                    {hasUseCaseParams && <Card
                        size="small"
                        title={labelUseCaseInputParams}
                        key={labelUseCaseInputParams}
                        extra={<CloseOutlined
                            onClick={() => {
                                setHasUseCaseParams(false)
                            }} />}
                    >
                        <Form.Item label="Name" name={['usecase', 'name']} rules={[{ required: true, message: labelErrorEmptyClassName }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label={labelProperties}>
                            <Form.List name={['usecase', 'props']} >
                                {(subFields, subOpt) => (
                                    <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
                                        {subFields.map((subField) => (
                                            <div key={subField.key}>
                                                <Space key={`usecase-params-prop-name-${subField.key}`} className='mb-3'>
                                                    <Form.Item noStyle name={[subField.name, 'type']} rules={[{ required: true, message: labelErrorEmptyPropDataType }]}>
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

                                                <Space key={`usecase-params-prop-prop-${subField.key}`} >

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
                    </Card>}
                    {!hasUseCaseParams && <Button className='bg-orange-400 font-bold mb-5' onClick={() => {
                        setHasUseCaseParams(true)
                    }} block>
                        + {labelAddUseCaseParams}
                    </Button>}


                </Card>

            </Form>
        </div>
    )
}

export default UseCaseItem