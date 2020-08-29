import React, { useState } from 'react'

import Title from './comp/Title'
import UploadForm from './comp/UploadForm'
import ImageGrid from './comp/ImageGrid'
import Modal from './comp/Modal'

function App() {

  const [ selected, setSelected ] = useState(null)
  return (
    <div>
      <Title />
      <UploadForm />
      <ImageGrid setSelected={setSelected} />
      { selected && <Modal selected={selected} setSelected={setSelected} /> }
    </div>
  );
}

export default App;
