import {
  BrandNameProps,
  BrandNameSizeClassesProps
} from '@/types';

export default function BrandName({ size }: BrandNameProps) {
  function getSize(size: 'main' | 'small'): BrandNameSizeClassesProps {
    let h1, span4
    if (size === 'small') {
      h1 = 'text-3xl';
      span4 = 'text-4xl mb-1 px-[3px]';
      return { h1, span4 };
    }
    else if (size === 'main') {
      h1 = 'text-4xl ';
      span4 = 'text-[42px] px-[3px]';
      return { h1, span4 };
    }
    return { h1: '', span4: '' };
  }

  const h1Class = 'select-none font-kanit text-foreground font-bold w-fit flex justify-start items-center'
  const span4Class = 'text-secondary dark:text-primary italic leading-none skew-y-[15deg]'

  const sizes = getSize(size);
  const h1Classes = `${h1Class} ${sizes.h1}`;
  const span4Classes = `${span4Class} ${sizes.span4}`;

  return (
    <h1 className={h1Classes}>
      <span>BID</span>
      <span className={span4Classes}>4</span>
      <span>ME</span>
    </h1>
  )
}
