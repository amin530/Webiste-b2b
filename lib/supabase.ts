import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      business_profiles: {
        Row: {
          id: string
          user_id: string
          company_name: string
          business_type: string
          tax_id: string | null
          years_in_business: string
          contact_name: string
          job_title: string
          phone: string
          address_line1: string
          address_line2: string | null
          city: string
          state: string
          postal_code: string
          country: string
          website: string | null
          monthly_volume: string | null
          product_interest: string | null
          status: 'pending' | 'approved' | 'rejected'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          company_name: string
          business_type: string
          tax_id?: string | null
          years_in_business: string
          contact_name: string
          job_title: string
          phone: string
          address_line1: string
          address_line2?: string | null
          city: string
          state: string
          postal_code: string
          country: string
          website?: string | null
          monthly_volume?: string | null
          product_interest?: string | null
          status?: 'pending' | 'approved' | 'rejected'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          company_name?: string
          business_type?: string
          tax_id?: string | null
          years_in_business?: string
          contact_name?: string
          job_title?: string
          phone?: string
          address_line1?: string
          address_line2?: string | null
          city?: string
          state?: string
          postal_code?: string
          country?: string
          website?: string | null
          monthly_volume?: string | null
          product_interest?: string | null
          status?: 'pending' | 'approved' | 'rejected'
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
