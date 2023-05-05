<template lang="pug">
.analysis
    .figure-container
        .figure.view-2d-corners(
            v-if="['2d', '2d-corners'].includes(props.figure_config.type)"
        )
            .tile(
                v-for="(color_name, index) of schema_parsed"
                :key="index"
                :data-color="color_name"
            )
            .tile.border-corner-cover.tl
            .tile.border-corner-cover.tr
            .tile.border-corner-cover.bl
            .tile.border-corner-cover.br
    .main
        .formulas
            .formula.raw
                .title
                    |公式
                .content
                    .rendered-formula
                        .partition(
                            v-for="(partition, index) of rendered_formula_sequence"
                            :key="index"
                            :data-group="partition.group"
                            :data-order="partition.order"
                        )
                            .action(
                                v-for="(action, index) of partition.actions_parsed"
                                :key="index"
                                :class="`${action.direction === '+' ? '' : action.direction === '-' ? 'reverse' : 'swap'}`"
                            )
                                |{{ action.type }}
            .formula.symmetry
                .title
                    |公式（对称性）
                .content
                    .rendered-formula
                        .partition(
                            v-for="(partition, index) of rendered_formula_sequence"
                            :key="index"
                            :data-group="partition.group"
                            :data-order="partition.order"
                        )
                            .action(
                                v-for="(action, index) of partition.actions_parsed"
                                :key="index"
                                :class="`${action.direction === '+' ? '' : action.direction === '-' ? 'reverse' : 'swap'}`"
                            )
                                |{{ action.type }}
            .formula.symmetry-factorized
                .title
                    |公式（对称性分解）
                .content
                    .rendered-formula
                        .partition(
                            v-for="(partition, index) of rendered_formula_sequence"
                            :key="index"
                            :data-group="partition.group"
                            :data-order="partition.order"
                            :data-group-position="partition.group_position"
                        )
                            .action(
                                v-for="(action, index) of partition.actions_parsed"
                                :key="index"
                                :class="`${action.direction === '+' ? '' : action.direction === '-' ? 'reverse' : 'swap'}`"
                            )
                                |{{ action.type }}
</template>



<script lang="ts">
export default {
    name: 'c-analysis',
}
</script>
<script setup lang="ts">
import type { Analysis, TileCode, DONTCARE, AlgorithmPatternPartition } from "@/types"
import { dict_color_name_on_code_to_name } from "@/constants"

const props = defineProps<Analysis>()

// console.log(props);


const schema_parsed = computed(() => {
    return props.figure_config.schema
        .map(row => row.split(''))
        .flat()
        .map(color_code => dict_color_name_on_code_to_name[color_code as TileCode | DONTCARE])
})

const rendered_formula_sequence = computed(() => {
    const pattern = props.algorithm_pattern
    const dict: Record<number, number> = {}
    const partitions: (AlgorithmPatternPartition & { group_position?: 'left' | 'right', actions_parsed: any[] })[] = []

    pattern.forEach((partition) => {
        if (!dict[partition.group]) dict[partition.group] = 0
        dict[partition.group] += 1
    })

    for (const i in pattern)
    {
        const partition = pattern[i]
        const searched_groups = pattern.map((p, index) => ({ index, ...p })).filter((p) => p.group === partition.group)
        
        if (searched_groups.length > 1)
        {
            partitions.push({
                ...partition,
                group_position: +i === searched_groups[0].index ? 'left' : 'right',
                actions_parsed: partition.actions.split(' ').map(action_string => ({ type: action_string[0], direction: action_string[1] })),
            })
        }
        else
        {
            partitions.push({
                ...partition,
                actions_parsed: partition.actions.split(' ').map(action_string => ({ type: action_string[0], direction: action_string[1] })),
            })
        }
    }

    return partitions
})

// defineExpose({
//     props,
// })

</script>



<style lang="stylus">
@import _colorset

.analysis
    display flex
    padding 24px 0px
    column-gap 24px

    .figure-container
        .figure
            // 

    .main
        >.formulas
            display flex
            flex-direction column
            row-gap 32px

            .rendered-formula
                display flex

                .partition
                    display flex
                    position relative

                    .action
                        display flex
                        padding 0px 4px
                        margin 0px 8px
                        justify-content center
                        font-family consolas
                        white-space pre
                        line-height 16px

                    .action.reverse
                        &::before
                            position absolute
                            top -3px
                            width 12px
                            height 2px
                            background-color $black50
                            content ''

                    .action.swap
                        &::before
                            position absolute
                            top -3px
                            width 2px
                            height 2px
                            background-color black
                            content ''

            >.formula.raw
                display flex

                .title
                    width 128px
                    color $black60
                    line-height 16px

                .content
                    // 

            >.formula.symmetry
                display flex

                .title
                    width 128px
                    color $black60
                    line-height 16px

                .content
                    .rendered-formula
                        .partition
                            &::after
                                display block
                                position absolute
                                top 100%
                                left 8px
                                width calc(100% - 16px)
                                margin-top 2px
                                background-color $black10
                                content ''

                        .partition:not(.dual)
                            &::after
                                border 1px solid $black30
                                // background-color $black20

                        .partition[data-order='1']
                            &::after
                                height 2px

                        .partition[data-order='2']
                            &::after
                                height 4px

                        .partition[data-order='3']
                            &::after
                                height 6px

                        .partition[data-order='4']
                            &::after
                                height 8px

                        .partition[data-order='5']
                            &::after
                                height 10px

            >.formula.symmetry-factorized
                display flex

                .title
                    width 128px
                    color $black60
                    line-height 16px

                .content
                    .rendered-formula
                        .partition
                            &::after
                                display block
                                position absolute
                                top -6px
                                left 8px
                                width calc(100% - 16px)
                                height 24px
                                background-color $shadow07
                                content ''

                        .partition:not(.dual)
                            &::after
                                border 1px solid $black15

                        .partition[data-group-position='left']
                            &::after
                                border-radius 4px 0px 0px 4px

                        .partition[data-group-position='right']
                            &::after
                                border-radius 0px 4px 4px 0px

                        .partition[data-order='1']
                            margin-top 0px

                        .partition[data-order='2']
                            margin-top: (1 * 24)px

                        .partition[data-order='3']
                            margin-top: (2 * 24)px

                        .partition[data-order='4']
                            margin-top: (3 * 24)px

                        .partition[data-order='5']
                            margin-top: (4 * 24)px

.figure
    // border 2px solid coral

.figure.view-2d-corners
    display grid
    position relative
    width 108px
    height 108px
    padding 2px
    background-color black
    column-gap 2px
    grid-template-columns 1fr 2fr 2fr 2fr 1fr
    grid-template-rows 1fr 2fr 2fr 2fr 1fr
    row-gap 2px

    .border-corner-cover
        position absolute
        width 16px
        height 16px
        background-color white

        &.tl
            top -2px
            left -2px

        &.tr
            top -2px
            right -2px

        &.bl
            bottom -2px
            left -2px

        &.br
            right -2px
            bottom -2px

    .tile
        &[data-color='dontcare']
            background-color $black50

        &[data-color='white']
            background-color white

        &[data-color='green']
            background-color $green60

        &[data-color='red']
            background-color $red70

        &[data-color='orange']
            background-color $orange60

        &[data-color='blue']
            background-color $blue70

        &[data-color='yellow']
            background-color $yellow50

        &[data-color='white-careless']
            background-color white
            opacity 0.375

        &[data-color='green-careless']
            background-color $green60
            opacity 0.375

        &[data-color='red-careless']
            background-color $red70
            opacity 0.375

        &[data-color='orange-careless']
            background-color $orange60
            opacity 0.375

        &[data-color='blue-careless']
            background-color $blue70
            opacity 0.375

        &[data-color='yellow-careless']
            background-color $yellow50
            opacity 0.375
</style>
