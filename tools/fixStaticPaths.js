const replaceInFiles = require("replace-in-files");

const options = {
  files: ["__sapper__/export/**/*.html"],
  from: /href=client/g,
  to: "href=/client"
};

replaceInFiles(options)
  .then(({ changedFiles, countOfMatchesByPaths, replaceInFilesOptions }) => {
    console.log("Modified files:", changedFiles);
    console.log("Count of matches by paths:", countOfMatchesByPaths);
    console.log("was called with:", replaceInFilesOptions);
  })
  .catch(error => {
    console.error("Error occurred:", error);
  });
