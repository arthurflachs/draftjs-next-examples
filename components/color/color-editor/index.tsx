import { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import NoSSR from 'react-no-ssr';
import styles from './styles.module.css';
import { colorStyleMap } from '../../../lib/color/color-utils';

interface ColorEditorProps {
  editorState: EditorState;
  setEditorState(nextEditorState: EditorState): any;
}

export default function ColorEditor({ editorState, setEditorState }: ColorEditorProps) {
  return (
    <div className={styles.editor}>
      <NoSSR>
        <Editor
          editorState={editorState}
          onChange={setEditorState} 
          customStyleMap={colorStyleMap}
        />
      </NoSSR>
    </div>
  );
}