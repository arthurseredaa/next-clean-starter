import {readFile, writeFile} from "@/utils/file-helpers";
import PageVisitedTimes from "./PageVisitedTimes";

const DB_PATH = './src/database.json'

// We need to read the data from the file, increment the hits and write it back to the file
// Also, we need to pass the hits to the PageVisitedTimes component that is client-side rendered and use useState to blur the text

const HitCounterClientPage = () => {
  const data = JSON.parse(readFile(DB_PATH))

  data.hits += 1

  writeFile(DB_PATH, JSON.stringify(data))

  return (
	<div className="flex flex-col w-full lg:flex-row p-4">
	  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
		<h2>Hi there!</h2>
	  </div>
	  <div className="divider lg:divider-horizontal"/>
	  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
		<PageVisitedTimes hits={data.hits} />
	  </div>
	</div>
  );
};

export default HitCounterClientPage;
