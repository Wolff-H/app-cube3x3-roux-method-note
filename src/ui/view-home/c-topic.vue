<template lang="pug">
.topic
    .title
        |{{ props.topic }}
        span.weak
            |{{ props.topic_comment }}
    .content
        p(
            v-if="props.content"
            v-html="props.content"
        )
        template(
            v-if="props.analysis"
        )
            c-analysis(
                v-bind="props.analysis"
            )
        c-topic(
            v-for="(topic, index) of props.children"
            :key="index"
            v-bind="topic"
        )
</template>



<script lang="ts">
export default {
    name: 'c-topic',
}
</script>
<script setup lang="ts">
import type { Topic } from "@/types"
import CAnalysis from "./c-analysis.vue"

const props = defineProps<Topic>()

</script>



<style lang="stylus">
.topic
    margin 8px 0px

    >.title
        font-weight bold

    >.content
        padding-left 32px

        p
            margin 0px
</style>
