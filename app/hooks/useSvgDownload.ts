import {
  type RefObject,
  useCallback,
  useState,
  useEffect,
  useRef,
} from "react";
import { triggerSvgDownload } from "~/utils/svg-download";

export const useSvgDownload = (
  svgRef: RefObject<SVGSVGElement | null>,
  filename: string,
) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const download = useCallback(() => {
    if (!svgRef.current || isSuccess) return;

    triggerSvgDownload(svgRef.current, filename);

    setIsSuccess(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsSuccess(false);
    }, 1500);
  }, [svgRef, filename, isSuccess]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { download, isSuccess };
};
