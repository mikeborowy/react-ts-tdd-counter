import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('[data-testid="component-app"]');
  expect(appComponent.length).toBe(1);
});
test('renders button', () => {});
test('renders counter display', () => {});

test('counter starts at 0', () => {});
test('clicking on button increments counter display', () => {});
