import type { PluginDetail } from '~/types';

export const pluginDescription: PluginDetail = {
  name: 'repl',
  displayName: 'Local JavaScript REPL',
  description: `
    Evaluates JavaScript code in the context of the REPL.
    Returns the result of the evaluation.

    Example:
    \`\`\`
    > repl("Math.pow(2, 3)")
    8
    \`\`\`
  `,
  usage: 'repl(javaScriptCode)',
};

export default async function repl(config: any, code: string) {
  try {
    // eslint-disable-next-line no-eval
    const codeEval = eval(code);
    return codeEval;
  } catch (e) {
    return `Error: ${e}`;
  }
}
