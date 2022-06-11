/* global kakao */

import React, { useEffect, useState, useRef } from "react";

export default function Map(props) {
  const { searchPlace} = props;
  const [kakaoMap, setKakaoMap] = useState(null);
  const container = useRef();

  useEffect(() => {
    
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.48390288938484, 126.90272140799532),

      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    map.setZoomable(false);  // 확대 축소 막기
    setKakaoMap(map);

  }, [container]);


  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
    const infowindow = new kakao.maps.InfoWindow({zIndex:1});
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {

        kakaoMap.setZoomable(true);  // 확대 축소 허용
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < 1; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        kakaoMap.setBounds(bounds);
      }
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      /*
      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(kakaoMap, marker);
      });
      */

    }

  }, [kakaoMap, searchPlace]);

  return <section className="map" id="map" ref={container} />;           
}
