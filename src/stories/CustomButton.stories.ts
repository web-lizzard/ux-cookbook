
import CustomButton from '@/components/atoms/CustomButton.vue';

import type { Meta, StoryFn } from '@storybook/vue3';
import {ButtonMode} from "@/types";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Atoms/CustomButton',
    component: CustomButton,
    argTypes: {
        mode: {
            description: 'Select to change button color',
            options: ButtonMode,
            control: { type: 'select' }
        }
    }
} as Meta<typeof CustomButton>;

const Template: StoryFn<typeof CustomButton> = (args) => ({
        components: { CustomButton },
        setup() {
            return args
        },
        template: `
          <CustomButton v-bind="args">
            Button
          </CustomButton>
        `,
    });

export const Primary = Template.bind({})

export const Large = Template.bind({})
Large.args = {
    large: true
}

export const Green = Template.bind({})
Green.args = {
    mode: ButtonMode.green
}
Green.parameters = {
    backgrounds: {
        values: [
            {name: 'light-green', value: '#abd1c6'}
        ]
    }
}

export const Outlined = Template.bind({})
Outlined.args = {
    mode: ButtonMode.outlined
}

export const Disabled = Template.bind({})
Disabled.args = {
    disabled: true
}
