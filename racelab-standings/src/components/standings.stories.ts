import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Driver } from "../types/Driver";
import Standings from "./standings";
import type { SessionRacing } from "../types/Session";
import "../index.css";

if (typeof window !== "undefined") {
  const head = document.head;
  const links = [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Electrolize&family=Figtree:ital,wght@0,300..900;1,300..900&display=swap",
    },
  ];

  links.forEach((attrs) => {
    if (!head.querySelector(`link[href="${attrs.href}"]`)) {
      const link = document.createElement("link");
      Object.entries(attrs).forEach(([key, value]) => {
        if (value !== undefined) link.setAttribute(key, value);
      });
      head.appendChild(link);
    }
  });
}
const exampleDrivers: Driver[] = [
  // GT3 class
  {
    carIdx: 1,
    carNumber: 34,
    firstName: "Matthew",
    lastName: "Naylor",
    position: 1,
    classPosition: 1,
    isCarOnTrack: true,
    iRating: 1800,
    carClassShortName: "GT3",
    carClassId: 101,
    isSelected: false,
    fastestLap: 98.021, // 01:38.021
  },
  {
    carIdx: 2,
    carNumber: 1,
    firstName: "Sindre",
    lastName: "Setsaas",
    position: 2,
    classPosition: 2,
    isCarOnTrack: true,
    iRating: 8000,
    carClassShortName: "GT3",
    carClassId: 101,
    isSelected: false,
    fastestLap: 98.635, // 01:38.635
  },
  {
    carIdx: 3,
    carNumber: 4,
    firstName: "Samuel",
    lastName: "Libeert",
    position: 3,
    classPosition: 3,
    isCarOnTrack: true,
    iRating: 6800,
    carClassShortName: "GT3",
    carClassId: 101,
    isSelected: false,
    fastestLap: 99.281, // 01:39.281
  },
  {
    carIdx: 4,
    carNumber: 6,
    firstName: "Antti",
    lastName: "Terho",
    position: 4,
    classPosition: 4,
    isCarOnTrack: true,
    iRating: 6400,
    carClassShortName: "GT3",
    carClassId: 101,
    isSelected: false,
    fastestLap: 99.209, // 01:39.209
  },
  {
    carIdx: 5,
    carNumber: 7,
    firstName: "Fernando",
    lastName: "Alonso",
    position: 5,
    classPosition: 5,
    isCarOnTrack: true,
    iRating: 7800,
    carClassShortName: "GT3",
    carClassId: 101,
    isSelected: false,
    fastestLap: 100.0,
  },
  {
    carIdx: 6,
    carNumber: 10,
    firstName: "Sebastian",
    lastName: "Vettel",
    position: 6,
    classPosition: 6,
    isCarOnTrack: true,
    iRating: 7600,
    carClassShortName: "GT3",
    carClassId: 101,
    isSelected: false,
    fastestLap: 101.0,
  },

  // GT4 class
  {
    carIdx: 7,
    carNumber: 7,
    firstName: "Renan",
    lastName: "Azeredo",
    position: 7,
    classPosition: 1,
    isCarOnTrack: true,
    iRating: 6300,
    carClassShortName: "GT4",
    carClassId: 202,
    isSelected: false,
    fastestLap: 102.198, // 01:42.198
  },
  {
    carIdx: 8,
    carNumber: 5,
    firstName: "Marco",
    lastName: "Acunto",
    position: 8,
    classPosition: 2,
    isCarOnTrack: true,
    iRating: 6600,
    carClassShortName: "GT4",
    carClassId: 202,
    isSelected: false,
    fastestLap: 102.089, // 01:42.089 (fastest in this group)
  },
  {
    carIdx: 9,
    carNumber: 17,
    firstName: "Fabian",
    lastName: "Seischegg",
    position: 9,
    classPosition: 3,
    isCarOnTrack: true,
    iRating: 4400,
    carClassShortName: "GT4",
    carClassId: 202,
    isSelected: false,
    fastestLap: 102.702, // 01:42.702
  },
  {
    carIdx: 10,
    carNumber: 13,
    firstName: "Adaildo",
    lastName: "Vieira",
    position: 10,
    classPosition: 4, // Corrected class position
    isCarOnTrack: true,
    iRating: 5200,
    carClassShortName: "GT4",
    carClassId: 202,
    isSelected: true, // This driver is selected
    fastestLap: 102.278, // 01:42.278
  },
  {
    carIdx: 11,
    carNumber: 27,
    firstName: "Neil",
    lastName: "Cooper",
    position: 11,
    classPosition: 5, // Corrected class position
    isCarOnTrack: true,
    iRating: 2500,
    carClassShortName: "GT4",
    carClassId: 202,
    isSelected: false,
    fastestLap: 104.002, // 01:44.002
  },
  {
    carIdx: 12,
    carNumber: 32,
    firstName: "Rick",
    lastName: "Zieten",
    position: 12,
    classPosition: 6, // Corrected class position
    isCarOnTrack: true,
    iRating: 1900,
    carClassShortName: "GT4",
    carClassId: 202,
    isSelected: false,
    fastestLap: 104.059, // 01:44.059
  },
  {
    carIdx: 13,
    carNumber: 30,
    firstName: "Istvan",
    lastName: "Fodor",
    position: 13,
    classPosition: 7, // Corrected class position
    isCarOnTrack: true,
    iRating: 2200,
    carClassShortName: "GT4",
    carClassId: 202,
    isSelected: false,
    fastestLap: 105.035, // 01:45.035
  },
  {
    carIdx: 14,
    carNumber: 36,
    firstName: "Alexandr",
    lastName: "Fescov",
    position: 14,
    classPosition: 8, // Corrected class position
    isCarOnTrack: true,
    iRating: 1700,
    carClassShortName: "GT4",
    carClassId: 202,
    isSelected: false,
    fastestLap: 105.482, // 01:45.482
  },
  {
    carIdx: 15,
    carNumber: 33,
    firstName: "Marius",
    lastName: "Rieck",
    position: 15,
    classPosition: 9, // Corrected class position
    isCarOnTrack: true,
    iRating: 1900,
    carClassShortName: "GT4",
    carClassId: 202,
    isSelected: false,
    fastestLap: 104.754, // 01:44.754
  },
  {
    carIdx: 16,
    carNumber: 28,
    firstName: "Preston",
    lastName: "Perlmutter",
    position: 16,
    classPosition: 10, // Corrected class position
    isCarOnTrack: true,
    iRating: 2400,
    carClassShortName: "GT4",
    carClassId: 202,
    isSelected: false,
    fastestLap: 103.111, // 01:43.111
  },
  // LMP class
  {
    carIdx: 17,
    carNumber: 99,
    firstName: "Max",
    lastName: "Verstappen",
    position: 17,
    classPosition: 1,
    isCarOnTrack: true,
    iRating: 9000,
    carClassShortName: "LMP",
    carClassId: 303,
    isSelected: false,
    fastestLap: 90.0, // 01:30.000
  },
  {
    carIdx: 18,
    carNumber: 23,
    firstName: "Lewis",
    lastName: "Hamilton",
    position: 18,
    classPosition: 2,
    isCarOnTrack: true,
    iRating: 8800,
    carClassShortName: "LMP",
    carClassId: 303,
    isSelected: false,
    fastestLap: 90.5, // 01:30.500
  },
  {
    carIdx: 19,
    carNumber: 11,
    firstName: "Charles",
    lastName: "Leclerc",
    position: 19,
    classPosition: 3,
    isCarOnTrack: true,
    iRating: 8700,
    carClassShortName: "LMP",
    carClassId: 303,
    isSelected: false,
    fastestLap: 91.0, // 01:31.000
  },
  {
    carIdx: 20,
    carNumber: 44,
    firstName: "George",
    lastName: "Russell",
    position: 20,
    classPosition: 4,
    isCarOnTrack: true,
    iRating: 8500,
    carClassShortName: "LMP",
    carClassId: 303,
    isSelected: false,
    fastestLap: 91.5, // 01:31.500
  },
  {
    carIdx: 21,
    carNumber: 16,
    firstName: "Carlos",
    lastName: "Sainz",
    position: 21,
    classPosition: 5,
    isCarOnTrack: true,
    iRating: 8400,
    carClassShortName: "LMP",
    carClassId: 303,
    isSelected: false,
    fastestLap: 92.0, // 01:32.000
  },
  {
    carIdx: 22,
    carNumber: 55,
    firstName: "Sergio",
    lastName: "Perez",
    position: 22,
    classPosition: 6,
    isCarOnTrack: true,
    iRating: 8300,
    carClassShortName: "LMP",
    carClassId: 303,
    isSelected: false,
    fastestLap: 92.5, // 01:32.500
  },
];

const sessionExample: SessionRacing = {
  sessionCurrentTime: 124, // 00:02:04
  sessionDuration: 2700, // 00:45:00
  sessionType: "RACE",
  temperature: 36, // Added temperature
  driversRegistered: 20, // Added driversRegistered
};

const meta: Meta<typeof Standings> = {
  title: "Components/Standings",
  component: Standings,
  tags: ["autodocs"],
  argTypes: {
    backgroundOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.05 },
    },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    headerFontSize: { control: "text" },
    groupHeaderFontSize: { control: "text" },
    driverNameFontSize: { control: "text" },
    positionFontSize: { control: "text" },
    carNumberFontSize: { control: "text" },
    iRatingFontSize: { control: "text" },
    fastestLapFontSize: { control: "text" },
    showTopNCount: { control: { type: "range", min: 1, max: 10, step: 1 } },
    selectedDriverHighlightColor: { control: "color" },
    fastestLapHighlightColor: { control: "color" },
    groupSeparatorColor: { control: "color" },
    isLightTheme: { control: "boolean" }, // New argType
  },
};

export default meta;

type Story = StoryObj<typeof Standings>;

export const Default: Story = {
  args: {
    drivers: exampleDrivers,
    session: sessionExample,
  },
};

export const CustomStyling: Story = {
  args: {
    drivers: exampleDrivers,
    session: sessionExample,
    backgroundColor: "rgba(0, 50, 70, 0.8)",
    textColor: "#e0f7fa",
    headerFontSize: "22px",
    driverNameFontSize: "17px",
    positionFontSize: "17px",
    carNumberFontSize: "15px",
    iRatingFontSize: "15px",
    fastestLapFontSize: "15px",
    selectedDriverHighlightColor: "#00796b",
    fastestLapHighlightColor: "#ff5722",
  },
};

export const Top5AndSelected: Story = {
  args: {
    drivers: exampleDrivers,
    session: sessionExample,
    showTopNCount: 5,
  },
};

export const NoSelectedDriver: Story = {
  args: {
    drivers: exampleDrivers.map((d) => ({ ...d, isSelected: false })),
    session: sessionExample,
    showTopNCount: 3,
  },
};

export const FewerDrivers: Story = {
  args: {
    drivers: exampleDrivers
      .slice(0, 5)
      .map((d) => ({ ...d, isSelected: false })),
    session: sessionExample,
    showTopNCount: 3,
  },
};

export const LightTheme: Story = {
  args: {
    drivers: exampleDrivers,
    session: sessionExample,
    isLightTheme: true,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    textColor: "#333",
    selectedDriverHighlightColor: "#e0e0e0",
    fastestLapHighlightColor: "#ff8a65",
    groupSeparatorColor: "rgba(180, 180, 180, 0.5)",
  },
};
