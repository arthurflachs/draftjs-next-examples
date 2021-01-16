import { ContentBlock, ContentState, DraftDecorator, DraftEntityMutability } from "draft-js";
import { ReactNode } from "react";
import cx from "classnames";
import styles from "./styles.module.css";

function getEntityStrategy(mutability: DraftEntityMutability) {
  return (
      contentBlock: ContentBlock,
      callback: (start: number, end: number) => void,
      contentState: ContentState,
  ) => {
    contentBlock.findEntityRanges(
      (character) => {
        const entityKey = character.getEntity();
        if (entityKey === null) {
          return false;
        }

        return contentState.getEntity(entityKey).getMutability() === mutability;
      },
      callback
    );
  }
}

interface TokenComponentProps {
  children: ReactNode;
  contentState: ContentState;
  entityKey: string;
  offsetkey: string;
}

export function TokenComponent({
  contentState,
  entityKey,
  offsetkey,
  children,
}: TokenComponentProps) {
  const mutability = contentState.getEntity(entityKey).getMutability();
  
  return (
    <span data-offset-key={offsetkey} className={cx({
      [styles.immutable]: mutability === 'IMMUTABLE',
      [styles.mutable]: mutability === 'MUTABLE',
      [styles.segmented]: mutability === 'SEGMENTED',
    })}>
      {children}
    </span>
  );
}

function getTokenDecorator(mutability: DraftEntityMutability): DraftDecorator {
  return {
    strategy: getEntityStrategy(mutability),
    component: TokenComponent,
  };
}

export default getTokenDecorator;