export interface Site {
  id: string;
  name: string;
  actions?: { (): void }[];
}
