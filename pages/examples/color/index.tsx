import { useState } from 'react';
import { EditorState, RichUtils } from 'draft-js';
import Layout from '../../../components/color/layout';
import ColorControls from '../../../components/color/color-controls';
import ColorEditor from '../../../components/color/color-editor';
import 'draft-js/dist/Draft.css';

export default function ColorEditorExample() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleToggleColor = (toggledColor) => {
    const selection = editorState.getSelection();
    const currentStyle = editorState.getCurrentInlineStyle();

    const nextEditorState = RichUtils.toggleInlineStyle(
      editorState,
      toggledColor
    );

    setEditorState(nextEditorState);
  }

  return (
    <Layout>
      <ColorControls editorState={editorState} onToggle={handleToggleColor} />
      <ColorEditor editorState={editorState} setEditorState={setEditorState} />
    </Layout>
  );
}