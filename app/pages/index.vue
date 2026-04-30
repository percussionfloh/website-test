<script setup>
const client = useSupabaseClient()
const citations = ref([])
// const citationName = ref('')

const formatCreator = (creator) => {
  if (!creator) return ''
  const firstName = creator.firstName ?? ''
  const lastName = creator.lastName ?? ''
  return lastName ? `${lastName} ${firstName}`.trim() : firstName.trim()
}

const formatCreators = (creators) => {
  if (!creators || !creators.length) return ''
  return creators
    .map(formatCreator)
    .filter(Boolean)
    .join('; ')
}

// const createCitation = async () => {
//   const { data, error } = await client.from('citations').insert({
//     name: citationName.value
//   }).select().single()
//   citations.value.push(data)
//   if (error) throw error
//   citationName.value = ''
// }

onMounted(async () => {
  const { data, error } = await client.from('citations').select()
  console.log('error:', error)
  console.log('data:', data)
  citations.value = data ?? []
})


</script>

<template>
  <div class="min-h-screen bg-slate-900 text-white p-5">
    <h1 class="text-4xl font-bold text-cyan-400">ss</h1>
    <ul class="list-disc ml-5 text-xl mt-4">
        <li v-for="citation in citations" :key="citation.key">
          {{  }}
          {{ formatCreators(citation.data.data?.creators) }}
        </li>
    </ul>
  </div>
</template>
