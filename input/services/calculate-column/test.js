import test from 'tape'
import calculateColumn, { gutter } from './index'

test('calculateColumn', (t) => {
  t.plan(4)

  t.test('given 1 of 1', (assert) => {
    const of = 1
    const expected = {
      flexBasis: `calc(100.00% - (${gutter} - ${gutter} * 1/${of}))`,
      marginRight: 0,
    }
    const actual = calculateColumn({
      column: 1,
      of: 1,
    })

    assert.deepEquals(actual, expected)

    assert.end()
  })

  t.test('given 1 of 2', (assert) => {
    const of = 2
    const expected = {
      flexBasis: `calc(50.00% - (${gutter} - ${gutter} * 1/${of}))`,
      marginRight: gutter,
    }
    const actual = calculateColumn({
      column: 1,
      of,
    })

    assert.deepEquals(actual, expected)

    assert.end()
  })

  t.test('given 2 of 3', (assert) => {
    const of = 3
    const expected = {
      flexBasis: `calc(66.67% - (${gutter} - ${gutter} * 1/${of}))`,
      marginRight: gutter,
    }
    const actual = calculateColumn({
      column: 2,
      of,
    })

    assert.deepEquals(actual, expected)

    assert.end()
  })

  t.test('given 3 of 6', (assert) => {
    const of = 6
    const expected = {
      flexBasis: `calc(50.00% - (${gutter} - ${gutter} * 1/${of}))`,
      marginRight: gutter,
    }
    const actual = calculateColumn({
      column: 3,
      of,
    })

    assert.deepEquals(actual, expected)

    assert.end()
  })
})
