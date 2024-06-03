'use client'

import {useState} from "react";

const RevealContentButton = ({ children }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
	<div className="container bg-gray-800">
	  {isRevealed ? children : (
		<div className="reveal">
		  <button
			className="btn btn-primary"
			onClick={() =>
			  setIsRevealed(true)
			}
		  >
			Reveal Content
		  </button>
		</div>
	  )}
	</div>
  );
};

export default RevealContentButton;
