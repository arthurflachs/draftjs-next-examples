import Layout from '../../../components/color/layout';
import ColorControls from '../../../components/color/color-controls';
import ColorEditor from '../../../components/color/color-editor';

import 'draft-js/dist/Draft.css';

export default function ColorEditorExample() {
  return (
    <Layout>
      <ColorControls />
      <ColorEditor />
    </Layout>
  );
}