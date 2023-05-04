import React from "react";

type inputProps = {
    className: string
    value: string,
    placeholder: string
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: inputProps) => {
    return <input className={props.className} type={props.value} value={props.value} onChange={props.handleChange} />;
};