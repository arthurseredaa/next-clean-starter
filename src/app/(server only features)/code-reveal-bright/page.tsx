import {Code} from "bright";
import {FIRST_SNIPPET, SECOND_SNIPPET, THIRD_SNIPPET} from "./data";
import RevealContentButton from "./RevealContentButton";

// Code with problem: https://github.com/joy-of-react/next-bright/blob/main/src/app/page.js

const CodeRevealPage = () => {
  return (
	<main className="m-0 mx-auto min-h-[896px h-auto] max-w-[624px]">
	  <h1 className="text-4xl">Introduction to Python</h1>
	  <h2 className="text-2xl">Variables and Basic Data Types</h2>
	  <p>
		Python is a high-level, interpreted
		programming language. In Python, you don&apos;t
		need to specify the data type of a
		variable when you declare it. Python
		automatically determines the data type
		based on the value you assign.
	  </p>

	  <RevealContentButton>
		<Code
		  className="code-snippet"
		  theme="dracula"
		  lang="py"
		>
		  {FIRST_SNIPPET}
		</Code>
	  </RevealContentButton>

	  <h2 className="text-2xl">
		Control Flow: Conditionals and Loops
	  </h2>
	  <p>
		Python has standard control flow
		structures like if statements, for and
		while loops.
	  </p>

	  <RevealContentButton>
		<Code
		  className="code-snippet"
		  theme="dracula"
		  lang="py"
		>
		  {SECOND_SNIPPET}
		</Code>
	  </RevealContentButton>

	  <h2 className="text-2xl">Functions and Basic Data Structures</h2>

	  <p>
		In Python, you can define your own
		functions using the def keyword. Python
		also has built-in data structures like
		lists and dictionaries.
	  </p>

	  <RevealContentButton>
		<Code
		  className="code-snippet"
		  theme="dracula"
		  lang="py"
		>
		  {THIRD_SNIPPET}
		</Code>
	  </RevealContentButton>
	</main>
  );
};

export default CodeRevealPage;
