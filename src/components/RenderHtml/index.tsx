"use client"
import createDOMPurify from 'dompurify'

export const RenderHtml = ({content} : {content : string}) => {
    const DOMPurify = createDOMPurify(window)

    return (

         <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} /> 
    )
}