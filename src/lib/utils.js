export const tryRequire = path => {
  try {
    return require(`${path}`);
  } catch (err) {
    return null;
  }
};