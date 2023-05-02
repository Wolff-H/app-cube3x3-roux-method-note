<template lang="pug">
#view-home(
    :class="x_class"
)
    .head
        .cmll-catalog
            .classifications
                .classification(
                    v-for="(classification, index) of topic_CMLL"
                    :key="index"
                    @click="selected_classification = classification.topic"
                    :class="{ 'o-active': classification.topic === selected_classification }"
                )
                    |{{ classification.topic }}
            .divbar
            .cases
                .case(
                    v-for="(case_topic, index) of selected_classification_cases"
                    :key="index"
                    @click="scrollToTopic(case_topic.id)"
                )
                    |{{ case_topic.topic }}
        .menu(
            :class="{ 'o-opened': if_opened_menu }"
        )
            .panel
                .panel-inner
                    .setting-group.abstract-mode
                        el-checkbox(
                            v-model="settings.if_use_abstract_mode"
                        )
                            |CMLL 摘要模式
                    .setting-group.display-formula
                        el-checkbox(
                            v-model="settings.if_display_formula_raw"
                        )
                            |公式
                        el-checkbox(
                            v-model="settings.if_display_formula_symmetry"
                        )
                            |对称性
                        el-checkbox(
                            v-model="settings.if_display_formula_symmetry_factorized"
                        )
                            |对称性分解
            .entry(
                @click="if_opened_menu = !if_opened_menu"
            )
                icon-more(size="16px")
    .body(
        ref="ref_home_body"
    )
        template(
            v-if="!settings.if_use_abstract_mode"
        )
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
        template(
            v-else
        )
            .body
                c-topic(
                    v-for="(topic, index) of topic_CMLL"
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
import {
    More as IconMore,
} from "@icon-park/vue-next"
import scrollIntoViewListened from "@/common/utils/scrollIntoViewListened"

const topic_CMLL = computed(() => {
    return content_schema.body.find((topic) => topic.topic === 'CMLL')?.children?.[0].children || []
})

const selected_classification = ref('H')
const selected_classification_cases = computed(() => {
    return topic_CMLL.value.find((topic) => topic.topic === selected_classification.value)?.children || []
})

const ref_home_body = ref()
const if_opened_menu = ref(false)

const settings = reactive({
    if_use_abstract_mode: false,
    if_display_formula_raw: true,
    if_display_formula_symmetry: true,
    if_display_formula_symmetry_factorized: true,
})

const x_class = computed(() => {
    return {
        'cmll-abstract': settings.if_use_abstract_mode,
        'hide-formula-raw': !settings.if_display_formula_raw,
        'hide-formula-symmetry': !settings.if_display_formula_symmetry,
        'hide-formula-symmetry-factorized': !settings.if_display_formula_symmetry_factorized,
    }
})

function scrollToTopic(id?: string)
{
    if (!id) return
    
    const dom_topic = document.querySelector<HTMLDivElement>(`.topic[data-id="${id}"]`)

    if (dom_topic)
    {
        scrollIntoViewListened(dom_topic, { behavior: 'smooth' })
            .then(() => {
                setTimeout(() => {
                    dom_topic.classList.add('o-emphasis')
                }, 250)

                setTimeout(() => {
                    dom_topic.classList.remove('o-emphasis')
                }, 1250)
            })
    }
}

defineExpose({
    content_schema,
})
</script>



<style lang="stylus">
@import _colorset

#view-home
    display flex
    width 100%
    height 100%
    flex-direction column

    >.head
        position relative
        border-bottom 1px solid $black15

        &::after
            display block
            position absolute
            bottom -4px
            z-index 1
            width 100%
            height 4px
            background linear-gradient(to bottom, rgba(0, 0, 0, 0.15), transparent)
            content ''

        .cmll-catalog
            margin-right 21px
            background-color $black05

            .classifications
                display flex
                width 100%
                height 36px
                column-gap 1px

                .classification
                    display flex
                    width 0px
                    flex-grow 1
                    justify-content center
                    align-items center
                    background-color white

                    &:active
                        background-color $shadow10

                    &.o-active
                        color $primary

            .divbar
                border-bottom 1px solid $black15

            .cases
                display flex
                width 100%
                height 36px
                column-gap 1px

                .case
                    display flex
                    width 0px
                    flex-grow 1
                    justify-content center
                    align-items center
                    background-color white

                    &:active
                        background-color $shadow10

        .menu
            display flex
            position absolute
            top 0px
            right 0px
            height 100%
            background-color white

            .panel
                width 0px
                height 100%
                flex-grow 1
                overflow hidden
                border-left 1px solid $black15
                background-color $black03
                transition width 0.33s

                .panel-inner
                    width 100%
                    height 100%
                    padding 4px

            .entry
                display flex
                width 21px
                justify-content center
                align-items center
                color $black60

                &:active
                    background-color $shadow10

                .i-icon
                    transform rotate(90deg)

            &.o-opened
                .panel
                    width calc(100vw - 21px)

    >.body
        height 0px
        padding 8px
        flex-grow 1
        overflow auto

        >.header
            margin-bottom 24px

            .title
                font-size 24px

    &.cmll-abstract
        .topic
            >.content
                padding-left 0px

                p
                    display none

        .topic:not([data-id])
            >.title
                position relative
                left -8px
                width 100vw
                padding 4px 8px
                background-color $primary10
                color $blue70

        .analysis
            >.figure-container
                display none

            >.main
                .formulas
                    .title
                        display none

    &.hide-formula-raw
        .formula.raw
            display none

    &.hide-formula-symmetry
        .formula.symmetry
            display none

    &.hide-formula-symmetry-factorized
        .formula.symmetry-factorized
            display none

    .topic
        transition background-color 1s

        &.o-emphasis
            background-color $orange20

    span.weak
        margin-left 16px
        color $black20
</style>
