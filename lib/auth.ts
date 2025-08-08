import { supabase } from './supabase'
import type { User } from '@supabase/supabase-js'

export interface BusinessProfile {
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

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  return { data, error }
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function getCurrentUser(): Promise<User | null> {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export async function createBusinessProfile(profile: Omit<BusinessProfile, 'id' | 'created_at' | 'updated_at' | 'status'>) {
  const { data, error } = await supabase
    .from('business_profiles')
    .insert({
      ...profile,
      status: 'pending'
    })
    .select()
    .single()
  
  return { data, error }
}

export async function getBusinessProfile(userId: string): Promise<{ data: BusinessProfile | null, error: any }> {
  const { data, error } = await supabase
    .from('business_profiles')
    .select('*')
    .eq('user_id', userId)
    .single()
  
  return { data, error }
}

export async function updateBusinessProfile(userId: string, updates: Partial<BusinessProfile>) {
  const { data, error } = await supabase
    .from('business_profiles')
    .update({
      ...updates,
      updated_at: new Date().toISOString()
    })
    .eq('user_id', userId)
    .select()
    .single()
  
  return { data, error }
}
