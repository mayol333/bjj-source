import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TextArea } from "../ui/TextArea/TextArea";

const meta = {
    title: "Ui/TextArea",
    component: TextArea,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: { placeholder: "TextArea placeholder", label: "TextArea label", onChange: fn(), value: "TextArea value" },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // mode: "primary",
        // label: "Button",

    },
};