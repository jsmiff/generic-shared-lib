const presets = [
  [ 
    "@babel/preset-env",
    {
      "targets": "> 0.25%, not dead",
      "modules": process.env.MODULE === "esm" ? false : "commonjs"
    }
  ],
  "@babel/preset-react",
  "@babel/preset-typescript"
];

module.exports = (api) => {
  api.cache(true);
  return {
    presets,
  };
};