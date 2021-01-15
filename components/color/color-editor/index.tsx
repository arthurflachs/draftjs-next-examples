import { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import styles from './styles.module.css';

export default function ColorEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  
  return (
    <div className={styles.editor}>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
}