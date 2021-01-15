import { EditorState } from 'draft-js';
import StyleButton from './style-button';
import styles from './styles.module.css';
import { COLORS } from '../../../lib/color/color-utils';

interface ColorControlsProps {
  editorState: EditorState;
  onToggle(toggledColor: string): any;
}

export default function ColorControls({ editorState, onToggle }: ColorControlsProps) {
  const currentStyle = editorState.getCurrentInlineStyle();
  
  return (
    <div className={styles.controls}>
      {COLORS.map(color => (
        <StyleButton
          key={color.label}
          active={currentStyle.has(color.style)}
          label={color.label}
          style={color.style}
          onToggle={onToggle} 
       />
      ))}
    </div>
  );
}