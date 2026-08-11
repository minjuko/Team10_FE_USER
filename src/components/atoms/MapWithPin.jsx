import { useEffect } from "react";

const MapWithPin = ({ lat, lng, text, className }) => {
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
          center: new kakao.maps.LatLng(lat, lng),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);
        const position = new kakao.maps.LatLng(lat, lng);

        const iwContent = `
          <div style="
            position: relative;
            padding: 5px 10px;
            background: #0098FF;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            font-size: 12px;
            color: #FFFFFF;
            text-align: center;
          ">
            ${text}
            <div style="
              position: absolute;
              left: 50%;
              bottom: -8px; 
              margin-left: -8px; 
              width: 0;
              height: 0;
              border-left: 8px solid transparent;
              border-right: 8px solid transparent;
              border-top: 8px solid #0098FF;
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
    };

    return () => {
      isCancelled = true;
      script.remove();
    };
  }, [lat, lng, text]);

  return <div id="map" className={`h-72 rounded-3xl ${className}`}></div>;
};

export default MapWithPin;
