'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import { getCurrentUser, getBusinessProfile, type BusinessProfile } from '@/lib/auth'

interface AuthContextType {
  user: User | null
  businessProfile: BusinessProfile | null
  loading: boolean
  isApproved: boolean
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  businessProfile: null,
  loading: true,
  isApproved: false,
  refreshProfile: async () => {},
})

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [businessProfile, setBusinessProfile] = useState<BusinessProfile | null>(null)
  const [loading, setLoading] = useState(true)

  const refreshProfile = async () => {
    if (user) {
      const { data: profile } = await getBusinessProfile(user.id)
      setBusinessProfile(profile)
    }
  }

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      
      if (session?.user) {
        const { data: profile } = await getBusinessProfile(session.user.id)
        setBusinessProfile(profile)
      }
      
      setLoading(false)
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        
        if (session?.user) {
          const { data: profile } = await getBusinessProfile(session.user.id)
          setBusinessProfile(profile)
        } else {
          setBusinessProfile(null)
        }
        
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const isApproved = businessProfile?.status === 'approved'

  return (
    <AuthContext.Provider value={{
      user,
      businessProfile,
      loading,
      isApproved,
      refreshProfile,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
