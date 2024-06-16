export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Budget: {
        Row: {
          active: boolean | null
          actual_budget: number | null
          created_at: string
          id: string
          id_budget_type: string | null
          total_budget: number | null
        }
        Insert: {
          active?: boolean | null
          actual_budget?: number | null
          created_at?: string
          id?: string
          id_budget_type?: string | null
          total_budget?: number | null
        }
        Update: {
          active?: boolean | null
          actual_budget?: number | null
          created_at?: string
          id?: string
          id_budget_type?: string | null
          total_budget?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Budget_id_budget_type_fkey"
            columns: ["id_budget_type"]
            isOneToOne: false
            referencedRelation: "BudgetType"
            referencedColumns: ["id"]
          },
        ]
      }
      BudgetType: {
        Row: {
          active: boolean | null
          created_at: string
          description: string | null
          id: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string
          description?: string | null
          id?: string
        }
        Update: {
          active?: boolean | null
          created_at?: string
          description?: string | null
          id?: string
        }
        Relationships: []
      }
      countries: {
        Row: {
          continent: Database["public"]["Enums"]["continents"] | null
          id: number
          iso2: string
          iso3: string | null
          local_name: string | null
          name: string | null
        }
        Insert: {
          continent?: Database["public"]["Enums"]["continents"] | null
          id?: number
          iso2: string
          iso3?: string | null
          local_name?: string | null
          name?: string | null
        }
        Update: {
          continent?: Database["public"]["Enums"]["continents"] | null
          id?: number
          iso2?: string
          iso3?: string | null
          local_name?: string | null
          name?: string | null
        }
        Relationships: []
      }
      notes: {
        Row: {
          created_at: string
          id: number
          note: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: never
          note: string
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: never
          note?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      Transaction: {
        Row: {
          active: boolean
          created_at: string | null
          description: string | null
          id: string
          id_budget_type: string
          id_user: string
          income_type: Database["public"]["Enums"]["transaction_type"] | null
          quantity: number
        }
        Insert: {
          active: boolean
          created_at?: string | null
          description?: string | null
          id?: string
          id_budget_type?: string
          id_user?: string
          income_type?: Database["public"]["Enums"]["transaction_type"] | null
          quantity: number
        }
        Update: {
          active?: boolean
          created_at?: string | null
          description?: string | null
          id?: string
          id_budget_type?: string
          id_user?: string
          income_type?: Database["public"]["Enums"]["transaction_type"] | null
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "Transaction_id_budget_type_fkey"
            columns: ["id_budget_type"]
            isOneToOne: true
            referencedRelation: "BudgetType"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Transaction_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_transactions_with_budget: {
        Args: Record<PropertyKey, never>
        Returns: {
          transaction_id: string
          transaction_data: Json
          budget_id: string
        }[]
      }
    }
    Enums: {
      continents:
        | "Africa"
        | "Antarctica"
        | "Asia"
        | "Europe"
        | "Oceania"
        | "North America"
        | "South America"
      transaction_type: "income" | "expense"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

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
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

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
    : never
