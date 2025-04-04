export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      note_attachments: {
        Row: {
          file_url: string;
          id: number;
          line_number: number;
          note_id: number;
          uploaded_at: string | null;
        };
        Insert: {
          file_url: string;
          id?: number;
          line_number: number;
          note_id: number;
          uploaded_at?: string | null;
        };
        Update: {
          file_url?: string;
          id?: number;
          line_number?: number;
          note_id?: number;
          uploaded_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "fk_notes_attachments";
            columns: ["note_id"];
            isOneToOne: false;
            referencedRelation: "notes";
            referencedColumns: ["id"];
          },
        ];
      };
      note_permissions: {
        Row: {
          access_level: string;
          id: number;
          note_id: number;
          user_id: string;
        };
        Insert: {
          access_level: string;
          id?: number;
          note_id: number;
          user_id: string;
        };
        Update: {
          access_level?: string;
          id?: number;
          note_id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "fk_notes_note_permissions";
            columns: ["note_id"];
            isOneToOne: false;
            referencedRelation: "notes";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "fk_users_note_permissions";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      note_tags: {
        Row: {
          note_id: number;
          tag_id: number;
        };
        Insert: {
          note_id: number;
          tag_id: number;
        };
        Update: {
          note_id?: number;
          tag_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "fk_notes_note_tags";
            columns: ["note_id"];
            isOneToOne: false;
            referencedRelation: "notes";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "fk_tags_note_tags";
            columns: ["tag_id"];
            isOneToOne: false;
            referencedRelation: "tags";
            referencedColumns: ["id"];
          },
        ];
      };
      notes: {
        Row: {
          content: string;
          created_at: string | null;
          id: number;
          is_public: boolean | null;
          owner_id: string;
          title: string;
          updated_at: string | null;
          vault_id: number;
        };
        Insert: {
          content: string;
          created_at?: string | null;
          id?: number;
          is_public?: boolean | null;
          owner_id: string;
          title: string;
          updated_at?: string | null;
          vault_id: number;
        };
        Update: {
          content?: string;
          created_at?: string | null;
          id?: number;
          is_public?: boolean | null;
          owner_id?: string;
          title?: string;
          updated_at?: string | null;
          vault_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "fk_notes_owner";
            columns: ["owner_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "fk_vaults_notes";
            columns: ["vault_id"];
            isOneToOne: false;
            referencedRelation: "vaults";
            referencedColumns: ["id"];
          },
        ];
      };
      tags: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      users: {
        Row: {
          created_at: string | null;
          email: string;
          id: string;
          name: string;
        };
        Insert: {
          created_at?: string | null;
          email: string;
          id: string;
          name: string;
        };
        Update: {
          created_at?: string | null;
          email?: string;
          id?: string;
          name?: string;
        };
        Relationships: [];
      };
      vault_permissions: {
        Row: {
          access_level: string;
          id: number;
          user_id: string;
          vault_id: number;
        };
        Insert: {
          access_level: string;
          id?: number;
          user_id: string;
          vault_id: number;
        };
        Update: {
          access_level?: string;
          id?: number;
          user_id?: string;
          vault_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "fk_users_vault_permissions";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "fk_vaults_permissions";
            columns: ["vault_id"];
            isOneToOne: false;
            referencedRelation: "vaults";
            referencedColumns: ["id"];
          },
        ];
      };
      vaults: {
        Row: {
          created_at: string | null;
          description: string | null;
          id: number;
          name: string;
          owner_id: string;
        };
        Insert: {
          created_at?: string | null;
          description?: string | null;
          id?: number;
          name: string;
          owner_id: string;
        };
        Update: {
          created_at?: string | null;
          description?: string | null;
          id?: number;
          name?: string;
          owner_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "fk_users_vaults";
            columns: ["owner_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;
