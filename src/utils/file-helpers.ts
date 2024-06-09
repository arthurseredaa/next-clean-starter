import { promises as fs } from 'fs';
import path from 'path';

export const readFile = (localPath: string): Promise<{hits: number}> => {
  return fs.readFile(
	path.join(process.cwd(), localPath),
	'utf8'
  ).then((data) => JSON.parse(data))
}

export const writeFile = async (localPath: string, content: string): Promise<void> => {
  await fs.writeFile(
	path.join(process.cwd(), localPath),
	content,
	{encoding: 'utf8'}
  );
}
