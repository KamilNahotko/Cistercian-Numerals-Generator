import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button } from "~/components/atoms";
import {
  cistercianSchema,
  type CistercianFormData,
  defaultValues,
} from "~/components/molecules/CistercianForm/CistercianForm.schema";

type CistercianFormProps = {
  onSubmit: (val: number) => void;
  initialValue: number;
};

export const CistercianForm = ({
  onSubmit,
  initialValue,
}: CistercianFormProps) => {
  const initialNumber = initialValue ?? defaultValues.number;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CistercianFormData>({
    resolver: zodResolver(cistercianSchema),
    defaultValues: { number: initialNumber },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data.number))}
      className="w-full"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="number" className="text-sm font-medium text-slate-700">
          Number to translate (1-9999)
        </label>
        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              id="number"
              type="number"
              placeholder="for example: 1992"
              defaultValue={initialNumber}
              {...register("number", { valueAsNumber: true })}
            />
          </div>
          <Button type="submit">Generate</Button>
        </div>
        {errors.number && (
          <span className="text-sm text-red-500">{errors.number.message}</span>
        )}
      </div>
    </form>
  );
};
