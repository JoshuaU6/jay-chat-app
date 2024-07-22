import { NeatConfig } from "@firecms/neat";

export const gradientConfig: NeatConfig = {
  colors: [
    {
      color: "#5365FF",
      enabled: true,
    },
    {
      color: "#081148",
      enabled: true,
    },
    {
      color: "#075760",
      enabled: true,
    },
    {
      color: "#26097B",
      enabled: true,
    },
    {
      color: "#f5e1e5",
      enabled: false,
    },
  ],
  speed: 4,
  horizontalPressure: 4,
  verticalPressure: 5,
  waveFrequencyX: 2,
  waveFrequencyY: 3,
  waveAmplitude: 5,
  shadows: 0,
  highlights: 2,
  colorBrightness: 1,
  colorSaturation: 7,
  wireframe: false,
  colorBlending: 6,
  backgroundColor: "#003FFF",
  backgroundAlpha: 1,
  resolution: 1,
};
