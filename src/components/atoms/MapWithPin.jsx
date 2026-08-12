import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { createMapLabel, loadKakaoMapsSdk } from "../../utils/kakaoMaps";

const MapWithPin = ({ lat, lng, text, className }) => {
  const mapContainerRef = useRef(null);
  const [isMapUnavailable, setIsMapUnavailable] = useState(
    !import.meta.env.VITE_KAKAOMAP_API_KEY,
  );

  useEffect(() => {
    if (!import.meta.env.VITE_KAKAOMAP_API_KEY) return;

    let isCancelled = false;

    loadKakaoMapsSdk(import.meta.env.VITE_KAKAOMAP_API_KEY)
      .then((kakao) => {
        if (isCancelled) return;
        const container = mapContainerRef.current;
        if (!container) return;
        const options = {
          center: new kakao.maps.LatLng(lat, lng),
          level: 3,
          mapTypeId: kakao.maps.MapTypeId.ROADMAP,
        };
        const map = new kakao.maps.Map(container, options);
        const position = new kakao.maps.LatLng(lat, lng);

        new kakao.maps.CustomOverlay({
          map: map,
          position: position,
          content: createMapLabel(text),
          yAnchor: 1,
        });
        kakao.maps.event.addListener(map, "tilesloaded", () => {
          if (!isCancelled) setIsMapUnavailable(false);
        });
        map.relayout();
      })
      .catch(() => {
        if (!isCancelled) setIsMapUnavailable(true);
      });

    return () => {
      isCancelled = true;
    };
  }, [lat, lng, text]);

  if (isMapUnavailable) {
    return (
      <div
        className={`flex items-center justify-center h-72 text-sm text-gray-600 bg-gray-100 rounded-3xl ${className}`}
        role="status"
      >
        지도 정보를 불러올 수 없습니다.
      </div>
    );
  }

  return (
    <div
      ref={mapContainerRef}
      className={`h-72 rounded-3xl ${className}`}
    ></div>
  );
};

MapWithPin.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default MapWithPin;
