"use client"
// import ClassicEditorType from "@ckeditor/ckeditor5-build-classic";
// import  { CKEditor as CKEditorType } from "@ckeditor/ckeditor5-react";

import React, {useEffect, useRef, useState} from "react";


interface EditorProps {
  value : string,
  onChange : (value : string) => void
}


const editorConfiguration = {
  toolbar: {
  items: [
  "heading",
  "|",
  "bold",
  "italic",
  "link",
  "bulletedList",
  "numberedList",
  "|",
  "outdent",
  "indent",
  "|",
  "imageUpload",
  "blockQuote",
  "insertTable",
  "mediaEmbed",
  "undo",
  "redo",
  ],
  },
  language: "en",
  };


const Editor = ({
  value,
  onChange
} : EditorProps) => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}


  useEffect(() => {
    editorRef.current = {
      // CKEditor: require('@ckeditor/ckeditor5-react'), // depricated in v3
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    }
   setEditorLoaded(true)
  }, [])

  
  
  
  return editorLoaded ? (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      config={{
        ckfinder : {
          uploadUrl : 'https://api.rekat4indonesia.com/upload'
        },
        image: {
          resizeOptions: [
          {
              name: 'resizeImage:original',
              value: null,
              icon: 'original'
          },
          {
              name: 'resizeImage:custom',
              value: 'custom',
              icon: 'custom'
          },
          {
              name: 'resizeImage:50',
              value: '50',
              icon: 'medium'
          },
          {
              name: 'resizeImage:75',
              value: '75',
              icon: 'large'
          }
      ],
      toolbar: [
        'resizeImage:50',
        'resizeImage:75',
        'resizeImage:original',
        'resizeImage:custom',
        // More toolbar options.
        // ...
    ]
    }
        
      }}
      
      onChange={(event, editor) => {
        const data = editor.getData()
        onChange(data)
        console.log('datanya',{ event, editor, data })
      }}
    />
  ) : (
    <div>Editor loading</div>
  )
};

export {Editor} 