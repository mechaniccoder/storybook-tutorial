import { action } from "@storybook/addon-actions";
import React from "react";
import { Provider } from "react-redux";
import Task from "./Task";

const store = {
  getState: () => {
    return {};
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};
export default {
  component: Task,
  title: "Task",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test_Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 4, 3, 8, 0),
  },
  onArchiveTask: action("dispatch"),
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
