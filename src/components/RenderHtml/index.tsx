"use client"
// import createDOMPurify from 'dompurify'

export const RenderHtml = ({content} : {content : string}) => {

    return (

        //  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} /> 
         <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}