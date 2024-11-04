import { IconName } from "@fortawesome/fontawesome-svg-core";

export type TCategoryName =
  | "ALL"
  | "AMAZING_VIEWS"
  | "OMG"
  | "TREEHOUSES"
  | "BEACH"
  | "FARMS"
  | "TINY_HOMES"
  | "LAKE"
  | "CONTAINERS"
  | "CAMPING"
  | "CASTLE"
  | "SKIING"
  | "CAMPERS"
  | "ARTIC"
  | "BOAT"
  | "BED_AND_BREAKFASTS"
  | "ROOMS"
  | "EARTH_HOMES"
  | "TOWER"
  | "CAVES"
  | "LUXES"
  | "CHEFS_KITCHEN";

export type TCategory = {
  icon: IconName;
  displayName: string;
  technicalName: TCategoryName;
  activated: boolean;
};
