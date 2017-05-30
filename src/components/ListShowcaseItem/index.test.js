import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ListShowcaseItem from '../ListShowcaseItem';

describe('<ListShowcaseItem />', () => {

  const props = {
    title: 'Hello world',
    listId: 'foo',
  };

  it('renders correct heading', () => {
    const wrapper = shallow(
      <ListShowcaseItem {...props} />
    );
    const h3 = wrapper.find('h3');
    expect(h3).to.have.lengthOf(1);
    expect(h3.text()).to.be.equal('Hello world');
  });

});
