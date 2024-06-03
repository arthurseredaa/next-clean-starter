import fs from 'fs';
import path from 'path';

export const readFile = (localPath: string): string => {
  return fs.readFileSync(
	path.join(process.cwd(), localPath),
	'utf8'
  );
}

export const writeFile = (localPath: string, content: string): void => {
  fs.writeFileSync(
	path.join(process.cwd(), localPath),
	content,
	{encoding: 'utf8'}
  );
}
