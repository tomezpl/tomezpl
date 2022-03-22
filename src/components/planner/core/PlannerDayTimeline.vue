<template>
    <div class="col-1 planner-timeline-bihour p-0 m-0" v-for="n in 12" :key="n">
        <div class="row p-0 m-0">
            <div class="col-6 planner-timeline-hour p-0 m-0" v-for="m in 2" :key="m">
                <div class="row m-0 p-0">
                    <div class="col-12 p-0 m-0">
                        <slot :bihour="n" :hourpart="m" :hour="toHour(n, m)">
                            <span v-show="axis">{{(n-1)*2 + m - 1}}</span>
                        </slot>
                    </div>
                    <div class="col-12 m-0 p-0">
                        <div class="col-3 planner-timeline-quarter-notch p-0 m-0" v-for="i in 3" :key="i">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'PlannerDayTimeline',
        props: {
            axis: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            toHour(n: number, m: number): number {
                return (n - 1) * 2 + m - 1;
            }
        }
    });
</script>