import appLogo from './assets/app_logo.svg';
import avatarColin from './assets/avatar_colin.svg';
import avatarElvia from './assets/avatar_elvia.svg';
import docTemplate from './assets/doc_template.png';
import intelligence from './assets/intelligence.png';
import iqvLogo from './assets/iqv-logo.svg';
import logo from './assets/logo.svg';
import logo2 from './assets/logo2.svg';
import logo3 from './assets/logo3.svg';
import office1 from './assets/office1.png';
import office2 from './assets/office2.png';
import salesTemplate from './assets/sales_template.png';

const assetModules: Record<string, string> = {
  'app_logo.svg': appLogo,
  'avatar_colin.svg': avatarColin,
  'avatar_elvia.svg': avatarElvia,
  'doc_template.png': docTemplate,
  'intelligence.png': intelligence,
  'iqv-logo.svg': iqvLogo,
  'logo.svg': logo,
  'logo2.svg': logo2,
  'logo3.svg': logo3,
  'office1.png': office1,
  'office2.png': office2,
  'sales_template.png': salesTemplate,
};

export const resolveAsset = (asset: string): string => {
  const resolved = assetModules[asset];
  if (!resolved) {
    throw new Error(`Unknown card story asset: ${asset}`);
  }
  return resolved;
};
