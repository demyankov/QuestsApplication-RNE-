import { StyleSheet } from "react-native";
import { scaleSize } from "../../utils";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    gap: scaleSize(20),
    width: "100%",
  },

  inputWrapper: {
    position: "relative",
    alignItems: "center",
    // paddingHorizontal: 0 scaleSize(20),
    fontSize: scaleSize(20),
    // background-color: transparent,
    // border: 1px solid var(--border-color-hover-input),
    // border- radius: scaleSize(10)

    //     span: {
    //       display: flex;
    //       align-items: center;
    //     }

    //     &:hover {
    //       border: 1px solid var(--background-color-button-secondary);
    //     }

    //     &:active,
    //     &:focus-within {
    //       border: 1px solid var(--background-color-button-secondary);
    //     }

    //     &:disabled input {
    //       color: var(--font-color-disabled);
    //     }
    //   }
  },

  input: {
    width: "100%",
    paddingVertical: scaleSize(16),
    margin: 0,
    backgroundColor: "white",
    // outline: "none",
  },

  warningInput: {
    // backgroundColor: "yellow",
    // borderWidth: 1,
    // borderColor: "yellow",
    // border: 1px solid var(--border-color-warning),
  },

  warningText: {
    // position: "absolute",
    // bottom: calc(-1.25 * var(--spacing-7));
    // left: "0",
    display: "flex",
    // gap: var(--spacing-9);
    alignItems: "center",
    // font-size: var(--smallRegular-font-size),
    // line-height: var(--smallRegular-line-height),
    color: "yellow",
    // white-space: nowrap,
  },
});
