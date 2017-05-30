import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ListShowcase from './index';

describe('<ListShowcase />', () => {

  const props = {
    lists: [
      {
        id: '#1',
        title: 'List #1',
      },
      {
        id: '#2',
        title: 'List #2',
      }
    ]
  };

  it('renders itself as a <ul> element', () => {
    const wrapper = shallow(<ListShowcase {...props} />);
    expect(wrapper.find('ul')).to.have.lengthOf(1);
  });

  it('renders list items passed as "lists: props', () => {
    const wrapper = shallow(<ListShowcase {...props} />);
    expect(wrapper.find('li')).to.have.lengthOf(2);
  });

});
