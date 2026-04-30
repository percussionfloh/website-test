<script setup>
const client = useSupabaseClient()
const citations = ref([])
const citationName = ref('')

const createCitation = async () => {
  const { data, error } = await client.from('citations').insert({
    name: citationName.value
  }).select().single()
  citations.value.push(data)
  if (error) throw error
  citationName.value = ''
}

onMounted(async ()=> {
  const { data, error } = await client.from('citations').select()
  citations.value = data
})
</script>



<template>
  <div class="min-h-screen bg-slate-900 text-white p-5">
    <h1 class="text-4xl font-bold text-cyan-400">Citations</h1>
    <ul class="list-disc ml-5 text-xl mt-4">
        <li v-for="citation in citations" :key="citation.id">123{{ citation.id }}</li>
    </ul>
  </div>
</template>
