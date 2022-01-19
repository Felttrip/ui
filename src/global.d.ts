/// <reference types="@sveltejs/kit" />

type OptionalProperty<T> = T | null | undefined;

interface Window {
  Prism: {
    highlightAll: () => void;
  };
}

interface ImportMeta {
  env: {
    VITE_API: string;
  };
}

type Eventual<T> = T | PromiseLike<T>;

type WorkflowStatus =
  | 'Running'
  | 'TimedOut'
  | 'Completed'
  | 'Failed'
  | 'Completed'
  | 'ContinuedAsNew'
  | 'Canceled'
  | 'Terminated'
  | null;

type NamespaceScopedRequest = { namespace: string };

type NextPageToken = Uint8Array | string;
type WithNextPageToken = { nextPageToken?: NextPageToken };
type WithoutNextPageToken<T> = Omit<T, keyof WithNextPageToken>;
type NextPageTokens = {
  open: NextPageToken;
  closed: NextPageToken;
};

type PaginationCallbacks<T> = {
  onStart?: () => void;
  onUpdate?: (
    full: WithoutNextPageToken<T>,
    current: WithoutNextPageToken<T>,
  ) => void;
  onComplete?: (finalProps: WithoutNextPageToken<T>) => void;
  onError?: (error: unknown) => void;
};

type WorkflowType = string | null;

type WorkflowExecutionFilters = {
  type: WorkflowType;
  status: WorkflowStatus;
};

type TimeFormat = 'UTC' | 'relative' | 'local';

type FilterParameters = {
  workflowId?: string | null;
  workflowType?: string | null;
  executionStatus?: WorkflowStatus | null;
  timeRange?: Duration | string | null;
};

type Settings = {
  auth: {
    enabled: boolean;
  };
};

type User = {
  email: string;
  name: string;
  picture: string;
};
