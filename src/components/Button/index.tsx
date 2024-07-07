import {Button as ButtonMaterial, ButtonOwnProps,ExtendButtonBase,ButtonTypeMap } from '@mui/material';
import { ReactElement, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends  ButtonOwnProps, ButtonHTMLAttributes<HTMLButtonElement> {
    loading : boolean,
    children: React.ReactNode
}

export const Button = (props : ButtonProps) : ReactElement => {    
    return(
        <ButtonMaterial  disabled={props.loading} {...props}>    
            {props.loading ? '...loading' : props.children}            
        </ButtonMaterial>    
    )
}