import React from 'react'
import {Link} from 'react-router-dom'


const Firstsection = () => {
    return (
        <section className="section first-section">
            <div className="container-fluid">
                <div className="masonry-blog clearfix">
                    <div className="left-side">
                        <div className="masonry-box post-media">
                             <img src="/images/EPL/LFC_MC_Preview.png" alt="" className="img-fluid"/>
                             <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-aqua"><Link title="" to="/category/EnglishPL">English Premier League</Link></span>
                                        <h4><Link title="" to="/posts/1">No Salah, Firmino or Mane in Liverpool and Manchester City combined XI</Link> </h4>
                                        <small><Link title="" to="/posts/1">8 November, 2019</Link></small>
                                        <small><Link title="" to="/posts/1">Gzhegozh Bzhezh</Link></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="center-side">
                        <div className="masonry-box post-media">
                             <img src="/images/MSL/lodeiro.png" alt="" className="img-fluid"/>
                             <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-aqua"><Link title="" to="/category/MajorSL">Major Soccer League</Link> </span>
                                        <h4><Link title="" to="/posts/2">Lodeiro vs Pozuelo: The creative pair central as Seattle meet Toronto</Link></h4>
                                        <small><Link title="" to="/posts/2">9 November, 2019</Link></small>
                                        <small><Link title="" to="/posts/2">Gzhegozh Bzhezh</Link></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right-side hidden-md-down">
                        <div className="masonry-box post-media">
                             <img src="/images/BL/BMteam.png" alt="" className="img-fluid"/>
                             <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-aqua"><Link title="" to="/category/GermanBL">German Bundesliga</Link></span>
                                        <h4><Link title="" to="/posts/3">What next for Bayern following Kovac sacking?</Link></h4>
                                        <small><Link title="" to="/posts/3">5 November, 2019</Link></small>
                                        <small><Link title="" to="/posts/3">Gzhegozh Bzhezh</Link></small>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
  }

  export default Firstsection