import styles from "./styles.module.css";

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
        className={styles.watermark}
        data-text={dataText}
        style={{ opacity, color }}
      ></div>
    )
  );
}
