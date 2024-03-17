import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISchedule } from "../types";
import { getSchedule } from "../../api";

interface GetScheduleProps {
  apiPath: string;
}

export const getScheduleAction = createAsyncThunk<
  ISchedule[],
  GetScheduleProps
>("Schedule/getScheduleAction", async ({ apiPath }) => getSchedule(apiPath));
