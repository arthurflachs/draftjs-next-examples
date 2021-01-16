import { useState } from "react";
import { EditorState } from "draft-js";
import Editor from "../../../components/editor";

export default function EntityExample() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      placeholder="Enter some text"
    />
  );
}