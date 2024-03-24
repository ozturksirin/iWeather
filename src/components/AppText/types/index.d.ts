export type Props = {
  text?: string | number | boolean;
  type?: keyof typeof font.types;
  size?: keyof typeof font.size;
  vAlign?: "center" | "top" | "bottom";
  hAlign?: "center" | "left" | "right";
  onPress?: () => void;
  color?: string;
  margin?: Pick<
    TextStyle,
    | "marginLeft"
    | "marginRight"
    | "marginVertical"
    | "marginHorizontal"
    | "marginTop"
    | "marginBottom"
  >;
  multiText?: MultiTextOptions;
  newStyle?: any;
};

type MultiTextOptions = {
  text: string;
  type: keyof typeof font.types;
  size: keyof typeof font.size;
};
