import { CharacterMetadata, ContentBlock, ContentState, DraftDecorator } from "draft-js";
import { ReactNode } from "react";
import styles from './styles.module.css';

function findLinkEntities(
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState,
) {
  contentBlock.findEntityRanges(
    (character: CharacterMetadata) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'LINK'
      );
    },
    callback,
  );
}

interface LinkComponentProps {
  children: ReactNode;
  contentState: ContentState;
  entityKey: string;
}

export function LinkComponent({ children, contentState, entityKey }: LinkComponentProps) {
  const { url } = contentState.getEntity(entityKey).getData();

  return (
    <a href={url} className={styles.link}>{children}</a>
  );
}

const LinkDecorator: DraftDecorator = {
  strategy: findLinkEntities,
  component: LinkComponent,
};

export default LinkDecorator;