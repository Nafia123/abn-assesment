import { describe, it, expect } from 'vitest'

import { fetchTVShowFromId, searchTVShows } from '../../service/TVMazeService'
import Dialog from '../01-atoms/Dialog.vue'
import { mount } from '@vue/test-utils'

describe('Dialog', () => {
  // Tests if the dialog shows when clicking on the activator
  it('Renders Correctly on click', async () => {
    const wrapper = mount(Dialog, {
      slots: {
        default: 'Main content',
        activator: '<template #activator="{props}" ><div id="btn" v-bind="props">Click here</div></template>'
      }
    })

    expect(wrapper.html()).not.toContain('Main content')

    const btn = wrapper.find('#btn')
    await btn.trigger('click')

    expect(wrapper.html()).toContain('Main content')
  })


})
