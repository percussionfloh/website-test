import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const supabase = createClient(
    config.public.supabaseUrl,
    config.supabaseKey
  )

  const { data, error } = await supabase
    .from('citations')
    .select('*')

  if (error) {
    return { error }
  }

  return data
})
