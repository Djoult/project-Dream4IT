/* eslint-disable no-empty */
import { useState } from 'react';
import { ReactComponent as IconPlus } from '../../../../images/plus-2.svg';
import { MdOutlineImageNotSupported as IconNoImage } from 'react-icons/md';
import { Thumb, Image, AddImage, Browse, Caption } from './RecipeThumb.styled';

export const RecipeThumb = () => {
  const [file, setFile] = useState(null);

  const handleChange = e => {
    try {
      setFile(URL.createObjectURL(e.target.files[0]));
    } catch {}
  };

  const handleBrowseClick = e => {
    if (!file) return;
    // чтобы не сработал input:file
    e.preventDefault();
    setFile(null);
  };

  return (
    <Thumb>
      {file && <Image src={file} />}
      <AddImage file={file}>
        <Browse onClick={handleBrowseClick}>
          {file ? <IconNoImage size={20} /> : <IconPlus />}
          <input type="file" onChange={handleChange} />
        </Browse>
        <Caption>{file ? 'Remove' : 'Add image'}</Caption>
      </AddImage>
    </Thumb>
  );
};
