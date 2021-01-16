import { DraftStyleMap, Editor, EditorProps, EditorState } from "draft-js";
import { useRef } from "react";
import NoSSR from "react-no-ssr";
import styles from './styles.module.css';

export default function CustomEditor(props: EditorProps) {
  const editorRef = useRef(null);

  return (
    <div className={styles.editor} onClick={() => editorRef.current.focus()}>
      <NoSSR>
        <Editor {...props} ref={editorRef} />
      </NoSSR>
    </div>
  );
}