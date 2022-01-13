module.exports = {
  plugins: ["solid"],
  extends: ["prettier", "eslint/recommended", "plugin:solid/recommended"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {},
};
