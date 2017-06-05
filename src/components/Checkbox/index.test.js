import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Checkbox from '../Checkbox';
import Icon, { check, box } from '../Icon';

describe('<Checkbox />', () => {

  const noop = () => { };
  
  it('renders with correct icon', () => {
    const wrapper = shallow(
      <Checkbox checked onChange={noop} />
    );
    expect(wrapper.find(Icon)).to.have.lengthOf(1);
    expect(wrapper.find(Icon).prop('icon')).to.be.equal(check);
  });

  it('renders with correct icon', () => {
    const wrapper = shallow(
      <Checkbox checked={false} onChange={noop} />
    );
    expect(wrapper.find(Icon)).to.have.lengthOf(1);
    expect(wrapper.find(Icon).prop('icon')).to.be.equal(box);
  });

  it('renders the input', () => {
    const wrapper = shallow(
      <Checkbox checked={false} onChange={noop} />
    );
    expect(wrapper.find('input[type="checkbox"]')).to.have.lengthOf(1);
    expect(wrapper.find('input[type="checkbox"]').prop('checked')).to.be.equal(false);
    expect(wrapper.find('input[type="checkbox"]').prop('onChange')).to.be.equal(noop);
  });

});
