<template>
        <div class="row p-0 m-3">
            <div class="col-12 planner-timeline p-0 m-0 bg-dark">
                <div class="row p-0 m-0">
                    <div class="col-1 planner-timeline-bihour p-0 m-0" v-for="n in 12" :key="n">
                        <div class="row p-0 m-0">
                            <div class="col-6 planner-timeline-hour p-0 m-0" v-for="m in 2" :key="m">
                                <div class="row m-0 p-0">
                                    <div class="col-12 p-0 m-0">{{(n-1)*2 + m - 1}}</div>
                                    <div class="col-12 m-0 p-0">
                                        <div class="col-3 d-inline-block planner-timeline-quarter-notch p-0 m-0" v-for="i in 3" :key="i">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import '../css/planner.css';

    export default defineComponent({
        name: 'PlannerComponent',
        data: () => ({

        })
    })
</script>