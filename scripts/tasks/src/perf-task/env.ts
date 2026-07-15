/**
 * Default deploy host for local testing. Override with DEPLOYHOST in CI.
 */
const DEPLOY_URL = 'ibz-04.github.io';

export const DEPLOYHOST = process.env.DEPLOYHOST ?? DEPLOY_URL;
export const DEPLOYURL = process.env.DEPLOYURL;
export const SYSTEM_PULLREQUEST_TARGETBRANCH = process.env.SYSTEM_PULLREQUEST_TARGETBRANCH;

const envPrefix = { filePath: 'PerfCommentFilePath', status: 'PerfCommentStatus' };

export const EnvVariablesByProject: { [projectName: string]: { filePath: string; status: string } } = {
  '@iqvizyonui/react': { filePath: `${envPrefix.filePath}React`, status: `${envPrefix.status}React` },
  '@iqvizyonui/react-components': {
    filePath: `${envPrefix.filePath}ReactComponents`,
    status: `${envPrefix.status}ReactComponents`,
  },
};
