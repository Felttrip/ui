import { writable } from 'svelte/store';

export const workflowIdColumnWidth = writable<number>(0);
export const workflowTypeColumnWidth = writable<number>(0);
export const workflowSummaryColumnWidth = writable<number>(0);
