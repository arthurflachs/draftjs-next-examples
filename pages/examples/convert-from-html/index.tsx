import React, { MouseEvent, useState } from "react";
import { CompositeDecorator, ContentState, convertFromHTML, convertToRaw, EditorState } from "draft-js";
import Layout from "../../../components/layout";
import Editor from "../../../components/editor";
import styles from './styles.module.css';
import LinkDecorator from "../../../components/decorators/link/link";
import ImageDecorator from "../../../components/decorators/image";

const sampleMarkup =
  '<b>Bold text</b>, <i>Italic text</i><br/ ><br />' +
  '<a href="http://www.facebook.com">Example link</a><br /><br/ >' +
  '<img src="/convert-from-html/image.png" height="112" width="200" />';

export default function ConvertFromHTMLExample() {
  // TODO: support server side rendering ?
  if (typeof document === 'undefined') {
    return null;
  }

  const decorator = new CompositeDecorator([
    LinkDecorator,
    ImageDecorator,
  ]);
  
  const logState = (event: MouseEvent) => {
    event.preventDefault();
    const content = editorState.getCurrentContent();
    console.log(convertToRaw(content));
  }

  const blocksFromHTML = convertFromHTML(sampleMarkup);
  const contentState = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap,
  );
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(contentState, decorator)
  );

  return (
    <Layout>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
      />
      <input
        type="button"
        onClick={logState}
        value="Log State"
        className={styles.button}
      />
    </Layout>
  );
}