import { helper } from '@ember/component/helper';

export interface GteSignature {
  Args: {
    Positional: [unknown, unknown];
    Named: {
      forceNumber?: boolean;
    };
  };
  Return: boolean;
}

export default helper<GteSignature>(([left, right], options) => {
  if (options.forceNumber) {
    if (typeof left !== 'number') {
      left = Number(left);
    }
    if (typeof right !== 'number') {
      right = Number(right);
    }
  }
  return (left as number) >= (right as number);
});
