/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const copyfiles = require('copyfiles')

const filesToCopy = ['LICENSE', 'CHANGELOG.md', 'README.md']

const targetPackages = ['packages/plop-action-eslint']

targetPackages.forEach(targetPath => {
  copyfiles([...filesToCopy, targetPath], () => null)
})
