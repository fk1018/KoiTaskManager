export interface Site {
  id: string;
  name: string;
  action?: { (): void };
}
