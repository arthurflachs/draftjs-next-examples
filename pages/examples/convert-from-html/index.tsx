import React, { useState } from "react";
import { EditorState } from "draft-js";
import Layout from "../../../components/layout";
import ConvertFromHTMLEditor from "../../../components/convert-from-html/editor";

export default function ConvertFromHTMLExample() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  
  return (
    <Layout>
      <ConvertFromHTMLEditor
        editorState={editorState}
        setEditorState={setEditorState}
      />
    </Layout>
  );
}