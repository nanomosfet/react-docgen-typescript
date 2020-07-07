type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

declare type PropsOf<
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithoutRef<E>>;

/** Props for a Box component that supports the "innerRef" and "as" props. */
type BoxProps<E extends React.ElementType, P = any> = P &
  Omit<PropsOf<E>, keyof P> & {
    /** Render the component as another component */
    as?: E;
  };

interface StackBaseProps {
  /** The flex "align" property */
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end';
}

const defaultElement = 'div' as const;

/** ComplexGenericUnionIntersection description */
export const ComplexGenericUnionIntersection = <
  E extends React.ElementType = typeof defaultElement
>(
  props: BoxProps<E, StackBaseProps>
) => <div />;
