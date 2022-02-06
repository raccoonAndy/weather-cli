#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather, getIcon } from './services/api.service.js';
import {
  printHelp,
  printError,
  printSuccess,
  printMessage,
} from './services/log.service.js';
import {
  saveKeyValue,
  TOKEN_DICTIONARY,
  getKeyValue,
} from './services/storage.service.js';

const save = async (type, query) => {
  if (!query?.length) {
    printError(`${type} wasn't passed`);
    return;
  }
  try {
    await saveKeyValue(type, query);
    printSuccess(`Set ${type} by default`);
  } catch (e) {
    printError(e.message);
  }
};

const getForecast = async () => {
  try {
    const city = await getKeyValue(TOKEN_DICTIONARY.CITY);
    const weather = await getWeather(process.env.CITY ?? city);
    printMessage(weather, getIcon(weather.weather[0].icon));
  } catch (err) {
    if (err?.response?.status == 404) {
      printError("Sorry, I don't know this city 😔");
    } else if (err?.response?.status == 401) {
      printError(
        'Please, enter the right API key for token.\nYou can read about it on https://openweathermap.org/faq'
      );
    } else {
      printError(err.message);
    }
  }
};

const initCLI = async () => {
  const args = getArgs(process.argv);
  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    await save(TOKEN_DICTIONARY.CITY, args.s);
  }
  if (args.t) {
    return save(TOKEN_DICTIONARY.TOKEN, args.t);
  }
  return getForecast();
};

initCLI();
