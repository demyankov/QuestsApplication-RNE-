interface customQuestOptionsProps {
  value?: string;
  maxValue?: string;
  colorActive?: string;
  colorDisabled?: string;
}

export const customQuestOptions = ({
  value = "1",
  maxValue = "5",
  colorActive = "yellow",
  colorDisabled = "white",
}: customQuestOptionsProps): string[] => {
  if (!value || +value > +maxValue) {
    return [];
  }

  let line = [];

  for (let i = 1; i <= +maxValue; i++) {
    i <= +value ? line.push(colorActive) : line.push(colorDisabled);
  }
  return line || [];
};
