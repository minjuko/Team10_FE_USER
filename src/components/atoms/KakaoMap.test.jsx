import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import KakaoMap from "./KakaoMap";
import MapWithPin from "./MapWithPin";

describe("Kakao Map key fallback", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_KAKAOMAP_API_KEY", "");
  });

  it.each([
    ["search map", <KakaoMap key="search" />],
    ["payment result map", <MapWithPin key="result" lat={35.1} lng={126.9} />],
  ])("%s renders a neutral fallback without an API key", (_, map) => {
    render(map);

    expect(
      screen.getByText("지도 정보를 불러올 수 없습니다."),
    ).toBeInTheDocument();
    expect(document.querySelector('script[src*="dapi.kakao.com"]')).toBeNull();
  });
});
