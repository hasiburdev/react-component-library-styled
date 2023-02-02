import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {PrimaryButton, SecondaryButton } from "./Buttons";

export default {
    title: 'Example/PrimaryButton',
    component: PrimaryButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PrimaryButton>;