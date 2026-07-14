import { preset, task } from '@iqvizyonui/scripts-tasks';

preset();

task('build', 'build:node-lib').cached!();
