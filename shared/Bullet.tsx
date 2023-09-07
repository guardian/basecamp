/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { space } from "@guardian/source-foundations";

export const Bullet = ({ text }: { text: string }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: flex-start;
        gap: ${space[4]}px;
        align-items: center;
      `}
    >
      <div
        css={css`
          border-radius: 999px;
          background: #fec8d3;
          min-width: 12px;
          min-height: 12px;
        `}
      />
      <p
        css={css`
          margin: ${space[2]}px 0;
        `}
      >
        {text}
      </p>
    </div>
  );
};
