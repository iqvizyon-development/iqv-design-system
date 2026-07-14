import { runPrettierForFolder } from '@iqvizyonui/scripts-prettier';

export function prettier() {
  runPrettierForFolder(process.cwd());
}
