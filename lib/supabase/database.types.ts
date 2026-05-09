export type Database = {
  public: {
    Tables: {
      cases: {
        Row: {
          id: number;
          client: string;
          campaign: string | null;
          description: string;
          video_path: string;
          created_at: string;
        };
        Insert: {
          id?: number;
          client: string;
          campaign?: string | null;
          description: string;
          video_path: string;
          created_at?: string;
        };
        Update: {
          id?: number;
          client?: string;
          campaign?: string | null;
          description?: string;
          video_path?: string;
          created_at?: string;
        };
      };
    };
  };
};