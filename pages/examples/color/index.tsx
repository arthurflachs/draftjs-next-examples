import { useState } from 'react';
import { EditorState } from 'draft-js';
import Layout from '../../../components/color/layout';
import ColorControls from '../../../components/color/color-controls';
import ColorEditor from '../../../components/color/color-editor';
import 'draft-js/dist/Draft.css';

export default function ColorEditorExample() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <Layout>
      <ColorControls editorState={editorState} />
      <ColorEditor editorState={editorState} setEditorState={setEditorState} />
    </Layout>
  );
}