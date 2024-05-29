"use client"
import NextImage from "next/image"
import Styles from "./Image.module.css"
import { CSSProperties } from "react"

export const Image = (props : {width : string, height: string, styles : CSSProperties }) => {
    return (
        <div className={Styles.container} style={{width : props.width, height: props.height}}>
        <NextImage 
        src="/home-cover.png" 
        alt="Sample Image"
        width={40}
        height={40}
        sizes="39vw"
        style={props.styles}
        className={Styles.image}/>
        <div className={Styles.overlay}>
        </div>
        </div>
    )
}