import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classes from './Article.module.scss'
import AuthorCard from '../AuthorCard'
import TagList from '../TagList'
import LikeBtn from '../LkeBtn'

const Article = ({ author, description, createdAt, title, tagList, favoritesCount, slug, favorited, full }) => {
  const link = full ? (
    <h1>{title}</h1>
  ) : (
    <Link
      key={slug}
      to={`articles/${slug}`}
    >
      <h1>{title}</h1>
    </Link>
  )

  return (
    <div className={full ? classes.full : classes.wrapper}>
      <div className={classes.titleContainer}>
        <div className={classes.title}>
          {link}
          <LikeBtn
            slug={slug}
            favorited={favorited}
            favoritesCount={favoritesCount}
          />
        </div>
        <TagList tagList={tagList} />

        <div className={full ? classes.descr_full : classes.descr}>{description}</div>
      </div>

      <div className={classes.container}>
        <AuthorCard
          createdAt={createdAt}
          author={author}
          slug={slug}
          full={full}
        />
      </div>
    </div>
  )
}

Article.defaultProps = {
  author: {},
  description: '',
  createdAt: '',
  title: '',
  tagList: [],
  favoritesCount: 0,
  slug: '',
  favorited: false,
  full: false,
}

Article.propTypes = {
  author: PropTypes.shape(),
  description: PropTypes.string,
  createdAt: PropTypes.string,
  title: PropTypes.string,
  tagList: PropTypes.arrayOf(PropTypes.string),
  favoritesCount: PropTypes.number,
  slug: PropTypes.string,
  favorited: PropTypes.bool,
  full: PropTypes.bool,
}

export default Article
