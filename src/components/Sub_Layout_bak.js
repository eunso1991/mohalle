/*global kakao*/ 
import React, { useEffect, useState, Post} from "react";
import axios from "axios";


function Sub_Layout(props) {
    
    let [postslet, setPosts] = useState([1,2,3,4]);

    useEffect(()=>{
        
        if (props.page === 'HIKING') {
            var container = document.getElementById('map');
            var options = {
            center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
            level: 3
            };
            var map = new kakao.maps.Map(container, options);
    
            
            //axios.get("/openapi/service/cultureInfoService/gdTrailInfoOpenAPI?serviceKey=lJ1%2B2YfF%2FL%2FSS4j2EwKT8tjvJy8fvzMRUb2%2FhZ0y6UVcbO%2Fci%2BUOdbkt8Fyf%2B5nzNsjT3l%2BtwdeRchGQB5ffXA%3D%3D&pageNo=1&startPage=1&numOfRows=10&pageSize=10").then(res => console.log(res.date)).catch(err => console.log(err))

            //const data = axios.get('/openapi/service/cultureInfoService/gdTrailInfoOpenAPI?serviceKey=lJ1%2B2YfF%2FL%2FSS4j2EwKT8tjvJy8fvzMRUb2%2FhZ0y6UVcbO%2Fci%2BUOdbkt8Fyf%2B5nzNsjT3l%2BtwdeRchGQB5ffXA%3D%3D&pageNo=1&startPage=1&numOfRows=10&pageSize=10');
            //console.log(data);

            //console.log(data.Promise);
            
            (async () => {
                const posts = await axios.get(
                "/openapi/service/cultureInfoService/gdTrailInfoOpenAPI?serviceKey=lJ1%2B2YfF%2FL%2FSS4j2EwKT8tjvJy8fvzMRUb2%2FhZ0y6UVcbO%2Fci%2BUOdbkt8Fyf%2B5nzNsjT3l%2BtwdeRchGQB5ffXA%3D%3D&pageNo=1&startPage=1&numOfRows=10&pageSize=10"
                );
        

                console.log(postslet);

                console.log(posts.data.response.body.items.item);

                //let test = {...postslet}
                //test = posts.data.response.body.items.item
                //setPosts(test);

                //postslet = test;
                    
                setPosts(posts.data.response.body.items.item);


                console.log(postslet);

            })();

        }

    }, [])

    

    let [visual, visual_change] = useState(false);
    let [map, map_change] = useState(false);
    let [book_Pop, book_Pop_Change] = useState(false);
    let [movie_Pop, movie_Pop_Change] = useState(false);
    let [food_Pop, food_Pop_Change] = useState(false);
    let [hicking_Pop, hicking_Pop_Change] = useState(false);

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
        visual = false;
        map = true;
    } else if (props.page === 'HIKING') {
        sub_class = 'sub hiking';
        visual = false;
        map = true;

        
        
    } else if (props.page === 'MYPAGE') {
        sub_class = 'sub mypage';
        visual = false;
        map = false;
    }

	return (
    <main className={sub_class}>
        {
            visual === true
            ? <Visual></Visual>
            : null
        }

        {
            map === true
            ? <Map></Map>
            : null
        }
      
        
<div>         
            {/* {postslet.map(postsl => <h1>{postsl.mntnm} / {postsl.mntheight}</h1>)}  */}
  

</div>


        <section className="sub_map_card">
            <div className="card_area">
                <em>헤딩텍스트</em>
                <ul className="card_wrap">

                {
                    postslet.map(function(i, title){
                        return (
                            <li key={i}>
                                <div className="img_set">
                                <img src="" alt="데이터로들어와야할것같은데감이안잡히네요..종강미뤄졌으니까팀플끝냈으면좋겠는데말입니다.." />
                                </div>
                                <dl className="tit">
                                
                               
                                <dd>설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로</dd>
                                </dl>
                                <dl className="sub_tit">
                                <dt>감독:한줄로한줄로한줄로</dt>
                                <dd>출연:한줄로한줄로한줄로한줄로한줄로한줄로한줄로</dd>
                                </dl>
                                <div className="btn_wrap">
                                <div className="btn_list">
                                    <button onClick={ ()=> {               
                                    if(props.page === 'BOOK') {               
                                        props.book_Pop_Change(!props.book_Pop)
                                    } else if (props.page === 'MOVIE') {
                                        props.movie_Pop_Change(!props.movie_Pop)
                                    }else if (props.page === 'FOOD') {
                                        props.food_Pop_Change(!props.food_Pop)
                                    } else if (props.page === 'HIKING') {
                                        props.hicking_Pop_Change(!props.hicking_Pop)
                                    }
                                    
                                }}>Detail</button>
                                    <button type="button"><i className="xi-heart-o"></i>Like</button>
                                    <button type="button" className="wish_btn"><i className="xi-plus-circle-o"></i>Wish</button>
                                </div>
                                </div>
                            </li>
                        )
                    })
              }  
                      
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
            ? <Hicking_Pop hicking_Pop={hicking_Pop} hicking_Pop_Change={hicking_Pop_Change}></Hicking_Pop>            
        
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

function Map() {
    return(
        <>
            <section className="map" id="map">            
            </section>            
        </>
    )
}



function CardList(props) {

    return (
      <li>
        <div className="img_set">
          <img src="" alt="데이터로들어와야할것같은데감이안잡히네요..종강미뤄졌으니까팀플끝냈으면좋겠는데말입니다.." />
        </div>
        <dl className="tit">
        
          <dt>재목운  </dt>
          <dd>설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로설명은두줄로</dd>
        </dl>
        <dl className="sub_tit">
          <dt>감독:한줄로한줄로한줄로</dt>
          <dd>출연:한줄로한줄로한줄로한줄로한줄로한줄로한줄로</dd>
        </dl>
        <div className="btn_wrap">
          <div className="btn_list">
            <button onClick={ ()=> {               
            if(props.page === 'BOOK') {               
                props.book_Pop_Change(!props.book_Pop)
            } else if (props.page === 'MOVIE') {
                props.movie_Pop_Change(!props.movie_Pop)
            }else if (props.page === 'FOOD') {
                props.food_Pop_Change(!props.food_Pop)
            } else if (props.page === 'HIKING') {
                props.hicking_Pop_Change(!props.hicking_Pop)
            }
            
        }}>Detail</button>
            <button type="button"><i className="xi-heart-o"></i>Like</button>
            <button type="button" className="wish_btn"><i className="xi-plus-circle-o"></i>Wish</button>
          </div>
        </div>
      </li>
    )
}

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
            <div className="pop_wrap">
                <div className="top">
                    <div className="video_area">
                        <iframe src='https://www.youtube.com/embed/hEnr6Ewpu_U?&mute=1'
                            frameBorder='0'
                            //allow='autoplay; encrypted-media'
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
                    props.hicking_Pop_Change(!props.hicking_Pop)
                }}>
                    <i className="xi-close"></i>
                </a>
            </div>
        </div>
    )
}

function Pop_back() {
    return (
        <div className="pop_back"></div>
    )
}


export default Sub_Layout