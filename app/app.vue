<script setup>
const client = useSupabaseClient()
const instruments = ref([])

onMounted(async ()=> {
  const { data, error } = await client.from('instruments').select()
  instruments.value = data
})
</script>



<template>
  <div class="min-h-screen bg-slate-900 text-white p-5">
    <h1 class="text-4xl font-bold text-cyan-400">Instruments</h1>
    <ul class="list-disc ml-5 text-xl mt-4">
        <li v-for="instrument in instruments" :key="instrument.id"> {{ instrument.name }}</li>
    </ul>
  </div>
</template>
