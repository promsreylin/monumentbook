import React from 'react'

export default function FeatureComponent(props) {
  return (
    <section className="bg-[#292D77] h-auto rounded-lg px-5 pb-8 pt-2 text-center">
      <img className="mx-auto my-4" src={props.featureimage} alt="" />
      <p className="lg:text-lg text-white font-bold uppercase">{props.text}</p>
    </section>
  ) 
} 
