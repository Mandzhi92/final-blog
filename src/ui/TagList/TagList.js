import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import classes from './TagList.module.scss'

const TagList = ({ tagList }) => {
  const createTagList = (list) =>
    list.map((item) => {
      if (item) {
        return (
          <button
            type="button"
            className={classes.item}
            key={uuidv4()}
          >
            {item}
          </button>
        )
      }
      return null
    })
  const list = tagList.length ? createTagList(tagList) : null
  return <div className={classes.list}>{list}</div>
}

export default TagList

TagList.defaultProps = { tagList: [] }

TagList.propTypes = { tagList: PropTypes.arrayOf(PropTypes.string) }
