
import CustomButton from '@/components/atoms/CustomButton.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Atoms/CustomButton',
    component: CustomButton,
} as Meta<typeof CustomButton>;

const Template: StoryFn<typeof CustomButton> = (args) => ({
    components: { CustomButton },
    setup() {
        return args
    },
    template: '<CustomButton v-bind="args" />'
});

export const Primary = Template.bind({})
