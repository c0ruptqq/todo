
<script setup>
  import {ref, onMounted, computed, watch } from 'vue'
</script>

<template>
  <main class="">

  <div id='root' class="flex flex-col bg-bg items-center h-screen w-screen p-5" >
    <section>
      <h2> 
        Hi, <input class="bg-bg outline-none" type="text" placeholder="Name here"
                               v-model="name" />
      </h2>
    </section>
  </div> 
  </main>
</template>

