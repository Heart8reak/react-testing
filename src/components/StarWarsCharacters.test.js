import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axios from 'axios'

import App from '../App'
import { findByText } from '@testing-library/react'

jest.mock('axios', () => {
    return {
        get: jest.fn(() => Promise.resolve({
            data: {
                results: [{
                    url: 'testing123',
                    name: 'Carlos'
                }]
            }
        }))
    }
})

test('made an api call', () => {
    const wrapper = rtl.render(<App />)
    wrapper.getAllByText(/next/i)
    expect(axios.get).toHaveBeenCalled()
})

// test('render api results', async () => {
//     const { findByText } = rtl.render(<App />)
//     const res = await findByText(/carlos/i)
//     expect(res).toBeVisible()
// })

test('does next function work', () => {
    const { getByTestId } = rtl.render(<App />)
    rtl.fireEvent.click(getByTestId('next'))
    expect(axios.get).toHaveBeenCalled()
})

// test('does logo render', () => {
//     const { getByTestId } = rtl.render(<App />)
//     getByTestId('next')
//     getByTestId('prev')
// })