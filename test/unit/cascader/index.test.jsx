import { mount } from '@vue/test-utils';
import Cascader from '@/src/cascader/index.ts';

const options = [
  {
    label: '上海',
    value: '1',
    children: [
      {
        label: '黄浦区',
        value: '1.1',
      },
      {
        label: '静安区',
        value: '1.2',
      },
      {
        label: '浦东新区',
        value: '1.3',
      },
    ],
  },
  {
    label: '深圳',
    value: '2',
    children: [
      {
        label: '宝安区',
        value: '2.1',
      },
      {
        label: '南山区',
        value: '2.2',
      },
    ],
  },
];
// every component needs four parts: props/events/slots/functions.
describe('Cascader', () => {
  // test props api
  describe(':props', () => {
    it(':value', () => {
      const value = '1';
      const wrapper = mount({
        render() {
          return <Cascader options={options} v-model={value}></Cascader>;
        },
      });
      const cascader = wrapper.findComponent(Cascader);
      expect(cascader.exists()).toBe(true);
      expect(cascader.vm.$props.modelValue).toEqual('1');
      expect(wrapper.find('.t-cascader').exists()).toBe(true);
      expect(wrapper.element).toMatchSnapshot();
    });

    it(':disabled', () => {
      const value = '2.1';
      const wrapper = mount({
        render() {
          return <Cascader options={options} v-model={value} disabled size="medium"></Cascader>;
        },
      });
      const cascader = wrapper.findComponent(Cascader);
      expect(cascader.exists()).toBe(true);
      expect(wrapper.find('.t-is-disabled').exists()).toBe(true);
      expect(wrapper.element).toMatchSnapshot();
    });

    it(':clearable', () => {
      const value = '2.1';
      const wrapper = mount({
        render() {
          return <Cascader options={options} v-model={value} clearable size="medium"></Cascader>;
        },
      });
      const cascader = wrapper.findComponent(Cascader);
      expect(cascader.exists()).toBe(true);
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
