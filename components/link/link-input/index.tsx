import { FormEvent, MouseEvent, useState } from 'react';
import styles from './styles.module.css';

interface LinkInputProps {
  initialValue: string;
  onConfirmLink: (value: string) => any;
}

export default function LinkInput({ initialValue, onConfirmLink }: LinkInputProps) {
  const [value, setValue] = useState(initialValue);
  const handleConfirmLink = (e: MouseEvent) => {
    e.preventDefault();
    onConfirmLink(value);
  };
  const handleValueChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className={styles.urlInputContainer}>
      <input type="text" onChange={handleValueChange} className={styles.urlInput} />
      <button onMouseDown={handleConfirmLink}>Confirm</button>
    </div>
  );
}