export type TagPickerInputTokens = {
  width: string;
};

export const tagPickerInputCSSRules: { [Key in keyof TagPickerInputTokens]: `--iqv-TagPickerInput__${Key}` } = {
  width: '--iqv-TagPickerInput__width',
};

export const tagPickerInputTokens: Record<keyof TagPickerInputTokens, string> = {
  width: `var(${tagPickerInputCSSRules.width}, 0)`,
};
