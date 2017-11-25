<template>
  <div className="home-page__container">
    <p>Search</p>
    <p>Periods</p>
    <p>Kursseja yhteensä: {{ selectedCourses.length }}</p>
    <h1 className="main-header">Kurssimme</h1>
    <course-table :courses="selectedCourses"/>
  </div>
</template>

<script lang="ts">
import CourseTable from '@/components/CourseTable.component.vue'

export default {
  name: 'home-page',
  data: () => ({
    selectedCourses: [{ name: 'kurssi 1', type: 'Perusopinnot'}],
    selected: {
      study_field: {
        id: "all",
        name: "Kaikki"
      },
      periods: [
       { name: "Periodi I", selected: true },
       { name: "Periodi II", selected: true },
       { name: "Periodi III", selected: true },
       { name: "Periodi IV", selected: true },
       { name: "Periodi V", selected: true },
      ],
      view: "list"
    },
    study_fields: [{
      id: "all",
      name: "Kaikki"
    }, {
      id: "tkt_kandi",
      name: "Tietojenkäsittelytieteen kandiohjelma, 2017-18"
    }, {
      id: "tkt_maisteri",
      name: "Tietojenkäsittelytieteen maisteriohjelma, 2017-18"
    }, {
      id: "data_maisteri",
      name: "Datatieteen maisteriohjelma, 2017-18"
    }]
  }),
  components: {
    CourseTable
  }
}
</script>

<style lang="scss">
.home-page--container {
  text-align: center;
  margin: auto;
  padding: 0 10px;
}

.course-search--container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.main-header {
  margin: 40px 0 40px 0;
}

@media screen and (min-width: 1040px){
  .home-page--container {
    max-width: 1200px;
  }
}
</style>
