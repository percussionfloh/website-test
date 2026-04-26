<script setup>
const client = useSupabaseClient()
const datenbankTest = ref([])
const instrumentName = ref('')

const createInstrument = async () => {
  const { data, error } = await client.from('instruments').insert({
    name: instrumentName.value
  }).select().single()
  datenbankTest.value.push(data)
  if (error) throw error
  instrumentName.value = ''
}

onMounted(async ()=> {
  const { data, error } = await client.from('datenbankTest').select()
  datenbankTest.value = data
})
</script>



<template>
  <div class="min-h-screen bg-slate-900 text-white p-5">
    <h1 class="text-4xl font-bold text-cyan-400">Instruments</h1>
    <ul class="list-disc ml-5 text-xl mt-4">
        <li v-for="datenbankTest in datenbankTest" :key="datenbankTest.id"> {{ datenbankTest.Author }} {{ datenbankTest.Key }}</li>
    </ul>
  </div>
</template>
