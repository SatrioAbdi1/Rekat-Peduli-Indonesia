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
          uploadUrl : 'http://localhost:8999/upload'
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