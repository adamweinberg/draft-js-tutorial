import React, { useState } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import Toolbar from './Toolbar';

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not handled";
  };

  return (
    <div id='draft-editor'>
      <label>rich text input field → </label>
      <Toolbar editorState={editorState} setEditorState={setEditorState}/>
      <Editor editorState={editorState} onChange={setEditorState} handleKeyCommand={handleKeyCommand} />
    </div>
  )
}

export default RichTextEditor
