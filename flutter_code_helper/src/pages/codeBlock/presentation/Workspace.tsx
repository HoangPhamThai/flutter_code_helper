
import { Input, Form, Button, Flex } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { IClass } from '../../../core/interfaces/IClass';
import { IClassProp } from '../../../core/interfaces/IClassProp';
import { IField } from '../../../core/interfaces/IField';
import { DispatchType, RootState } from '../../../redux/configStore';
import { getModelsFromJson } from './redux/codeBlockSlice';


const { TextArea } = Input;

interface Props {

}

const Workspace = (props: Props) => {

    const dispatch: DispatchType = useDispatch()
    const modelsFromJson: IClass[] | null = useSelector((state: RootState) => state.codeBlockSlice.modelsFromJson)



    const onFinish = (values: IField) => {
        console.log('Success:', values);
        dispatch(getModelsFromJson({
            name: values.name ?? "Default",
            data: values.data
        }))
    };

    const displayVariableDeclarations = (modelProps: IClassProp[]): string => {
        let result = ''
        modelProps.forEach((value) => {
            result += `\t${value.type} ${value.propName};\n`
        })
        return result
    }

    const displayFromJson = (modelProps: IClassProp[], modelName: string): string => {
        let result = `\t${modelName}.fromJson(Map<String, dynamic> json):\n`
        modelProps.forEach((value, index) => {
            result += `\t\t${value.propName} = ${value.parseMethod}${index !== (modelProps.length - 1) ? "," : ";"}\n`
        })
        return result
    }

    const displayContent = (): string => {
        let result = ''
        if (modelsFromJson) {
            modelsFromJson.forEach((model) => {
                result += `class ${model.name} {\n`

                    + displayVariableDeclarations(model.props)

                    + '\n'

                    + displayFromJson(model.props, model.name)

                    + '}\n\n'
            })
        }
        return result
    }

    return (
        <div className='flex'>
            <div className=' w-2/5 mr-5'>
                <Form
                    onFinish={onFinish}>
                    <Flex>
                        <Form.Item<IField>
                            label="Class name"
                            name="name"
                            colon={false}
                            className='mb-2'
                            style={{ maxWidth: '300px', }}
                        >
                            <Input placeholder='Default' />
                        </Form.Item>

                        <Button type="primary" className='bg-slate-800 ml-3' htmlType="submit">Convert</Button>
                    </Flex>

                    <Form.Item<IField> name='data'>
                        <TextArea className=' bg-[#001529] text-white w-full'
                        rows={37}
                        ></TextArea>
                    </Form.Item>
                </Form>
            </div>

            
            <TextArea
                className='w-3/5'
                rows={39}
                value={displayContent()}
            >
            </TextArea>


        </div>
    )
}

export default Workspace