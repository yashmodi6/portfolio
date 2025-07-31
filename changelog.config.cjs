module.exports = {
  preset: 'angular',
  releaseCount: 0,
  tagPrefix: '',
  append: false,
  parserOpts: {
    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
  },
  writerOpts: {
    transform: (commit, context) => {
      const typeMap = {
        feat: '✨ Features',
        fix: '🐛 Bug Fixes',
        chore: '🧰 Chores',
        docs: '📝 Documentation',
        refactor: '🔨 Refactors',
        style: '🎨 Styling',
        test: '🧪 Tests',
      };

      // clone commit to avoid modifying immutable object
      const cloned = { ...commit };

      if (!cloned.type) return;

      cloned.type = typeMap[cloned.type] || `📦 Other (${cloned.type})`;
      return cloned;
    },
  },
};