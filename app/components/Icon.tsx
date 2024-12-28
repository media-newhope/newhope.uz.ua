// components/Icon.tsx
import { FC } from "react";

export type GospelIcon = "love" | "separation" | "cross" | "decision";

interface IconProps {
  name: GospelIcon;
  size?: number;
  className?: string;
  color?: string;
}

export const Icon: FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  color = "currentColor",
}) => {
  const icons = {
    love: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="1 0 30 34"
        fill={color}
        stroke="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <defs stroke="#000000" xmlns="http://www.w3.org/2000/svg">
          <ellipse id="brazil-a" cx="8.707" cy="8.5" rx="8.707" ry="8.5" />
          <path
            d="M.006.81V0h.746v.81H.006zM.379.266v.139h.373V.266H.38z"
            id="brazil-c"
          />
        </defs>

        <path d="M24.97 15.903c-1.286 3.034-9.106 10.157-9.147 10.278-.04-.121-7.761-7.244-9.046-10.278-.601-1.418-.599-2.846-.121-4.074.476-1.229 1.433-2.263 2.757-2.902a4.91 4.91 0 0 1 3.577-.289c1.145.345 2.125 1.288 2.834 2.377.71-1.089 1.79-2.032 2.936-2.377s2.407-.277 3.577.289c1.323.639 2.28 1.672 2.757 2.902.477 1.228.479 2.656-.122 4.074zM15.873 0C7.107 0 0 7.163 0 16c0 8.836 7.107 16 15.873 16s15.873-7.164 15.873-16c0-8.837-7.106-16-15.873-16z" />
      </svg>
    ),

    separation: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="1 0 30 34"
        fill={color}
        stroke="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <defs stroke="#000000" xmlns="http://www.w3.org/2000/svg">
          <ellipse id="brazil-a" cx="8.707" cy="8.5" rx="8.707" ry="8.5" />
          <path
            d="M.006.81V0h.746v.81H.006zM.379.266v.139h.373V.266H.38z"
            id="brazil-c"
          />
        </defs>

        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M25.873 17.12c0 .707-.569 1.28-1.27 1.28H7.143c-.701 0-1.27-.573-1.27-1.28v-2.241c0-.706.569-1.279 1.27-1.279h17.46c.701 0 1.27.573 1.27 1.279v2.241zm-10 9.921c-1.49 0-2.698-1.218-2.698-2.721 0-1.501 1.208-2.719 2.698-2.719s2.699 1.218 2.699 2.719c0 1.503-1.209 2.721-2.699 2.721zm0-22.081c1.49 0 2.699 1.217 2.699 2.719s-1.209 2.72-2.699 2.72-2.698-1.217-2.698-2.72a2.708 2.708 0 0 1 2.698-2.719zm0-4.96C7.107 0 0 7.164 0 16c0 8.837 7.107 16 15.873 16s15.874-7.163 15.874-16c0-8.836-7.107-16-15.874-16z"
        />
      </svg>
    ),

    cross: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="1 0 30 34"
        fill={color}
        stroke="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <defs stroke="#000000" xmlns="http://www.w3.org/2000/svg">
          <ellipse id="brazil-a" cx="8.707" cy="8.5" rx="8.707" ry="8.5" />
          <path
            d="M.006.81V0h.746v.81H.006zM.379.266v.139h.373V.266H.38z"
            id="brazil-c"
          />
        </defs>

        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M23.492 14.707c0 .707-.569 1.28-1.27 1.28h-3.968v8.814c0 .706-.569 1.279-1.27 1.279h-2.222a1.275 1.275 0 0 1-1.271-1.279v-8.814H9.523c-.701 0-1.27-.573-1.27-1.28v-2.241c0-.707.569-1.279 1.27-1.279h3.968V7.2c0-.707.569-1.279 1.271-1.279h2.222c.701 0 1.27.572 1.27 1.279v3.987h3.968c.701 0 1.27.572 1.27 1.279v2.241zM15.873 0C7.106 0 0 7.164 0 15.999S7.107 32 15.873 32c8.766 0 15.872-7.164 15.872-16S24.639.001 15.873.001z"
        />
      </svg>
    ),

    decision: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="1 0 30 34"
        fill={color}
        stroke="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <defs stroke="#000000" xmlns="http://www.w3.org/2000/svg">
          <ellipse id="brazil-a" cx="8.707" cy="8.5" rx="8.707" ry="8.5" />
          <path
            d="M.006.81V0h.746v.81H.006zM.379.266v.139h.373V.266H.38z"
            id="brazil-c"
          />
        </defs>

        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M18.338 17.433c-.448.753-.332 2.13-.332 2.13 0 .307-.237.56-.54.56h-3.682a.55.55 0 0 1-.54-.56s-.211-2.322.462-3.551c1.058-1.93 4.221-3.194 4.413-4.59.142-1.314-.829-2.131-2.44-2.131s-2.442.684-3.079 2.188c-.105.249-.418.443-.675.37l-3.016-.841c-.296-.083-.427-.385-.333-.679 1.015-3.148 3.75-5.166 7.463-5.166 4.549 0 6.888 2.545 6.888 5.92 0 3.341-3.782 4.998-4.588 6.35zm-2.66 9.423c-1.49 0-2.699-1.218-2.699-2.721a2.71 2.71 0 0 1 2.699-2.719 2.71 2.71 0 0 1 2.699 2.719 2.71 2.71 0 0 1-2.699 2.721zM15.873 0C7.106 0 0 7.164 0 16.001 0 24.837 7.106 32 15.873 32s15.873-7.163 15.873-15.999C31.746 7.164 24.64 0 15.873 0z"
        />
      </svg>
    ),
  };

  return icons[name] || null;
};
