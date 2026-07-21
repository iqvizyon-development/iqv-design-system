const chalk = require('chalk');

const { isCI } = require('./is-ci');

main();

function main() {
  if (isCI()) {
    process.exit(0);
  }

  gettingStarted();
}

function gettingStarted() {
  const COMMAND_PREFIX = `${chalk.cyan('>')} ${chalk.inverse(chalk.bold(chalk.cyan(' GETTING STARTED ')))}`;

  console.log('\n');
  console.log(COMMAND_PREFIX);
  console.log(`✅ All dependencies are installed!`);
  console.log(`🎬 Start development via: ${chalk.yellow('yarn start')}`);
  console.log(
    `💡 Learn more in the project docs: https://github.com/iqvizyon-development/iqv-design-system/tree/master/docs`,
  );
}
