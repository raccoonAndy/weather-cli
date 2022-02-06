import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';
/**
 * basename(filePath) — отображает последнюю папку / файл
 * dirname(filePath) — отображает, где лежит файл, без самого файла
 * extname(filePath) — отображает расширение файла
 * relative(filePath, dirname(filePath)) — какой путь нам нужен относительно первого ко второму
 * isAbsolute(filePath) — true / false абсолютный ли путь
 * resolve('..') — строится относительно испольнения текущей папки
 * sep — показывает сепаратор ОС
 */
const filePath = join(homedir(), 'weather-data.json');

const TOKEN_DICTIONARY = {
  TOKEN: 'token',
  CITY: 'city',
};

const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (e) {
    return false;
  }
};

const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
  }

  return undefined;
};

const saveKeyValue = async (key, value) => {
  let data = {};
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
  }
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };
