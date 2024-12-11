<template>
  <main>
    <h1>파워리프팅 기록 검색</h1>
    <TopRecords />
  </main>
</template>

<script>
import TopRecords from '@/components/TopRecords.vue'

export default {
  name: 'HomeView',
  components: {
    TopRecords
  }
}
</script>

<style scoped>
main {
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}
</style>
