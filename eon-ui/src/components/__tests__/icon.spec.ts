import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Icon from '../icon/icon.vue'

describe('Icon', () => {
  it('renders properly', () => {
    const wrapper = mount(Icon, { props: { msg: 'loading' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
