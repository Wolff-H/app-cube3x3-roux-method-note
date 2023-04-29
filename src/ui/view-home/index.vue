<template lang="pug">
#view-home
    .head
        .cmll-catalog
        .actions
    .body
        .header
            .title
                |{{ content_schema.header.title }}
        .body
            c-topic(
                v-for="(topic, index) of content_schema.body"
                :key="index"
                v-bind="topic"
                :order_number="index + 1"
            )
</template>



<script lang="ts">
export default {
    name: 'c-view-home',
}
</script>
<script setup lang="ts">
import content_schema from "@/constants/content-schema"
import CTopic from "./c-topic.vue"


defineExpose({
    content_schema,
})
</script>



<style lang="stylus">
@import _colorset

#view-home
    width 100%
    height 100%
    padding 8px

    >.head
        .cmll-catalog
            // 

    >.body
        >.header
            margin-bottom 24px

            .title
                font-size 24px
    
    span.weak
        color $black20
        margin-left 16px
</style>
