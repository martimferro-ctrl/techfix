import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = "https://tfhpjdkoisggiroxcmpu.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmaHBqZGtvaXNnZ2lyb3hjbXB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1MTM3OTQsImV4cCI6MjA4NzA4OTc5NH0.b_IGSSodOiC_WDXZJw0Dz78Hx3IGGhxHG4cTbhVNPDQ"

export const supabase = createClient(supabaseUrl, supabaseKey)