import { Editor, EditorState } from "draft-js";
import NoSSR from "react-no-ssr";
import styles from './styles.module.css';

interface ConvertFromHTMLEditorProps {
  editorState: EditorState;
  setEditorState(editorState: EditorState): any;
}
export default function ConvertFromHTMLEditor({ editorState, setEditorState }: ConvertFromHTMLEditorProps) {
  return (
    <div className={styles.editor}>
      <NoSSR>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
        />
      </NoSSR>
    </div>
  );
}