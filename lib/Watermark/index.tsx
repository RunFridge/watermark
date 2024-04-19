interface WatermarkProps {
  /**
   * Text to be shown as watermark.
   * @default "WATERMARK"
   */
  text?: string;
  /**
   * Repeat count
   * @deafult 500
   */
  repeat?: number;
  /**
   * Delimiter to separate the repeated text.
   * @default " "
   */
  delimiter?: string;
  /**
   * Font size of the watermark.
   * @default "3vw"
   */
  fontSize?: string;
  /**
   * Font weight of the watermark.
   * @default 900
   */
  fontWeight?: number;
  /**
   * Font family of the watermark.
   * @default "sans-serif"
   */
  fontFamily?: string;
  /**
   * Whether the watermark is visible or not.
   * @default false
   */
  isVisible?: boolean;
  /**
   * Opacity of the watermark.
   * @deault 0.1
   */
  opacity?: number;
  /**
   * Color of the watermark.
   * @default "red"
   */
  color?: string;
}

/**
 * Watermark component that displays overlay text on the page.
 */
export function Watermark(props: WatermarkProps) {
  const {
    text = "Development",
    repeat = 500,
    delimiter = " ",
    fontSize = "3vw",
    fontWeight = 900,
    fontFamily = "sans-serif",
    isVisible = false,
    opacity = 0.1,
    color = "red",
  } = props;

  const dataText = Array(repeat).fill(text.toUpperCase()).join(delimiter);

  return (
    isVisible && (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "200vw",
          height: "200vh",
          zIndex: 9999,
          pointerEvents: "none",
          opacity,
          color,
          fontFamily,
          fontWeight,
          fontSize,
          overflow: "hidden",
        }}
      >
        {dataText}
      </div>
    )
  );
}
