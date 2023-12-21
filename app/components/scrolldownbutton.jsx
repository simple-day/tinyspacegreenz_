// ScrollToBottomButton.js
"use client"

import React, { useEffect } from 'react';

const ScrollToBottomButton = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button className="custom-btn " onClick={scrollToBottom}>Contact Us!</button>
  );
};

export default ScrollToBottomButton;
