import { EditorState } from "draft-js";
import React, { useState } from "react";
import Editor from "../../../components/editor";
import LinkControls from "../../../components/link/link-controls";
import LinkInput from "../../../components/link/link-input";

interface LinkInput {
  value: string;
}

export default function Link() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [linkInput, setLinkInput] = useState<LinkInput>(null);

  const addLink = () => setLinkInput({ value: '' });
  const removeLink = () => {
    console.log('remove link');
  };

  const confirmLink = (urlValue: string) => {
    console.log(urlValue)
    setLinkInput(null);
  };
  
  return (
    <div>
      <LinkControls onAddLink={addLink} onRemoveLink={removeLink} />
      { linkInput && <LinkInput initialValue={linkInput.value} onConfirmLink={confirmLink} /> }
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Enter some text..."
      />
    </div>
  );
}