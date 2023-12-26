import React, { ReactNode, useState } from 'react'
import { Button, Flex, Steps } from 'antd';
import { labelBloc, labelDataSource, labelEntity, labelRepo, labelUseCase } from '../../../utils/constant';
import EntityWorkspace from './components/entityStep/EntityWorkspace';
import RepoWorkspace from './components/repoStep/RepoWorkspace';
import UseCaseWorkspace from './components/useCaseStep/UseCaseWorkspace';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/configStore';
import { IClass } from '../../../core/interfaces/IClass';

type Props = {}

const Workspace = (props: Props) => {

    let [currentStep, setStep] = useState<number>(0)

    const canGoToUseCase: boolean = (useSelector((state: RootState) => state.featureGenerationSlice.listEntityConfig) || []).length > 0

    const renderSteps = (currentStep: number): ReactNode => {
        return (
            <div>
                <Steps
                    current={currentStep}
                    onChange={(value: number) => {
                        setStep(value)
                    }}
                    items={[
                        {
                            title: labelEntity,
                        },
                        {
                            title: labelUseCase,
                        },
                        {
                            title: labelRepo,
                        },
                        {
                            title: labelDataSource,
                        },
                    ]}
                />
            </div>
        )
    }

    const renderWorkspace = (currentStep: number): ReactNode => {
        switch (currentStep) {
            case 0:
                return <EntityWorkspace></EntityWorkspace>
            case 1:
                return <UseCaseWorkspace></UseCaseWorkspace>
            case 2:
                return <RepoWorkspace></RepoWorkspace>

            case 3:
                return <EntityWorkspace></EntityWorkspace>
            default:
                return <EntityWorkspace></EntityWorkspace>

        }
    }


    const canGoToPrevStep = (): boolean => {
        let result: boolean = true
        if (currentStep === 0) {
            return false
        }
        return result
    }

    const canGoToNextStep = (): boolean => {
        let result: boolean = true
        if (currentStep === 3) {
            return false
        }
        if (currentStep === 0) {
            if (canGoToUseCase) {
                return true
            }
            return false
        }
        return result
    }

    return (
        <div>
            {renderSteps(currentStep)}
            <Flex justify='space-between' className='py-3'>
                <Button className={`${canGoToPrevStep() ? "bg-slate-800" : "bg-slate-400"} text-white`} onClick={() => {
                    if (canGoToPrevStep()) {
                        setStep(currentStep - 1)
                    }

                }}
                >Prev</Button>
                <Button className={`${canGoToNextStep() ? "bg-slate-800" : "bg-slate-400"} text-white`} onClick={() => {
                    if (canGoToNextStep()) {
                        setStep(currentStep + 1)
                    }

                }}>Next</Button>
            </Flex>
            {renderWorkspace(currentStep)}

        </div>
    )
}

export default Workspace