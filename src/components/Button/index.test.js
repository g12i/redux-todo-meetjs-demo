import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Button from '../Button';

describe('<Button />', () => {

  it('renders children text', () => {
    const wrapper = shallow(
      <Button>Foo</Button>
    );
    expect(wrapper.text()).to.be.equal('Foo');
  });

  it('renders with valid modifier in className', () => {
    const wrapper = shallow(
      <Button dark>Foo</Button>
    );
    expect(wrapper.hasClass('Button--dark')).to.be.equal(true);
  });

  it('simulates click events', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <Button onClick={onClick}>Foo</Button>
    );
    wrapper.find('button').simulate('click');
    expect(onClick).to.have.property('callCount', 1);
  });

});
