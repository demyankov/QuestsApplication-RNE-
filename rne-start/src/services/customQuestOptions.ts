interface customQuestOptionsProps {
  value?: number;
  maxValue?: number;
  colorActive?: string;
  colorDisabled?: string;
}

export const customQuestOptions = ({
  value = 1,
  maxValue = 5,
  colorActive = 'yellow',
  colorDisabled = 'white',
}: customQuestOptionsProps): string[] => {
  if (+value > maxValue) {
    return [];
  }

  let line = [];

  for (let i = 1; i <= maxValue; i++) {
    i <= value ? line.push(colorActive) : line.push(colorDisabled);
  }
  return line;
};
