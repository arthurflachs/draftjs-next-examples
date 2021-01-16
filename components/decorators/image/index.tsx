import { CharacterMetadata, ContentBlock, ContentState, DraftDecorator } from "draft-js";

function findImageEntities(
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState,
) {
  contentBlock.findEntityRanges(
    (character: CharacterMetadata) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'IMAGE'
      );
    },
    callback,
  );
}

interface ImageComponentProps {
  contentState: ContentState;
  entityKey: string;
}

export function ImageComponent({
  contentState,
  entityKey,
}: ImageComponentProps) {
  const { src, height, width } = contentState.getEntity(entityKey).getData();

  return <img src={src} height={height} width={width} />;
}

const ImageDecorator: DraftDecorator = {
  strategy: findImageEntities,
  component: ImageComponent,
};

export default ImageDecorator;