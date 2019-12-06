import React from 'react'
import {Link} from 'react-router-dom'
import CategoryItem from './CategoryItem'
import posts from './posts'


const EnglishPL = ({
    addPostToFavourites,
    postsLikeState,
    removeLike,
    addLike
}) => {
    return (
    <div>
        <div class="page-title wb">
            <div class="container">
                <div class="row">
                        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <h2><i class="fa fa-leaf bg-green"></i> Category by: English Premier League</h2>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item"><Link to="/">Blog</Link></li>
                                <li class="breadcrumb-item active">English Premier League</li>
                            </ol>
                        </div>                  
                    </div>
                </div>
            </div>

        <div className="blog-list clearfix">
                {
                    posts.filter((item)=>item.categoryId===1).map(({
                        categoryId,
                        id,
                        name,
                        description,
                        category,
                        initRating,
                        author,
                        urlLinkHead,
                        urlLink,
                        date,
                        image,
                    })=> (
                        <div key={id}>
                            <CategoryItem
                                categoryId={categoryId}
                                id={id}
                                name={name}
                                description={description}
                                category={category}
                                author={author}
                                initRating={initRating}
                                image={image}
                                addPostToFavourites={addPostToFavourites}
                                isLiked={postsLikeState[id]}
                                removeLike={removeLike}
                                addLike={addLike}
                                date={date}
                                urlLinkHead={urlLinkHead}
                                urlLink={urlLink}
                            />
                            <hr className="invis"/>
                        </div> 
                    ))
                }

            </div>
        </div>
    )
}

export default EnglishPL