<template>
  <div class="course-table">
    <div v-for="courseGroup in groupedCourses">
      <course-table-section title="penis" :courses="courseGroup"/>    
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"
import CourseTableSection from '@/components/CourseTableSection.component.vue'

@Component({
  name: 'course-table',
  components: {
    CourseTableSection
  }
})
export default class CourseTable extends Vue {
  @Prop() courses: Array<any>

  types: Array<String> = ['Perusopinnot', 'Aineopinnot', 'Syventävät Opinnot', 'Seminaari']
  groupedCourses: Array<any> = []

  groupCoursesByType(courses: Array<any>) {
    return [courses]
    // const types = this.types
    // const basicCourses = courses.filter(course => course.type.toLowerCase() === types[0].toLowerCase())
    // const fieldCourses = courses.filter(course => course.type.toLowerCase() === types[1].toLowerCase())
    // const advancedCourses = courses.filter(course =>
    //   // Include only advancedCourses but not seminars
    //   course.type.toLowerCase() === types[2].toLowerCase() && course.format.toLowerCase() !== types[3].toLowerCase()
    // )
    // const seminars = courses.filter(course => course.format.toLowerCase() === types[3].toLowerCase())
    // return [basicCourses, fieldCourses, advancedCourses, seminars]
  }
  created() {
    this.groupedCourses = this.groupCoursesByType(this.courses)
  }
}
</script>

<style>
.course-table-section {

}

.course-table-section__header {
  margin: 30px 0 0 0;
}

.course-list__container {
  text-align: left;
}

.course-list__header {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.col--name {
  width: 70%;
}

.col--date {
  width: 25%;
}

.col--credits {
  text-align: center;
  width: 5%;
  min-width: 50px;
}

.col--key {
  width: 50%;
}

.col--value {
  width: 50%;
}

.course-list {
  list-style-type: none;
  padding: 0;
}

.course-list__item__container {
  border: 1px solid #bbbbbb;
  border-radius: 3px;
  margin-bottom: 5px;
  cursor: pointer;
}

.course-list__item {
  display: flex;
  flex-direction: row;
  align-items: center;
  animation-name: to-max-width;
  animation-duration: 2s;
  padding: 5px;
}

.course-list__item__course-page {
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.course-list__item__header {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
}

.course-list__item__header__link {
  margin: 0.2em 6px 0 0;
  text-decoration: none;
}

.course-list__item__date {
}

.course-list__item__credits {
}

.course-list__item__header-text {
  margin: 0 4px 0 2px;
}

.course-list__item__body {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  /* transform: translateY(-220px);
  transition: transform 400ms ease-in; */
}

.course-list__item__info {
  display: flex;
}

.course-list__item__key {
  font-weight: bold;
}

.course-list__item__button-row {
  display: flex;
  justify-content: flex-end;
}

.course-list__item__button {
  /* margin: 2px 0; */
  text-decoration: none;
  padding: 5px 10px;
  background-color: #fff;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
}

.course-list__item__button-link {
  text-decoration: none;
  color: #000;
  font-weight: bold;
}

.course-list__item__groups__group {
  display: flex;
  flex-direction: row;
}
.course-list__item__groups__group:nth-child(2n) {
  background-color: #cccccc;
}

.course-list__item__groups__header {
  display: flex;
  flex-direction: row;
}

.course-list__item__group__name {
  width: 15%;
}

.course-list__item__group__teacher {
  width: 25%;
}

.course-list__item__group__enrolled {
  width: 7%;
}

.course-list__item__group__maximum {
  width: 7%;
}

.course-list__item__group__time {
  width: 35%;
}

.course-list__item__group__classroom {
  width: 15%;
}

.course-list__item__group__time--full {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
}

.course-list__item__group__time--chunk {
  width: 33%;
}

.course-list__item__group__classroom--full {
  width: 30%;
}

.course-list__item__groups__group__schedule__container {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.course-list__item__groups__group__schedule {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.slide-in {
  transform: translateY(0);
}

.slide-out {
  transform: translateY(-220px);
}

.course-list__item__enrollment {
}

.course-list__item__teacher__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.course-list__item__teacher__item {
  margin: 0;
}

@media screen and (min-width: 670px) {
  .col--key {
    width: 20%;
  }
  .col--value {
    width: 80%;
  }
}
</style>
