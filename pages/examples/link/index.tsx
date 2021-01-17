import { EditorState } from "draft-js";
import { useState } from "react";
import Editor from "../../../components/editor";

export default function Link() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  
  return (
    <div>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Enter some text..."
      />
    </div>
  );
}