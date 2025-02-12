import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../ui/Input/Input";
import { fn } from "@storybook/test";

const meta = {
    title: "Ui/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: { placeholder: "Input placeholder", label: "Input label", onChange: fn(), value: "Input value" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // mode: "primary",
        // label: "Button",

    },
};