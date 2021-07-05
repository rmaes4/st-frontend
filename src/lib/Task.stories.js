import { action } from '@storybook/addon-actions';
import Task from './Task.svelte';


export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

export default {
  component: Task,
  title: 'Task',
  excludeStories: /.*Data$/,
  argTypes: {
    onPinTask: {action: 'onPinTask'},
    onArchiveTask: {action: 'onArchiveTask'},
  }
};

const Template = ({onArchiveTask, onPinTask, ...args}) => ({
  Component: Task,
  props: args,
  on: {
    ...actionsData
  }
})

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0)
  }
}