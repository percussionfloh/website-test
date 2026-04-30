<script>

const { data } = await useFetch('/api/citations')

</script>

<template>
  <div v-if="data">
    <div v-for="item in data" :key="item.id">
      <h3>{{ item.data.title }}</h3>
      <p>{{ item.data.type }}</p>
      <p>
        {{ item.data.issued?.['date-parts']?.[0]?.[0] }}
      </p>
    </div>
  </div>
</template>