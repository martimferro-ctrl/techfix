import { createClient } from 'https://esm.sh/@supabase/supabase-js'
const supabaseUrl = "https://tfhpjdkoisggiroxcmpu.supabase.co"
const supabaseKey = "sb_publishable_Q729EJ24Xc0LO0gZjPAeWQ_g3nqI0Et"
export const supabase = createClient(supabaseUrl, supabaseKey)