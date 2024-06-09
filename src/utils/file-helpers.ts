import fs from 'fs';
import path from 'path';

export const readFile = (localPath: string): Promise<{hits: number}> => {
  const page = fs.readFileSync(
	path.join(process.cwd(), localPath),
	'utf8'
  )

  return JSON.parse(page);
}

export const writeFile = (localPath: string, content: string): void => {
  fs.writeFileSync(
	path.join(process.cwd(), localPath),
	content,
	{encoding: 'utf8'}
  );
}
