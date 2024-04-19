import "./index.css";
import { cn } from "./utils";

interface WatermarkProps {
  /**
   * Text to be shown as watermark.
   * @default "WATERMARK"
   */
  text?: string;
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
    isVisible = false,
    opacity = 0.1,
    color = "red",
  } = props;
  const dataText = Array(1_000).fill(text.toUpperCase()).join(" ");

  return (
    isVisible && (
      <div
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-50 h-screen w-screen overflow-hidden",
          "after:absolute after:z-50 after:content-[attr(data-text)]",
          "after:left-0 after:top-0 after:h-[200%] after:w-[200%] after:rotate-45",
          "after:pointer-events-none after:whitespace-pre-wrap after:font-sans after:text-[5vw]",
        )}
        data-text={dataText}
        style={{ opacity, color }}
      ></div>
    )
  );
}
