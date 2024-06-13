"use client"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import React from "react";


interface EditorProps {
  value : string,
  onChange : (value : string) => void

}

const Editor = ({
  value,
  onChange
} : EditorProps) => {
  
  return (
    <CKEditor      
      editor={ClassicEditor}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data)
      }}
    />
  );
};

export {Editor} 