import {readFile, writeFile} from "@/utils/file-helpers";

const DB_PATH = './src/database.json'

const HitCounterPage = () => {
  const data = JSON.parse(readFile(DB_PATH))

  data.hits += 1

  writeFile(DB_PATH, JSON.stringify(data))

  return (
	<div className="flex flex-col w-full lg:flex-row p-4">
	  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
		<h2>Hi there!</h2>
	  </div>
	  <div className="divider lg:divider-horizontal" />
	  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
		<p>This page has been visited {data.hits} times.</p>
	  </div>
	</div>
  );
};

export default HitCounterPage;
