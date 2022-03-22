<template>
        <div class="row p-0 m-3">
            <div class="col-12 planner-timeline p-0 m-0 bg-dark">
                <div class="row p-0 m-0 planner-timeline-axis">
                    <PlannerDayTimeline axis />
                </div>
                <div class="row p-0 m-0">
                    <PlannerDayTimeline>

                    </PlannerDayTimeline>
                </div>
            </div>
        </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import PlannerDayTimeline from './planner/core/PlannerDayTimeline.vue';
    import '../css/planner.css';

    export default defineComponent({
        name: 'PlannerComponent',
        components: {
            PlannerDayTimeline
        },
        data: () => ({

        })
    })
</script>