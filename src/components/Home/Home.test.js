import React from "react";
import { shallow, mount } from 'enzyme';
import Home from './Home';

const weatherService = require('../../services/weatherService');
jest.mock('../../services/weatherService');

describe('Home component', () => {

  afterEach(() => {
    weatherService.getWeatherInfo.mockRestore();
  })

  it('renders correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
})