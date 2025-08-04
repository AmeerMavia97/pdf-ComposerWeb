import React from 'react'
import CombinePdfPage from './CombinePdf'
import { getDictionary } from '../../../../lib/dictionaries';

export async function generateMetadata({ params }) {
  const dict = await getDictionary(params.lang);
  return {
    title: dict.Seo.CombinePdf?.title  || "Default Title",
    description: dict.Seo.CombinePdf?.description || "Default description",
  };
}


const layout = () => {
  return (
    <>
    <CombinePdfPage></CombinePdfPage>
    </>
  )
}

export default layout