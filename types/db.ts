export interface Database {
  organizations: Organization[];
}

export type Organization = {
  id: number;
  created_at: string;
  name: string;
  slug: string;
  created_by: string;
}
