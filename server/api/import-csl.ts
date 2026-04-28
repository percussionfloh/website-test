// server/api/import-csl.ts

import fs from 'fs'
import path from 'path'
import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const supabase = createClient(
    config.public.supabaseUrl,
    config.supabaseKey
  )

  try {
    // Datei laden
    const filePath = path.resolve('server/data/test.json')
    const raw = fs.readFileSync(filePath, 'utf-8')
    const csl = JSON.parse(raw)

    // Transformieren
    const transformed = csl.map((item: any) => {
      const date = item.issued?.['date-parts']?.[0] || []

      return {
        id: item.id,
        type: item.type || null,
        title: item.title || null,
        year: date[0] ? parseInt(date[0]) : null,
        data: item
      }
    })

    //Upsert
    const { data, error } = await supabase
      .from('citations')
      .upsert(transformed, {
        onConflict: 'id'
      })

    // Fehlerhandling
    if (error) {
      console.error('Supabase error:', error)

      return {
        success: false,
        error: error.message
      }
    }

    // Erfolg
    return {
      success: true,
      inserted: transformed.length
    }

  } catch (err: any) {
    console.error('Server error:', err)

    return {
      success: false,
      error: err.message
    }
  }
})