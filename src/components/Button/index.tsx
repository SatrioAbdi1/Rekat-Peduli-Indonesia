import {Button as ButtonMaterial, ButtonOwnProps,ExtendButtonBase,ButtonTypeMap } from '@mui/material';
import { ReactElement, ButtonHTMLAttributes } from 'react';
import { useFormStatus } from 'react-dom';

interface ButtonProps extends  ButtonOwnProps, ButtonHTMLAttributes<HTMLButtonElement> {
    loading : boolean,
    children: React.ReactNode
}

export const Button = (props : ButtonProps) : ReactElement => {    
    const {pending}= useFormStatus()

    return(
        <ButtonMaterial  disabled={pending|| props.loading} {...props}>    
            {pending || props.loading ? '...loading' : props.children}            
        </ButtonMaterial>    
    )
}