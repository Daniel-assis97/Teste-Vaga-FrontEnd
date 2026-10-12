import { useId } from 'react';
import { MinusIcon, PlusIcon } from './Icons';
import '../styles/components/QuantitySelector.scss';

interface QuantitySelectorProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

function QuantitySelector({ value, min = 1, max = 99, onChange }: QuantitySelectorProps) {
  const labelId = useId();

  return (
    <div className="quantity-selector" role="group" aria-labelledby={labelId}>
      <span id={labelId} className="visually-hidden">
        Quantidade
      </span>
      <button
        type="button"
        className="quantity-selector__button"
        aria-label="Diminuir quantidade"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <MinusIcon size={18} />
      </button>
      <output className="quantity-selector__value" aria-live="polite">
        {String(value).padStart(2, '0')}
      </output>
      <button
        type="button"
        className="quantity-selector__button"
        aria-label="Aumentar quantidade"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <PlusIcon size={18} />
      </button>
    </div>
  );
}

export default QuantitySelector;
