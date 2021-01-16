import { useState } from "react";
import { CompositeDecorator, convertFromRaw, EditorState, RawDraftContentState } from "draft-js";
import Editor from "../../../components/editor";
import getTokenDecorator from "../../../components/decorators/token";

const rawContent: RawDraftContentState = {
  blocks: [{
    text: (
      'This is an "immutable" entity: Superman. Deleting any ' +
      'characters will delete the entire entity. Adding characters ' +
      'will remove the entity from the range.'
    ),
    type: 'unstyled',
    entityRanges: [{
      offset: 31,
      length: 8,
      // @ts-ignore
      key: 'first',
    }],
  }, {
    text: '',
    type: 'unstyled',
  }, {
    text: (
      'This is a "mutable" entity: Batman. Characters may be added ' +
      'and removed.'
    ),
    type: 'unstyled',
    entityRanges: [{
      offset: 28,
      length: 6,
      // @ts-ignore
      key: 'second',
    }],
  }, {
    text: '',
    type: 'unstyled',
  }, {
    text: (
      'This is a "segmented" entity: Green Lantern. Deleting any ' +
      'characters will delete the current "segment" from the range. ' +
      'Adding characters will remove the entire entity from the range.'
    ),
    type: 'unstyled',
    entityRanges: [{
      offset: 30,
      length: 13,
      // @ts-ignore
      key: 'third',
    }],
  }],

  entityMap: {
    first: {
      type: 'TOKEN',
      mutability: 'IMMUTABLE',
    },
    second: {
      type: 'TOKEN',
      mutability: 'MUTABLE',
    },
    third: {
      type: 'TOKEN',
      mutability: 'SEGMENTED',
    },
  },
};

export default function EntityExample() {
  const blocks = convertFromRaw(rawContent);
  const decorator = new CompositeDecorator([
    getTokenDecorator('IMMUTABLE'),
    getTokenDecorator('MUTABLE'),
    getTokenDecorator('SEGMENTED'),
  ]);

  const [editorState, setEditorState] =
    useState(EditorState.createWithContent(blocks, decorator));

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      placeholder="Enter some text"
    />
  );
}