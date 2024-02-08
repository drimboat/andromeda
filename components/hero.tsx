"use client"; 
import React, { useState } from 'react';

import Image from 'next/image'
import BackgroundImage from '/public/images/background.svg'

const textIdeas = [
  "No?",
  "sure?",
  "really sure?",
  "You nor go gree keh?",
  "think about this",
  "don't be so cold",
  "is this really what you want?",
  "don't be like this",
  "Is this your final answer?",
  "Last Chance!",
  "Be for real",
  "Change of heart?",
  "Damn."
];

const fontSizes = [
  "medium",
  "small",
  "smaller",
  "x-small",
  "xx-small"];

export default function Hero() {
  const [count, setCount] = useState(0);
  const [proposalText, setProposalText] = useState("Will you be my ❤Valentine❤?");
  const [rejectText, setRejectText] = useState("No");
  const [proposalImage, setProposalImage] = useState("https://giphy.com/embed/wsySkjPDNC6vC");
  const [acceptWidth, setAcceptWidth] = useState(100);
  const [rejectWidth, setRejectWidth] = useState(100);
  const [display, setDisplay] = useState("i");
  const [fontSize, setFontSize] = useState("initial");

  function handleReject() {
    setCount(count+1);

    setAcceptWidth(acceptWidth+50);
    setRejectWidth(rejectWidth-2);

    if (count == 2) {
      setProposalImage("https://giphy.com/embed/JIjPcgGthCfCiicwYY")
    } else if (count == 5){
      setProposalImage("https://giphy.com/embed/Sp7IpE95BqzOU")
    } else if (count == textIdeas.length) {
      setProposalImage("https://giphy.com/embed/F99PZtJC8Hxm0")
      setDisplay("none")
      setProposalText("OH")
    }

    setFontSize(count < fontSizes.length ? fontSizes[count] : fontSizes[fontSizes.length-1])
    setRejectText(textIdeas[count]);
  }

  function handleAccept() {
    setProposalText("❤ Yayyyy ❤")
    setDisplay("none")
    setProposalImage("https://giphy.com/embed/GcJN2Dz5XMDeM")
  }
  return (
    <section>
      <div>

        {/* Illustration behind hero content */}
        <div className="absolute left-0 bottom-0 -ml-20 lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400" style={{ width: "-webkit-fill-available", position: "fixed"}} >
          <Image src={BackgroundImage} alt="Background" style={{width: "-webkit-fill-available", filter: 'brightness(50%)', minWidth: '1500px', minHeight:'100%'}}/>
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">{proposalText}</h1>
            <div style={{height: '300px', pointerEvents: 'none', margin: '0 15px'}}><iframe src={proposalImage} title="cow" width="100%" height="100%" style={{ pointerEvents: 'none'}}></iframe></div>
            <div className="sm:max-w-none sm:flex sm:justify-center" style={{marginTop: '15px', display: display}}>
              
            <div data-aos="fade-up" data-aos-delay="600" onClick={() => handleReject()}>
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full mb-4 sm:w-auto sm:mb-0" style={{width: rejectWidth+'px', height: rejectWidth/2+'px', minWidth: 'max-content', fontSize: fontSize}}>{rejectText}</a>
              </div>
              <div data-aos="fade-up" data-aos-delay="400" onClick={() => handleAccept()}>
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full  sm:w-auto sm:ml-4" style={{width: acceptWidth+'px', height: acceptWidth/2+'px'}}>Yes</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
