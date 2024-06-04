'use client';
import React from 'react';

// https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/03.05-ssr-gotchas (Video summary)
// Problem code: https://github.com/joy-of-react/next-ssr-gotchas/blob/main/src/components/Counter/Counter.js

// By default, hydration mismatches are really hard to troubleshoot and fix. To prevent this from being a major headache,
// React will explicitly throw an error when a hydration mismatch occurs.

// Here's the golden rule: The first render needs to produce the exact same markup on the server and on the client.
// The SSR'ed HTML should be the same as the hydration sketch.

const Counter = () => {
  // INFO: We want to fix this problem problem with localstorage usage adding condition and get mismatching hydration error
  // const [count, setCount] = React.useState<number | null>(() => {
	// if (typeof window === 'undefined') return 0
  //
	// return Number(window.localStorage.getItem('saved-count')) || 0;
  // });
  //
  // React.useEffect(() => {
	// window.localStorage.setItem('saved-count', String(count));
  // }, [count]);

  // FIX: fix for mismatching error
  const [count, setCount] = React.useState<number | null>(0);
  const isInitialMount = React.useRef(true);

  React.useEffect(() => {
	const savedValue =
	  window.localStorage.getItem('saved-count');

	if (savedValue === null) {
	  return;
	}

	setCount(Number(savedValue));
  }, []);

  React.useEffect(() => {
	if (isInitialMount.current) {
	  isInitialMount.current = false;
	  return
	}

	window.localStorage.setItem('saved-count', String(count));
  }, [count]);

  return (
	<button
	  className="btn btn-primary mx-auto mt-4"
	  onClick={() => setCount(count + 1)}
	>
	  Count: {count}
	</button>
  );
}

export default Counter;
