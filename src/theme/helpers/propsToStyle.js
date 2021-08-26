import breakpointsMedia from './breakpointsMedia';

const propToStyle = (propName) => (
  (props) => {
    const propValue = props[propName];
    // propValue = props[textAlign] = center

    if (typeof propValue === 'object') {
      return breakpointsMedia(
        {
          xs: {
            [propName]: propValue.xs,
          },
          sm: {
            [propName]: propValue.sm,
          },
          md: {
            [propName]: propValue.md,
          },
          lg: {
            [propName]: propValue.lg,
          },
          xl: { [propName]: propValue.xl },
        },
      );
    }

    return {
      [propName]: props[propName],
    };
  });

export default propToStyle;
