import { ESLint } from 'eslint'
import type { CustomActionFunction, NodePlopAPI } from 'plop'

/**
 * eslintAction - Action to run eslint on the given file (config.path)
 *
 * ## ESLint Docs
 * @link https://eslint.org/docs/developer-guide/nodejs-api#eslint-class
 */
const eslintAction: CustomActionFunction = async (
  answers,
  config,
  plopInstance,
) => {
  if (config && config.path && plopInstance) {
    const filePath = plopInstance.renderString(config.path, answers)

    const eslint = new ESLint({ fix: true })
    const results = await eslint.lintFiles(filePath)

    await ESLint.outputFixes(results)

    return 'code formatted'
  }

  throw new Error('Formatting skipped')
}

export default (plop: NodePlopAPI) => {
  plop.setDefaultInclude({ actionTypes: true })
  plop.setActionType('eslint', eslintAction)
}
