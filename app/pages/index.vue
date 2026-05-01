<script setup>
const client = useSupabaseClient()
const citations = ref([])
const localePath = useLocalePath()

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
        <div>
          <h2>AutorInnen</h2>
          <UButton target="_blank" to="/example" v-for="citation in citations" :key="citation.key">
            {{ formatCreators(citation.data.data?.creators) }}
          </UButton>
        </div>
        <div>
          <h2>Titel</h2>
          <UButton v-for="citation in citations" :key="citation.key">
            {{ citation.data.data.filename }}
          </UButton>
        </div>
        <div>
          <h2>url</h2>
          <UButton target="_blank" to="/example" v-for="citation in citations" :key="citation.key">
            {{ citation.data.data.url }}
          </UButton>
        </div>
        <div>
          <h2>itemType</h2>
          <UButton v-for="citation in citations" :key="citation.key">
            {{ citation.data.data.itemType }}
          </UButton>
        </div>
        <div>
          <h2>Datum hinzugefügt</h2>
          <UButton target="_blank" to="/example" v-for="citation in citations" :key="citation.key">
            {{ citation.data.data.dateAdded }}
          </UButton>
        </div>
        <div>
          <h2>Access Date</h2>
          <UButton v-for="citation in citations" :key="citation.key">
            {{ citation.data.data.accessDate }}
          </UButton>
        </div>
        <div>
          <h2>links</h2>
          <UButton target="_blank" to="/example" v-for="citation in citations" :key="citation.key">
            {{ citation.data.links.up.href }}
          </UButton>
        </div>
    </ul>
  </div>
</template>creators

<!-- <script setup>
const client = useSupabaseClient()
const citations = ref([])
const localePath = useLocalePath()
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

onMounted(async () => {
  const { data, error } = await client.from('citations').select()
  console.log('error:', error)
  console.log('data:', data)
  citations.value = data ?? []
})
</script>

<template>
    <UContainer>
        <div class="flex flex-col items-center gap-8">
            <h1>Das ist eine Beispiel-Seite</h1>
        <li>
          {{ }}
        </li>
        </div>
    </UContainer>
</template> -->