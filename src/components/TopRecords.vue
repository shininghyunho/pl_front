<template>
  <div class="top-records">
    <h2>파워리프팅 기록 검색</h2>

    <!-- 검색 폼 -->
    <form @submit.prevent="fetchRecords" class="search-form">
      <div class="form-group">
        <label>최소 체중 (kg)</label>
        <input
          type="number"
          v-model="searchParams.minExclusiveBodyWeight"
          step="0.1"
          required
        >
      </div>

      <div class="form-group">
        <label>최대 체중 (kg)</label>
        <input
          type="number"
          v-model="searchParams.maxInclusiveBodyWeight"
          step="0.1"
          required
        >
      </div>

      <div class="form-group">
        <label>장비</label>
        <select v-model="searchParams.equipment" required>
          <option value="RAW">RAW</option>
          <option value="EQUIPPED">EQUIPPED</option>
        </select>
      </div>

      <div class="form-group">
        <label>성별</label>
        <select v-model="searchParams.sex" required>
          <option value="M">남성</option>
          <option value="F">여성</option>
        </select>
      </div>

      <div class="form-group">
        <label>표시할 기록 수</label>
        <input
          type="number"
          v-model="searchParams.limit"
          min="1"
          max="100"
        >
      </div>

      <button type="submit">검색</button>
    </form>

    <!-- 결과 테이블 -->
    <div v-if="records.length" class="results">
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>총합</th>
            <th>스쿼트</th>
            <th>벤치</th>
            <th>데드리프트</th>
            <th>체중</th>
            <th>나이</th>
            <th>DOTS</th>
            <th>Wilks</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="record in records" :key="record.name + record.date">
            <td>{{ record.name }}</td>
            <td>{{ record.total }}kg</td>
            <td>{{ record.squat }}kg</td>
            <td>{{ record.bench }}kg</td>
            <td>{{ record.deadlift }}kg</td>
            <td>{{ record.bodyWeight }}kg</td>
            <td>{{ record.age }}</td>
            <td>{{ record.dots.toFixed(2) }}</td>
            <td>{{ record.wilks.toFixed(2) }}</td>
            <td>{{ formatDate(record.date) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TopRecords',
  data() {
    return {
      searchParams: {
        minExclusiveBodyWeight: 0,
        maxInclusiveBodyWeight: 200,
        equipment: 'RAW',
        sex: 'M',
        limit: 10
      },
      records: []
    }
  },
  methods: {
    async fetchRecords() {
      try {
        const response = await axios.get('/top-records', {
          params: this.searchParams
        });
        this.records = response.data.topRecords;
      } catch (error) {
        console.error('기록 조회 실패:', error);
        alert('기록을 불러오는데 실패했습니다.');
      }
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString();
    }
  }
}
</script>

<style scoped>
.top-records {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.search-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input, select {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f5f5f5;
}
</style>
