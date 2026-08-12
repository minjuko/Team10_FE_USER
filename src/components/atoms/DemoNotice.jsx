import { showDemoUi } from "../../demo/mode";

const DemoNotice = () => {
  if (!showDemoUi) return null;

  return (
    <aside
      className="sticky top-0 z-50 px-3 py-2 text-xs text-center text-yellow-950 bg-yellow-200"
      role="note"
    >
      <strong>Portfolio Demo</strong> · 실제 결제 및 예약은 발생하지 않습니다.
    </aside>
  );
};

export default DemoNotice;
