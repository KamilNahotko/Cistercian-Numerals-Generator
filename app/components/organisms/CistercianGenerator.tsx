import { useState, useRef } from "react";
import { Check, Download } from "lucide-react";
import { CistercianForm, CistercianDisplay } from "~/components/molecules";
import { Button } from "~/components/atoms";
import { useSvgDownload } from "~/hooks";
import { defaultValues } from "~/components/molecules";

export const CistercianGenerator = () => {
  const [currentNumber, setCurrentNumber] = useState<number>(
    defaultValues.number,
  );
  const svgRef = useRef<SVGSVGElement>(null);

  const { download: handleDownload, isSuccess } = useSvgDownload(
    svgRef,
    `cistercian-${currentNumber}.svg`,
  );

  return (
    <div className="w-full space-y-8">
      <CistercianForm
        onSubmit={setCurrentNumber}
        initialValue={currentNumber}
      />

      <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 flex flex-col items-center justify-center gap-6">
        <div className="w-48 h-48 border-2 border-dashed border-slate-200 rounded-lg p-4 bg-white">
          <CistercianDisplay value={currentNumber} ref={svgRef} />
        </div>

        <Button
          type="button"
          variant="secondary"
          onClick={handleDownload}
          disabled={isSuccess}
          title={
            isSuccess
              ? "Wait a moment before downloading again"
              : "Download generated SVG"
          }
          className="w-full flex items-center justify-center transition-all duration-300 disabled:cursor-not-allowed"
        >
          {isSuccess ? (
            <>
              <Check className="w-4 h-4 mr-2 text-emerald-600" />
              <span className="text-emerald-600 font-semibold">
                Downloaded!
              </span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Download as SVG
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
