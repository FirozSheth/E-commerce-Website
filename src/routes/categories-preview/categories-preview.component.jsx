import { useContext, Fragment } from 'react';

import CategoryPreview from '../../component/category-preview/category-preview.component';

import { CategoriesContext } from '../../contexts/categories.context';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment className='category-preview-container'>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;