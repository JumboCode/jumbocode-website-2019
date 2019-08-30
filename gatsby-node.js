exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'raw-loader',
        },
      ],
    },
  });
};
