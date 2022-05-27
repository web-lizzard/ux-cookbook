
import CustomInput from '@/components/atoms/CustomInput.vue';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Atoms/CustomInput',
    component: CustomInput,
} as Meta<typeof CustomInput>;


export const Template: StoryFn<typeof CustomInput> = (args) => ({
    components: { CustomInput },
    setup() {
        return args
    },
    template: `
      <CustomInput />
 `
});

