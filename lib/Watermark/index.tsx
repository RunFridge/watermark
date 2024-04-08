interface WatermarkProps {
  text?: string;
}

export function Watermark(props: WatermarkProps) {
  const { text = "Watermark" } = props;
  return <div className="text-red-500">{text}</div>;
}
