<template>
  <div className="course-table-section">
    <h2 className="course-table-section__header">{{ title }}</h2>
    <div className="course-list__container">
      <div className="course-list__header">
        <span className="col--name">Nimi</span>
        <span className="col--date">Aloituspäivä</span>
        <span className="col--credits">Nopat</span>
      </div>
      <ul className="course-list">
        <li v-for="course in courses">
          <div className="course-list__item__container">
            {{ course.name }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

@Component
export default class CourseTableSection extends Vue {
  @Prop() title: string
  @Prop() courses: Array<any>

}
</script>

<style>

</style>
