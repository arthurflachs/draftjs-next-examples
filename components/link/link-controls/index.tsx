import { EditorState } from "draft-js";
import { MouseEvent } from "react";
import styles from "./styles.module.css";

interface LinkControlsProps {
  onAddLink: () => any;
  onRemoveLink: () => any;
}

export default function LinkControls({ onAddLink, onRemoveLink }: LinkControlsProps) {
  const handleAddLink = (e: MouseEvent) => {
    e.preventDefault();
    onAddLink();
  }
 
  const handleRemoveLink = (e: MouseEvent) => {
    e.preventDefault();
    onRemoveLink();
  }

  return (
    <div className={styles.buttons}>
      <button className={styles.button} onMouseDown={handleAddLink}>Add link</button>
      <button className={styles.button} onMouseDown={handleRemoveLink}>Remove link</button>
    </div>
  );
}