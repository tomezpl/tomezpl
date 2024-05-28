<template>
    <div class="row mb-3 footer body-headernav-border">
        <div class="col-xl-10 col-md-8 col-7"></div>
        <div class="p-1 col-xl-2 col-md-4 col-5 align-middle text-end nav-link active"><span style="font-weight: bold">Tomasz Zajac &copy; {{currentYear}}</span></div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Footer',
        
    });
</script>