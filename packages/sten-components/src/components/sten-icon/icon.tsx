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

export const Icon: FunctionalComponent<StenIconProps> = ({ size, styles, color, rotate, spin, svgData }) => {
  const outerStyle: CSSStyle = { color };

  if (Number.isSafeInteger(rotate)) {
    outerStyle.transform = `rotate(${rotate}deg)`;
  }
  // 最后把剩下的 styles 变量都加到当前变量
  Object.assign(outerStyle, styles);

  const classes = classNames('icon', `icon-block`, { [`icon-spin`]: spin });

  return (
    <Host>
      <svg width={size} height={size} style={outerStyle} class={classes}></svg>
    </Host>
  );
};
