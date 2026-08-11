import ImageCarousel from "../atoms/ImageCarousel";
import StoreInfo from "../atoms/StoreInfo";
import KeyPointInfo from "../atoms/KeyPointInfo";
import Star from "../atoms/Star";
import { Tab } from "../molecules/Tab";
import { useSuspenseQuery } from "@tanstack/react-query";
import { carwashesInfo } from "../../apis/carwashes";
import { useNavigate } from "react-router-dom";
import { Button } from "../atoms/Button";
import StatusBar from "../atoms/StatusBar";

const CarwashDetailTemplate = ({ carwashId }) => {
  const { data } = useSuspenseQuery({
    queryKey: ["getCarwashesInfo", carwashId],
    queryFn: () => carwashesInfo(carwashId),
  });
  const navigate = useNavigate();
  const detailData = data.data.response;

  const weekdayOpeningHours = `평일 ${detailData.optime.weekday.start} ~ ${
    detailData.optime.weekday.end === "00:00"
      ? "24:00"
      : detailData.optime.weekday.end
  }`;
  const weekendOpeningHours = `주말 ${detailData.optime.weekend.start} ~ ${
    detailData.optime.weekend.end === "00:00"
      ? "24:00"
      : detailData.optime.weekend.end
  }`;

  const images =
    detailData.imageFileList?.length > 0
      ? detailData.imageFileList.map((image) => ({
          label: "Image",
          alt: detailData.name,
          url: image.url,
        }))
      : [
          {
            label: "Image Not Found",
            alt: "세차장 등록된 이미지가 없습니다",
            url: "/CarwashDetail/CarwashImgNotFound.png",
          },
        ];

  return (
    <div className="relative mb-16 overflow-y-auto">
      <StatusBar />
      <div>
        <ImageCarousel images={images} />
        <div className="p-4">
          <div className="grid-4">
            <div className="flex justify-between">
              <div>
                <h1 className="text-2xl font-bold">{detailData.name}</h1>
                <Star
                  starCount={detailData.rate.toFixed(1)}
                  reviewCount={detailData.reviewCnt}
                />
              </div>
              <div>
                <div className="text-3xl text-center text-primary">
                  {detailData.bayCnt}
                </div>
                <h2 className="text-sm">예약베이</h2>
              </div>
            </div>
            <StoreInfo
              weekhour={weekdayOpeningHours}
              weekendhour={weekendOpeningHours}
              tel={detailData.tel}
              address={detailData.locationDTO.address}
            />
            <KeyPointInfo selectedPoints={detailData.keywordIdList} />
          </div>
        </div>
        <Tab introduction={detailData.description} carwashId={carwashId} />
      </div>
      <Button
        variant="long"
        className="fixed bottom-0"
        onClick={() => {
          navigate(`/bayselection/${carwashId}`);
        }}
      >
        예약하러 가기
      </Button>
    </div>
  );
};

export default CarwashDetailTemplate;
