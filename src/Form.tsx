import { FC, FormEvent, useRef, useState } from "react";
import { FormInput, FormInput2 } from "./FormInput";

export const Form:FC = () => {
    const values = useRef<string[]>(['', '', ''])
    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('onSubmit Form1', values.current);
    }
    console.log('rendering1 parent', values.current);

    return <>
        <p>余計なレンダリングが走らない</p>
        <form onSubmit={onSubmit}>
            {values.current.map((_, index) => (
                <FormInput key={index} index={index} valuesRef={values} />
            ))}
            <input type="submit"  value='送信'/>
        </form>
    </>
}

export const Form2:FC = () => {
    const [values, setValues] = useState<string[]>(['', '', ''])
    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('onSubmit Form2', values);
    }
    console.log('rendering2 parent', values);

    return <>
        <p>余計なレンダリングが走る</p>
        <form onSubmit={onSubmit}>
            {values.map((value, index) => (
                <FormInput2
                key={index}
                index={index}
                value={value}
                values={values}
                setValues={setValues} />
            ))}
            <input type="submit"  value='送信'/>
        </form>
    </>
}