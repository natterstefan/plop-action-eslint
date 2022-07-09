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
  try {
    if (config && config.path && plopInstance) {
      const stringsToRender = Array.isArray(config.path)
        ? config.path
        : [config.path]
      const filePaths = stringsToRender.map(path =>
        plopInstance.renderString(path, answers),
      )

      const eslint = new ESLint({ fix: true })
      const results = await eslint.lintFiles(filePaths)

      await ESLint.outputFixes(results)

      return 'Code formatted'
    }
  } catch (_) {
    return 'Formatting failed'
  }

  return 'Formatting skipped'
}

export default (plop: NodePlopAPI) => {
  plop.setDefaultInclude({ actionTypes: true })
  plop.setActionType('eslint', eslintAction)
}
