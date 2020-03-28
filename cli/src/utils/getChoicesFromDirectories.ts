const path = require('path');
const getDirectories = require('./getDirectories');

const cwd = process.cwd();

export const getChoicesFromDirectories = (config, directoryPath) => {
  const directories = getDirectories(
    path.resolve(cwd, config.projectRoot, config.relativeProjectRoot, directoryPath)
  );
  const choices = [];

  directories.forEach(directory => {
    choices.push({
      title: directory,
      value: directory,
    });
  });

  return choices;
};
