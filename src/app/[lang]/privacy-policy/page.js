import React from 'react'
import { getDictionary } from '../../../../lib/dictionaries';
import Privacy from './PrivacyPolicy';

export async function generateMetadata({ params }) {
  const dict = await getDictionary(params.lang);
  return {
    title: dict.Seo.privacyPolicy?.title  || "Default Title",
    description: dict.Seo.privacyPolicy?.description || "Default description",
  };
}


const layout = () => {
  return (
    <>
    <Privacy></Privacy>
    </>
  )
}

export default layout