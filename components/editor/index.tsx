import { DraftStyleMap, Editor, EditorProps, EditorState } from "draft-js";
import { useRef } from "react";
import NoSSR from "react-no-ssr";
import styles from './styles.module.css';

export default function CustomEditor(props: EditorProps) {
  const editorRef = useRef(null);
  const editorKey = `editor-${(new Date()).getTime()}`;

  return (
    <div className={styles.editor} onClick={() => editorRef.current.focus()}>
      <Editor {...props} ref={editorRef} key={editorKey} />
    </div>
  );
}