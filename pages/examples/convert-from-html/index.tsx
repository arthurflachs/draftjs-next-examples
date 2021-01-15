import React, { MouseEvent, useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import Layout from "../../../components/layout";
import Editor from "../../../components/editor";
import styles from './styles.module.css';

export default function ConvertFromHTMLExample() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const logState = (event: MouseEvent) => {
    event.preventDefault();
    const content = editorState.getCurrentContent();
    console.log(convertToRaw(content));
  }
  
  return (
    <Layout>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
      />
      <input
        type="button"
        onClick={logState}
        value="Log State"
        className={styles.button}
      />
    </Layout>
  );
}