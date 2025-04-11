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
      activity_logs: {
        Row: {
          action: string
          created_at: string
          details: string
          id: string
          user_id: string | null
          user_name: string | null
        }
        Insert: {
          action: string
          created_at?: string
          details: string
          id?: string
          user_id?: string | null
          user_name?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          details?: string
          id?: string
          user_id?: string | null
          user_name?: string | null
        }
        Relationships: []
      }
      agents: {
        Row: {
          api_type: string | null
          assistant_id: string | null
          assistant_messages: string | null
          avoid_topics: string | null
          avoid_words: string | null
          bot_type: string | null
          created_at: string
          custom_rules: string | null
          description: string | null
          function_url: string | null
          id: string
          instructions: string | null
          max_tokens: number | null
          model: string
          name: string
          objective: string | null
          reference_links: string[] | null
          response_style: string | null
          system_messages: string | null
          temperature: number | null
          tools: string[] | null
          updated_at: string
          user_id: string
          user_messages: string | null
        }
        Insert: {
          api_type?: string | null
          assistant_id?: string | null
          assistant_messages?: string | null
          avoid_topics?: string | null
          avoid_words?: string | null
          bot_type?: string | null
          created_at?: string
          custom_rules?: string | null
          description?: string | null
          function_url?: string | null
          id?: string
          instructions?: string | null
          max_tokens?: number | null
          model: string
          name: string
          objective?: string | null
          reference_links?: string[] | null
          response_style?: string | null
          system_messages?: string | null
          temperature?: number | null
          tools?: string[] | null
          updated_at?: string
          user_id: string
          user_messages?: string | null
        }
        Update: {
          api_type?: string | null
          assistant_id?: string | null
          assistant_messages?: string | null
          avoid_topics?: string | null
          avoid_words?: string | null
          bot_type?: string | null
          created_at?: string
          custom_rules?: string | null
          description?: string | null
          function_url?: string | null
          id?: string
          instructions?: string | null
          max_tokens?: number | null
          model?: string
          name?: string
          objective?: string | null
          reference_links?: string[] | null
          response_style?: string | null
          system_messages?: string | null
          temperature?: number | null
          tools?: string[] | null
          updated_at?: string
          user_id?: string
          user_messages?: string | null
        }
        Relationships: []
      }
      analise_documentos: {
        Row: {
          agente_id: string
          created_at: string
          documento_id: string
          id: string
          prompt_utilizado: string | null
          resultado: string
          usuario_id: string
        }
        Insert: {
          agente_id: string
          created_at?: string
          documento_id: string
          id?: string
          prompt_utilizado?: string | null
          resultado: string
          usuario_id: string
        }
        Update: {
          agente_id?: string
          created_at?: string
          documento_id?: string
          id?: string
          prompt_utilizado?: string | null
          resultado?: string
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analise_documentos_agente_id_fkey"
            columns: ["agente_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analise_documentos_documento_id_fkey"
            columns: ["documento_id"]
            isOneToOne: false
            referencedRelation: "documentos"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_messages: {
        Row: {
          active: boolean | null
          app: string | null
          bot_message: string | null
          conversation_id: string | null
          created_at: string
          id: number
          message_type: string | null
          phone: string | null
          user_id: string | null
          user_message: string | null
          user_name: string | null
        }
        Insert: {
          active?: boolean | null
          app?: string | null
          bot_message?: string | null
          conversation_id?: string | null
          created_at?: string
          id?: number
          message_type?: string | null
          phone?: string | null
          user_id?: string | null
          user_message?: string | null
          user_name?: string | null
        }
        Update: {
          active?: boolean | null
          app?: string | null
          bot_message?: string | null
          conversation_id?: string | null
          created_at?: string
          id?: number
          message_type?: string | null
          phone?: string | null
          user_id?: string | null
          user_message?: string | null
          user_name?: string | null
        }
        Relationships: []
      }
      chats: {
        Row: {
          app: string | null
          conversation_id: string | null
          created_at: string
          id: number
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          app?: string | null
          conversation_id?: string | null
          created_at?: string
          id?: number
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          app?: string | null
          conversation_id?: string | null
          created_at?: string
          id?: number
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      clientes_iphone: {
        Row: {
          created_at: string
          id: number
          idMensagem: string | null
          nomeCliente: string | null
          sessionId: string | null
          telefoneCliente: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          idMensagem?: string | null
          nomeCliente?: string | null
          sessionId?: string | null
          telefoneCliente?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          idMensagem?: string | null
          nomeCliente?: string | null
          sessionId?: string | null
          telefoneCliente?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          active: boolean | null
          app: string | null
          asaas_id: string | null
          city: string | null
          cliente_name: string | null
          complemento: string | null
          cpf: string | null
          created_at: string
          email: string | null
          id: number
          lat: string | null
          location: string | null
          logradouro: string | null
          long: string | null
          neighborhood: string | null
          phone: string | null
          street_number: string | null
          uf: string | null
          updated_at: string | null
          updatete_at: string | null
          zip_code: string | null
        }
        Insert: {
          active?: boolean | null
          app?: string | null
          asaas_id?: string | null
          city?: string | null
          cliente_name?: string | null
          complemento?: string | null
          cpf?: string | null
          created_at?: string
          email?: string | null
          id?: number
          lat?: string | null
          location?: string | null
          logradouro?: string | null
          long?: string | null
          neighborhood?: string | null
          phone?: string | null
          street_number?: string | null
          uf?: string | null
          updated_at?: string | null
          updatete_at?: string | null
          zip_code?: string | null
        }
        Update: {
          active?: boolean | null
          app?: string | null
          asaas_id?: string | null
          city?: string | null
          cliente_name?: string | null
          complemento?: string | null
          cpf?: string | null
          created_at?: string
          email?: string | null
          id?: number
          lat?: string | null
          location?: string | null
          logradouro?: string | null
          long?: string | null
          neighborhood?: string | null
          phone?: string | null
          street_number?: string | null
          uf?: string | null
          updated_at?: string | null
          updatete_at?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
      documentos: {
        Row: {
          analisado: boolean
          caminho: string
          created_at: string
          id: string
          metadados: Json | null
          nome: string
          tamanho: number
          tipo: string
          url: string
          usuario_id: string
        }
        Insert: {
          analisado?: boolean
          caminho: string
          created_at?: string
          id?: string
          metadados?: Json | null
          nome: string
          tamanho: number
          tipo: string
          url: string
          usuario_id: string
        }
        Update: {
          analisado?: boolean
          caminho?: string
          created_at?: string
          id?: string
          metadados?: Json | null
          nome?: string
          tamanho?: number
          tipo?: string
          url?: string
          usuario_id?: string
        }
        Relationships: []
      }
      imagens: {
        Row: {
          created_at: string
          id: number
          link: string | null
          modelo: string | null
          preço: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          link?: string | null
          modelo?: string | null
          preço?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          link?: string | null
          modelo?: string | null
          preço?: string | null
        }
        Relationships: []
      }
      openai_config: {
        Row: {
          api_key: string
          created_at: string
          id: string
          max_tokens: number | null
          model: string
          temperature: number | null
          updated_at: string
          usuario_id: string
        }
        Insert: {
          api_key: string
          created_at?: string
          id?: string
          max_tokens?: number | null
          model?: string
          temperature?: number | null
          updated_at?: string
          usuario_id: string
        }
        Update: {
          api_key?: string
          created_at?: string
          id?: string
          max_tokens?: number | null
          model?: string
          temperature?: number | null
          updated_at?: string
          usuario_id?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          categoria: string | null
          cor: string | null
          created_at: string
          description: string | null
          foto: string | null
          id: number
          in_stock: boolean | null
          price: string | null
          size: string | null
          title: string | null
          video: string | null
          youtube_video: string | null
        }
        Insert: {
          categoria?: string | null
          cor?: string | null
          created_at?: string
          description?: string | null
          foto?: string | null
          id?: number
          in_stock?: boolean | null
          price?: string | null
          size?: string | null
          title?: string | null
          video?: string | null
          youtube_video?: string | null
        }
        Update: {
          categoria?: string | null
          cor?: string | null
          created_at?: string
          description?: string | null
          foto?: string | null
          id?: number
          in_stock?: boolean | null
          price?: string | null
          size?: string | null
          title?: string | null
          video?: string | null
          youtube_video?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          id: string
          updated_at: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          id: string
          updated_at?: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      purchase: {
        Row: {
          created_at: string
          customer_id: number
          description: string | null
          finish: boolean
          id: number
          invoiceNumber: string | null
          product_id: number
          qrcode: string | null
          value: string
        }
        Insert: {
          created_at?: string
          customer_id: number
          description?: string | null
          finish?: boolean
          id?: number
          invoiceNumber?: string | null
          product_id: number
          qrcode?: string | null
          value: string
        }
        Update: {
          created_at?: string
          customer_id?: number
          description?: string | null
          finish?: boolean
          id?: number
          invoiceNumber?: string | null
          product_id?: number
          qrcode?: string | null
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "purchase_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      user_pending: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          phone: string | null
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          phone?: string | null
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          phone?: string | null
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      binary_quantize: {
        Args: { "": unknown } | { "": string }
        Returns: unknown
      }
      create_user_role: {
        Args: {
          user_id_param: string
          role_param: Database["public"]["Enums"]["app_role"]
        }
        Returns: Json
      }
      enable_realtime_for_activity_logs: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      get_activity_logs: {
        Args: Record<PropertyKey, never>
        Returns: {
          action: string
          created_at: string
          details: string
          id: string
          user_id: string | null
          user_name: string | null
        }[]
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      is_manager: {
        Args: { user_id_param: string }
        Returns: boolean
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": unknown } | { "": string } | { "": unknown }
        Returns: unknown
      }
      log_activity: {
        Args: {
          user_id_param: string
          action_param: string
          details_param: string
          user_name_param?: string
        }
        Returns: string
      }
      match_documents: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": unknown } | { "": string }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      app_role:
        | "admin"
        | "user"
        | "manager"
        | "editor"
        | "developer"
        | "viewer"
        | "ia_trainer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: [
        "admin",
        "user",
        "manager",
        "editor",
        "developer",
        "viewer",
        "ia_trainer",
      ],
    },
  },
} as const
