import type { Driver } from "../../types/Driver";
import { DriverRow } from "../driver-row/driver-row";
import styles from "./group.module.css";
import { generateColor } from "../../utils/formatters";
import type React from "react";
import { useMemo } from "react";

interface Props {
  drivers: Driver[];
  groupName?: string;
  groupColor?: string; // This will be the base color for the group header dot
  textColor?: string;
  groupHeaderFontSize?: string;
  driverNameFontSize?: string;
  positionFontSize?: string;
  carNumberFontSize?: string;
  iRatingFontSize?: string;
  fastestLapFontSize?: string;
  selectedDriverHighlightColor?: string;
  fastestLapHighlightColor?: string;
  groupSeparatorColor?: string;
  maxDriversToRender: number; // New prop: exact number of drivers to render
  isLightTheme?: boolean;
  groupBackgroundColor?: string;
}

export const Group = ({
  drivers,
  groupName,
  groupColor,
  textColor,
  groupHeaderFontSize,
  driverNameFontSize,
  positionFontSize,
  carNumberFontSize,
  iRatingFontSize,
  fastestLapFontSize,
  selectedDriverHighlightColor,
  fastestLapHighlightColor,
  groupSeparatorColor,
  maxDriversToRender,
  isLightTheme,
  groupBackgroundColor,
}: Props) => {
  const sortedDriversInGroup = useMemo(
    () => [...drivers].sort((a, b) => a.classPosition - b.classPosition),
    [drivers]
  );

  const fastestLapInGroup = useMemo(() => {
    return sortedDriversInGroup.reduce(
      (minLap, driver) =>
        driver.fastestLap !== undefined && driver.fastestLap < minLap
          ? driver.fastestLap
          : minLap,
      Number.POSITIVE_INFINITY
    );
  }, [sortedDriversInGroup]);

  const driversToDisplay = useMemo(() => {
    if (maxDriversToRender <= 0) {
      return [];
    }

    const selectedDriver = sortedDriversInGroup.find((d) => d.isSelected);
    const finalDrivers: Driver[] = [];
    const finalAddedIndices = new Set<number>();

    // 1. Add selected driver first if present
    if (selectedDriver) {
      finalDrivers.push(selectedDriver);
      finalAddedIndices.add(sortedDriversInGroup.indexOf(selectedDriver));
    }

    // 2. Add top N drivers (up to showTopNCount)
    for (
      let i = 0;
      i < sortedDriversInGroup.length &&
      finalDrivers.length < maxDriversToRender;
      i++
    ) {
      if (!finalAddedIndices.has(i)) {
        finalDrivers.push(sortedDriversInGroup[i]);
        finalAddedIndices.add(i);
      }
    }

    // 3. If there's still space and a selected driver, try to add neighbors around the selected driver
    if (selectedDriver && finalDrivers.length < maxDriversToRender) {
      const selectedIndex = sortedDriversInGroup.indexOf(selectedDriver);
      let left = selectedIndex - 1;
      let right = selectedIndex + 1;

      while (
        finalDrivers.length < maxDriversToRender &&
        (left >= 0 || right < sortedDriversInGroup.length)
      ) {
        if (
          right < sortedDriversInGroup.length &&
          !finalAddedIndices.has(right)
        ) {
          finalDrivers.push(sortedDriversInGroup[right]);
          finalAddedIndices.add(right);
        } else if (left >= 0 && !finalAddedIndices.has(left)) {
          finalDrivers.push(sortedDriversInGroup[left]);
          finalAddedIndices.add(left);
        }
        left--;
        right++;
      }
    }

    // 4. Fill any remaining space with other drivers from the sorted list
    for (
      let i = 0;
      i < sortedDriversInGroup.length &&
      finalDrivers.length < maxDriversToRender;
      i++
    ) {
      if (!finalAddedIndices.has(i)) {
        finalDrivers.push(sortedDriversInGroup[i]);
        finalAddedIndices.add(i);
      }
    }

    // Sort the final list by class position and trim to exact maxDriversToRender
    finalDrivers.sort((a, b) => a.classPosition - b.classPosition);
    return finalDrivers.slice(0, maxDriversToRender);
  }, [sortedDriversInGroup, maxDriversToRender]);

  const groupHeaderColor =
    groupColor ||
    (drivers[0]?.carClassId ? generateColor(drivers[0].carClassId) : "#DEDEDE");
  const themeClass = isLightTheme ? styles.lightTheme : "";

  if (maxDriversToRender === 0) {
    return null; // Do not render the group if no drivers are to be shown
  }

  return (
    <div
      className={`${styles.groupContainer} ${themeClass}`}
      style={{
        backgroundColor: groupBackgroundColor,
        color: textColor,
      }}
    >
      <div
        className={`${styles.groupHeader} ${themeClass}`}
        style={
          {
            fontSize: groupHeaderFontSize,
            "--group-color": groupHeaderColor,
          } as React.CSSProperties
        }
      >
        <span>{groupName}</span>
        <span className={`${styles.driverCount} ${themeClass}`}>
          {drivers.length}
        </span>
      </div>
      <div
        className={styles.separator}
        style={
          {
            "--group-separator-color": groupSeparatorColor,
          } as React.CSSProperties
        }
      />
      {driversToDisplay.map((driver) => (
        <DriverRow
          key={driver.carIdx}
          driver={driver}
          isFastestInGroup={
            driver.fastestLap === fastestLapInGroup &&
            fastestLapInGroup !== Number.POSITIVE_INFINITY
          }
          driverNameFontSize={driverNameFontSize}
          positionFontSize={positionFontSize}
          carNumberFontSize={carNumberFontSize}
          iRatingFontSize={iRatingFontSize}
          fastestLapFontSize={fastestLapFontSize}
          selectedDriverHighlightColor={selectedDriverHighlightColor}
          fastestLapHighlightColor={fastestLapHighlightColor}
          isLightTheme={isLightTheme}
        />
      ))}
    </div>
  );
};
