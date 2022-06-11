/*global kakao*/ 
import React, { useEffect, useState} from "react";
import axios from "axios";
import mountain_default from "../img/mountain_default.png";
import mountain_defaultPop from "../img/mountain_default_pop.png";
import Loader from './Loader';
import Map from "./Map";
import MyPage from "./MyPage";

function Sub_Layout(props) { 

    const [loading, setLoading] = useState(false);        
    let [postslet, setPosts] = useState([]);
    const [searchPlace, setSearchPlace] = useState([false]);
    

    useEffect(()=>{              

        if (props.page === 'BOOK') {
            
        } else if (props.page === 'MOVIE') {

        } else if (props.page === 'FOOD') {

        } else if (props.page === 'HIKING') {          
            
            setLoading(true);

            (async () => {
                const posts = await axios.get(                
                    "/openapi/service/trailInfoService/getforeststoryservice?ServiceKey=lJ1%2B2YfF%2FL%2FSS4j2EwKT8tjvJy8fvzMRUb2%2FhZ0y6UVcbO%2Fci%2BUOdbkt8Fyf%2B5nzNsjT3l%2BtwdeRchGQB5ffXA%3D%3D&pageNo=1&startPage=1&numOfRows=18&pageSize=10"
                );
                    
                setPosts(posts.data.response.body.items.item);
                //console.log(posts.data.response.body.items.item[0]);

                setLoading(false); 
            })();

        } 

         
    }, [])    

    let [visual, visual_change] = useState(false);
    let [map, map_change] = useState(false);
    let [book_Pop, book_Pop_Change] = useState(false);
    let [movie_Pop, movie_Pop_Change] = useState(false);
    let [food_Pop, food_Pop_Change] = useState(false);
    let [hicking_Pop, hicking_Pop_Change] = useState(false);
    let [clickTit, clickTit_Change] = useState(0);
    let [subTit, subTit_change] = useState(['베스트 셀러', '현재 상영 영화', '맛집 블로거 소개', '100대 명산']);

    let sub_class = null;

    if(props.page === 'BOOK') {
        sub_class = 'sub book';            
        visual = true;
        map = false;
    } else if (props.page === 'MOVIE') {
        sub_class = 'sub movie';
        visual = true;
        map = false;
    }else if (props.page === 'FOOD') {
        sub_class = 'sub food';
        visual = true;
        map = false;
    } else if (props.page === 'HIKING') {
        sub_class = 'sub hiking';
        visual = false;
        map = true;        
        
    } else if (props.page === 'MYPAGE') {
        sub_class = 'sub mypage';
        visual = false;
        map = false;
    }
   
    const ImgError = (e) => {
        e.target.src = mountain_default;
    }  

    const ImgError_pop = (e) => {
        e.target.src = mountain_defaultPop;
    }

	return (        
    <main className={sub_class}>
        {
            loading === true
            ? <Loader />
            : null
        }
        {
            visual === true
            ? <Visual></Visual>
            : null
        }
        {
            map === true
            ? <Map searchPlace={searchPlace}></Map>
            : null
        }
        {
            sub_class === 'sub mypage'
            ?  <MyPage></MyPage>
            : <Sub_search></Sub_search>
        }        

        <section className="sub_map_card">
            <div className="card_area">
                <em>
                    {
                        props.page === 'BOOK'
                        ? subTit[0]
                        : null                        
                    }

                    {
                        props.page === 'MOVIE'
                        ? subTit[1]
                        : null                        
                    }

                    {
                        props.page === 'FOOD'
                        ? subTit[2]
                        : null                        
                    }

                    {
                        props.page === 'HIKING'
                        ? subTit[3]
                        : null                        
                    }
                </em>

                <ul className="card_wrap">                                       

                    {
                        props.page === 'BOOK'
                        ? console.log('이쪽에 BOOK 카드리스트 뿌릴꺼 넣으심되여~')
                        : null                        
                    }

                    {
                        props.page === 'MOVIE'
                        ? console.log('이쪽에 MOVIE 카드리스트 뿌릴꺼 넣으심되여~')
                        : null                        
                    }

                    {
                        props.page === 'FOOD'
                        ? console.log('이쪽에 FOOD 카드리스트 뿌릴꺼 넣으심되여~')
                        : null                        
                    }

                    {
                        props.page === 'HIKING'
                        ? postslet.map(function(a, mntnid){
                            return (
                                <li key={mntnid}>
                                    <div className="img_set">
                                        <img src={a.mntnattchimageseq} alt="" onError={ImgError}/>
                                    </div>
                                    <dl className="tit">                                
                                    <dt>{a.mntnnm}</dt>
                                    <dd>{a.mntnsbttlinfo}</dd>
                                    </dl>
                                    <dl className="sub_tit">
                                    <dt>위치 : {a.mntninfopoflc}</dt>
                                    <dd>높이: {a.mntninfohght} M</dd>
                                    </dl>
                                    <div className="btn_wrap">
                                    <div className="btn_list">
                                        <button onClick={ ()=> {               
                                        if(props.page === 'BOOK') {               
                                            book_Pop_Change(!book_Pop)
                                        } else if (props.page === 'MOVIE') {
                                            movie_Pop_Change(!movie_Pop)
                                        }else if (props.page === 'FOOD') {
                                            props.food_Pop_Change(!food_Pop)
                                        } else if (props.page === 'HIKING') {
                                            hicking_Pop_Change(!hicking_Pop)
                                        }

                                        clickTit_Change(mntnid)
                                        
                                    }}>Detail</button>                                        
                                        <button type="button"
                                            onClick={ ()=> {    
                                                    setSearchPlace(a.mntnnm);
                                                }
                                            }    
                                        >
                                            <i className="xi-my-location"></i>
                                            Location
                                        </button>     
                                        <button type="button" ><i className="xi-heart-o"></i>Like</button>
                                        <button type="button" className="wish_btn"><i className="xi-plus-circle-o"></i>Wish</button>
                                    </div>
                                    </div>
                                </li>
                            )
                        })
                        : null                        
                    }
                      
                </ul>
            </div>
            <div className="sub_paging">
                <ul className="clearfix">
                    <li><a href="#"><i className="xi-angle-left"></i></a></li>
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#"><i className="xi-angle-right"></i></a></li>
                </ul>
            </div>
        </section>       

        {
            book_Pop === true
            ? <Book_Pop book_Pop={book_Pop} book_Pop_Change={book_Pop_Change}></Book_Pop>            
        
            : null
        }

        {
            movie_Pop === true
            ? <Movie_Pop movie_Pop={movie_Pop} movie_Pop_Change={movie_Pop_Change}></Movie_Pop>            
        
            : null
        }

        {
            food_Pop === true
            ? <Food_Pop food_Pop={food_Pop} food_Pop_Change={food_Pop_Change}></Food_Pop>            
        
            : null
        }

        {
            hicking_Pop === true
            ? <Hicking_Pop hicking_Pop={hicking_Pop} hicking_Pop_Change={hicking_Pop_Change} postslet={postslet} clickTit={clickTit} ImgError_pop={ImgError_pop}></Hicking_Pop>            
        
            : null
        }

        {
            (book_Pop === true || movie_Pop === true || food_Pop === true || hicking_Pop === true ) 
            
            ? <Pop_back></Pop_back>            
        
            : null
        }

        

    </main>
	)
}

function Visual() {
    return(
        <>
            <section className="visual">            
            </section>            
        </>
    )
}

/*
function Map() {
    return(
        <>
            <section className="map" id="map">            
            </section>            
        </>
    )
}
*/

function Book_Pop(props) {
    return(
        <div className="pop hicking">
            <div className="pop_wrap">
                <div className="top">
                    <div className="video_area">
                        <iframe src='https://www.youtube.com/embed/hEnr6Ewpu_U?autoplay=1&mute=1'
                            frameBorder='0'
                            //allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                    </div>                   
                </div>
                <div className="bottom">
                    <div className="title_wrpa">
                        <em className="title">명탐정 코난</em>
                        <div className="wish_wrap">
                            <a href="#" className=""></a>
                        </div>
                    </div>
                    <dl className="detail clearfix">                        
                        <dd className="sub_title">소양호에서 폭포 따라 정상까지</dd>
                        <dt className="marLeft0">위치</dt>
                        <dd>강원도 춘천시, 홍천</dd>
                        <dt>높이</dt>
                        <dd>1051M</dd>
                        <dd className="desc">
                            <p>높이는 1050.94m이다. 산이름인 가리는 '단으로 묶은 곡식이나 땔나무 따위를 차곡차곡 쌓아둔 큰 더미'를 뜻하는 순우리말로서,
                            산봉우리가 노적가리처럼 고깔 모양으로 생긴 데서 유래한다. 태백산맥 중 내지(內地) 산맥의 일부를 이룬다.
                            제1봉 남쪽에서 홍천강이 발원하여 북한강의 지류인 소양강의 수원(水源)을 이룬다.
                            [네이버 지식백과] 가리산 [加里山] (두산백과)
                            </p>
                        </dd>                        
                    </dl>                    
                </div>
                
                <a href="#" className="closePop_Btn" onClick={ (e)=> {
                    e.preventDefault();
                    props.book_Pop_Change(!props.book_Pop)
                }}>
                    <i className="xi-close"></i>
                </a>
            </div>
        </div>
    )
}

function Movie_Pop(props) {
    return(
        <div className="pop hicking">
            <div className="pop_wrap">
                <div className="top">
                    <div className="video_area">
                        <iframe src='https://www.youtube.com/embed/hEnr6Ewpu_U?autoplay=1&mute=1'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                    </div>                   
                </div>
                <div className="bottom">
                    <div className="title_wrpa">
                        <em className="title">가리산</em>
                        <div className="wish_wrap">
                            <a href="#" className=""></a>
                        </div>
                    </div>
                    <dl className="detail clearfix">                        
                        <dd className="sub_title">소양호에서 폭포 따라 정상까지</dd>
                        <dt>위치</dt>
                        <dd>강원도 춘천시, 홍천</dd>
                        <dt>높이</dt>
                        <dd>1051M</dd>
                        <dd className="desc">
                            <p>높이는 1050.94m이다. 산이름인 가리는 '단으로 묶은 곡식이나 땔나무 따위를 차곡차곡 쌓아둔 큰 더미'를 뜻하는 순우리말로서,
                            산봉우리가 노적가리처럼 고깔 모양으로 생긴 데서 유래한다. 태백산맥 중 내지(內地) 산맥의 일부를 이룬다.
                            제1봉 남쪽에서 홍천강이 발원하여 북한강의 지류인 소양강의 수원(水源)을 이룬다.
                            [네이버 지식백과] 가리산 [加里山] (두산백과)
                            </p>
                        </dd>
                        <dt className="marLeft0">대중교통</dt>
                        <dd>홍천에서 역내리, 천현리행 버스를</dd>
                        <dt className="marLeft0 clearBoth">관광정보</dt>
                        <dd>홍천에서 역내리, 숙식 및 기타정보 입니다~~~~~~~!!!!!</dd>
                    </dl>                    
                </div>
                <a href="#" className="closePop_Btn" onClick={ (e)=> {
                    e.preventDefault();
                    props.movie_Pop_Change(!props.movie_Pop)
                }}>
                    <i className="xi-close"></i>
                </a>
            </div>
        </div>
    )
}

function Food_Pop(props) {
    return(
        <div className="pop hicking">
            <div className="pop_wrap">
                <div className="top">
                    <div className="video_area">
                        <iframe src='https://www.youtube.com/embed/hEnr6Ewpu_U?autoplay=1&mute=1'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                        />
                    </div>                   
                </div>
                <div className="bottom">
                    <div className="title_wrpa">
                        <em className="title">가리산</em>
                        <div className="wish_wrap">
                            <a href="#" className=""></a>
                        </div>
                    </div>
                    <dl className="detail clearfix">                        
                        <dd className="sub_title">소양호에서 폭포 따라 정상까지</dd>
                        <dt>위치</dt>
                        <dd>강원도 춘천시, 홍천</dd>
                        <dt>높이</dt>
                        <dd>1051M</dd>
                        <dd className="desc">
                            <p>높이는 1050.94m이다. 산이름인 가리는 '단으로 묶은 곡식이나 땔나무 따위를 차곡차곡 쌓아둔 큰 더미'를 뜻하는 순우리말로서,
                            산봉우리가 노적가리처럼 고깔 모양으로 생긴 데서 유래한다. 태백산맥 중 내지(內地) 산맥의 일부를 이룬다.
                            제1봉 남쪽에서 홍천강이 발원하여 북한강의 지류인 소양강의 수원(水源)을 이룬다.
                            [네이버 지식백과] 가리산 [加里山] (두산백과)
                            </p>
                        </dd>
                        <dt className="marLeft0">대중교통</dt>
                        <dd>홍천에서 역내리, 천현리행 버스를</dd>
                        <dt className="marLeft0 clearBoth">관광정보</dt>
                        <dd>홍천에서 역내리, 숙식 및 기타정보 입니다~~~~~~~!!!!!</dd>
                    </dl>                    
                </div>
                <a href="#" className="closePop_Btn" onClick={ (e)=> {
                    e.preventDefault();
                    props.food_Pop_Change(!props.food_Pop)
                }}>
                    <i className="xi-close"></i>
                </a>
            </div>
        </div>
    )
}

function Hicking_Pop(props) {

    

    return(
        <div className="pop hicking">
            <div className="pop_wrap clearfix">
                <div className="left">
                    <div className="img_area">                        
                        <img src={ props.postslet[props.clickTit].mntnattchimageseq } onError={props.ImgError_pop} alt= { props.postslet[props.clickTit].mntnnm } />
                    </div>                   
                </div>
                <div className="right">
                    <div className="title_wrpa">
                        <em className="title">{ props.postslet[props.clickTit].mntnnm }</em>
                        <div className="wish_wrap">
                            <a href="#" className=""></a>
                        </div>
                    </div>
                    <dl className="detail clearfix">                        
                        <dt className="sub_title">{ props.postslet[props.clickTit].mntnsbttlinfo }</dt>
                        <dt>위치</dt>
                        <dd>{ props.postslet[props.clickTit].mntninfopoflc }</dd>
                        <dt className="clearBoth">높이</dt>
                        <dd>{ props.postslet[props.clickTit].mntninfohght } M</dd>
                        <dd className="desc">
                            <p> { props.postslet[props.clickTit].mntninfodtlinfocont } </p>
                        </dd>                        
                    </dl>                    
                </div>
                <div className="popBtn_area">
                    <div className="btn_list">
                        <button type="button" className="lineBtn"><i className="xi-heart-o"></i>Like</button>
                        <button type="button" className="wish_btn"><i className="xi-plus-circle-o"></i>Wish</button>
                    </div>                    
                    <a href="#" className="closePop_Btn" onClick={ (e)=> {
                            e.preventDefault();
                            props.hicking_Pop_Change(!props.hicking_Pop)
                        }}>
                        <i className="xi-close"></i>
                    </a>
                </div>               
            </div>
        </div>
    )
}

function Pop_back() {
    return (
        <div className="pop_back"></div>
    )
}

function Sub_search() {
    return (
        <section className="sub_search">
            <div className="input-group">
                <input type="text" name="" id="" className="text" placeholder="search..." />
                <button type="submit"><i className="xi-search"></i><span>검색</span></button>
            </div>
        </section> 
    );
}


export default Sub_Layout
