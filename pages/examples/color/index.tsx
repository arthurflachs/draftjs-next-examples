import { useState } from 'react';
import { EditorState, Modifier, RichUtils } from 'draft-js';
import Editor from '../../../components/editor';
import Layout from '../../../components/layout';
import ColorControls from '../../../components/color/color-controls';
import { colorStyleMap } from '../../../lib/color/color-utils';
import 'draft-js/dist/Draft.css';

export default function ColorEditorExample() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleToggleColor = (toggledColor: string) => {
    const selection = editorState.getSelection();

    const nextContentState = Object.keys(colorStyleMap)
      .reduce(
        (contentState, color) => Modifier.removeInlineStyle(contentState, selection, color),
        editorState.getCurrentContent(),
      );
    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style',
    );

    const currentStyle = editorState.getCurrentInlineStyle();

    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce(
        (state, style) => RichUtils.toggleInlineStyle(state, style),
        nextEditorState,
      );
    }

    if (!currentStyle.has(toggledColor)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        toggledColor
      );
    }

    setEditorState(nextEditorState);
  }

  return (
    <Layout>
      <ColorControls editorState={editorState} onToggle={handleToggleColor} />
      <Editor
        editorState={editorState} 
        onChange={setEditorState}
        customStyleMap={colorStyleMap}
      />
    </Layout>
  );
}