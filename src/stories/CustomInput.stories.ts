
import CustomInput from '@/components/atoms/CustomInput.vue';
import type { Meta, StoryFn } from '@storybook/vue3';
import {InputMode} from "@/types";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Atoms/CustomInput',
    component: CustomInput,
} as Meta<typeof CustomInput>;


const Template: StoryFn<typeof CustomInput> = (args) => ({
    components: { CustomInput },
    setup() {
        return args
    },
    template: `
      <CustomInput />
 `
});

export const Primary = Template.bind({})
Primary.args = {
    id: "primary"
}

export const Green = Template.bind({})
Green.args = {
    mode: InputMode.green,
    label: 'long label to see how it works',
    id: 'green'
}
Green.parameters = {
    backgrounds: {
        values: [
            {name: 'light-green', value: '#abd1c6'}
        ]
    }
}


export const Error = Template.bind({})
Error.args = {
    mode: InputMode.error,
    id: 'error'
}


