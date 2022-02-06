import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(`${chalk.bgRed('ERROR')} ${error}`);
};

const printSuccess = (msg) => {
  console.log(`${chalk.bgGreen('SUCCESS')} ${msg}`);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan('HELP')}
		show the weather
		-s [CITY] show the weather for the listed city
		-h show manual
		-t [API_KEY] save token`
  );
};

const printMessage = (data, icon) => {
  if (!data) return;
  console.log(
    dedent`${chalk.bgYellow('WEATHER')} The weather in ${data.name}.
    It's ${data.weather[0]?.description} ${icon}.
    The temperature is ${data.main?.temp} Celsius.
    The wind is ${data.wind?.speed} meter/sec.`
  );
};

export { printError, printSuccess, printHelp, printMessage };
