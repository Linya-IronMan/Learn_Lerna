import classNames from 'classnames';
import { FunctionalComponent, h, Host } from '@stencil/core';

interface StenIconProps {
  /**
   * icon 尺寸 默认 20
   */
  size: number | string;

  /**
   * styles 传入的css样式
   */
  styles: object;
  /**
   * 图标颜色
   */
  color: string;

  /**
   * 旋转的角度
   */
  rotate: number;

  /**
   * 是否自动旋转
   */
  spin: boolean;

  /**
   * 需要渲染的svg数据
   */
  svgData: any;
}

interface CustomCSSStyle {
  [key: string]: string;
}

type CSSWithPin = CustomCSSStyle & {
  pin?: boolean;
};

// Partial 将 CSSStyleDeclaration 转成可选属性
type CSSStyle = Partial<CSSStyleDeclaration> & CSSWithPin;

export const StenIcon: FunctionalComponent<StenIconProps> = ({ size, styles, color, rotate, spin, svgData }) => {
  const outerStyle: CSSStyle = { color };

  if (Number.isSafeInteger(rotate)) {
    outerStyle.transform = `rotate(${rotate}deg)`;
  }
  // 最后把剩下的 styles 变量都加到当前变量
  Object.assign(outerStyle, styles);

  const classes = classNames('icon', `icon-block`, { [`icon-spin`]: spin });

  return (
    <svg width={size} height={size} style={outerStyle} class={classes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
    </svg>
  );
};
