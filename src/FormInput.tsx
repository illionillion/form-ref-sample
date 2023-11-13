import { ChangeEvent, Dispatch, FC, MutableRefObject, SetStateAction, useState } from "react";

interface FormInputProps {
    index: number
    valuesRef: MutableRefObject<string[]>
}
export const FormInput:FC<FormInputProps> = ({index, valuesRef}) => {
    const [value, setValue] = useState<string>('')
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        // 変更された値をrefにも反映
        valuesRef.current[index] = e.currentTarget.value
    }
    console.log('rendering1', index);
    
    return <>
        <input type="text" value={value} onChange={handleChange} />
    </>
}

interface FormInput2Props {
    value: string
    values: string[]
    index: number
    setValues: Dispatch<SetStateAction<string[]>>
}

export const FormInput2:FC<FormInput2Props> = ({value, values, index, setValues}) => {
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const newValues:string[] = [...values]
        // ステートを更新
        newValues[index] = e.currentTarget.value
        setValues(newValues)
    }
    console.log('rendering2', index);

    return <>
        <input type="text" value={value} onChange={handleChange} />
    </>
}