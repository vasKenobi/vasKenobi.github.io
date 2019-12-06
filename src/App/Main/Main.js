import React from 'react'
import {Route} from 'react-router-dom'
import PostList from './Posts/PostList'
import FavourtiesPage from './FavourtiesPage/FavourtiesPage'
// import MajorSL from './MajorSL/MajorSL'
// import EnglishPL from './EnglishPL/EnglishPL'
import PostPage from './Posts/PostPage'
// import GermanBL from './GermanBL/GermanBL'
import Pagination from './Pagination/Pagination'
import Sidebarsearch from './Widgets/Sidebarsearch'
import Popularcategories from './Widgets/Popularcategories'
import EnglishPL from './Posts/EnglishPL'
import MajorSL from './Posts/MajorSL'
import GermanBL from './Posts/GermanBL'
import CategoryItem from './Posts/CategoryItem'
import CategoryItemMSL from './Posts/CategoryItemsMSL'
import CategorItemBL from './Posts/CategoryItemBL'


const Main = ({
	addPostToFavourites,
	postsInFavourites,
	removePostFromFavourites,
	changePostRating,
	postsLikeState,
	removeLike,
	addLike,
}) => {
	return (
		<section className="section wb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">

						<Route path="/" exact render={()=>(
							<PostList
								addPostToFavourites={addPostToFavourites}
								postsLikeState={postsLikeState}
								removeLike={removeLike}
								addLike={addLike}
						/>
						)}/>
						<Route path="/category/EnglishPL" exact render={()=>(
							<EnglishPL
								addPostToFavourites={addPostToFavourites}
								postsLikeState={postsLikeState}
								removeLike={removeLike}
								addLike={addLike}
						/>
						)}/>
						<Route path="/category/MajorSL" exact render={()=>(
							<MajorSL
								addPostToFavourites={addPostToFavourites}
								postsLikeState={postsLikeState}
								removeLike={removeLike}
								addLike={addLike}
						/>
						)}/>
						<Route path="/category/GermanBL" exact render={()=>(
							<GermanBL
								addPostToFavourites={addPostToFavourites}
								postsLikeState={postsLikeState}
								removeLike={removeLike}
								addLike={addLike}
						/>
						)}/>

						<Route path="/favourites" render={()=>(
							<FavourtiesPage
								postsInFavourites={postsInFavourites}
								removePostFromFavourites={removePostFromFavourites}
								changePostRating={changePostRating}
								
						/>)}/>
						<Route path="/MajorSL" component={MajorSL}/>
						{/* <Route path="/EnglishPL" component={EnglishPL}/> */}
						<Route path="/GermanBL" component={GermanBL}/>
						
						<Route path="/posts/:postId" component={PostPage} />
						{/* <Route path="/category/:categoryId" component={CategoryItem} /> */}
					</div>

					<hr className="invis"/>

                        <div className="row">
                            <div className="col-md-12">
                                <Pagination/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="sidebar">
                            <Sidebarsearch/>

                            <Popularcategories/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	)
}

export default Main