//depths
import { FC } from "react";
//types
import { CommonViewProps } from "../types";

export interface DashboardViewProps extends CommonViewProps {}

export const DashboardView: FC<DashboardViewProps> = () => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};
