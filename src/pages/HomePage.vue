<template>
  <q-page class="q-ma-sm">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
    >
      <q-carousel-slide name="soft-jazz">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/k3_tw44QsZQ"
        />
      </q-carousel-slide>

      <q-carousel-slide name="Rihanna">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/kOkQ4T5WO9E"
        />
      </q-carousel-slide>

      <q-carousel-slide name="ibiza">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/p87miJIYEEk"
        />
      </q-carousel-slide>
    </q-carousel>
    <div class="q-pt-sm">
<!--      <div class="text-h5 q-pb-sm">{{ course.name }}</div>-->
      <div class="row">
        <div class="col-3" v-for="(lesson,key) in lessons" :key="key" style="height: 380px;cursor:pointer;" @click="this.$router.push({path: `/lessons/${lesson.id}`})">
          <q-img
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            spinner-color="white"
            style="height: 300px; max-width: 400px"
            img-class="my-custom-image"
            class="rounded-borders"
          >
            <div class="q-pa-none absolute-bottom text-subtitle3 text-left">
              <q-icon name="mdi-youtube" class="q-pl-sm" size="sm"/>
              <span class="q-pl-sm">全{{ lesson.lessons }}课</span>
            </div>
          </q-img>
          <div>
            <div class="text-h6">{{ lesson.name }}</div>
            <div class="text-subtitle3 q-mr-md">
              <span class="float-left">{{ lesson.subject.name }} / {{lesson.category.name}}</span>
              <span class="float-right">{{ lesson.watchers }}人在看</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import {ref,onMounted} from "vue";
import {listLessons} from "src/api/homepage";

const slide = ref('Rihanna');
const lessons = ref([])

onMounted(()=>{
  listLessons().then((res)=>{
    lessons.value = res.data
  })
})
</script>
