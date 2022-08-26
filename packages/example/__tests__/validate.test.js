/* eslint-disable @typescript-eslint/no-var-requires */
const { existsSync, readFileSync } = require('fs')
const path = require('path')

const fileName = path.join(__dirname, '../lib/Test.ts')

if (!existsSync(fileName)) {
  throw new Error('File does not exist')
}

if (
  !readFileSync(fileName, 'utf-8').includes(
    'export function Test({ id }: ITestProps) {',
  )
) {
  throw new Error('Content does not match')
}
