import React, { useEffect } from "react";

const KakaoMap = ({
  currentloc = { latitude: 33.450701, longitude: 126.570667 },
  className,
  mapdata = [],
}) => {
  useEffect(() => {
    let isCancelled = false;
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=" +
      import.meta.env.VITE_KAKAOMAP_API_KEY +
      "&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      if (isCancelled || !window.kakao) return;
      const kakao = window.kakao;

      kakao.maps.load(() => {
        if (isCancelled) return;
        const container = document.getElementById("map");
        if (!container) return;
        const options = {
          center: new kakao.maps.LatLng(
            currentloc.latitude - 0.03,
            currentloc.longitude,
          ),
          level: 7,
        };

        const map = new kakao.maps.Map(container, options);

        const markerImage = new kakao.maps.MarkerImage(
          "/myloca.png",
          new kakao.maps.Size(20, 30),
          { offset: new kakao.maps.Point(10, 25) },
        );

        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(
            currentloc.latitude,
            currentloc.longitude,
          ),
          image: markerImage,
        });

        marker.setMap(map);

        mapdata.forEach((el) => {
          const position = new kakao.maps.LatLng(
            el.location.latitude,
            el.location.longitude,
          );
          const iwContent = `
<div style="
  position: relative;
  bottom: -16px;
  display: inline-block;
  padding: 5px 10px;
  background: #0098FF;
  border: 2px solid #D6E7F1; 
  border-radius: 8px;
  font-size: 12px;
  color: #FFFFFF;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5); 
  z-index: 1; 
">
  ${el?.name}
  <div style="
    position: absolute;
    left: 50%;
    bottom: -8px;
    margin-left: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid #0098FF;
  "></div>
</div>
`;

          new kakao.maps.CustomOverlay({
            map: map,
            position: position,
            content: iwContent,
            yAnchor: 1,
          });
        });
      });
    };

    return () => {
      isCancelled = true;
      script.remove();
    };
  }, [currentloc, mapdata]);

  return <div id="map" className={`${className}`}></div>;
};

export default KakaoMap;
