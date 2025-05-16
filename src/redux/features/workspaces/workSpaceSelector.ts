import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export const selectWorkspaceData = (state: RootState) => state.worspace.workspaceList;

export const selectWorkspaceList = createSelector(
    [selectWorkspaceData],
    (workspaceList) =>
      workspaceList?.map(item => {
        const priceForTenDays = item.day_pass_price * 10;
        const discount = priceForTenDays * (item.day_pass_discounts_percentage[10]?.value || 0) / 100;
  
        return {
          ...item,
          bulk_pass_price: priceForTenDays - discount,
        };
      })
  );
export const selectWorkspaceStatus = (state: RootState) => state.worspace.workspaceListStatus;
export const selectWorkspaceError = (state: RootState) => state.worspace.workspaceListError;