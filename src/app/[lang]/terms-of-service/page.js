import React from 'react'
import { getDictionary } from '../../../../lib/dictionaries';
import TermOfServices from './Terms';

export async function generateMetadata({ params }) {
  const dict = await getDictionary(params.lang);
  return {
    title: dict.Seo.TermsAndCondition?.title  || "Default Title",
    description: dict.Seo.TermsAndCondition?.description || "Default description",
  };
}


const layout = () => {
  return (
    <>
    <TermOfServices></TermOfServices>
    </>
  )
}

export default layout