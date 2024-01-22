import { Svg, G, Circle } from "react-native-svg";

export const CircleIcon = ({ color = "#c33" }: { color: string }) => (
  <Svg width="30px" height="30px" viewBox="0 0 72 72" id="emoji">
    <G id="color" />
    <G id="line">
      <Circle
        cx="36"
        cy="36"
        r="20"
        fill="none"
        stroke={color}
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
    </G>
    <G id="color-foreground">
      <Circle cx="36" cy="36" r="7" fill={color} stroke="none" />
    </G>
  </Svg>
);
