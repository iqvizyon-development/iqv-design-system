declare module 'flamegrill' {
  export type Scenario = {
    scenario: string;
    baseline?: string;
  };

  export interface Scenarios {
    [scenarioName: string]: Scenario;
  }

  export interface PageActionOptions {
    url: string;
  }

  export interface ProfilePage {
    setDefaultTimeout(timeout: number): void;
    goto(url: string): Promise<unknown>;
    waitForSelector(selector: string): Promise<unknown>;
  }

  export type PageActions = (page: ProfilePage, options: PageActionOptions) => Promise<void>;

  export interface ScenarioConfig {
    outDir?: string;
    tempDir?: string;
    pageActions?: PageActions;
  }

  export interface ProcessedOutput {
    flamegraphFile?: string;
  }

  export interface ProcessedError {
    errorFile?: string;
  }

  export interface ProcessedScenario {
    output?: ProcessedOutput;
    error?: ProcessedError;
    baseline?: {
      output?: ProcessedOutput;
      error?: ProcessedError;
    };
  }

  export interface ScenarioAnalysis {
    numTicks?: number;
    baseline?: {
      numTicks?: number;
    };
    regression?: {
      isRegression?: boolean;
      regressionFile?: string;
    };
  }

  export interface CookResult {
    profile: unknown;
    processed: ProcessedScenario;
    analysis?: ScenarioAnalysis;
  }

  export interface CookResults {
    [scenarioName: string]: CookResult;
  }

  export function cook(scenarios: Scenarios, userConfig?: ScenarioConfig): Promise<CookResults>;

  const flamegrill: {
    cook: typeof cook;
  };

  export default flamegrill;
}
