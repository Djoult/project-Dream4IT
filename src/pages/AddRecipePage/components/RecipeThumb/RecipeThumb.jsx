/* eslint-disable no-empty */
import { useState } from 'react';
import { ReactComponent as IconPlus } from '../../../../images/plus-2.svg';
import { Thumb, Image, AddImage, Browse, Caption } from './RecipeThumb.styled';
import { IconNoImage } from '../../../../styles/icons';
// import { useAddRecipe } from '../../../../redux/addRecipe/hooks';

export const RecipeThumb = ({ onChange }) => {
  // const { setRecipeThumbFile, thumbFile } = useAddRecipe();
  const [thumbFile, setRecipeThumbFile] = useState(null);

  const getFileUrl = () => {
    try {
      return URL.createObjectURL(thumbFile);
    } catch {}
  };

  const handleFileChange = ({ target: { files } }) => {
    setRecipeThumbFile(files[0]);
    onChange(files[0]);
  };

  const handleBrowseClick = e => {
    if (!thumbFile) return;
    // чтобы не сработал input:file при удалении
    e.preventDefault();
    setRecipeThumbFile(null);
    onChange(null);
  };

  return (
    <Thumb>
      {thumbFile && <Image src={getFileUrl()} />}
      <AddImage file={thumbFile}>
        <Browse onClick={handleBrowseClick}>
          {thumbFile ? <IconNoImage size={20} /> : <IconPlus />}
          <input type="file" onChange={handleFileChange} />
        </Browse>
        <Caption>{thumbFile ? 'Remove' : 'Add image'}</Caption>
      </AddImage>
    </Thumb>
  );
};
