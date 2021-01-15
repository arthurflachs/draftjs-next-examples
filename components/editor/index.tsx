import { DraftStyleMap, Editor, EditorState } from "draft-js";
import NoSSR from "react-no-ssr";
import styles from './styles.module.css';

interface EditorProps {
  editorState: EditorState;
  onChange(editorState: EditorState): any;
  customStyleMap?: DraftStyleMap;
}
export default function CustomEditor(props: EditorProps) {
  return (
    <div className={styles.editor}>
      <NoSSR>
        <Editor {...props} />
      </NoSSR>
    </div>
  );
}