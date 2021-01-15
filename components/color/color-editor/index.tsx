import { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import NoSSR from 'react-no-ssr';
import styles from './styles.module.css';

export default function ColorEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  
  return (
    <div className={styles.editor}>
      <NoSSR>
        <Editor editorState={editorState} onChange={setEditorState} />
      </NoSSR>
    </div>
  );
}