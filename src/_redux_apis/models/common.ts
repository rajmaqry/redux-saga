export interface AssertAction {
  type: string;
  payload?: any;
  requestId?: string;
  retries?: number;
  retry_interval?: number;
}
